import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-10.json";

export const metadata = {
    title: "SDG 10: Reduced Inequalities Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 10 report on reduced inequalities, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
