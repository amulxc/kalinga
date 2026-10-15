import SectionBlock from "../SectionBlock";
import DocumentLinks from "../DocumentLinks";
import { MOUS } from "../data/coe-content";

/**
 * Memoranda of Understanding signed by the SDG Cell.
 */
export default function MoUsSection() {
    return (
        <SectionBlock id="mous" title="MoUs">
            <p>
                Memoranda of Understanding signed with partner organisations in support of
                the University&apos;s sustainability initiatives.
            </p>

            <DocumentLinks documents={MOUS} columns={2} />
        </SectionBlock>
    );
}
