"""Import the public SDG Word reports into website content.
Usage: python scripts/import_sdg_reports.py <directory-containing-sdg-N.docx> [goal numbers...]
Source: https://drive.google.com/drive/folders/1N-PTkZuEFLBmgt9cnZcbR1hRUTOF-ODG
"""
import hashlib
import json
import posixpath
import re
import sys
import zipfile
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "c": "http://schemas.openxmlformats.org/drawingml/2006/chart",
    "v": "urn:schemas-microsoft-com:vml",
    "mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
}
REPORTS = {
    2: ("Zero Hunger", "1vLuUZpt_I6Cq0y7etVOW6qrXLOx7Kc_G", "24 October 2026"),
    4: ("Quality Education", "1JvLV54kIs3Ga2_gLdPIM7bpPJHpwkGcf", "24 October 2026"),
    6: ("Clean Water and Sanitation", "159n019NfqtLNxYJE-SHcwDxHH2xz63j6", "27 October 2026"),
    8: ("Decent Work and Economic Growth", "1-ULjNlrL8G4_7npqIGZywud9CmpbTSho", "24 October 2026"),
    9: ("Industry, Innovation and Infrastructure", "1VTPowPwOzHKTTw4s17N1mOwC700lgsko", "27 October 2026"),
    # SDG 13 is a legacy .doc on Drive; save it as sdg-13.docx (e.g. with Word) before importing.
    13: ("Climate Action", "1EBHJx0ASwiDzIiTRRUFPtIj2H16tHEFt", "27 October 2026"),
    17: ("Partnerships for the Goals", "1IO_dmLCYZZPOPEf2Q2wJziLqcoqbxOfN", "24 October 2026"),
}

def clean(text):
    text = re.sub(r"\s+", " ", text).strip()
    # Word text boxes can repeat a caption in the DrawingML and VML versions.
    if len(text) % 2 == 0 and text[:len(text)//2] == text[len(text)//2:]:
        text = text[:len(text)//2]
    return text

def text_of(el):
    return clean(" ".join("".join(t.text or "" for t in p.findall(".//w:t", NS))
                          for p in el.findall(".//w:p", NS))) if el.tag != tag("w", "p") else clean("".join(t.text or "" for t in el.findall(".//w:t", NS)))

def tag(ns, name):
    return "{" + NS[ns] + "}" + name

def import_report(number, source_dir):
    title, file_id, source_date = REPORTS[number]
    archive = zipfile.ZipFile(source_dir / f"sdg-{number}.docx")
    document = ET.fromstring(archive.read("word/document.xml"))
    for parent in document.iter():
        for child in list(parent):
            if child.tag == tag("mc", "Fallback"):
                parent.remove(child)
    rels = {rel.get("Id"): rel.get("Target") for rel in ET.fromstring(archive.read("word/_rels/document.xml.rels"))}
    image_dir = ROOT / "public" / "sdg-reports" / f"sdg-{number}"
    image_dir.mkdir(parents=True, exist_ok=True)
    image_cache = {}
    current_heading = title

    def media(el):
        blocks = []
        refs = [x.get(tag("r", "embed")) for x in el.findall(".//a:blip", NS)]
        refs += [x.get(tag("r", "id")) for x in el.findall(".//v:imagedata", NS)]
        for ref in dict.fromkeys(refs):
            target = rels.get(ref, "")
            if Path(target).suffix.lower() not in (".png", ".jpeg", ".jpg", ".gif", ".webp"):
                continue
            data = archive.read(posixpath.normpath("word/" + target))
            digest = hashlib.sha256(data).hexdigest()[:16]
            if digest not in image_cache:
                name = digest + Path(target).suffix.lower()
                (image_dir / name).write_bytes(data)
                image_cache[digest] = f"/sdg-reports/sdg-{number}/{name}"
            blocks.append({"type": "image", "src": image_cache[digest], "alt": f"SDG {number}: {current_heading} - report evidence"})
        for ref in el.findall(".//c:chart", NS):
            target = rels.get(ref.get(tag("r", "id")), "")
            chart = ET.fromstring(archive.read(posixpath.normpath("word/" + target)))
            series = chart.findall(".//c:ser", NS)
            if not series:
                continue
            def values(node, path):
                return [p.findtext("c:v", default="", namespaces=NS) for p in node.findall(path, NS)]
            levels = series[0].findall("c:cat//c:lvl", NS)
            if levels:
                level_values = [values(level, "c:pt") for level in levels]
                categories = [" / ".join(parts) for parts in zip(*level_values)]
            else:
                categories = values(series[0], "c:cat//c:pt") or values(series[0], "c:xVal//c:pt")
            if not categories:
                continue
            headers = ["Category"]
            columns = []
            for i, item in enumerate(series):
                headers.append(item.findtext("c:tx//c:v", default=f"Series {i+1}", namespaces=NS))
                columns.append(values(item, "c:val//c:pt") or values(item, "c:yVal//c:pt"))
            chart_title = clean("".join(t.text or "" for t in chart.findall("c:chart/c:title//a:t", NS)))
            blocks.append({"type": "table", "headers": headers, "rows": [[{"text": cat}] + [{"text": col[i] if i < len(col) else ""} for col in columns] for i, cat in enumerate(categories)], "caption": chart_title or "Research data from the report"})
        return blocks

    def paragraph(el):
        text = text_of(el)
        blocks = []
        if text:
            style = el.find("w:pPr/w:pStyle", NS)
            is_list = el.find("w:pPr/w:numPr", NS) is not None or (style is not None and style.get(tag("w", "val")) == "ListParagraph")
            blocks.append({"type": "listItem" if is_list else "paragraph", "text": text})
            links = []
            for link in el.findall(".//w:hyperlink", NS):
                href = rels.get(link.get(tag("r", "id")), "")
                label = clean("".join(t.text or "" for t in link.findall(".//w:t", NS)))
                if href.startswith(("https://", "http://")) and href not in text:
                    links.append({"href": href, "label": label or "View resource"})
            if links:
                blocks.append({"type": "links", "items": links})
        blocks += media(el)
        return blocks

    def table(el):
        xml_rows = el.findall("w:tr", NS)
        texts = [[text_of(cell) for cell in row.findall("w:tc", NS)] for row in xml_rows]
        # Photo collages in Word use tables for positioning, not tabular data.
        populated = sum(sum(bool(c) for c in row) >= 2 for row in texts)
        # Some Word tables combine a photo collage with a real data table below it.
        # Split at the data header so rows keep their column relationships.
        if texts and not any(texts[0]):
            for index, row in enumerate(texts):
                if len(row) >= 4 and re.match(r"^S[. ,]*(?:No|l)", row[0], re.I):
                    before = [block for row in xml_rows[:index] for cell in row.findall("w:tc", NS) for p in cell.findall("w:p", NS) for block in paragraph(p)]
                    data_table = ET.Element(tag("w", "tbl"))
                    data_table.extend(xml_rows[index:])
                    return before + table(data_table)
        if populated < 2 or populated <= len(xml_rows) / 2 or (el.findall(".//a:blip", NS) and not any(texts[0])):
            return [block for row in xml_rows for cell in row.findall("w:tc", NS) for p in cell.findall("w:p", NS) for block in paragraph(p)]
        caption = None
        if len(texts) > 1 and len(texts[0]) < max(map(len, texts)):
            caption = " ".join(texts.pop(0))
            xml_rows = xml_rows[1:]
        headers = texts[0]
        header_starts = []
        grid_position = 0
        for cell in xml_rows[0].findall("w:tc", NS):
            header_starts.append(grid_position)
            span = cell.find("w:tcPr/w:gridSpan", NS)
            grid_position += int(span.get(tag("w", "val"))) if span is not None else 1
        rows = []
        for row in xml_rows[1:]:
            cells = []
            grid_position = 0
            for cell in row.findall("w:tc", NS):
                span = cell.find("w:tcPr/w:gridSpan", NS)
                grid_width = int(span.get(tag("w", "val"))) if span is not None else 1
                column_span = sum(grid_position <= start < grid_position + grid_width for start in header_starts)
                cells.append({"text": text_of(cell), "colSpan": max(1, column_span)})
                grid_position += grid_width
                # Retain a blank continuation as a cell rather than moving data into another column.
            rows.append(cells)
        blocks = [{"type": "table", "headers": headers, "rows": rows}]
        if caption:
            blocks[0]["caption"] = caption
        # Preserve any photographs embedded inside a data table as supporting evidence.
        blocks += media(el)
        return blocks

    content = []
    dashboard = []
    first_table = True
    for el in document.find("w:body", NS):
        if el.tag == tag("w", "tbl"):
            rows = [[text_of(c) for c in r.findall("w:tc", NS)] for r in el.findall("w:tr", NS)]
            if first_table and len(rows) < 2:
                # SDG 13 opens with a one-cell title banner before its dashboard table.
                continue
            if first_table:
                first_table = False
                dashboard = [{"label": r[-2], "value": r[-1]} for r in rows[1:]]
            else:
                content += table(el)
        elif el.tag == tag("w", "p"):
            text = text_of(el)
            if text.startswith(("SDG ", "SDG-")) and re.search(rf"\b{number}:", text) and len(text) < 150:
                continue
            # SDG 13 leaves its 13.3 section heading unnumbered.
            if number == 13 and text == "Environmental education measures":
                text = "13.3 Environmental Education Measures"
            match = re.match(rf"^({number}\.\d+(?:\.\d+)?)[.: ]*([^\d].*)", text)
            if match:
                # A floating caption interrupts this one heading in the original Word layout.
                if number == 17 and match.group(1) == "17.2.1":
                    text = "17.2.1 Relationships with Regional NGOs and Government for SDG Policy"
                current_heading = text
                content.append({"type": "heading", "text": text, "level": 2 if match.group(1).count(".") == 1 else 3})
                content += media(el)
            else:
                content += paragraph(el)
    intro = []
    sections = []
    for block in content:
        if block["type"] == "heading" and block["level"] == 2:
            sections.append({"title": block["text"], "blocks": []})
        elif sections:
            sections[-1]["blocks"].append(block)
        else:
            intro.append(block)
    # SDG 9 repeats its goal number and title as plain paragraphs above the introduction.
    intro = [block for block in intro if block.get("text") not in ("Introduction", f"SDG {number}", title)]
    if not intro and sections:
        # SDG 8 begins immediately with its research section; use its opening as the introduction.
        intro = [sections[0]["blocks"].pop(0)]
    report = {"number": number, "title": title, "sourceUrl": f"https://drive.google.com/file/d/{file_id}/view", "sourceDate": source_date, "dashboard": dashboard, "intro": intro, "sections": sections}
    dest = ROOT / "src" / "app" / "components" / "sustainability" / "data" / "reports"
    dest.mkdir(parents=True, exist_ok=True)
    (dest / f"sdg-{number}.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"SDG {number}: {len(sections)} sections, {len(image_cache)} images")

if __name__ == "__main__":
    # Optional goal numbers after the directory limit the import, e.g. `... <dir> 6 9 13`.
    for number in [int(n) for n in sys.argv[2:]] or REPORTS:
        import_report(number, Path(sys.argv[1]))
