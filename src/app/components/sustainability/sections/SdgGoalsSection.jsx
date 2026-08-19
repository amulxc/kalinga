import SectionBlock from "../SectionBlock";
import { SDG_GOAL_TILES } from "../data/sdg-content";

const TILE_CLASSES =
    "group relative block rounded-2xl overflow-hidden bg-white shadow-sm p-2 aspect-square flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md";

/**
 * The 17 UN goals. Goals with a published report become clickable and reveal a
 * "View Report" ribbon on hover.
 */
export default function SdgGoalsSection() {
    return (
        <SectionBlock id="sustainable-development-goals" title="Sustainable Development Goals">
            <p>
                Kalinga University’s initiatives aligned with the United Nations Sustainable
                Development Goals. Select a goal to open its report.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {SDG_GOAL_TILES.map((goal) => {
                    const tile = (
                        <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={goal.src}
                                alt={goal.alt}
                                loading="lazy"
                                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            {goal.reportUrl && (
                                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-[var(--button-red)] py-1.5 text-center text-xs font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">
                                    View Report
                                </span>
                            )}
                        </>
                    );

                    return goal.reportUrl ? (
                        <a
                            key={goal.id}
                            href={goal.reportUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${goal.alt} - View Report`}
                            className={`${TILE_CLASSES} cursor-pointer`}
                        >
                            {tile}
                        </a>
                    ) : (
                        <div key={goal.id} className={TILE_CLASSES}>
                            {tile}
                        </div>
                    );
                })}
            </div>
        </SectionBlock>
    );
}
