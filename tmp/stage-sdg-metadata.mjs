import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
const diff=execFileSync('git',['diff','--','src/lib/pageData.ts'],{encoding:'utf8'});
const parts=diff.split(/(?=^@@ )/m);
const patch=parts[0]+parts.slice(1).filter(h=>h.includes('/sustainability/sdg-')).join('');
fs.writeFileSync('tmp/sdg-metadata.patch',patch);
