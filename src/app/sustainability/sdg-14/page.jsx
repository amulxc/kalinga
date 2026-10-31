import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-14.json";

export const metadata = {
    title: "SDG 14: Life Below Water Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 14 report on life below water, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
