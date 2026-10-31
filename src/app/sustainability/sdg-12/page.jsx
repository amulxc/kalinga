import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-12.json";

export const metadata = {
    title: "SDG 12: Responsible Consumption and Production Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 12 report on responsible consumption and production, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
