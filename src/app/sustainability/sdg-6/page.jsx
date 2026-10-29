import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-6.json";

export const metadata = {
    title: "SDG 6: Clean Water and Sanitation Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 6 report on clean water and sanitation, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
