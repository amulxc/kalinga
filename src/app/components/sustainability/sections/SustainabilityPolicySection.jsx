import SectionBlock from "../SectionBlock";
import {
    SDG_GOAL_DEFINITIONS,
    SDG_OVERVIEW_INTRO,
    SDG_OVERVIEW_OUTRO,
    UNIVERSITY_ROLE_GROUPS,
    UNIVERSITY_ROLE_INTRO,
    UNIVERSITY_ROLE_OUTRO,
} from "../data/sdg-content";

/**
 * Sustainability Policy: an overview of the 17 UN goals followed by the role
 * universities play in delivering them.
 */
export default function SustainabilityPolicySection() {
    return (
        <SectionBlock id="sustainability-policy" title="Sustainability Policy">
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

            <h3 className="pt-2 font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]">
                Importance of Universities in Contributing to the Achievement of the SDGs
            </h3>

            <p>{UNIVERSITY_ROLE_INTRO}</p>

            <div className="space-y-4">
                {UNIVERSITY_ROLE_GROUPS.map((group, index) => (
                    <div key={group.title} className="rounded-xl border border-gray-200 p-5">
                        <h4 className="font-stix !text-base md:!text-lg text-[var(--foreground)] mb-2">
                            {index + 1}. {group.title}
                        </h4>
                        <ul className="list-disc space-y-2 pl-5">
                            {group.points.map((point) => (
                                <li key={point.slice(0, 40)}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <p>{UNIVERSITY_ROLE_OUTRO}</p>
        </SectionBlock>
    );
}
