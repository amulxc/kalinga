import React from 'react'
import Academicmainintro from '@/app/components/academic-facilities/academicmainintro'
import Academiccards from '@/app/components/academic-facilities/academiccards'
import AdmissionCareer from '@/app/components/general/admission_cta'

function AcademicFacilities() {
    return (
        <>
            <Academicmainintro />
            <Academiccards />
            <AdmissionCareer />
        </>
    )
}

export default AcademicFacilities