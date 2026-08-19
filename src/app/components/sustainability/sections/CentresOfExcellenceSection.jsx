import Image from "next/image";
import Link from "next/link";
import SectionBlock from "../SectionBlock";
import {
    COE_CENTRES,
    COE_INTRO,
    COE_MISSION,
    COE_OBJECTIVES,
    COE_VISION,
} from "../data/coe-content";

/**
 * Centres of Excellence that carry the University's sustainability agenda into
 * industry-facing training and research.
 */
export default function CentresOfExcellenceSection() {
    return (
        <SectionBlock id="centres-of-excellence" title="Our Centres of Excellence (CoE)">
            {COE_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <article className="rounded-xl bg-[var(--dark-blue)] p-6 text-white">
                    <h3 className="font-stix !text-xl !leading-snug mb-3">Vision</h3>
                    <p className="text-white/90">{COE_VISION}</p>
                </article>

                <article className="rounded-xl bg-[var(--card-sandal)] p-6">
                    <h3 className="font-stix !text-xl !leading-snug mb-3 text-[var(--button-red)]">
                        Mission
                    </h3>
                    <ul className="list-disc space-y-2 pl-5 text-[var(--text-gray-card)]">
                        {COE_MISSION.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>
            </div>

            <h3 className="pt-2 font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]">
                Objectives
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {COE_OBJECTIVES.map((objective) => (
                    <li
                        key={objective}
                        className="rounded-xl border border-gray-200 px-4 py-3"
                    >
                        {objective}
                    </li>
                ))}
            </ul>

            <h3 className="pt-2 font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]">
                Centres of Excellence Established at Kalinga University
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {COE_CENTRES.map((centre) => (
                    <Link
                        key={centre.id}
                        href={centre.href}
                        prefetch={false}
                        className="flex h-full flex-col rounded-xl bg-[var(--lite-sand)] p-4 transition-transform duration-300 hover:-translate-y-1"
                    >
                        <div className="flex h-[140px] items-center justify-center rounded-lg bg-white p-4">
                            <Image
                                src={centre.image}
                                alt={centre.name}
                                width={220}
                                height={120}
                                className="max-h-[100px] w-auto object-contain"
                            />
                        </div>
                        <p className="mt-4 font-plus-jakarta-sans font-semibold text-[var(--foreground)]">
                            {centre.name}
                        </p>
                        <p className="mt-1 text-[var(--text-gray-card)]">{centre.title}</p>
                    </Link>
                ))}
            </div>
        </SectionBlock>
    );
}
