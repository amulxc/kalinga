import SectionNavLink from "./SectionNavLink";

/**
 * Desktop side panel for the Sustainability page: a sticky rail that mirrors
 * the page's section order and highlights the section currently being read.
 *
 * @param {Array<{id: string, label: string}>} sections
 * @param {string} activeId - id of the section currently in view
 * @param {(id: string) => void} onSelect - jump to a section
 */
export default function SustainabilitySideNav({
    sections = [],
    activeId,
    onSelect,
    className = "",
}) {
    return (
        <nav
            aria-label="Sustainability sections"
            className={`h-full ${className}`}
        >
            <div className="sticky top-28">
                <div className="overflow-hidden rounded-xl bg-[var(--dark-blue)] shadow-sm">
                    {/* Height budget: 7rem sticky offset + the fixed "Admission
                        Open" bar at the bottom of every page (60px) + breathing
                        room, so the last item never hides behind that bar. */}
                    <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
                        {sections.map((section) => (
                            <SectionNavLink
                                key={section.id}
                                section={section}
                                isActive={section.id === activeId}
                                onSelect={onSelect}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
