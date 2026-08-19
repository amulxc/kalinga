"use client";

import { useState } from "react";
import Image from "next/image";
import SectionBlock from "../SectionBlock";
import DocumentLinks from "../DocumentLinks";
import { STUDENT_CLUBS } from "../data/clubs-content";

/**
 * Student-led clubs and societies that carry the SDG agenda on campus.
 * Each club exposes its charter documents, activity reports and photo gallery.
 */
export default function StudentEngagementSection() {
    const [activeClub, setActiveClub] = useState(STUDENT_CLUBS[0]?.value);

    const club = STUDENT_CLUBS.find((item) => item.value === activeClub) || STUDENT_CLUBS[0];

    return (
        <SectionBlock id="student-engagement" title="Student Engagement: Clubs and Societies">
            {/* Club switcher */}
            <div className="flex flex-col sm:flex-row gap-3">
                {STUDENT_CLUBS.map((item) => {
                    const isActive = item.value === club.value;
                    return (
                        <button
                            key={item.value}
                            type="button"
                            onClick={() => setActiveClub(item.value)}
                            className={`flex-1 rounded-lg border px-4 py-3 font-plus-jakarta-sans text-sm font-semibold transition-colors cursor-pointer ${isActive
                                    ? "border-[var(--button-red)] bg-[var(--button-red)] text-white"
                                    : "border-gray-200 bg-white text-[var(--foreground)] hover:border-[var(--button-red)]"
                                }`}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>

            {/* Overview */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                <div className="md:col-span-8 space-y-3">
                    <h3 className="font-stix !text-xl md:!text-[22px] !leading-snug text-[var(--foreground)]">
                        {club.title}
                    </h3>
                    <p className="font-plus-jakarta-sans font-medium text-[var(--button-red)]">
                        {club.sdgTags}
                    </p>
                    {club.description.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                </div>

                <div className="md:col-span-4 flex justify-center">
                    <Image
                        src={club.image}
                        alt={club.title}
                        width={300}
                        height={300}
                        className="w-40 md:w-full max-w-[220px] h-auto object-contain"
                    />
                </div>
            </div>

            {/* Objectives */}
            <h4 className="pt-2 font-stix !text-lg text-[var(--foreground)]">Objectives</h4>
            <p>{club.objectivesIntro}</p>
            <div className="space-y-3">
                {club.objectives.map((group, index) => (
                    <div
                        key={group.title || `objectives-${index}`}
                        className="rounded-xl bg-gray-50 p-5"
                    >
                        {group.title && (
                            <p className="font-semibold text-[var(--foreground)]">
                                {index + 1}. {group.title}
                            </p>
                        )}
                        <ul className="list-disc space-y-1 pl-5 mt-2">
                            {group.points.map((point) => (
                                <li key={point.slice(0, 40)}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Constitution + office order */}
            <DocumentLinks documents={club.documents} columns={2} className="pt-2" />

            {/* Activity reports */}
            <h4 className="pt-2 font-stix !text-lg text-[var(--foreground)]">
                Events and Activities
            </h4>
            <DocumentLinks documents={club.events} columns={2} />

            {/* Glimpses */}
            <h4 className="pt-2 font-stix !text-lg text-[var(--foreground)]">Glimpses</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {club.gallery.map((item) => (
                    <div
                        key={item.id}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100"
                    >
                        <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, 260px"
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </SectionBlock>
    );
}
