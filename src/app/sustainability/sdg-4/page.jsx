import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-4.json";

export const metadata = {
    title: "SDG 4: Quality Education Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 4 report on quality education, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
