"use client";

import { useState } from "react";
import SectionBlock from "../SectionBlock";
import GlobalArrowButton from "../../general/global-arrow_button";
import SdgOverview from "./policy/SdgOverview";
import UniversitiesRole from "./policy/UniversitiesRole";
import PolicyStatement from "./policy/PolicyStatement";
import PoliciesTable from "./policy/PoliciesTable";

/**
 * Tab 4 — "Sustainability Policies".
 *
 * Opens with a "Sustainability Policy" disclosure holding the written policy
 * (the UN goal overview, the role of universities and the policy statement),
 * then carries the goal-wise policies table as its own heading below.
 */
export default function SustainabilityPoliciesSection() {
    const [isPolicyOpen, setIsPolicyOpen] = useState(false);

    return (
        <SectionBlock id="sustainability-policies" title="Sustainability Policies">
            {/* Written policy — collapsed until asked for, since it is long. */}
            <GlobalArrowButton
                onClick={() => setIsPolicyOpen((previous) => !previous)}
                aria-expanded={isPolicyOpen}
                aria-controls="sustainability-policy-panel"
                className="!w-full min-h-[60px] h-auto justify-between !rounded-xl"
                textClassName="!text-left !leading-snug !font-medium"
                arrowClassName="p-[3px] !px-2 mr-2 !py-1 shrink-0"
                arrowIconClassName={isPolicyOpen ? "rotate-90" : ""}
                arrowSize={26}
            >
                Sustainability Policy
            </GlobalArrowButton>

            {isPolicyOpen && (
                <div id="sustainability-policy-panel" className="space-y-4 pt-2">
                    <SdgOverview />
                    <UniversitiesRole />
                    <PolicyStatement />
                </div>
            )}

            <PoliciesTable />
        </SectionBlock>
    );
}
