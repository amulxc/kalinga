import SectionBlock from "../SectionBlock";
import {
    SDG_ALIGNMENT_INTRO,
    SDG_ALIGNMENT_ITEMS,
    SDG_ALIGNMENT_OUTRO,
    SDG_CELL_MISSION,
    SDG_CELL_VISION,
} from "../data/sdg-content";

const SUB_HEADING =
    "font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]";

/**
 * Vision and mission, read as two stacked rows rather than side-by-side cards.
 * The SDG alignment belongs to the mission, so it sits inside that second row.
 */
export default function MissionVisionSection() {
    return (
        <SectionBlock id="mission-vision" title="Vision and Mission">
            {/* Row 1 — Vision */}
            <h3 className={SUB_HEADING}>Vision</h3>
            <p>{SDG_CELL_VISION}</p>

            {/* Row 2 — Mission, including the goals it aligns its work with */}
            <h3 className={`pt-4 ${SUB_HEADING}`}>Mission</h3>
            <p>{SDG_CELL_MISSION}</p>

            <h4 className="pt-2 font-stix !text-lg text-[var(--foreground)]">
                Alignment with the Sustainable Development Goals (SDGs)
            </h4>

            <p>{SDG_ALIGNMENT_INTRO}</p>

            <ol className="space-y-3">
                {SDG_ALIGNMENT_ITEMS.map((item, index) => (
                    <li
                        key={item.title}
                        className="rounded-xl border-l-4 border-[var(--button-red)] bg-gray-50 p-4"
                    >
                        <span className="block font-semibold text-[var(--foreground)]">
                            {index + 1}. {item.title}
                        </span>
                        <span className="mt-1 block">{item.description}</span>
                    </li>
                ))}
            </ol>

            <p>{SDG_ALIGNMENT_OUTRO}</p>
        </SectionBlock>
    );
}
