import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-7.json";

export const metadata = {
    title: "SDG 7: Affordable and Clean Energy Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 7 report on affordable and clean energy, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
