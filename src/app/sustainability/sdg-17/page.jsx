import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-17.json";

export const metadata = {
    title: "SDG 17: Partnerships for the Goals Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 17 report on partnerships for the goals, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
