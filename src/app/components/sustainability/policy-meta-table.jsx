const ROWS = [
    ["implementedYear", "Policy Implemented Year"],
    ["approved", "Approved"],
    ["notification", "Notification"],
    ["inForceSince", "In Force Since"],
    ["nextReview", "Next Review"],
];

/** The approval / notification / review table shown at the top of a policy page. */
export default function PolicyMetaTable({ meta }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
                <tbody>
                    {ROWS.filter(([key]) => meta[key]).map(([key, label]) => (
                        <tr key={key}>
                            <th
                                scope="row"
                                className="w-40 border border-gray-200 bg-gray-50 p-3 text-left font-semibold text-[var(--foreground)] md:w-56"
                            >
                                {label}
                            </th>
                            <td className="border border-gray-200 p-3 text-[var(--text-gray-card)]">
                                {meta[key]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
