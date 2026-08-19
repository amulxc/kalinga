/**
 * One entry in the Sustainability section navigation. Shared by the desktop
 * rail and the mobile picker so both stay visually identical.
 */
export default function SectionNavLink({ section, isActive, onSelect }) {
    return (
        <a
            href={`#${section.id}`}
            aria-current={isActive ? "true" : undefined}
            onClick={(event) => {
                event.preventDefault();
                onSelect(section.id);
            }}
            className={`block px-5 py-4 !text-sm md:!text-[15px] font-plus-jakarta-sans font-medium leading-snug border-b border-white/10 last:border-b-0 transition-colors duration-200 ${isActive
                    ? "bg-[var(--button-red)] text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
        >
            {section.label}
        </a>
    );
}
