"use client";

import { useState } from "react";
import SectionNavLink from "./SectionNavLink";

/**
 * Mobile counterpart of the side panel: a collapsible picker that stays pinned
 * under the site header while the reader moves through the page.
 *
 * @param {Array<{id: string, label: string}>} sections
 * @param {string} activeId - id of the section currently in view
 * @param {(id: string) => void} onSelect - jump to a section
 */
export default function SustainabilitySectionPicker({
    sections = [],
    activeId,
    onSelect,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const activeLabel =
        sections.find((section) => section.id === activeId)?.label || "Sections";

    const handleSelect = (id) => {
        setIsOpen(false);
        onSelect(id);
    };

    return (
        <nav aria-label="Sustainability sections">
            <button
                type="button"
                onClick={() => setIsOpen((previous) => !previous)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between rounded-xl bg-[var(--dark-blue)] px-5 py-4 text-left text-white shadow-md cursor-pointer"
            >
                <span className="font-plus-jakarta-sans text-sm font-semibold">
                    {activeLabel}
                </span>
                <span
                    className={`ml-3 text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                    ▼
                </span>
            </button>

            {isOpen && (
                <div className="mt-2 max-h-[60vh] overflow-y-auto rounded-xl bg-[var(--dark-blue)] shadow-xl">
                    {sections.map((section) => (
                        <SectionNavLink
                            key={section.id}
                            section={section}
                            isActive={section.id === activeId}
                            onSelect={handleSelect}
                        />
                    ))}
                </div>
            )}
        </nav>
    );
}
