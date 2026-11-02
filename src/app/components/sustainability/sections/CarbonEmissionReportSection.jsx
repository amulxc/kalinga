"use client";

import { useState } from "react";
import SectionBlock from "../SectionBlock";
import DataTable from "../../general/data-table";
import {
    CARBON_REPORT_TITLE,
    CARBON_REPORT_SUBTITLE,
    CARBON_SUMMARY,
    CARBON_SCOPES,
    CARBON_EMISSIONS_TABLE,
    CARBON_REPORT_PANELS,
} from "../data/carbon-emission-content";

const TABLE_COLUMNS = [
    { key: "slNo", label: "Sl. No.", widthPx: 60 },
    { key: "scope", label: "Particular", widthPx: 90 },
    { key: "factor", label: "Factors", widthPx: 200 },
    { key: "kg", label: "Carbon Emission per Annum (kg CO₂e)", widthPx: 150 },
    { key: "share", label: "% Contribution in Quantified Total", widthPx: 140 },
    { key: "scopeTonnes", label: "Emissions (tonnes CO₂e)", widthPx: 120 },
    { key: "scopeShare", label: "% Contribution", widthPx: 100 },
];

// Scope totals span every row of their scope; the rows below the first skip those cells.
const TABLE_ROWS = [
    ...CARBON_EMISSIONS_TABLE.rows.map((row, index) => ({
        slNo: index + 1,
        scope: row.scope,
        factor: row.factor,
        kg: row.kg,
        share: row.share,
        scopeTonnes: row.scopeTonnes,
        scopeShare: row.scopeShare,
        rowSpan: row.span
            ? { scopeTonnes: row.span, scopeShare: row.span }
            : { scopeTonnes: 0, scopeShare: 0 },
    })),
    {
        slNo: "",
        scope: <span className="font-semibold text-[var(--foreground)]">Total CO₂ Emission</span>,
        kg: <span className="font-semibold text-[var(--foreground)]">{CARBON_EMISSIONS_TABLE.total}</span>,
        share: "",
        scopeTonnes: "",
        scopeShare: "",
        colSpan: { scope: 2, factor: 0 },
    },
];

function ScopeDetails() {
    return (
        <div className="space-y-4">
            {CARBON_SCOPES.map((scope) => (
                <div key={scope.scope}>
                    <h5 className="font-semibold text-[var(--foreground)]">
                        {scope.scope} – {scope.title} ({scope.share})
                    </h5>
                    <p className="mt-1">{scope.text}</p>
                </div>
            ))}
        </div>
    );
}

function PanelBlock({ block }) {
    switch (block.type) {
        case "h":
            return (
                <h4 className="pt-2 font-stix !text-lg text-[var(--foreground)]">{block.text}</h4>
            );
        case "formula":
            return (
                <p className="rounded-lg bg-[var(--card-sandal)] px-4 py-3 text-center font-semibold text-[var(--foreground)]">
                    {block.text}
                </p>
            );
        case "ul":
            return (
                <ul className="list-disc space-y-1 pl-5">
                    {block.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            );
        case "cards":
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {block.items.map((item) => (
                        <div key={item.title} className="rounded-xl bg-gray-50 p-5">
                            <h5 className="mb-1 font-semibold text-[var(--foreground)]">{item.title}</h5>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            );
        case "scopes":
            return <ScopeDetails />;
        default:
            return <p>{block.text}</p>;
    }
}

/**
 * Carbon Emission Report 2024–2025 — headline scope split and the emissions
 * table up front, with the rest of the report in expandable panels.
 */
export default function CarbonEmissionReportSection() {
    const [openId, setOpenId] = useState(null);

    return (
        <SectionBlock
            id="carbon-emission-report"
            title={CARBON_REPORT_TITLE}
            subtitle={CARBON_REPORT_SUBTITLE}
        >
            {CARBON_SUMMARY.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CARBON_SCOPES.map((scope, index) => (
                    <div
                        key={scope.scope}
                        className={`rounded-xl p-5 ${index === 0
                                ? "bg-[var(--dark-blue)] text-white"
                                : "bg-[var(--card-sandal)] text-[var(--foreground)]"
                            }`}
                    >
                        <p className={`text-sm font-medium ${index === 0 ? "text-white/80" : "text-[var(--button-red)]"}`}>
                            {scope.scope}
                        </p>
                        <p className="mt-1 font-stix !text-3xl leading-none">{scope.share}</p>
                        <p className="mt-2 text-sm font-semibold">{scope.title}</p>
                        <p className={`mt-1 text-sm ${index === 0 ? "text-white/80" : "text-[var(--text-gray-card)]"}`}>
                            {scope.tonnes}
                        </p>
                    </div>
                ))}
            </div>

            <h3 className="pt-2 font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]">
                {CARBON_EMISSIONS_TABLE.title}
            </h3>

            <DataTable
                columns={TABLE_COLUMNS}
                data={TABLE_ROWS}
                overflowX
                disableContainer
                className="!px-0"
            />

            <div className="space-y-4 pt-2">
                {CARBON_REPORT_PANELS.map((panel) => {
                    const isOpen = openId === panel.id;

                    return (
                        <div
                            key={panel.id}
                            className="overflow-hidden rounded-xl border border-gray-200"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenId(isOpen ? null : panel.id)}
                                aria-expanded={isOpen}
                                className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer transition-colors ${isOpen
                                        ? "bg-[var(--button-red)] text-white"
                                        : "bg-[var(--card-sandal)] text-[var(--foreground)]"
                                    }`}
                            >
                                <span className="font-plus-jakarta-sans text-sm md:text-base font-semibold">
                                    {panel.label}
                                </span>
                                <span
                                    className={`text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                >
                                    ▼
                                </span>
                            </button>

                            {isOpen && (
                                <div className="space-y-4 bg-white px-5 py-6">
                                    {panel.blocks.map((block, index) => (
                                        <PanelBlock key={`${panel.id}-${index}`} block={block} />
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </SectionBlock>
    );
}
