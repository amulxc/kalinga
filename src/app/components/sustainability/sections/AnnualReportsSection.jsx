import SectionBlock from "../SectionBlock";
import DocumentLinks from "../DocumentLinks";
import { ANNUAL_REPORTS } from "../data/coe-content";

/**
 * SDG Cell annual reports.
 */
export default function AnnualReportsSection() {
    return (
        <SectionBlock id="annual-reports" title="Annual Reports">
            <p>
                Year-wise reports on the Sustainable Development Goal initiatives delivered
                across the University.
            </p>

            <DocumentLinks documents={ANNUAL_REPORTS} columns={3} />
        </SectionBlock>
    );
}
