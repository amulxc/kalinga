import Link from "next/link";
import {
    ACCOUNTABILITY,
    APPROVAL,
    GUIDELINES,
    MENTOR_MENTEE_INTRO,
    MENTOR_MENTEE_POINTS,
    MONITORING_AND_REVIEW,
    OBJECTIVES,
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

const HEADING_CLASSES = {
    1: "font-stix !text-xl md:!text-2xl font-semibold text-[var(--foreground)] pt-2",
    2: "font-plus-jakarta-sans text-base md:text-lg font-semibold text-[var(--foreground)] pt-1",
};

/** A section heading styled the same way wherever it appears on this page. */
function SectionHeading({ level = 1, children }) {
    const Tag = level <= 1 ? "h3" : "h4";
    return <Tag className={HEADING_CLASSES[level] || HEADING_CLASSES[2]}>{children}</Tag>;
}

/** A bulleted or numbered list styled the same way wherever it appears on this page. */
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

            <div className="bg-white pb-16">
                <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl space-y-10 md:space-y-12">
                    <header className="space-y-3 text-center">
                        <h1 className="font-stix !text-3xl md:!text-5xl font-bold leading-tight text-[var(--foreground)]">
                            {TITLE}
                        </h1>
                        <span className="mx-auto block h-[3px] w-16 rounded-full bg-[var(--button-red)]" />
                    </header>

                    <div className="space-y-4">
                        <SectionHeading>1. Preamble</SectionHeading>
                        {PREAMBLE.map((paragraph) => (
                            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <SectionHeading>2. Principles</SectionHeading>
                        <p>The University shall be guided by the following principles:</p>
                        <div className="space-y-4">
                            {PRINCIPLES.map((principle) => (
                                <div key={principle.title}>
                                    <SectionHeading level={2}>{principle.title}</SectionHeading>
                                    <p className="mt-1">{principle.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <SectionHeading>3. Objectives</SectionHeading>
                        <p>The Policy aims to:</p>
                        <PolicyList items={OBJECTIVES} ordered />
                    </div>

                    <div className="space-y-4">
                        <SectionHeading>4. Guidelines</SectionHeading>
                        <div className="space-y-4">
                            {GUIDELINES.map((section, index) => (
                                <div key={section.title}>
                                    <SectionHeading level={2}>
                                        4.{index + 1} {section.title}
                                    </SectionHeading>
                                    {section.lead && <p className="mt-2">{section.lead}</p>}
                                    <div className="mt-2">
                                        <PolicyList items={section.points} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <SectionHeading>5. Mentor–Mentee Relationship</SectionHeading>
                        {MENTOR_MENTEE_INTRO.map((paragraph) => (
                            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                        <PolicyList items={MENTOR_MENTEE_POINTS} />
                    </div>

                    <div className="space-y-4">
                        <SectionHeading>6. Health, Wellness and Support Infrastructure</SectionHeading>
                        <div className="space-y-4">
                            {SUPPORT_FACILITIES.map((facility) => (
                                <div key={facility.title}>
                                    <SectionHeading level={2}>{facility.title}</SectionHeading>
                                    <p className="mt-1">{facility.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <SectionHeading>7. Monitoring and Review</SectionHeading>
                        <PolicyList items={MONITORING_AND_REVIEW} />
                    </div>

                    <div className="space-y-4">
                        <SectionHeading>8. Accountability and Transparency</SectionHeading>
                        <PolicyList items={ACCOUNTABILITY} />
                    </div>

                    <div className="space-y-4">
                        <SectionHeading>9. Approval and Implementation</SectionHeading>
                        <p>{APPROVAL}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <Link
                            href="/sustainability#sustainability-policies"
                            className="font-plus-jakarta-sans text-sm font-medium text-[var(--button-red)] underline underline-offset-2 hover:opacity-75"
                        >
                            ← Back to Sustainability Policies
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
