import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-8.json";

export const metadata = {
    title: "SDG 8: Decent Work and Economic Growth Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 8 report on decent work and economic growth, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
