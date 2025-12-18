import React from 'react'
import Campusfacilitymainintro from '@/app/components/campus-facilities/campusfacilitymainintro'
import Campusfacilitiescard from '../components/campus-facilities/campusfacilitiescard'
import AdmissionCareer from '../components/general/admission_cta'


function CampusFacilities() {
    return (
        <>
            <Campusfacilitymainintro />
            <Campusfacilitiescard />
            <AdmissionCareer />
        </>
    )
}

export default CampusFacilities