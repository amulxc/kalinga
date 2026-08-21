import SectionBlock from "../SectionBlock";
import DataTable from "../../general/data-table";
import OrdinalText from "../OrdinalText";
import { SDG_CELL_MEMBERS } from "../data/sdg-content";

const COLUMNS = [
    { key: "sno", label: "S.No.", widthPx: 80 },
    { key: "name", label: "SDG Members", widthPx: 240 },
    { key: "designation", label: "Designation", widthPx: 190 },
    { key: "faculty", label: "Faculty / Department", width: "flex-1" },
];

/**
 * Members constituting the SDG Cell.
 */
export default function CompositionSection() {
    const rows = SDG_CELL_MEMBERS.map((member, index) => ({
        ...member,
        // Numbering follows the list order, so it can never fall out of step.
        sno: index + 1,
        // Semester labels carry ordinals ("7th Semester"), so raise them in place.
        faculty: <OrdinalText>{member.faculty}</OrdinalText>,
    }));

    return (
        <SectionBlock id="sdg-cell-composition" title="Composition of SDG Cell">
            <p>The SDG Cell at Kalinga University comprises the following members:</p>

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
