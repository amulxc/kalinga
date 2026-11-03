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
    1: ("No Poverty", "1l99vuiJrq4S8_NbRBQ-0hPr0_geD0l4Y", "30 October 2026"),
    2: ("Zero Hunger", "1vLuUZpt_I6Cq0y7etVOW6qrXLOx7Kc_G", "24 October 2026"),
    4: ("Quality Education", "1JvLV54kIs3Ga2_gLdPIM7bpPJHpwkGcf", "24 October 2026"),
    5: ("Gender Equality", "1kqldN0uibMUaobAfzUvVHZFc4UrSUmXz", "30 October 2026"),
    6: ("Clean Water and Sanitation", "159n019NfqtLNxYJE-SHcwDxHH2xz63j6", "27 October 2026"),
    7: ("Affordable and Clean Energy", "1nbhDemiXsN6vh-JpRFkFOCDtNjcS3_Ap", "29 October 2026"),
    8: ("Decent Work and Economic Growth", "1-ULjNlrL8G4_7npqIGZywud9CmpbTSho", "24 October 2026"),
    9: ("Industry, Innovation and Infrastructure", "1VTPowPwOzHKTTw4s17N1mOwC700lgsko", "27 October 2026"),
    10: ("Reduced Inequalities", "1_ZP3K77fkR0oAp8I9yWyY65-DnL7hP-y", "30 October 2026"),
    11: ("Sustainable Cities and Communities", "1ESA2O0DdjfSj6Mb_O-dswmv2I6ExDwqt", "29 October 2026"),
    12: ("Responsible Consumption and Production", "13HPKAk3EwIeJdF5l8xw7NEdIHkBIKrFt", "29 October 2026"),
    # SDG 13 is a legacy .doc on Drive; save it as sdg-13.docx (e.g. with Word) before importing.
    13: ("Climate Action", "1EBHJx0ASwiDzIiTRRUFPtIj2H16tHEFt", "27 October 2026"),
    14: ("Life Below Water", "1N5YNMMzcEaKnVN7LhrESmh8rZi9R4TN0", "30 October 2026"),
    15: ("Life on Land", "1Hw7i7-TQkDR6k4tSXXmg3RmisMoSDzrI", "30 October 2026"),
    16: ("Peace, Justice and Strong Institutions", "1loiQ4R38qJHUB4bR5x1en7SKQOe28_rt", "3 November 2026"),
    17: ("Partnerships for the Goals", "1IO_dmLCYZZPOPEf2Q2wJziLqcoqbxOfN", "24 October 2026"),
}
# Some reports leave section headings unnumbered; name them with their THE Impact Rankings metric number.
UNNUMBERED_HEADINGS = {
    5: {
        "Student access measures": "5.3 Student Access Measures",
        "Proportion of senior female academics": "5.4 Proportion of Senior Female Academics",
        "Women’s progress measures": "5.6 Women’s Progress Measures",
    },
    10: {
        "Research on reduced inequalities": "10.1 Research on Reduced Inequalities",
        "International students from developing countries": "10.3 International Students from Developing Countries",
        "Proportion of students with disabilities": "10.4 Proportion of Students with Disabilities",
        "Measures against discrimination": "10.6 Measures Against Discrimination",
    },
    13: {"Environmental education measures": "13.3 Environmental Education Measures"},
}
# Section headings a report omits entirely, inserted before their first subsection.
MISSING_HEADINGS = {
    15: {"15.3.1": "15.3 Supporting Land Ecosystems through Action"},
}

# The SDG 1 report switches to unnumbered headings after its metrics.
SDG_1_SECTIONS = {
    "Institutional Commitment to SDG 1", "Key Initiatives Contributing to SDG 1",
    "Financial Literacy and Financial Empowerment", "Entrepreneurship and Startup Development",
    "Skill Development and Livelihood-Oriented Initiatives", "Employability and Career Development",
    "Rural Development and Community Empowerment", "Community Outreach and Legal Empowerment",
    "Community Outreach and Social Engagement", "Access to Justice for Vulnerable Communities",
    "Accessible Healthcare and Poverty Reduction", "Consolidated Table of SDG 1-Related Events and Outcomes",
    "Major Outcomes of SDG 1 Initiatives", "14. Impact Metrics for SDG 1",
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
                dashboard = [{"label": r[-2], "value": r[-1]} for r in rows[1:] if any(r)]
            else:
                content += table(el)
        elif el.tag == tag("w", "p"):
            text = text_of(el)
            # Title lines: "SDG 5 : Gender Equality", "SDG – 7: ...", "SDG 10 – Reduced Inequalities".
            is_title = re.match(rf"^SDG[\s–-]*0?{number}\s*[:–-]", text) or (text.startswith(("SDG ", "SDG-")) and re.search(rf"\b{number}:", text))
            if is_title and len(text) < 150:
                continue
            text = UNNUMBERED_HEADINGS.get(number, {}).get(text, text)
            if number == 1 and text in SDG_1_SECTIONS:
                current_heading = text
                content.append({"type": "heading", "text": text, "level": 2})
                content += media(el)
                continue
            match = re.match(rf"^({number}\.\d+(?:\.\d+)?)[.: ]*([^\d].*)", text)
            if match and match.group(1) in MISSING_HEADINGS.get(number, {}):
                content.append({"type": "heading", "text": MISSING_HEADINGS[number][match.group(1)], "level": 2})
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
    # SDG 9 repeats its goal number and title (SDG 10 its campus) as plain paragraphs above the introduction.
    intro = [block for block in intro if block.get("text") not in ("Introduction", f"SDG {number}", title, "Kalinga University, Raipur")]
    if not intro and sections:
        # SDG 8 begins immediately with its research section; use its opening as the introduction.
        intro = [sections[0]["blocks"].pop(0)]
    report = {"number": number, "title": title, "sourceUrl": f"https://drive.google.com/file/d/{file_id}/view", "sourceDate": source_date, "dashboard": dashboard, "intro": intro, "sections": sections}
    if number in (1, 16):
        report["introEvidence"] = [block for block in intro if block["type"] != "paragraph"]
    dest = ROOT / "src" / "app" / "components" / "sustainability" / "data" / "reports"
    dest.mkdir(parents=True, exist_ok=True)
    (dest / f"sdg-{number}.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"SDG {number}: {len(sections)} sections, {len(image_cache)} images")

if __name__ == "__main__":
    # Optional goal numbers after the directory limit the import, e.g. `... <dir> 6 9 13`.
    for number in [int(n) for n in sys.argv[2:]] or REPORTS:
        import_report(number, Path(sys.argv[1]))
