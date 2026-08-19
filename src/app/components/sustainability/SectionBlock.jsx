/**
 * Shared shell for every block in the Sustainability page's right-hand column.
 *
 * It owns the anchor id used by the side panel, the scroll offset that keeps
 * headings clear of the sticky header, and the common card styling.
 */
export default function SectionBlock({
    id,
    title,
    subtitle = null,
    children,
    className = "",
    contentClassName = "",
}) {
    return (
        <section id={id} className={`scroll-mt-[150px] ${className}`}>
            {title && (
                <header className="mb-5">
                    <h2 className="font-stix !text-2xl md:!text-[32px] leading-tight text-[var(--foreground)]">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="mt-2 font-plus-jakarta-sans text-[var(--button-red)] font-medium">
                            {subtitle}
                        </p>
                    )}
                    <span className="mt-3 block h-[3px] w-16 rounded-full bg-[var(--button-red)]" />
                </header>
            )}

            <div
                className={`space-y-4 font-plus-jakarta-sans text-sm md:text-[15px] leading-relaxed text-[var(--light-text-gray)] ${contentClassName}`}
            >
                {children}
            </div>
        </section>
    );
}
