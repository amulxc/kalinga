import SectionBlock from "../SectionBlock";
import DataTable from "../../general/data-table";
import { SUSTAINABILITY_POLICIES } from "../data/sdg-content";

const COLUMNS = [
    { key: "goal", label: "SDG", widthPx: 220 },
    { key: "theme", label: "SDG Theme", widthPx: 220 },
    { key: "policies", label: "Relevant Policies", width: "flex-1" },
];

/**
 * Goal-wise map of the policies that back each Sustainable Development Goal.
 */
export default function PoliciesTableSection() {
    const rows = SUSTAINABILITY_POLICIES.map((entry) => ({
        goal: entry.goal,
        theme: entry.theme,
        policies: (
            <ul className="list-disc space-y-1 pl-4">
                {entry.policies.map((policy) => (
                    <li key={policy}>{policy}</li>
                ))}
            </ul>
        ),
    }));

    return (
        <SectionBlock id="sustainability-policies" title="Sustainability Policies">
            <p>
                The policies below translate the University’s sustainability commitments into
                day-to-day practice, mapped against the Sustainable Development Goal each one
                serves.
            </p>

            <DataTable
                columns={COLUMNS}
                data={rows}
                overflowX={false}
                disableContainer
                className="!px-0"
            />
        </SectionBlock>
    );
}
