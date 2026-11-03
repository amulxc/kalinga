import fs from 'node:fs';
const html = fs.readFileSync('tmp/law-changes.html', 'utf8');
const images = [...html.matchAll(/<img[^>]*src="([^"]+)"[^>]*>/g)];
console.log(images.map((m, i) => [i, m[0]]));
for (let i = 0; i < images.length; i++) {
 const response = await fetch(images[i][1].replaceAll('&amp;', '&'));
 fs.writeFileSync(`tmp/doc-image-${i}.png`, Buffer.from(await response.arrayBuffer()));
}
