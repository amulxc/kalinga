import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-2.json";

export const metadata = {
    title: "SDG 2: Zero Hunger Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 2 report on zero hunger, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
