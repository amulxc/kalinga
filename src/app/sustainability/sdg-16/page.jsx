import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-16.json";

export const metadata = {
    title: "SDG 16: Peace, Justice and Strong Institutions Report | Kalinga University",
    description: "Explore Kalinga University's SDG 16 report on peace, justice and strong institutions, including governance, research, engagement and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
