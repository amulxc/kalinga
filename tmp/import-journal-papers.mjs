import fs from 'node:fs';
const csv = fs.readFileSync('tmp/journal-sheet.txt', 'utf8');
const rows=[]; let row=[],cell='',quoted=false;
for(let i=0;i<csv.length;i++) {
 const ch=csv[i];
 if(ch==='"') { if(quoted && csv[i+1]==='"'){cell+='"';i++;}else quoted=!quoted; }
 else if(ch===',' && !quoted){row.push(cell);cell='';}
 else if(ch==='\n' && !quoted){row.push(cell.replace(/\r$/,''));rows.push(row);row=[];cell='';}
 else cell+=ch;
}
if(cell || row.length){row.push(cell);rows.push(row);}
const sources=[
 ['1f0izb8jt_5l9kFIgL88t07MusYjihvzU','250-Rachael-Amin-Elia-Lupe.pdf'],
 ['1g7CGT8oVj_TWqm-roYZ-1xd6UTXuwz3d','251-Asna-Jabi-Matrimonial-Home.pdf'],
 ['1Em9m0QcZ6dsw-iIBkznEPWXk6gTx9r4R','252-Asna-Jabi-Algorithmic-Magistrate.pdf'],
 ['1DlPzHGfB7fzkTv4pyx1B4lQl8VECQ3S_','253-Asna-Jabi-Video-Forensic-Gap.pdf'],
 ['1NvUpzbLEOjcEn6vj9w9iyFZIOawMd_kO','254-Asna-Jabi-Pedagogy-of-Statelessness.pdf'],
];
const clean=value=>value.replace(/\s+/g,' ').trim();
const entries=rows.slice(1).filter(row=>row.length===3).map(([number,title,author],index)=>({id:250+index,shortName:clean(title),title:clean(author),duration:'April - June 2026',level:'VOL 1',slug:'/univista/vol-1-issue-2/'+sources[index][1]}));
if(entries.length!==5)throw Error('Expected five sheet entries');
fs.mkdirSync('public/univista/vol-1-issue-2',{recursive:true});
await Promise.all(sources.map(async([id,name])=>{
 const response=await fetch('https://drive.google.com/uc?export=download&id='+id);
 const data=Buffer.from(await response.arrayBuffer());
 if(!response.ok || data.subarray(0,5).toString()!=='%PDF-')throw Error('Invalid PDF '+name);
 fs.writeFileSync('public/univista/vol-1-issue-2/'+name,data);
 console.log(name,data.length+' bytes');
}));
const path='src/app/International-Journal-of-Research-and-Studies/page.jsx';
let source=fs.readFileSync(path,'utf8');
const end=source.indexOf('    // Derived values based on the selected archives tab');
const insert=source.lastIndexOf('    ];',end);
if(insert<0 || source.includes(sources[0][1]))throw Error('Missing insertion point or already imported');
const addition=entries.map(entry=>'        '+JSON.stringify(entry,null,4).replaceAll('\n','\n        ')+',').join('\n')+'\n';
source=source.slice(0,insert)+addition+source.slice(insert);
fs.writeFileSync(path,source);
fs.writeFileSync('tmp/journal-new-entries.json',JSON.stringify(entries,null,2));
console.log('Added five papers using the sheet titles and authors.');
