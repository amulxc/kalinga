import SectionBlock from "../SectionBlock";
import SdgTabSection from "../../sdg-cell/sdg-tab-section";

/**
 * "Our Initiatives" — the existing SDG initiative tabs (energy, waste, water,
 * gender equity, best practices and so on) rendered inside the new layout.
 * `SdgTabSection` supplies its own heading, so the block stays untitled.
 */
export default function InitiativesSection() {
    return (
        <SectionBlock id="our-initiatives" contentClassName="!space-y-0">
            <SdgTabSection />
        </SectionBlock>
    );
}
