import {
    SDG_GOAL_DEFINITIONS,
    SDG_OVERVIEW_INTRO,
    SDG_OVERVIEW_OUTRO,
} from "../../data/sdg-content";

/**
 * Overview of the 17 UN goals. Content only — the owning section supplies the
 * heading shell, so this renders inside the "Sustainability Policy" disclosure.
 */
export default function SdgOverview() {
    return (
        <>
            <h3 className="font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]">
                Overview of the Sustainable Development Goals (SDG) Adopted by the United Nations
            </h3>

            {SDG_OVERVIEW_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            <p className="font-semibold text-[var(--foreground)]">
                Here is an overview of the 17 Sustainable Development Goals:
            </p>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SDG_GOAL_DEFINITIONS.map((goal, index) => (
                    <li
                        key={goal.title}
                        className="rounded-xl bg-[var(--lite-sand)]/50 border border-[var(--lite-sand)] p-4"
                    >
                        <span className="block font-semibold text-[var(--button-red)]">
                            {index + 1}. {goal.title}
                        </span>
                        <span className="mt-1 block">{goal.description}</span>
                    </li>
                ))}
            </ol>

            {SDG_OVERVIEW_OUTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
        </>
    );
}
