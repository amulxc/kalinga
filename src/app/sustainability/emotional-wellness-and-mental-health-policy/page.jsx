import Link from "next/link";
import SectionBlock from "@/app/components/sustainability/SectionBlock";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import {
    ACCOUNTABILITY,
    APPROVAL,
    GUIDELINES,
    INTRO,
    MENTOR_MENTEE_INTRO,
    MENTOR_MENTEE_POINTS,
    MONITORING_AND_REVIEW,
    OBJECTIVES,
    PDF_URL,
    PREAMBLE,
    PRINCIPLES,
    SUPPORT_FACILITIES,
} from "@/app/components/sustainability/data/wellness-policy-content";

const TITLE = "Policy on Emotional Wellness, Mental Health and Resilience";
const URL =
    "https://kalingauniversity.ac.in/sustainability/emotional-wellness-and-mental-health-policy";

export const metadata = {
    title: `${TITLE} | Kalinga University`,
    description:
        "Kalinga University's policy on emotional wellness, mental health and resilience — its principles, objectives, guidelines, mentoring framework and support services.",
    keywords:
        "Kalinga University mental health policy, student counselling Raipur, emotional wellness higher education, campus wellbeing policy",
    alternates: { canonical: URL },
};

/** A bulleted list styled the same way wherever it appears on this page. */
function PolicyList({ items, ordered = false }) {
    const List = ordered ? "ol" : "ul";
    return (
        <List
            className={`space-y-2 pl-5 ${ordered ? "list-decimal" : "list-disc"} marker:text-[var(--button-red)]`}
        >
            {items.map((item) => (
                <li key={item.slice(0, 50)}>{item}</li>
            ))}
        </List>
    );
}

export default function EmotionalWellnessPolicyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${TITLE} - Kalinga University`,
        description:
            "The University's commitment to the emotional well-being, mental health and resilience of its students, faculty and staff.",
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://kalingauniversity.ac.in/" },
                { "@type": "ListItem", position: 2, name: "Sustainability", item: "https://kalingauniversity.ac.in/sustainability" },
                { "@type": "ListItem", position: 3, name: TITLE, item: URL },
            ],
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-white pb-16">
                <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl space-y-12 md:space-y-14">
                    {/* The page banner already carries the title as the h1, so this
                        opens straight into the summary and the signed document. */}
                    <header className="space-y-4">
                        <span className="block h-[3px] w-16 rounded-full bg-[var(--button-red)]" />
                        <p className="font-plus-jakarta-sans text-sm md:text-[15px] leading-relaxed text-[var(--light-text-gray)]">
                            {INTRO}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-1">
                            <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                                <GlobalArrowButton
                                    as="span"
                                    className="min-h-[52px] h-auto !rounded-xl"
                                    textClassName="!text-left !leading-snug !font-medium"
                                    arrowClassName="p-[3px] !px-2 mr-2 !py-1 shrink-0"
                                    arrowSize={24}
                                >
                                    Download the signed policy (PDF)
                                </GlobalArrowButton>
                            </a>
                        </div>
                    </header>

                    <SectionBlock id="preamble" title="Preamble">
                        {PREAMBLE.map((paragraph) => (
                            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                    </SectionBlock>

                    <SectionBlock id="principles" title="Principles">
                        <p>The University shall be guided by the following principles:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {PRINCIPLES.map((principle) => (
                                <article
                                    key={principle.title}
                                    className="rounded-xl border-l-4 border-[var(--button-red)] bg-gray-50 p-5"
                                >
                                    <h3 className="font-plus-jakarta-sans font-semibold text-[var(--foreground)]">
                                        {principle.title}
                                    </h3>
                                    <p className="mt-1">{principle.description}</p>
                                </article>
                            ))}
                        </div>
                    </SectionBlock>

                    <SectionBlock id="objectives" title="Objectives">
                        <p>The Policy aims to:</p>
                        <PolicyList items={OBJECTIVES} ordered />
                    </SectionBlock>

                    <SectionBlock id="guidelines" title="Guidelines">
                        <div className="space-y-6">
                            {GUIDELINES.map((section, index) => (
                                <div key={section.title}>
                                    <h3 className="font-stix !text-lg md:!text-xl !leading-snug text-[var(--foreground)]">
                                        {index + 1}. {section.title}
                                    </h3>
                                    {section.lead && <p className="mt-2">{section.lead}</p>}
                                    <div className="mt-2">
                                        <PolicyList items={section.points} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionBlock>

                    <SectionBlock id="mentor-mentee" title="Mentor–Mentee Relationship">
                        {MENTOR_MENTEE_INTRO.map((paragraph) => (
                            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                        <PolicyList items={MENTOR_MENTEE_POINTS} />
                    </SectionBlock>

                    <SectionBlock
                        id="support-infrastructure"
                        title="Health, Wellness and Support Infrastructure"
                    >
                        <div className="space-y-5">
                            {SUPPORT_FACILITIES.map((facility) => (
                                <article
                                    key={facility.title}
                                    className="rounded-xl bg-[var(--card-sandal)] p-5 md:p-6"
                                >
                                    <h3 className="font-stix !text-lg md:!text-xl !leading-snug text-[var(--button-red)]">
                                        {facility.title}
                                    </h3>
                                    <p className="mt-2 text-[var(--text-gray-card)]">
                                        {facility.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </SectionBlock>

                    <SectionBlock id="monitoring-and-review" title="Monitoring and Review">
                        <PolicyList items={MONITORING_AND_REVIEW} />
                    </SectionBlock>

                    <SectionBlock id="accountability" title="Accountability and Transparency">
                        <PolicyList items={ACCOUNTABILITY} />
                    </SectionBlock>

                    <SectionBlock id="approval" title="Approval and Implementation">
                        <p>{APPROVAL}</p>
                    </SectionBlock>

                    <div className="border-t border-gray-200 pt-6">
                        <Link
                            href="/sustainability"
                            className="font-plus-jakarta-sans text-sm font-medium text-[var(--button-red)] underline underline-offset-2 hover:opacity-75"
                        >
                            ← Back to Sustainability
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
