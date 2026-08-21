import DataTable from "../../../general/data-table";
import { SUSTAINABILITY_POLICIES } from "../../data/sdg-content";

const COLUMNS = [
    { key: "goal", label: "SDG", widthPx: 220 },
    { key: "theme", label: "SDG Theme", widthPx: 220 },
    { key: "policies", label: "Relevant Policies", width: "flex-1" },
];

/**
 * Goal-wise map of the policies that back each Sustainable Development Goal.
 * Carries its own heading so it reads as a distinct block within the section.
 */
export default function PoliciesTable() {
    const rows = SUSTAINABILITY_POLICIES.map((entry) => ({
        // The goal is the row's label, so it carries the emphasis.
        goal: <span className="font-semibold text-[var(--foreground)]">{entry.goal}</span>,
        theme: entry.theme,
        policies: (
            <ul className="list-disc space-y-1 pl-4">
                {entry.policies.map((policy) => {
                    // A policy is a plain string, or { label, pdfUrl } once its
                    // document is published — the latter links out to the PDF.
                    if (typeof policy === "string") {
                        return <li key={policy}>{policy}</li>;
                    }

                    return (
                        <li key={policy.label}>
                            <a
                                href={policy.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`${policy.label} (PDF)`}
                                className="font-medium text-[var(--button-red)] underline underline-offset-2 transition-opacity hover:opacity-75"
                            >
                                {policy.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        ),
    }));

    return (
        <>
            <h3 className="pt-2 font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]">
                Sustainability Policies
            </h3>

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
        </>
    );
}
