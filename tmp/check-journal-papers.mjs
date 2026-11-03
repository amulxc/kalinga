import fs from 'node:fs';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
const entries=JSON.parse(fs.readFileSync('tmp/journal-new-entries.json','utf8'));
const source=fs.readFileSync('src/app/International-Journal-of-Research-and-Studies/page.jsx','utf8');
const start=source.indexOf('const archivesIssue2Data = [');
const end=source.indexOf('// Derived values based on the selected archives tab',start);
for(const entry of entries){
 if(!source.slice(start,end).includes(JSON.stringify(entry.shortName)))throw Error('Missing issue 2 entry '+entry.id);
 const pdf=await getDocument({data:new Uint8Array(fs.readFileSync('public'+entry.slug)),useSystemFonts:true}).promise;
 const page=await pdf.getPage(1);
 const text=(await page.getTextContent()).items.map(i=>i.str).join(' ');
 console.log(entry.id, pdf.numPages+' pages',text.slice(0,700));
 await pdf.destroy();
}
const response=await fetch('http://localhost:3000/International-Journal-of-Research-and-Studies');
const html=await response.text();
if(response.status!==200)throw Error('Page HTTP '+response.status);
console.log('Journal page HTTP 200');
for(const entry of entries){const r=await fetch('http://localhost:3000'+entry.slug,{method:'HEAD'});if(r.status!==200)throw Error('PDF HTTP '+r.status);}
console.log('All five PDF URLs return HTTP 200');
