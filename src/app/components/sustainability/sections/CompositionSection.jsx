import SectionBlock from "../SectionBlock";
import DataTable from "../../general/data-table";
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
    return (
        <SectionBlock id="sdg-cell-composition" title="Composition of SDG Cell">
            <p>The SDG Cell at Kalinga University comprises the following members:</p>

            <DataTable
                columns={COLUMNS}
                data={SDG_CELL_MEMBERS}
                overflowX={false}
                disableContainer
                className="!px-0"
            />
        </SectionBlock>
    );
}
