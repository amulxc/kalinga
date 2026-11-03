import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-1.json";

export const metadata = {
    title: "SDG 1: No Poverty Report | Kalinga University",
    description: "Explore Kalinga University's SDG 1 report on no poverty, including research, financial support, community initiatives and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
