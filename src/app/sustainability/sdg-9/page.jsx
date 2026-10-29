import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-9.json";

export const metadata = {
    title: "SDG 9: Industry, Innovation and Infrastructure Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 9 report on industry, innovation and infrastructure, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
