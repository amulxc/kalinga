import React from 'react'
import AboutCafeteria from '../components/cafeteria-mess/about-cafeteria-mess'
import AdmissionCareer from '../components/general/admission_cta';
import AutoBreadcrumb from '../components/layout/BreadcrumbData';
import Page from '../components/campuslife/featuresection';
import CanteenMess from '../components/cafeteria-mess/cafeteria-facility-mess';

const page = () => {
   const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
        pageTitle: "Cafeteria & Mess",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Cafeteria & Mess", href: "/cafeteria-mess" },
        ],
    };
  return (
    <>
    <AutoBreadcrumb data={breadcrumbData} />
    <AboutCafeteria/>
    <CanteenMess/>
    <AdmissionCareer/>
    </>
  )
}

export default page