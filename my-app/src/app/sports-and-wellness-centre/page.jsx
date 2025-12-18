import React from 'react'
import SportsWellnessOverview from '@/app/components/sports-and-wellness-centre/sportsandwellnesshero'
import SportsandwellnessMainIntro from '@/app/components/sports-and-wellness-centre/sportsandwellness_main_intro'
import SportsFacilitiesTabs from '@/app/components/sports-and-wellness-centre/sportsfacilitiestabs'
import Sportsandwellnessevents from '@/app/components/sports-and-wellness-centre/sportsandwellnessevents'
import AdmissionCareer from '@/app/components/general/admission_cta'

function Sportsandwellnesscentre() {
    return (
        <>
            <SportsWellnessOverview />
            <SportsandwellnessMainIntro />
            <SportsFacilitiesTabs />
            <Sportsandwellnessevents />
            <AdmissionCareer />
        </>
    )
}

export default Sportsandwellnesscentre