import Link from "next/link";
import MainIntro from "../about/main_intro";
import SectionHeading from "../general/SectionHeading";
import { SDG_GOAL_REPORTS, SDG_GOAL_DEFINITIONS } from "./data/sdg-content";

import ReportTable, { ReportText } from "./SdgReportTable";

function ReportBlocks({ blocks }) {
    // Keep consecutive evidence photographs and list items together.
    const groups = [];
    for (const block of blocks) {
        const previous = groups.at(-1);
        if ((block.type === "image" || block.type === "listItem") && previous?.type === block.type) {
            previous.items.push(block);
        } else {
            groups.push({ type: block.type, items: [block] });
        }
    }

    return <div className="space-y-5 leading-relaxed text-[var(--foreground)]">
        {groups.map((group, index) => {
            const block = group.items[0];
            if (group.type === "image") return (
                <div key={index} className={`grid gap-5 ${group.items.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                    {group.items.map((image, imageIndex) => (
                        <a key={imageIndex} href={image.src} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-gray-100 bg-white p-2 focus-visible:outline-2 focus-visible:outline-[var(--button-red)]" aria-label={`${image.alt} ${imageIndex + 1} (open full image)`}>
                            {/* Evidence scans retain their original dimensions and are loaded on demand. */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="mx-auto h-auto max-h-[700px] w-full object-contain" />
                        </a>
                    ))}
                </div>
            );
            if (group.type === "listItem") return <ul key={index} className="list-disc space-y-2 pl-6">{group.items.map((item, itemIndex) => <li key={itemIndex}><ReportText text={item.text} /></li>)}</ul>;
            if (group.type === "heading") return <h3 key={index} className="pt-4 font-plus-jakarta-sans text-lg font-semibold text-[var(--button-red)]">{block.text}</h3>;
            if (group.type === "table") return <ReportTable key={index} block={block} />;
            if (group.type === "links") return <ul key={index} className="space-y-2">{block.items.map((item, itemIndex) => <li key={itemIndex}><a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[var(--button-red)] underline break-words">{item.label}</a></li>)}</ul>;
            return <p key={index}><ReportText text={block.text} /></p>;
        })}
    </div>;
}

export default function SdgReportPage({ report }) {
    const description = report.intro.filter(block => block.type === "paragraph").map(block => block.text);
    const relatedReports = Object.entries(SDG_GOAL_REPORTS).filter(([number]) => Number(number) !== report.number);

    return (
        <>
            <MainIntro
                title={`SDG ${report.number}: ${report.title} Report`}
                description={description}
                imageUrl={`https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-logo/E-WEB-Goal-${String(report.number).padStart(2, "0")}.png`}
                imageAlt={`SDG ${report.number}: ${report.title}`}
                imageObjectFit="contain"
                disableClipPath={false}
                applyTransform3dSlant={false}
                initialVisibleParagraphs={1}
                knowMoreLabel="View Full Report"
                knowMoreHref={report.sourceUrl}
                sectionClassName="bg-white"
            />

            {report.introEvidence?.length > 0 && (
                <section className="container mx-auto px-4 py-10" aria-label="Report overview evidence">
                    <ReportBlocks blocks={report.introEvidence} />
                </section>
            )}

            <section className="container mx-auto px-4 py-10" aria-label={`SDG ${report.number} dashboard`}>
                <SectionHeading title={`Dashboard Regarding SDG ${report.number}`} titleClassName="text-center" />
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {report.dashboard.map(stat => (
                        <div key={stat.label} className="rounded-xl bg-[var(--lite-sand)] p-5 text-center">
                            <p className={stat.value.length < 30 ? "font-stix text-3xl text-[var(--button-red)] md:text-4xl" : "text-sm leading-relaxed text-[var(--foreground)]"}>{stat.value}</p>
                            <p className="mt-2 text-sm font-medium text-[var(--foreground)]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-10" aria-label="Report highlights">
                <SectionHeading title="Report Highlights" titleClassName="text-center" />
                <div className="mt-8 space-y-4">
                    {report.sections.map((section, index) => (
                        <details key={section.title} open={index === 0} className="group rounded-xl border border-gray-200 bg-white open:border-[var(--button-red)]">
                            <summary className="cursor-pointer rounded-xl bg-[var(--light-gray)] p-5 font-plus-jakarta-sans text-base font-semibold text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-[var(--button-red)] md:text-lg">{section.title}</summary>
                            <div className="min-w-0 p-4 md:p-6"><ReportBlocks blocks={section.blocks} /></div>
                        </details>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-10" aria-label="Related sustainability reports">
                <SectionHeading title="Related Pages" titleClassName="text-center" />
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Link href="/sustainability#sustainable-development-goals" className="rounded-xl bg-[var(--dark-blue)] p-6 font-semibold text-white hover:underline">All Sustainable Development Goals</Link>
                    {relatedReports.map(([number, href]) => <Link key={number} href={href} className="rounded-xl border border-gray-200 p-6 text-[var(--button-red)] hover:underline">SDG {number}: {SDG_GOAL_DEFINITIONS[Number(number) - 1].title}</Link>)}
                </div>
            </section>
        </>
    );
}
