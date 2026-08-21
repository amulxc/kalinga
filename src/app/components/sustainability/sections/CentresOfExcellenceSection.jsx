"use client";

import { useState } from "react";
import SectionBlock from "../SectionBlock";
import DocumentLinks from "../DocumentLinks";
import OrdinalText from "../OrdinalText";
import { OFFICE_ORDERS } from "../data/coe-content";

/**
 * Centre of Excellence (CoE) — the two office orders that constitute the
 * Centres of Excellence and the Sustainable Standing Committee. Each order
 * expands to its full text and links to the signed PDF.
 */
export default function CentresOfExcellenceSection() {
    const [openId, setOpenId] = useState(OFFICE_ORDERS[0]?.id || null);

    return (
        <SectionBlock id="centres-of-excellence" title="Centre of Excellence (CoE)">
            <div className="space-y-4">
                {OFFICE_ORDERS.map((order) => {
                    const isOpen = openId === order.id;

                    return (
                        <div
                            key={order.id}
                            className="overflow-hidden rounded-xl border border-gray-200"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenId(isOpen ? null : order.id)}
                                aria-expanded={isOpen}
                                className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer transition-colors ${isOpen
                                        ? "bg-[var(--button-red)] text-white"
                                        : "bg-[var(--card-sandal)] text-[var(--foreground)]"
                                    }`}
                            >
                                <span className="font-plus-jakarta-sans text-sm md:text-base font-semibold">
                                    {order.label}
                                </span>
                                <span
                                    className={`text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                >
                                    ▼
                                </span>
                            </button>

                            {isOpen && (
                                <div className="space-y-4 bg-white px-5 py-6">
                                    <p className="font-semibold text-[var(--foreground)]">
                                        Subject: {order.subject}
                                    </p>

                                    {order.intro.map((paragraph) => (
                                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                                    ))}

                                    <p className="font-semibold text-[var(--foreground)]">
                                        {order.centresHeading}
                                    </p>
                                    <ol className="list-decimal space-y-2 pl-5">
                                        {order.centres.map((centre) => (
                                            <li key={centre.slice(0, 40)}>{centre}</li>
                                        ))}
                                    </ol>

                                    {order.note && <p>{order.note}</p>}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="rounded-xl bg-[var(--dark-blue)] p-5 text-white">
                                            <h4 className="font-stix !text-lg mb-2">Vision</h4>
                                            <p className="text-white/90">{order.vision}</p>
                                        </div>
                                        <div className="rounded-xl bg-[var(--card-sandal)] p-5">
                                            <h4 className="font-stix !text-lg mb-2 text-[var(--button-red)]">
                                                Mission
                                            </h4>
                                            <ul className="list-disc space-y-1 pl-5 text-[var(--text-gray-card)]">
                                                {order.mission.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <h4 className="font-stix !text-lg text-[var(--foreground)]">
                                        Objectives
                                    </h4>
                                    <ul className="list-disc space-y-1 pl-5">
                                        {order.objectives.map((objective) => (
                                            <li key={objective}>{objective}</li>
                                        ))}
                                    </ul>

                                    <h4 className="font-stix !text-lg text-[var(--foreground)]">
                                        {order.committeeHeading}
                                    </h4>
                                    <p>{order.committeeIntro}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {order.committee.map((member) => (
                                            <li
                                                key={member}
                                                className="rounded-lg bg-gray-50 px-4 py-2"
                                            >
                                                <OrdinalText>{member}</OrdinalText>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="italic">{order.footer}</p>

                                    <DocumentLinks
                                        documents={[
                                            { label: `${order.label} (PDF)`, href: order.pdfUrl },
                                        ]}
                                        columns={1}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </SectionBlock>
    );
}
