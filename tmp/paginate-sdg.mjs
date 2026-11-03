import fs from 'node:fs';
const path='src/app/components/sustainability/SdgReportPage.jsx';
let source=fs.readFileSync(path,'utf8');
const start=source.indexOf('// Report text');
const end=source.indexOf('function ReportBlocks');
let table=source.slice(start,end).replace('function ReportText','export function ReportText').replace('function ReportTable','export default function ReportTable');
table=table.replace('function ReportTable({ block }) {','function ReportTable({ block }) {\n    const [page, setPage] = useState(0);\n    const pageSize = 50;\n    const pageCount = Math.ceil(block.rows.length / pageSize);\n    const rows = block.rows.slice(page * pageSize, (page + 1) * pageSize);');
table=table.replace('{block.rows.map((row, index)', '{rows.map((row, index)');
table=table.replace('        <div className="overflow-x-auto', '        <div>\n        <div className="overflow-x-auto');
table=table.replace('            </table>\n        </div>', `            </table>
        </div>
        {pageCount > 1 && <div className="flex flex-wrap items-center justify-between gap-3 mt-4 text-sm">
            <p aria-live="polite">Records {page * pageSize + 1}–{Math.min((page + 1) * pageSize, block.rows.length)} of {block.rows.length}</p>
            <div className="flex items-center gap-3">
                <button type="button" disabled={page === 0} onClick={() => setPage(p => p - 1)} className="rounded-lg border border-gray-300 px-4 py-2 disabled:opacity-40">Previous</button>
                <span>Page {page + 1} of {pageCount}</span>
                <button type="button" disabled={page + 1 >= pageCount} onClick={() => setPage(p => p + 1)} className="rounded-lg border border-gray-300 px-4 py-2 disabled:opacity-40">Next</button>
            </div>
        </div>}
        </div>`);
fs.writeFileSync('src/app/components/sustainability/SdgReportTable.jsx','"use client";\n\nimport { useState } from "react";\n\n'+table);
source=source.slice(0,start)+'import ReportTable, { ReportText } from "./SdgReportTable";\n\n'+source.slice(end);
fs.writeFileSync(path,source);
