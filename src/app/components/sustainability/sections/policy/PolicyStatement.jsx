import {
    POLICY_PRINCIPLES,
    POLICY_STATEMENT_INTRO,
    POLICY_STATEMENT_OUTRO,
} from "../../data/sdg-content";

/**
 * The formal policy statement and its six principles. Content only — rendered
 * inside the "Sustainability Policy" disclosure.
 */
export default function PolicyStatement() {
    return (
        <>
            <h3 className="pt-2 font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]">
                Policy Statement
            </h3>

            {POLICY_STATEMENT_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {POLICY_PRINCIPLES.map((principle, index) => (
                    <li key={principle.title} className="rounded-xl bg-gray-50 p-5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--button-red)] font-plus-jakarta-sans text-sm font-semibold text-white">
                            {index + 1}
                        </span>
                        <span className="mt-3 block font-semibold text-[var(--foreground)]">
                            {principle.title}
                        </span>
                        <span className="mt-1 block">{principle.description}</span>
                    </li>
                ))}
            </ol>

            <p>{POLICY_STATEMENT_OUTRO}</p>
        </>
    );
}
