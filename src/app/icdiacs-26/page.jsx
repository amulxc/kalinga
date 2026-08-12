"use client";

import React from 'react';
import MainIntro from '../components/about/main_intro';
import ImageContent from '../components/ccrc/imagecontent';
import { AccordionItem } from '../components/general/accordion';
import SectionHeading from '../components/general/SectionHeading';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import QuickLinks from '../components/general/quick_links';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';
import PublicationGrid from '../components/research/publication-grid';

const ICDIACSConferencePage = () => {

    /* ---------------- WHY SDG 9 ---------------- */
    const whySdg9Items = [
        { id: 1, text: "It promotes innovation, advanced technologies, and sustainable industrial growth through intelligent computing systems." },
        { id: 2, text: "AI, Cybersecurity, and next-generation computing are critical to building resilient digital infrastructure and secure industrial ecosystems." },
        { id: 3, text: "Emerging technologies such as AI, cloud computing, edge computing, IoT, and cybersecurity are transforming industries and enabling sustainable development." }
    ];

    /* ---------------- RELATED SDGs ---------------- */
    const relatedSdgItems = [
        {
            id: 1,
            title: "SDG 4: Quality Education",
            description: "AI-driven learning systems, smart education platforms, and digital learning environments enhance accessibility and quality in education."
        },
        {
            id: 2,
            title: "SDG 11: Sustainable Cities and Communities",
            description: "Intelligent computing and cybersecurity support sustainable urban planning, smart transportation, energy optimization, and public safety."
        },
        {
            id: 3,
            title: "SDG 12: Responsible Consumption and Production",
            description: "AI and data analytics help optimize resources, reduce waste, and improve sustainable industrial practices."
        },
        {
            id: 4,
            title: "SDG 13: Climate Action",
            description: "Machine learning models assist in climate prediction, environmental monitoring and sustainable resource management."
        },
        {
            id: 5,
            title: "SDG 17: Partnerships for the Goals",
            description: "The conference encourages global research collaboration among academia, industry, and government for sustainable technological advancement."
        }
    ];

    /* ---------------- UNIVERSITY STATS ---------------- */
    const universityStats = [
        { id: 1, title: 'Students', value: '8000+', description: 'Learners across diverse disciplines.' },
        { id: 2, title: 'International Students', value: '600+', description: 'From 33 countries.' },
        { id: 3, title: 'Scholarships Distributed', value: 'INR 3 Cr+', description: 'Enabling access and excellence.' },
        { id: 4, title: 'Programs', value: '130+', description: 'Undergraduate, postgraduate, and doctoral.' },
        { id: 5, title: 'Recruitment Partners', value: '400+', description: 'Leading organizations and firms.' },
        { id: 6, title: 'Research Publications', value: '7200+', description: 'Peer-reviewed contributions.' },
        { id: 7, title: 'Patents', value: '562+', description: 'Innovations protected.' },
        { id: 8, title: 'Books/Book Chapters', value: '4263+', description: 'Scholarly authorship and contributions.' },
        { id: 9, title: 'Startups', value: '9', description: 'Nurtured through the incubation ecosystem.' },
        { id: 10, title: 'MoUs Signed', value: '200+', description: 'Strategic academic collaborations.' },
        { id: 11, title: 'Centres of Excellence', value: '8', description: 'Specialized research and innovation hubs.' },
        { id: 12, title: 'Laboratories', value: '100+', description: 'State-of-the-art lab facilities.' }
    ];

    /* ---------------- OBJECTIVES OF NEW RAIPUR ---------------- */
    const newRaipurObjectives = [
        { id: 1, text: "To become a hub of the manufacturing, information technology, and biotechnology sectors." },
        { id: 2, text: "To become the financial centre of the region." },
        { id: 3, text: "To become a centre of trade and businesses." },
        { id: 4, text: "To support the local economy through cultural services." },
        { id: 5, text: "To become a place for affordable and high-quality medical services." },
        { id: 6, text: "To become a hub of National and International educational institutions." },
        { id: 7, text: "To develop sustainable and eco-friendly infrastructure." }
    ];

    /* ---------------- KEY OBJECTIVES ---------------- */
    const keyObjectives = [
        {
            id: 1,
            title: "1. Promote Advanced Research and Innovation",
            description: "To provide a global platform for presenting innovative research in Artificial Intelligence, Cybersecurity, and Digital Intelligence Technologies."
        },
        {
            id: 2,
            title: "2. Encourage Interdisciplinary Collaboration",
            description: "To strengthen collaboration among researchers, academicians, industry experts, and policymakers for knowledge sharing and technological advancement."
        },
        {
            id: 3,
            title: "3. Support Sustainable Development Goals (SDGs)",
            description: "To explore smart and sustainable technological solutions aligned with SDG 9: Industry, Innovation and Infrastructure and related SDGs."
        },
        {
            id: 4,
            title: "4. Discuss Emerging Technologies and Challenges",
            description: "To examine recent trends, challenges, and future opportunities in intelligent systems, cybersecurity, cloud computing, IoT, and digital transformation."
        },
        {
            id: 5,
            title: "5. Bridge Academia and Industry",
            description: "To create opportunities for industry-academia partnerships, practical applications, and real-world problem-solving using advanced computing and cybersecurity technologies."
        }
    ];

    /* ---------------- CONFERENCE TRACKS ---------------- */
    const conferenceTracks = [
        {
            title: "Track 1: Artificial Intelligence and Machine Learning",
            items: [
                "Supervised, Unsupervised, and Reinforcement Learning Techniques",
                "Deep Learning and Neural Networks",
                "Natural Language Processing and Large Language Models",
                "Computer Vision and Image Recognition",
                "Explainable and Responsible AI",
                "AI-driven Decision Support Systems"
            ]
        },
        {
            title: "Track 2: Cybersecurity and Digital Forensics",
            items: [
                "Network Security and Intrusion Detection Systems",
                "Blockchain and Secure Computing",
                "Digital Forensics and Privacy Preservation",
                "Cryptography and Secure Data Communication",
                "Cyber Threat Intelligence and Incident Response",
                "Ethical Hacking and Vulnerability Assessment"
            ]
        },
        {
            title: "Track 3: Computing Architectures and Intelligent Systems",
            items: [
                "Cloud, Edge, and Fog Computing",
                "High-Performance and Parallel Computing",
                "Quantum Computing and Advanced Architectures",
                "Distributed Computing Systems",
                "Green and Sustainable Computing",
                "Virtualization and Modern Computing Environments"
            ]
        },
        {
            title: "Track 4: Data Science and Predictive Analytics",
            items: [
                "Big Data Analytics and Visualization",
                "Predictive Modelling and Forecasting",
                "Statistical Learning and Data Mining",
                "Business Intelligence and Smart Analytics",
                "AI in Scientific Research and Data Analysis",
                "Data-driven Sustainable Solutions"
            ]
        },
        {
            title: "Track 5: Internet of Things (IoT) and Smart Systems",
            items: [
                "Smart Sensors and Embedded Systems",
                "IoT-enabled Smart Cities and Infrastructure",
                "Intelligent Transportation Systems",
                "Smart Agriculture and Environmental Monitoring",
                "Industrial IoT and Automation",
                "Cyber-Physical Systems"
            ]
        },
        {
            title: "Track 6: Sustainable Technologies and Digital Transformation",
            items: [
                "Renewable Energy and Smart Energy Systems",
                "Sustainable Manufacturing and Industry 4.0",
                "AI for Climate Change and Environmental Sustainability",
                "Digital Transformation in Industry and Education",
                "Intelligent Healthcare and Biomedical Applications",
                "Smart and Sustainable Infrastructure Systems"
            ]
        }
    ];

    /* ---------------- DATES / REGISTRATION / SPONSORSHIP TABLES ---------------- */
    const conferenceTableSections = [
        {
            id: "important-dates",
            title: "Important Dates",
            columns: [
                { key: "milestone", label: "Milestone", width: "flex-1" },
                { key: "date", label: "Date", width: "w-64" }
            ],
            data: [
                { milestone: "Abstract Submission Deadline", date: "15th August 2026" },
                { milestone: "Full Paper Submission Deadline", date: "31st August 2026" },
                { milestone: "Notification of Acceptance", date: "10th September 2026" },
                { milestone: "Conference Dates", date: "27th & 28th October 2026" },
                { milestone: "Email ID for Paper Submission", date: "icstdtsd@kalingauniversity.ac.in" }
            ]
        },
        {
            id: "registration-details",
            title: "Registration Details",
            columns: [
                { key: "category", label: "Category", width: "flex-1" },
                { key: "fee", label: "Fee", width: "w-64" }
            ],
            data: [
                { category: "Faculty / Researchers", fee: "INR 2,000/-" },
                { category: "UG/PG Students", fee: "INR 1,200/-" },
                { category: "Industry Experts", fee: "INR 2,500/-" },
                { category: "International Participants", fee: "USD 50/-" },
                { category: "Late Fee", fee: "Additional INR 250/- | USD 20/-" },
                { category: "On-the-Spot Registration", fee: "INR 500/- extra" }
            ]
        },
        {
            id: "sponsorship-opportunities",
            title: "Sponsorship Opportunities",
            columns: [
                { key: "slNo", label: "S.No.", width: "w-16" },
                { key: "category", label: "Category", width: "w-48" },
                { key: "amount", label: "Amount (INR)", width: "w-40" },
                { key: "benefits", label: "Benefits", width: "flex-1" }
            ],
            data: [
                {
                    slNo: 1,
                    category: "Platinum Sponsorship",
                    amount: "1,00,000/-",
                    benefits: "5 Delegate Passes • 4 Standee Displays • 5-min Address • Product Display Space • Logo on All Materials • 4 Full-Page Ads in Proceedings • Promotional Video • Conference Kit & Memento"
                },
                {
                    slNo: 2,
                    category: "Gold Sponsorship",
                    amount: "50,000/-",
                    benefits: "3 Delegate Passes • 1 Standee Display • Logo on Materials • Inserts in Conference Kits • 2 Full-Page Ads in Proceedings • Promotional Video • Conference Kit & Memento"
                },
                {
                    slNo: 3,
                    category: "Silver Sponsorship",
                    amount: "25,000/-",
                    benefits: "2 Delegate Passes • Logo on Materials • 1 Full-Page Ad in Proceedings • Conference Kit & Memento"
                },
                {
                    slNo: 4,
                    category: "Bronze Sponsorship",
                    amount: "15,000/-",
                    benefits: "1 Delegate Pass • Logo on Conference Materials • Conference Kit & Memento"
                },
                {
                    slNo: 5,
                    category: "Supporter Sponsorship",
                    amount: "10,000/-",
                    benefits: "Logo Display on Conference Materials"
                }
            ]
        }
    ];

    /* ---------------- REGISTRATION / PUBLICATION INFO ---------------- */
    const conferenceInfoItems = [
        {
            id: "registration-benefits",
            question: "Registration Benefits & Concessions",
            answer: [
                "<strong>Institutional Concession:</strong> A 50% concession in the registration fee will be provided to participants from Kalinga University and institutions having an MoU with Kalinga University, Naya Raipur.",
                "<strong>Group Registration:</strong> A 10% concession on the applicable registration fee for group registrations of 50 or more participants from the same institution.",
                "<strong>The registration fee includes:</strong> Conference Kit, Participation Certificate, Access to all Technical Sessions, High Tea, Lunch and Snacks for both Conference Days, and E-Proceedings of the Conference.",
                "<strong>Accommodation:</strong> Accommodation will be arranged for participants upon prior request (charges applicable as per availability)."
            ]
        },
        {
            id: "publication-details",
            question: "Publication Details",
            answer: [
                "All accepted papers will appear in Conference Proceedings (ISBN – E-book).",
                "Selected papers will be published in Scopus-indexed journals (with applicable APCs)."
            ]
        }
    ];

    /* ---------------- TRAVEL / HOW TO REACH ---------------- */
    const howToReachItems = [
        { id: 1, text: "<strong>Railways:</strong> Raipur Junction railway station is situated on the Howrah-Nagpur-Mumbai line of the Indian Railways (via Bhusawal, Nagpur, Gondia, Bilaspur, Rourkela, Kharagpur) and is connected with most major cities." },
        { id: 2, text: "<strong>Airport:</strong> Swami Vivekananda Airport is the primary airport serving the state of Chhattisgarh. The airport is located 15 km south of Raipur near Atal Nagar." },
        { id: 3, text: "<strong>Accommodation:</strong> Available on request (charges apply)." }
    ];

    /* ---------------- POST-CONFERENCE ACTIVITIES ---------------- */
    const postConferenceItems = [
        { id: 1, text: "Feedback Form Submission (mandatory for Certificate)." },
        { id: 2, text: "Certificate Distribution (Participants, Speakers, Volunteers)." },
        { id: 3, text: "Photo/Video Sharing & Media Coverage." },
        { id: 4, text: "Conference Report Compilation & Submission." }
    ];

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="py-12 md:py-16 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h5 className="font-bold text-[var(--button-red)] titlecase tracking-[0.2em] text-sm md:text-base mb-2">
                        Department of Computer Science &amp; Faculty of Information Technology
                    </h5>
                    <p className="font-bold text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8">
                        ORGANISES
                    </p>
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4">
                        3rd International Conference On Digital Intelligence
                    </h1>
                    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800 leading-tight mb-6 titlecase max-w-4xl mx-auto">
                        AI, Cybersecurity and Computing for a Sustainable Future
                    </h2>
                    <p className="font-stix text-lg md:text-2xl text-[var(--button-red)] mb-10">
                        (ICDIACS 2026)
                    </p>

                    {/* Event quick facts */}
                    <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5 max-w-4xl mx-auto">
                        <div className="flex-1 min-w-[180px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">🗓️</p>
                            <p className="font-semibold text-[var(--foreground)]">27th &amp; 28th October 2026</p>
                        </div>
                        <div className="flex-1 min-w-[180px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">📍</p>
                            <p className="font-semibold text-[var(--foreground)]">Campus, Kalinga University</p>
                        </div>
                        <div className="flex-1 min-w-[180px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">💻</p>
                            <p className="font-semibold text-[var(--foreground)]">Mode: Hybrid</p>
                        </div>
                    </div>

                    {/* SDG alignment */}
                    <div className="mt-12 border-t border-gray-100 pt-8">
                        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800 leading-tight titlecase max-w-4xl mx-auto mb-6">
                            Aligned With UN Sustainable Development Goals (SDGs)
                        </h3>
                        <div className="flex justify-center items-center">
                            <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white p-1 border border-gray-100">
                                <img
                                    src="https://cdn.kalingauniversity.ac.in/law-conference/sustainability-9.webp"
                                    alt="SDG 9 - Industry, Innovation and Infrastructure"
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY SDG 9 ================= */}
            <ImageListItem
                items={whySdg9Items}
                imageSrc="https://cdn.kalingauniversity.ac.in/course/student-computer.webp"
                title="Why UN SDG 9?"
                subtitle=""
                description="Industry, Innovation and Infrastructure — the primary goal this conference advances:"
            />

            {/* ================= RELATED SDGs ================= */}
            <QuickLinks
                slider={true}
                links={relatedSdgItems}
                title="Related SDGs"
                backgroundColor="bg-white"
                textColorClassName="text-gray-700"
                showReadMore={false}
                description="Beyond SDG 9, the conference also contributes to the following Sustainable Development Goals:"
            />

            {/* ================= ABOUT KALINGA UNIVERSITY ================= */}
            {/* <MainIntro
                title="About Kalinga University"
                subtitle=""
                description={[
                    "Kalinga University, established in 2013, stands out as one of the leading private universities strategically located in the Smart City of New Raipur, Chhattisgarh. The University has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year and has also received a NAAC B+ accreditation, continuously shining on the horizon of high-quality education."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/Home/about-kalinga.webp"
                imageAlt="Kalinga University Campus"
            /> */}

            {/* <PublicationGrid stats={universityStats} /> */}

            {/* ================= ABOUT RAIPUR ================= */}
                {/* <MainIntro
                    title="About Raipur"
                    subtitle=""
                    description={[
                        "Raipur, the capital city of Chhattisgarh, is a blend of culture, heritage, and development. It is one of the fastest-developing cities of India and has become a centre of attraction in education, infrastructure, tourism, business, and Innovation. The city is famous for temples, parks, animal sanctuaries, the Shaheed Veer Narayan Singh International Cricket Stadium, food joints, shopping places, malls, & tribal heritage sites. It is home to some of the largest steel plants, IT industries, and manufacturing units."
                    ]}
                    imageUrl="https://cdn.kalingauniversity.ac.in/about-raipur/raipur1.webp"
                    imageAlt="Raipur City"
                /> */}

            {/* ================= ABOUT NEW RAIPUR ================= */}
            {/* <MainIntro
                title="About New Raipur"
                subtitle=""
                description={[
                    "New Raipur is the first Greenfield Smart City in India, where 27% of the land is solely devoted to green and sustainable practices. It is also becoming a major hub of education and health in Central India. The Government is planning to make it a global destination for the IT and services industry to offer employment opportunities to youth. New Raipur is a well-planned smart city that supports a sustainable lifestyle and intelligent infrastructure. Due to growing opportunities and developments, it attracts students, entrepreneurs, and innovators who are ready to turn their ideas into innovation."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/about-raipur/raipur2.webp"
                imageAlt="New Raipur Smart City"
                reverseLayout={true}
                sectionClassName="md:py-16 bg-[var(--lite-sand)] py-16 !pb-20"
            /> */}

            {/* ================= OBJECTIVES OF NEW RAIPUR ================= */}
            {/* <ImageListItem
                items={newRaipurObjectives}
                imageSrc="https://cdn.kalingauniversity.ac.in/about-raipur/gallery/raipur-images-2.jpg"
                title="Objectives of New Raipur"
                subtitle=""
                description=""
            /> */}

            {/* ================= CONFERENCE OBJECTIVES & SCOPE ================= */}
            <MainIntro
                title="Conference Objectives & Scope"
                subtitle=""
                description={[
                    "This conference aims to provide an international multidisciplinary platform for researchers, academicians, industry experts, and innovators to discuss recent advancements in Artificial Intelligence, Cybersecurity, Digital Intelligence, Intelligent Systems, Cloud Computing, IoT, Data Science, and Sustainable Digital Technologies. The conference focuses on promoting research and innovation that contribute toward sustainable technological growth and global development aligned with the United Nations Sustainable Development Goals (SDGs)."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/gallery/UG/Bachelor-of-Computer-Applications-in-Artificial-Intelligence-and-Machine-Learning.jpg"
                imageAlt="Digital Intelligence, AI and Cybersecurity Research"
            />

            {/* ================= KEY OBJECTIVES ================= */}
            <QuickLinks
                slider={true}
                links={keyObjectives}
                title="Key Objectives"
                titleClassName="!text-white"
                showReadMore={false}
                description="The conference is driven by the following key objectives:"
            />

            {/* ================= CALL FOR PAPERS ================= */}
            <ImageContent
                hasImage={true}
                readmore={false}
                className="items-center justify-center my-8 md:my-12 [&_img]:!w-[100px] [&_img]:!h-auto md:[&>img]:order-last md:[&>div]:order-first"
                title="Call For Papers"
                subtitleclassName="hidden"
                imageSrc="https://cdn.kalingauniversity.ac.in/law-conference/document.svg"
                imageWidth={100}
                imageHeight={100}
                description="The Organising Committee invites original and unpublished research papers, review articles, and case studies from academicians, scientists, industry professionals, policymakers, and research scholars. All submissions will undergo a rigorous double-blind peer review process. Accepted papers will be published in the Conference Proceedings with an ISBN, and selected papers will be recommended for publication in UGC-CARE-listed and Scopus-indexed journals."
                additionalContent={[
                    "Submit to: icstdtsd@kalingauniversity.ac.in"
                ]}
            />

            {/* ================= CONFERENCE TRACKS ================= */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Conference Tracks"
                        titleClassName="text-center mb-12"
                    />
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Left Column */}
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                {conferenceTracks.slice(0, 3).map((track, idx) => (
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
                                {conferenceTracks.slice(3).map((track, idx) => (
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

            {/* ================= DATES, REGISTRATION & SPONSORSHIP ================= */}
            <FAQ
                id="conference-information"
                title="Dates, Registration & Sponsorship"
                subtitle="Participate"
                variant="table-display"
                tableSections={conferenceTableSections}
                items={conferenceInfoItems}
                pyClassName="py-12"
            />

            {/* ================= TRAVEL & HOW TO REACH ================= */}
            <ImageListItem
                items={howToReachItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/about-raipur/gallery/raipur-images-4.jpg"
                title="Travel & Accommodation"
                subtitle=""
                description="How to reach Kalinga University, Naya Raipur:"
            />

            {/* ================= POST-CONFERENCE ACTIVITIES ================= */}
            <ImageListItem
                items={postConferenceItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                title="Post-Conference Activities"
                subtitle=""
                description=""
                reverseLayout={true}
                className="!bg-white"
                textClassName="text-gray-700"
                headingClassName="text-[var(--foreground)]"
            />

            {/* ================= CONTACT ================= */}
            <OrganogramOfKalinga
                title="Contact Us"
                description={`<strong>For paper submission and queries,</strong><br/>📩 icstdtsd@kalingauniversity.ac.in`}
                buttons={[
                    {
                        text: "Send Email",
                        link: "mailto:icstdtsd@kalingauniversity.ac.in",
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
                            ICDIACS 2026 <br />
                            3rd International Conference On Digital Intelligence
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Explore the Conference Brochure
                        </p>
                    </div>

                    <a
                        href="https://cdn.kalingauniversity.ac.in/conferences/icdiacs/ICDIACS-2026-27.pdf"
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

export default ICDIACSConferencePage;
