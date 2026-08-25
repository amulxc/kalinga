"use client";

import React from 'react';
import MainIntro from '../components/about/main_intro';
import { AccordionItem } from '../components/general/accordion';
import SectionHeading from '../components/general/SectionHeading';
import FAQ from '../components/general/faq';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';

const ICBTAISGConferencePage = () => {

    /* ---------------- SUB-THEMES / TRACKS ---------------- */
    const tracksLeft = [
        {
            title: "Track 1: Artificial Intelligence and Business Transformation",
            items: [
                "AI-driven Business Models",
                "Generative AI in Business",
                "Intelligent Automation and Robotics",
                "AI in Finance, Banking and Insurance",
                "AI-powered Marketing and Consumer Analytics",
                "Predictive Analytics and Decision Support Systems",
                "Industry 5.0 and Smart Manufacturing",
                "AI in Human Resource Management",
                "Blockchain, IoT and Emerging Technologies",
                "Digital Transformation Strategies"
            ]
        },
        {
            title: "Track 2: Sustainability and Green Business",
            items: [
                "Sustainable Business Practices",
                "ESG Reporting and Corporate Sustainability",
                "Circular Economy",
                "Green Finance and Sustainable Investments",
                "Renewable Energy and Clean Technologies",
                "Carbon Management and Climate Action",
                "Sustainable Supply Chain Management",
                "Sustainable Consumption and Production",
                "Waste Management and Resource Optimisation",
                "Sustainable Innovation"
            ]
        },
        {
            title: "Track 3: Inclusive Growth and Social Innovation",
            items: [
                "Financial Inclusion and Digital Finance",
                "Women Entrepreneurship and Leadership",
                "Inclusive Business Models",
                "Rural Development and Digital Inclusion",
                "Social Entrepreneurship",
                "MSMEs and Inclusive Economic Growth",
                "Skill Development for Future Workforce",
                "Diversity, Equity and Inclusion (DEI)",
                "Accessible Technologies",
                "Community Development through Innovation"
            ]
        }
    ];

    const tracksRight = [
        {
            title: "Track 4: Governance, Ethics and Public Policy",
            items: [
                "AI Ethics and Responsible Innovation",
                "Data Privacy and Cyber Security",
                "Corporate Governance in the Digital Era",
                "Regulatory Frameworks for AI",
                "Sustainable Public Policy",
                "Digital Governance",
                "Responsible Leadership",
                "Risk Management in AI-enabled Organisations",
                "Transparency and Accountability",
                "Global Governance and Sustainable Development Goals (SDGs)"
            ]
        },
        {
            title: "Track 5: Startup, Innovation and Entrepreneurship",
            items: [
                "Start-up Ecosystems",
                "Innovation Management",
                "Technology Entrepreneurship",
                "Digital Economy",
                "Gig Economy and Platform Business",
                "Workforce Transformation",
                "Future Skills and Talent Management",
                "AI-enabled Innovation",
                "Business Resilience",
                "Organisational Change Management"
            ]
        },
        {
            title: "Track 6: Emerging Research in Business and Management",
            items: [
                "Strategic Management",
                "Marketing Analytics",
                "Financial Technologies (FinTech)",
                "Behavioural Finance",
                "International Business",
                "Operations and Supply Chain Analytics",
                "Business Analytics",
                "Digital Commerce",
                "Knowledge Management",
                "Contemporary Issues in Commerce and Management"
            ]
        }
    ];

    /* ---------------- DATES & REGISTRATION TABLES ---------------- */
    const conferenceTableSections = [
        {
            id: "important-dates",
            title: "Important Dates",
            columns: [
                { key: "milestone", label: "Milestone", width: "flex-1" },
                { key: "date", label: "Date", width: "w-64" }
            ],
            data: [
                { milestone: "Abstract Submission", date: "31st October 2026" },
                { milestone: "Full Paper Submission", date: "30th November 2026" },
                { milestone: "Notification of Acceptance", date: "10th December 2026" },
                { milestone: "Camera-Ready Paper Submission", date: "31st December 2026" },
                { milestone: "Final Registration", date: "31st January 2027" },
                { milestone: "Conference Dates", date: "23rd - 24th February 2027" }
            ]
        },
        {
            id: "registration-fees",
            title: "Registration Fees",
            columns: [
                { key: "category", label: "Category", width: "flex-1" },
                { key: "fee", label: "Fees (Inclusive of Taxes)", width: "w-64" }
            ],
            data: [
                { category: "Industry Experts", fee: "INR 2,500/-" },
                { category: "Faculty & Other Educators", fee: "INR 2,000/-" },
                { category: "Research Scholars", fee: "INR 2,000/-" },
                { category: "UG+PG Students", fee: "INR 1,200/-" },
                { category: "International Participants", fee: "USD 50/-" },
                { category: "Attendees (India)", fee: "INR 800/-" },
                { category: "Attendees (Foreign)", fee: "USD 25/-" }
            ],
            footerContent: [
                "After the registration dates, extra charges apply: INR 250/- additional (International: USD 20/- additional).",
                "On-the-spot Registration: INR 500/- additional.",
                "All papers will be included in the conference proceedings with an ISBN (E-Book). Selected papers will be published in UGC / ABDC / Scopus-indexed journals and in a book, with APCs determined by the respective journals.",
                "Submission ID: <a href='mailto:kucm@kalingauniversity.ac.in'>kucm@kalingauniversity.ac.in</a>"
            ]
        }
    ];

    /* ---------------- COMMITTEES (card-display) ---------------- */
    const committeeSections = [
        {
            id: "convenor",
            title: "Convenor",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" }
            ],
            data: [
                { name: "Dr. Shrikrishna Dhale", designation: "Dean, Faculty of Commerce & Management" }
            ]
        },
        {
            id: "co-convenor",
            title: "Co-Convenor",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" }
            ],
            data: [
                { name: "Dr. Nishtha Sharma", designation: "HoD, Department of Management" }
            ]
        },
        {
            id: "conference-secretary",
            title: "Conference Secretary",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" }
            ],
            data: [
                { name: "Dr. Deepti Patnaik", designation: "Assistant Professor, Department of Management" }
            ]
        },
        {
            id: "contact-persons",
            title: "Contact Persons",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "contact", label: "Contact" }
            ],
            data: [
                { name: "Dr. Deepti Patnaik", designation: "Assistant Professor, Department of Management", contact: "+91-9439169041" },
                { name: "Dr. Roopam Jain Hazra", designation: "Assistant Professor, Faculty of Commerce & Management", contact: "+91-7024116975" },
                { name: "Dr. Jitendra Singh", designation: "Assistant Professor, Faculty of Commerce & Management", contact: "+91-7987187352" }
            ]
        },
        {
            id: "organising-committee",
            title: "Organising Committee",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" }
            ],
            data: [
                { name: "Dr. Shinki K. Pandey", designation: "Assistant Professor" },
                { name: "Dr. Mariyam Ahmed", designation: "Assistant Professor" },
                { name: "Dr. Jitendra Singh", designation: "Assistant Professor" },
                { name: "Dr. Divya Nandini Sharma", designation: "Assistant Professor" },
                { name: "Ms. Angel Mary Xess", designation: "Assistant Professor" },
                { name: "Ms. Dawakit Lepcha", designation: "Assistant Professor" },
                { name: "Dr. Chandra Bhooshan Singh", designation: "Assistant Professor" },
                { name: "Dr. Satvik Jain", designation: "Assistant Professor" },
                { name: "Mr. Abhishek Jaiswar", designation: "Assistant Professor" },
                { name: "Dr. Priyam Vishwakarma", designation: "Assistant Professor" },
                { name: "Ms. Shivangi Makade", designation: "Assistant Professor" },
                { name: "Mr. Rakshak Bharti", designation: "Assistant Professor" },
                { name: "Mr. Shubham Singh Chandel", designation: "Assistant Professor" }
            ]
        }
    ];

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="py-12 md:py-16 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h5 className="font-bold text-[var(--button-red)] titlecase tracking-[0.2em] text-sm md:text-base mb-2">
                        Faculty of Commerce and Management
                    </h5>
                    <p className="font-bold text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8">
                        ORGANISES
                    </p>
                    <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-gray-900 leading-tight mb-4 max-w-5xl mx-auto">
                        International Conference on Business Transformation in the Age of AI, Sustainability and Inclusive Growth
                    </h1>
                    <p className="font-stix text-lg md:text-2xl text-[var(--button-red)] mb-8">
                        (ICBTAISG - 2027)
                    </p>

                    {/* Event quick facts */}
                    <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5 max-w-2xl mx-auto">
                        <div className="flex-1 min-w-[200px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">🗓️</p>
                            <p className="font-semibold text-[var(--foreground)]">23rd - 24th February 2027</p>
                        </div>
                        <div className="flex-1 min-w-[200px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">📍</p>
                            <p className="font-semibold text-[var(--foreground)]">Kalinga University, Naya Raipur</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT THE FACULTY ================= */}
            <MainIntro
                title="About the Faculty of Commerce & Management"
                subtitle=""
                description={[
                    "The Faculty of Commerce and Management is committed to nurturing academic excellence and holistic professional development. It offers a dynamic blend of theoretical knowledge and practical exposure across disciplines such as finance, accounting, corporate law, human resource management, marketing, economics, organisational behaviour, and information technology. With a focus on experiential learning, the faculty integrates fieldwork, case studies, research projects, workshops, and industrial visits into its pedagogy.",
                    "Students are equipped with strong analytical and communication skills, ethical values, and an understanding of business and societal responsibilities. Through expert interactions, hands-on training, and interdisciplinary approaches, the faculty prepares students to thrive in competitive corporate environments and contribute meaningfully to sustainable development. The MBA program under the Faculty of Commerce & Management is NBA-accredited."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/Home/about-kalinga.webp"
                imageAlt="Faculty of Commerce and Management"
            />

            {/* ================= ABOUT CONFERENCE ================= */}
            <MainIntro
                title="About the Conference"
                subtitle=""
                description={[
                    "The global business environment is being reshaped by the convergence of Artificial Intelligence (AI), sustainability, and inclusive growth. Organisations must leverage AI-driven innovation while addressing ethical concerns, environmental responsibility, and social equity. As AI transforms industries through automation and intelligent decision-making, businesses also face challenges related to governance, workforce adaptation, and data privacy.",
                    "At the same time, sustainability has become a strategic priority, with organisations integrating ESG principles to address climate change and resource constraints. Inclusive growth further emphasises equitable opportunities, financial inclusion, diversity, digital accessibility, and community development. This conference aims to bring together academicians, researchers, policymakers, industry experts, entrepreneurs, and students to exchange ideas, present innovative research, and explore strategies for building resilient, sustainable, and inclusive businesses in an AI-driven economy."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="Business Transformation in the Age of AI"
                reverseLayout={true}
                sectionClassName="md:py-16 bg-[var(--lite-sand)] py-16 !pb-20"
            />

            {/* ================= SUB-THEMES ================= */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Sub-Themes"
                        titleClassName="text-center mb-4"
                    />
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 font-plus-jakarta-sans">
                        (including but not limited to)
                    </p>
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Left Column */}
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                {tracksLeft.map((track, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        title={track.title}
                                        titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                        bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                    >
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                            {track.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </AccordionItem>
                                ))}
                            </div>

                            {/* Right Column */}
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                {tracksRight.map((track, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        title={track.title}
                                        titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                        bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                    >
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                            {track.items.map((item, i) => (
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

            {/* ================= DATES & REGISTRATION ================= */}
            <FAQ
                id="conference-information"
                title="Important Dates & Registration"
                subtitle="Participate"
                variant="table-display"
                tableSections={conferenceTableSections}
                items={[]}
                pyClassName="py-12"
            />

            {/* ================= COMMITTEES ================= */}
            <FAQ
                id="committee-members"
                title="Conference Committee"
                subtitle="Committees"
                variant="card-display"
                tableSections={committeeSections}
                items={[]}
                pyClassName="py-8 md:py-12"
            />

            {/* ================= CONTACT ================= */}
            <OrganogramOfKalinga
                title="Contact Us"
                description={`<strong>For paper submission and queries,</strong><br/>📩 kucm@kalingauniversity.ac.in`}
                buttons={[
                    {
                        text: "Send Email",
                        link: "mailto:kucm@kalingauniversity.ac.in",
                        id: 2
                    }
                ]}
                useContainer={true}
            />

            {/* ================= DOWNLOAD BROCHURE ================= */}
            <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10 mb-6">
                <div className="rounded-2xl bg-[var(--lite-sand)] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)]">
                            ICBTAISG - 2027 <br />
                            International Conference — Faculty of Commerce &amp; Management
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Explore the Conference Brochure
                        </p>
                    </div>

                    <a
                        href="/brochure/icbtaisg-2027.pdf"
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

export default ICBTAISGConferencePage;
