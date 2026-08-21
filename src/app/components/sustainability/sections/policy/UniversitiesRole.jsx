import {
    UNIVERSITY_ROLE_GROUPS,
    UNIVERSITY_ROLE_INTRO,
    UNIVERSITY_ROLE_OUTRO,
} from "../../data/sdg-content";

/**
 * How universities contribute to the SDGs. Content only — rendered inside the
 * "Sustainability Policy" disclosure.
 */
export default function UniversitiesRole() {
    return (
        <>
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
        </>
    );
}
