import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-5.json";

export const metadata = {
    title: "SDG 5: Gender Equality Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 5 report on gender equality, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
