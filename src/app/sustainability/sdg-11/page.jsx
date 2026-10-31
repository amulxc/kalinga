import SdgReportPage from "@/app/components/sustainability/SdgReportPage";
import report from "@/app/components/sustainability/data/reports/sdg-11.json";

export const metadata = {
    title: "SDG 11: Sustainable Cities and Communities Report | Kalinga University",
    description: "Explore Kalinga University\u2019s SDG 11 report on sustainable cities and communities, including research, institutional initiatives, activities and supporting evidence.",
};

export default function Page() {
    return <SdgReportPage report={report} />;
}
