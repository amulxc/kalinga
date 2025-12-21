import CenterOfExcellenceMain from "../components/centresofexcellence/centreofexcellencemain";

export default function CenterOfExcellence({

}) {
    return (
        <>
            <CenterOfExcellenceMain
  breadcrumbData={{
    heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    pageTitle: "Centres of Excellence",
    customBreadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Centres of Excellence", href: "/centres-of-excellence" },
    ],
  }}
/>

        </>
    )
}