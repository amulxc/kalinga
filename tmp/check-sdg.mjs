import puppeteer from 'puppeteer';
import fs from 'node:fs';
for (const n of [1,16]) {
 const report=JSON.parse(fs.readFileSync(`src/app/components/sustainability/data/reports/sdg-${n}.json`));
 const blocks=[...report.intro,...report.sections.flatMap(s=>s.blocks)];
 for(const b of blocks.filter(b=>b.type==='image'))if(!fs.existsSync('public'+b.src))throw Error('Missing '+b.src);
 console.log(`SDG ${n}: ${report.sections.length} sections, ${report.dashboard.length} dashboard entries, evidence files present`);
}
const browser=await puppeteer.launch({headless:true, timeout:120000});
try {
 const page=await browser.newPage();
 for(const width of [1440,390]) {
  await page.setViewport({width,height:1000});
  for(const n of [1,16]) {
   const response=await page.goto(`http://localhost:3000/sustainability/sdg-${n}`,{waitUntil:'domcontentloaded',timeout:120000});
   if(response.status()!==200)throw Error('HTTP '+response.status());
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
   if(overflow)throw Error(`Overflow SDG ${n} width ${width}`);
   await page.screenshot({path:`tmp/sdg-${n}-${width}.png`});
   console.log(`SDG ${n} width ${width}: HTTP 200, no horizontal overflow`);
  }
 }
 await page.goto('http://localhost:3000/sustainability',{waitUntil:'domcontentloaded',timeout:120000});
 for(const n of [1,16])if(!await page.$(`a[href="/sustainability/sdg-${n}"]`))throw Error('Missing tile '+n);
 console.log('Both goal cards link to report pages');
}finally{await browser.close()}
