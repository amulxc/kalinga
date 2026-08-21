"use client";

import SustainabilitySideNav from "../components/sustainability/SustainabilitySideNav";
import SustainabilitySectionPicker from "../components/sustainability/SustainabilitySectionPicker";
import useScrollSpy from "../components/sustainability/useScrollSpy";
import { SUSTAINABILITY_SECTIONS } from "../components/sustainability/data/navigation";

import IntroSection from "../components/sustainability/sections/IntroSection";
import MissionVisionSection from "../components/sustainability/sections/MissionVisionSection";
import CompositionSection from "../components/sustainability/sections/CompositionSection";
import SustainabilityPoliciesSection from "../components/sustainability/sections/SustainabilityPoliciesSection";
import CentresOfExcellenceSection from "../components/sustainability/sections/CentresOfExcellenceSection";
import AnnualReportsSection from "../components/sustainability/sections/AnnualReportsSection";
import SdgGoalsSection from "../components/sustainability/sections/SdgGoalsSection";
import InitiativesSection from "../components/sustainability/sections/InitiativesSection";
import StudentEngagementSection from "../components/sustainability/sections/StudentEngagementSection";

/**
 * Sustainability page — side panel on the left, content sections on the right.
 * The section order matches `SUSTAINABILITY_SECTIONS`, which also drives both
 * navigation surfaces, so the two can never drift apart.
 */
const SustainabilityClient = () => {
    const { activeId, goToSection } = useScrollSpy(SUSTAINABILITY_SECTIONS);

    return (
        <div className="min-h-screen bg-white pb-16">
            <div className="container mx-auto px-4 py-8 md:py-12">
                {/* Mobile section picker — sits outside the grid so it can stay
                    pinned for the whole page, not just the nav column. */}
                <div className="lg:hidden sticky top-[70px] z-30 mb-6">
                    <SustainabilitySectionPicker
                        sections={SUSTAINABILITY_SECTIONS}
                        activeId={activeId}
                        onSelect={goToSection}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Side panel — stretches to the row height so it can stay sticky */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <SustainabilitySideNav
                            sections={SUSTAINABILITY_SECTIONS}
                            activeId={activeId}
                            onSelect={goToSection}
                        />
                    </aside>

                    {/* Content */}
                    <main className="lg:col-span-9 space-y-12 md:space-y-16">
                        <IntroSection />
                        <MissionVisionSection />
                        <CompositionSection />
                        <SustainabilityPoliciesSection />
                        <CentresOfExcellenceSection />
                        <AnnualReportsSection />
                        <SdgGoalsSection />
                        <InitiativesSection />
                        <StudentEngagementSection />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SustainabilityClient;
