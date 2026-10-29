import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-13.json";

export const metadata = {
    title: "SDG 13: Climate Action Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 13 report on climate action, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
