import Image from "next/image";
import SectionBlock from "../SectionBlock";
import OrdinalText from "../OrdinalText";
import { COMMITMENT_PARAGRAPHS, SDG_CELL_INTRO } from "../data/sdg-content";

/**
 * Opening block: what the SDG Cell is, why the University runs it, and the
 * commitment it has made to the Sustainable Development Goals.
 */
export default function IntroSection() {
    return (
        <SectionBlock
            id="sdg-cell"
            title="Sustainable Development Goals (SDG) Cell"
            headingLevel={1}
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <p className="md:col-span-8 order-2 md:order-1">{SDG_CELL_INTRO}</p>

                <div className="md:col-span-4 order-1 md:order-2 flex justify-center">
                    <Image
                        src="https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-logo.png"
                        alt="United Nations Sustainable Development Goals"
                        width={320}
                        height={320}
                        className="w-48 md:w-full max-w-[240px] h-auto object-contain"
                    />
                </div>
            </div>

            <h2 className="pt-2 font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]">
                Kalinga University’s Commitment Towards Sustainable Development Goals (SDGs)
            </h2>

            {COMMITMENT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>
                    <OrdinalText>{paragraph}</OrdinalText>
                </p>
            ))}
        </SectionBlock>
    );
}
