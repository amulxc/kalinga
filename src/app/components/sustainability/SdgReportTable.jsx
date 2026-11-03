"use client";

import { useState } from "react";

// Report text is rendered as text, including source URLs, never as source HTML.
export function ReportText({ text }) {
    return text.split(/(https?:\/\/[^\s<>]+)/g).map((part, index) => {
        if (!/^https?:\/\//.test(part)) return part;
        const href = part.replace(/[.,;)]+$/, "");
        return (
            <span key={index}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-[var(--button-red)] underline break-all">
                    {href}
                </a>
                {part.slice(href.length)}
            </span>
        );
    });
}

export default function ReportTable({ block }) {
    const [page, setPage] = useState(0);
    const pageSize = 50;
    const pageCount = Math.ceil(block.rows.length / pageSize);
    const rows = block.rows.slice(page * pageSize, (page + 1) * pageSize);
    return (
        <div>
        <div className="overflow-x-auto rounded-lg border border-gray-200" tabIndex={0} role="region" aria-label={block.caption || block.headers.join(", ")}>
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                {block.caption && <caption className="p-4 text-left font-semibold text-[var(--foreground)]"><ReportText text={block.caption} /></caption>}
                <thead className="bg-[var(--dark-blue)] text-white">
                    <tr>{block.headers.map((header, index) => <th scope="col" key={index} className="border border-white/20 p-3 align-top">{header}</th>)}</tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                            {row.map((cell, cellIndex) => <td key={cellIndex} colSpan={cell.colSpan || 1} className="min-w-[100px] max-w-xl border border-gray-200 p-3 align-top break-words"><ReportText text={cell.text} /></td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {pageCount > 1 && <div className="flex flex-wrap items-center justify-between gap-3 mt-4 text-sm">
            <p aria-live="polite">Records {page * pageSize + 1}–{Math.min((page + 1) * pageSize, block.rows.length)} of {block.rows.length}</p>
            <div className="flex flex-wrap items-center gap-3">
                <button type="button" disabled={page === 0} onClick={() => setPage(p => p - 1)} className="rounded-lg border border-gray-300 px-4 py-2 disabled:opacity-40">Previous</button>
                <span>Page {page + 1} of {pageCount}</span>
                <button type="button" disabled={page + 1 >= pageCount} onClick={() => setPage(p => p + 1)} className="rounded-lg border border-gray-300 px-4 py-2 disabled:opacity-40">Next</button>
            </div>
        </div>}
        </div>
    );
}
