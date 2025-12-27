import CenterOfExcellenceMain from "../components/centresofexcellence/centreofexcellencemain";
import AdmissionCareer from "../components/general/admission_cta";

export default function CenterOfExcellence({

}) {
  return (
    <>
      <CenterOfExcellenceMain
        breadcrumbData={{
          heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/coe/coe-banner.webp",
          pageTitle: "Centres of Excellence",
          customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Centres of Excellence", href: "/centres-of-excellence" },
          ],
        }}
      />
      <AdmissionCareer />
    </>
  )
}