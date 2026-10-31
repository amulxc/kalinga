import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-15.json";

export const metadata = {
    title: "SDG 15: Life on Land Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 15 report on life on land, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
