import React from 'react'
import StudentReportmainintro from '@/app/components/student-support/studentreportmainintro'
import AdmissionCareer from '@/app/components/general/admission_cta'
import Studentreportservices from '@/app/components/student-support/studentreportservices'
import Studentreportcards from '../components/student-support/studentreportcards'

function StudentReport() {
    return (
        <>
            <StudentReportmainintro />
            <Studentreportservices />
            <Studentreportcards />
            <AdmissionCareer />
        </>
    )
}

export default StudentReport