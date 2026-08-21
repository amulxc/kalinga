/**
 * Section registry for the Sustainability page.
 *
 * This single list drives BOTH the sticky side panel and the order in which the
 * sections are rendered, so the two can never drift apart. The order mirrors the
 * "Sustainability - New Content" document.
 */
export const SUSTAINABILITY_SECTIONS = [
    { id: "sdg-cell", label: "Sustainable Development Goals (SDG) Cell" },
    { id: "mission-vision", label: "Vision and Mission" },
    { id: "sdg-cell-composition", label: "Composition of SDG Cell" },
    { id: "sustainability-policies", label: "Sustainability Policies" },
    { id: "centres-of-excellence", label: "Centre of Excellence (CoE)" },
    { id: "annual-reports", label: "Annual Reports" },
    { id: "sustainable-development-goals", label: "Sustainable Development Goals" },
    { id: "our-initiatives", label: "Our Initiatives" },
    { id: "student-engagement", label: "Clubs" },
];

export default SUSTAINABILITY_SECTIONS;
