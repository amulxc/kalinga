import Link from "next/link";
import { notFound } from "next/navigation";
import {
    POLICY_PAGES,
    getPolicyBySlug,
} from "@/app/components/sustainability/data/policy-registry";
import { POLICY_CONTENT } from "@/app/components/sustainability/data/policy-content";

const SITE = "https://kalingauniversity.ac.in";

const HEADING_CLASSES = {
    1: "font-stix !text-xl md:!text-2xl font-semibold text-[var(--foreground)] pt-2",
    2: "font-plus-jakarta-sans text-base md:text-lg font-semibold text-[var(--foreground)] pt-1",
};

/** Renders a policy's content blocks in document order — headings, paragraphs,
 * lists and tables — the same plain, sequential way the source document reads.
 * No card grids or other layout beyond what the content itself calls for. */
function PolicyBlocks({ blocks }) {
    return (
        <div className="space-y-4">
            {blocks.map((block, index) => {
                const key = `${block.type}-${index}`;
                if (block.type === "heading") {
                    const Tag = block.level <= 1 ? "h3" : "h4";
                    return (
                        <Tag key={key} className={HEADING_CLASSES[block.level] || HEADING_CLASSES[2]}>
                            {block.text}
                        </Tag>
                    );
                }
                if (block.type === "paragraph") {
                    return <p key={key}>{block.text}</p>;
                }
                if (block.type === "list") {
                    return (
                        <ul key={key} className="space-y-2 pl-5 list-disc marker:text-[var(--button-red)]">
                            {block.items.map((item) => (
                                <li key={item.slice(0, 60)}>{item}</li>
                            ))}
                        </ul>
                    );
                }
                if (block.type === "table") {
                    const [header, ...rows] = block.rows;
                    return (
                        <div key={key} className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr>
                                        {header.map((cell, headerIndex) => (
                                            <th
                                                key={headerIndex}
                                                className="border border-gray-200 bg-gray-50 p-3 text-left font-semibold text-[var(--foreground)]"
                                            >
                                                {cell}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className="border border-gray-200 p-3 align-top">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

/**
 * One page per policy named in the Sustainability Policies table. The URLs are
 * fixed by the policy registry so they can be published and linked now; the
 * written policy is filled in per-slug in `policy-content.js` as each one is
 * approved.
 *
 * Until then the page states that the text is not published yet and is kept out
 * of search results, so a policy is never indexed as an empty page.
 */
export function generateStaticParams() {
    return POLICY_PAGES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const policy = getPolicyBySlug(slug);
    if (!policy) return {};

    const url = `${SITE}${policy.href}`;
    const content = POLICY_CONTENT[policy.slug];

    return {
        title: `${policy.name} | Kalinga University`,
        description:
            content?.summary ||
            `${policy.name} — a sustainability policy of Kalinga University, supporting ${policy.goals.join(" and ")}.`,
        alternates: { canonical: url },
        // A policy with no text yet is a placeholder, not a page worth indexing.
        robots: content ? undefined : { index: false, follow: true },
    };
}

export default async function SustainabilityPolicyPage({ params }) {
    const { slug } = await params;
    const policy = getPolicyBySlug(slug);
    if (!policy) notFound();

    const content = POLICY_CONTENT[policy.slug];
    const url = `${SITE}${policy.href}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${policy.name} - Kalinga University`,
        description: content?.summary || `${policy.name}, a sustainability policy of Kalinga University.`,
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Sustainability", item: `${SITE}/sustainability` },
                { "@type": "ListItem", position: 3, name: policy.name, item: url },
            ],
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* No min-h-screen here: the surrounding <main> already reserves a
                full viewport, and a short placeholder would otherwise stretch to
                a second one and leave a screen of white above the footer. */}
            <div className="bg-white pb-16">
                <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl space-y-10 md:space-y-12">
                    <header className="space-y-3 text-center">
                        <p className="font-plus-jakarta-sans text-sm font-semibold uppercase tracking-wide text-[var(--button-red)]">
                            {policy.goals.join(" · ")}
                        </p>
                        <h1 className="font-stix !text-2xl md:!text-4xl leading-tight text-[var(--foreground)]">
                            {policy.name}
                        </h1>
                        <span className="mx-auto block h-[3px] w-16 rounded-full bg-[var(--button-red)]" />
                    </header>

                    {content ? (
                        <div className="space-y-6">
                            {content.meta ? (
                                <div className="flex flex-wrap gap-x-6 gap-y-1 border-b border-gray-200 pb-4 text-sm text-[var(--text-gray-card)]">
                                    {content.meta.approved ? <span>Approved: {content.meta.approved}</span> : null}
                                    {content.meta.notification ? (
                                        <span>Notification: {content.meta.notification}</span>
                                    ) : null}
                                    {content.meta.nextReview ? <span>Next review: {content.meta.nextReview}</span> : null}
                                </div>
                            ) : null}
                            <PolicyBlocks blocks={content.blocks} />
                        </div>
                    ) : (
                        <div className="rounded-xl border-l-4 border-[var(--button-red)] bg-gray-50 p-5 md:p-6">
                            <p className="text-[var(--text-gray-card)]">
                                The full text of this policy is being prepared for publication and
                                will appear on this page once approved. For a copy in the meantime,
                                please contact the SDG Cell.
                            </p>
                        </div>
                    )}

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
