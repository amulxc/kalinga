import SectionBlock from "../SectionBlock";
import DocumentLinks from "../DocumentLinks";
import { COMMITMENT_PARAGRAPHS } from "../data/sdg-content";
import { SDG_CELL_DOCUMENTS } from "../data/coe-content";

/**
 * Kalinga University's commitment towards the SDGs, plus the two SDG Cell
 * reference documents.
 */
export default function CommitmentSection() {
    return (
        <SectionBlock
            id="commitment"
            title="Kalinga University’s Commitment Towards Sustainable Development Goals (SDGs)"
        >
            {COMMITMENT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            <DocumentLinks documents={SDG_CELL_DOCUMENTS} columns={2} className="pt-2" />
        </SectionBlock>
    );
}
