"use client";

import React from 'react';
import MainIntro from '../components/about/main_intro';
import ImageContent from '../components/ccrc/imagecontent';
import { AccordionItem } from '../components/general/accordion';
import SectionHeading from '../components/general/SectionHeading';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';

const SciSustainConferencePage = () => {

    // Why Participate list
    const whyParticipateItems = [
        { id: 1, text: "Present your latest research before an international audience." },
        { id: 2, text: "Network with leading researchers, academicians, industries, and policymakers." },
        { id: 3, text: "Learn emerging AI applications across scientific disciplines." },
        { id: 4, text: "Explore collaborative research and funded project opportunities." },
        { id: 5, text: "Publish in ISBN Conference Proceedings." },
        { id: 6, text: "Selected papers recommended for publication in UGC-CARE Listed and Scopus-indexed Journals (as per journal policies)." },
        { id: 7, text: "Young Researcher Award." },
        { id: 8, text: "Best Oral and Poster Presentation Awards." }
    ];

    // Who Should Attend list
    const whoShouldAttendItems = [
        { id: 1, text: "Faculty Members" },
        { id: 2, text: "Scientists" },
        { id: 3, text: "Research Scholars" },
        { id: 4, text: "Industry Professionals" },
        { id: 5, text: "Policy Makers" },
        { id: 6, text: "Entrepreneurs" },
        { id: 7, text: "UG & PG Students" },
        { id: 8, text: "Innovation Startups" }
    ];

    // Conference themes (grouped) rendered as accordions
    const themeGroupsLeft = [
        {
            title: "AI for Scientific Discovery",
            items: [
                "AI-driven Scientific Research",
                "Machine Learning for Sustainable Systems",
                "Deep Learning Applications",
                "Intelligent Decision Support Systems",
                "Responsible and Ethical AI"
            ]
        },
        {
            title: "Mathematical & Computational Sciences",
            items: [
                "Mathematical Modelling",
                "Computational Simulation",
                "Data Analytics",
                "Optimization",
                "Scientific Computing"
            ]
        },
        {
            title: "Sustainable Materials",
            items: [
                "Green Materials",
                "Functional Nanomaterials",
                "Energy Storage",
                "Smart Materials",
                "Biomaterials"
            ]
        }
    ];

    const themeGroupsRight = [
        {
            title: "Life Sciences & Biotechnology",
            items: [
                "Bioinformatics",
                "Precision Medicine",
                "Environmental Biology",
                "Sustainable Agriculture",
                "Industrial Biotechnology"
            ]
        },
        {
            title: "Forensic & Digital Sciences",
            items: [
                "Digital Forensics",
                "Cybersecurity",
                "AI in Crime Investigation",
                "DNA Technologies",
                "Evidence Analytics"
            ]
        },
        {
            title: "Emerging Technologies",
            items: [
                "Renewable Energy",
                "Smart Infrastructure",
                "IoT",
                "Industry 4.0",
                "Circular Economy"
            ]
        }
    ];

    // Important dates & registration fee (table sections for FAQ table-display)
    const registrationTableSections = [
        {
            id: "important-dates",
            title: "Important Dates",
            columns: [
                { key: "activity", label: "Activity", width: "flex-1" },
                { key: "date", label: "Date", width: "w-56" }
            ],
            data: [
                { activity: "Abstract Submission", date: "15th October 2026" },
                { activity: "Full Paper Submission", date: "30th November 2026" },
                { activity: "Acceptance Notification", date: "15th December 2026" },
                { activity: "Early Bird Registration", date: "31st December 2026" },
                { activity: "Conference Dates", date: "19th & 20th January 2027" }
            ]
        },
        {
            id: "registration-fee",
            title: "Registration Fee",
            columns: [
                { key: "category", label: "Category", width: "flex-1" },
                { key: "fee", label: "Fee", width: "w-48" }
            ],
            data: [
                { category: "Faculty & Academicians", fee: "INR 2,000/-" },
                { category: "Research Scholars", fee: "INR 2,000/-" },
                { category: "UG/PG Students", fee: "INR 1,200/-" },
                { category: "Industry Delegates", fee: "INR 3,000/-" },
                { category: "International Participants", fee: "USD 75/-" }
            ],
            footerContent: [
                "50% Registration Fee Concession for Kalinga University and MoU Institutions.",
                "10% Group Registration Discount (50 or more participants)."
            ]
        }
    ];

    // Additional registration/participation details (regular FAQ items)
    const registrationInfoItems = [
        {
            id: "special-benefits",
            question: "Special Benefits",
            answer: [
                "50% Registration Fee Concession for Kalinga University and MoU Institutions",
                "10% Group Registration Discount (50 or more participants)",
                "Conference Kit",
                "Participation Certificate",
                "Technical Sessions",
                "Lunch & Refreshments",
                "E-Proceedings",
                "Accommodation (on request)"
            ]
        },
        {
            id: "publication-opportunities",
            question: "Publication Opportunities",
            answer: [
                "ISBN Conference Proceedings",
                "Selected papers recommended for publication in UGC-CARE Listed Journals",
                "Selected papers recommended for Scopus-indexed Journals (as per journal policies)"
            ]
        },
        {
            id: "presentation-categories",
            question: "Presentation Categories",
            answer: [
                "Oral Presentation",
                "Poster Presentation",
                "Young Researcher Award"
            ]
        }
    ];

    // Contacts (card-display)
    const contactSections = [
        {
            id: "convenors",
            title: "Convenors",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" }
            ],
            data: [
                { name: "Dr. Shilpi Shrivastava", designation: "Head, Department of Chemistry" },
                { name: "Dr. Deepa Biswas", designation: "Head, Department of Botany" },
                { name: "Dr. Aloke Verma", designation: "Head, Department of Physics" }
            ]
        },
        {
            id: "coordinators",
            title: "Coordinators",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "contact", label: "Contact" }
            ],
            data: [
                { name: "Dr. Gopeshwar Dhar Dwivedi", designation: "Associate Professor, Department of Physics", contact: "+91-9839262728" },
                { name: "Dr. Priyanka Gupta", designation: "Assistant Professor, Department of Chemistry", contact: "+91-9669000252" },
                { name: "Ms. Abhismita Roy", designation: "Associate Professor, Department of Botany", contact: "+91-7209292182" }
            ]
        }
    ];

    return (
        <>
            {/* Hero */}
            <section className="py-12 md:py-16 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h5 className="font-bold text-[var(--button-red)] titlecase tracking-[0.2em] text-sm md:text-base mb-2">
                        FACULTY OF SCIENCE
                    </h5>
                    <p className="font-bold text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8">
                        ORGANISES
                    </p>
                    <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4">
                        SciSustain 2027
                    </h1>
                    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800 leading-tight mb-6 titlecase max-w-4xl mx-auto">
                        International Conference on AI-Driven Scientific Innovations for Sustainable Development Goals
                    </h2>
                    <p className="font-stix text-lg md:text-2xl text-[var(--button-red)] italic max-w-3xl mx-auto mb-10">
                        “Innovating With Artificial Intelligence For A Sustainable Tomorrow”
                    </p>

                    {/* Event quick facts */}
                    <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5 max-w-5xl mx-auto">
                        <div className="flex-1 min-w-[150px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">🗓️</p>
                            <p className="font-semibold text-[var(--foreground)]">19th &amp; 20th January 2027</p>
                        </div>
                        <div className="flex-1 min-w-[150px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">🕓</p>
                            <p className="font-semibold text-[var(--foreground)]">10:00 A.M. to 04:00 P.M.</p>
                        </div>
                        <div className="flex-1 min-w-[150px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">📍</p>
                            <p className="font-semibold text-[var(--foreground)]">Campus, Kalinga University</p>
                        </div>
                        <div className="flex-1 min-w-[150px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">💻</p>
                            <p className="font-semibold text-[var(--foreground)]">Mode: Hybrid</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the conference */}
            <MainIntro
                title="Empowering Science Through Artificial Intelligence For A Sustainable Future"
                subtitle=""
                description={[
                    "Artificial Intelligence is rapidly transforming scientific discovery, innovation, and sustainable development across disciplines. SciSustain 2027 provides an international platform where researchers, academicians, scientists, industry experts, innovators, policymakers, and students converge to explore AI-enabled scientific solutions that address global sustainability challenges and align with the United Nations Sustainable Development Goals (SDGs).",
                    "The conference promotes interdisciplinary collaboration by integrating Artificial Intelligence with Materials Science, Mathematical Sciences, Life Sciences, Forensic Science, Environmental Sciences, Engineering, and Emerging Technologies."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="SciSustain 2027 - AI for Sustainable Science"
            />

            {/* Why Participate */}
            <ImageListItem
                items={whyParticipateItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-green-campus/sdg-images-1.webp"
                title="Why Participate?"
                subtitle=""
                description="Be a part of a global platform for AI-driven scientific innovation:"
            />

            {/* Conference Themes */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Conference Themes"
                        titleClassName="text-center mb-12"
                    />
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Left Column */}
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                {themeGroupsLeft.map((group, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        title={group.title}
                                        titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                        bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                    >
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                            {group.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </AccordionItem>
                                ))}
                            </div>

                            {/* Right Column */}
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                {themeGroupsRight.map((group, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        title={group.title}
                                        titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                        bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                    >
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                            {group.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </AccordionItem>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call For Papers */}
            <ImageContent
                hasImage={true}
                readmore={false}
                className="items-center justify-center my-8 md:my-12 [&_img]:!w-[100px] [&_img]:!h-auto md:[&>img]:order-last md:[&>div]:order-first"
                title="Call For Papers & Registration"
                subtitleclassName="hidden"
                imageSrc="https://cdn.kalingauniversity.ac.in/law-conference/document.svg"
                imageWidth={100}
                imageHeight={100}
                description="SciSustain 2027, organised by the Faculty of Science, Kalinga University, invites original research contributions across all conference themes. Selected papers will be published in ISBN Conference Proceedings, with recommendations for UGC-CARE Listed and Scopus-indexed Journals (as per journal policies)."
            />

            {/* Who Should Attend */}
            <ImageListItem
                items={whoShouldAttendItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                title="Who Should Attend?"
                subtitle=""
                description="This conference welcomes participation from:"
                reverseLayout={true}
            />

            {/* Important Dates, Registration Fee & Details */}
            <FAQ
                id="registration-details"
                title="Call For Papers & Registration"
                subtitle="Dates & Fees"
                variant="table-display"
                tableSections={registrationTableSections}
                items={registrationInfoItems}
                pyClassName="py-12"
            />

            {/* Contacts */}
            <FAQ
                id="conference-contacts"
                title="Contacts"
                subtitle="Reach Out To Us"
                variant="card-display"
                tableSections={contactSections}
                items={[]}
                pyClassName="py-8 md:py-12"
            />

            {/* Contact CTA */}
            <OrganogramOfKalinga
                title="Contact Us"
                description={`<strong>For more queries, reach out to the conference coordinators.</strong><br/>📩 scisustain2027@kalingauniversity.ac.in`}
                buttons={[
                    {
                        text: "Send Email",
                        link: "mailto:scisustain2027@kalingauniversity.ac.in",
                        id: 2
                    }
                ]}
                useContainer={true}
            />

            {/* Download Brochure */}
            <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10 mb-6">
                <div className="rounded-2xl bg-[var(--lite-sand)] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)]">
                            SciSustain 2027 <br />
                            International Conference on AI-Driven Scientific Innovations
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Explore the Conference Brochure
                        </p>
                    </div>

                    <a
                        href="https://cdn.kalingauniversity.ac.in/conferences/Scisustain/SciSustain-2026-27.pdf"
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[var(--button-red)] px-5 py-3 text-white font-semibold hover:opacity-90 transition"
                    >
                        Download Brochure
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 3v10m0 0l4-4m-4 4l-4-4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4 17v3h16v-3"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default SciSustainConferencePage;
