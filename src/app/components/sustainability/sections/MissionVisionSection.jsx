import SectionBlock from "../SectionBlock";
import {
    SDG_ALIGNMENT_INTRO,
    SDG_ALIGNMENT_ITEMS,
    SDG_ALIGNMENT_OUTRO,
    SDG_CELL_MISSION,
    SDG_CELL_VISION,
} from "../data/sdg-content";

/**
 * Mission, vision and the five SDGs the SDG Cell aligns its work with.
 */
export default function MissionVisionSection() {
    return (
        <SectionBlock
            id="mission-vision"
            title="Mission and Vision of Kalinga University’s SDG Cell"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <article className="rounded-xl bg-[var(--dark-blue)] p-6 text-white">
                    <h3 className="font-stix !text-xl !leading-snug mb-3">Vision</h3>
                    <p className="text-white/90">{SDG_CELL_VISION}</p>
                </article>

                <article className="rounded-xl bg-[var(--card-sandal)] p-6">
                    <h3 className="font-stix !text-xl !leading-snug mb-3 text-[var(--button-red)]">
                        Mission
                    </h3>
                    <p className="text-[var(--text-gray-card)]">{SDG_CELL_MISSION}</p>
                </article>
            </div>

            <h3 className="pt-2 font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]">
                Alignment with the Sustainable Development Goals (SDGs)
            </h3>

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
