"use client";

import React from 'react';
import MainIntro from '../components/about/main_intro';
import ImageContent from '../components/ccrc/imagecontent';
import { AccordionItem } from '../components/general/accordion';
import SectionHeading from '../components/general/SectionHeading';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';
import PublicationGrid from '../components/research/publication-grid';

const AIForHumanityConferencePage = () => {

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

    /* ---------------- ALIGNED UN SDGs ----------------
       Official UN icon set on the CDN, zero-padded ids —
       same source the SDG Cell grid uses (components/sdg-cell/sdg-image-grid.jsx). */
    const alignedSdgs = [
        { id: 3, label: "Good Health and Well-being" },
        { id: 4, label: "Quality Education" },
        { id: 5, label: "Gender Equality" },
        { id: 6, label: "Clean Water and Sanitation" },
        { id: 7, label: "Affordable and Clean Energy" },
        { id: 8, label: "Decent Work and Economic Growth" },
        { id: 9, label: "Industry, Innovation and Infrastructure" },
        { id: 10, label: "Reduced Inequalities" },
        { id: 11, label: "Sustainable Cities and Communities" },
        { id: 12, label: "Responsible Consumption and Production" },
        { id: 13, label: "Climate Action" },
        { id: 15, label: "Life on Land" },
        { id: 16, label: "Peace, Justice and Strong Institutions" },
        { id: 17, label: "Partnerships for the Goals" }
    ].map(sdg => ({
        ...sdg,
        image: `https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-logo/E-WEB-Goal-${String(sdg.id).padStart(2, "0")}.png`
    }));

    /* ---------------- SUB-THEMES ---------------- */
    const subThemesLeft = [
        {
            title: "1. Education, Teacher Education & Pedagogy",
            items: [
                "AI-enabled teaching–learning practices integrating Indian Knowledge Systems (IKS)",
                "AI for inclusive, equitable, and quality education (SDG 4)",
                "Digital Gurukul: Reimagining traditional Indian pedagogies through AI",
                "AI in curriculum design aligned with Indian epistemology",
                "Teacher readiness, professional development, and AI literacy",
                "Personalised learning using AI and indigenous learning principles",
                "Ethical and human-centred AI in education",
                "AI for multilingual education and preservation of Indian languages"
            ]
        },
        {
            title: "2. Engineering, Technology & Innovation",
            items: [
                "Human-centred AI design inspired by Indian philosophical foundations",
                "AI for sustainable infrastructure and smart villages",
                "Indigenous engineering knowledge and modern AI applications",
                "Robotics and automation for social good",
                "AI and green technologies for environmental sustainability",
                "Explainable and ethical AI based on Indian ethical frameworks",
                "AI and Industry 5.0: Human–machine collaboration",
                "AI innovations for disaster prediction and management"
            ]
        },
        {
            title: "3. Health Sciences, Yoga & Wellbeing",
            items: [
                "AI integration with Ayurveda, Yoga, and traditional medicine",
                "Predictive healthcare using AI and indigenous healing knowledge",
                "Mental health, wellbeing, and AI-based interventions",
                "AI in preventive and community health systems",
                "Digital health equity and rural healthcare access",
                "AI-supported diagnosis using traditional symptom classification systems",
                "Integrating holistic Indian wellness models with AI"
            ]
        },
        {
            title: "4. Agriculture, Rural Development & Tribal Knowledge",
            items: [
                "AI for sustainable agriculture using traditional farming knowledge",
                "Indigenous ecological knowledge and AI-based climate adaptation",
                "Precision agriculture inspired by traditional Indian practices",
                "AI for tribal livelihood enhancement and empowerment",
                "Sustainable food systems combining AI and indigenous biodiversity knowledge",
                "AI-based water conservation using traditional Indian methods",
                "Smart rural ecosystems and AI-enabled village development"
            ]
        },
        {
            title: "5. Social Sciences, Humanities & Cultural Studies",
            items: [
                "AI and preservation of Indian cultural heritage",
                "AI for documentation and revitalisation of indigenous knowledge",
                "Ethical frameworks of AI based on Indian philosophy (Dharma, Nyaya, etc.)",
                "AI, society, and human values: Indian perspectives",
                "AI for social justice, equity, and inclusion",
                "Cultural intelligence and AI",
                "AI and digital humanities"
            ]
        }
    ];

    const subThemesRight = [
        {
            title: "6. Management, Commerce & Economics",
            items: [
                "AI for sustainable and ethical business practices",
                "Indian management principles and AI leadership models",
                "AI for social entrepreneurship and sustainable enterprises",
                "AI-driven innovation ecosystems",
                "AI for financial inclusion and rural economic development",
                "Circular economy and sustainable production through AI",
                "AI and responsible organisational governance"
            ]
        },
        {
            title: "7. Environmental Sciences & Sustainability",
            items: [
                "AI for climate change mitigation and adaptation",
                "Traditional ecological knowledge and AI solutions",
                "Biodiversity conservation using AI and indigenous practices",
                "AI for natural resource management",
                "AI-based environmental monitoring systems",
                "Sustainable urban planning inspired by traditional Indian models"
            ]
        },
        {
            title: "8. Law, Policy & Governance",
            items: [
                "Ethical governance of AI using Indian ethical traditions",
                "AI policy frameworks for sustainable development",
                "Legal implications of AI in human society",
                "AI and data protection: Ethical perspectives",
                "AI for transparent and accountable governance",
                "Indigenous knowledge protection and intellectual property"
            ]
        },
        {
            title: "9. Arts, Literature & Creative Fields",
            items: [
                "AI and preservation of Indian art, music, and literature",
                "AI-generated art and Indian aesthetic theory",
                "Digital storytelling and indigenous narratives",
                "AI for cultural preservation and promotion",
                "Fusion of traditional arts and AI technologies"
            ]
        },
        {
            title: "10. Interdisciplinary & Emerging Areas",
            items: [
                "AI for achieving SDGs through indigenous wisdom",
                "Human-centred AI inspired by Indian philosophy",
                "AI and spirituality: Consciousness and cognition",
                "AI for sustainable community development",
                "Integrating modern science with Indian Knowledge Systems",
                "Future of humanity: AI, ethics, and Indian civilizational wisdom"
            ]
        }
    ];

    /* ---------------- SUBMISSION GUIDELINES ---------------- */
    const submissionItems = [
        { id: 1, text: "Abstract submission: An abstract may have a maximum of 300 words and a maximum of 5 keywords." },
        { id: 2, text: "E-mail Abstract and Full Papers at: <a href='mailto:education.conferences@kalingauniversity.ac.in'>education.conferences@kalingauniversity.ac.in</a>" },
        { id: 3, text: "The length of the paper should be between 3000 and 5000 words." },
        { id: 4, text: "The full paper must be formatted as an MS Word document in Times New Roman, 12-point font size." },
        { id: 5, text: "Registration is compulsory for all participants, authors and co-authors, with the Transaction ID Number and Payment Receipt in PDF format." },
        { id: 6, text: "Registration without a Transaction ID Number and Payment Receipt will not be considered." },
        { id: 7, text: "All registered participants will be given E-Certificates." },
        { id: 8, text: "No abstract or full paper shall be accepted after the last submission date." },
        { id: 9, text: "Only the selected abstracts will be permitted for presentation." },
        { id: 10, text: "Co-authorship is permitted, and at least one author must attend the Conference to present the paper." },
        { id: 11, text: "All submissions must be the author's original and unpublished work." },
        { id: 12, text: "Similarity should not be more than 10%." }
    ];

    /* ---------------- DATES & REGISTRATION TABLES ---------------- */
    const registrationTableSections = [
        {
            id: "important-dates",
            title: "Important Dates",
            columns: [
                { key: "milestone", label: "Milestone", width: "flex-1" },
                { key: "date", label: "Date", width: "w-64" }
            ],
            data: [
                { milestone: "Last Date of Submission of Abstract", date: "15th December 2026" },
                { milestone: "Notification of Acceptance of Abstract", date: "20th December 2026" },
                { milestone: "Last Date of Early Bird Registration", date: "30th December 2026" },
                { milestone: "Last Date for Registration & Payment / Submission of Full Paper", date: "10th January 2027" },
                { milestone: "International Conference", date: "22nd & 23rd January 2027" }
            ]
        },
        {
            id: "registration-fee",
            title: "Registration & Fee Payment",
            columns: [
                { key: "category", label: "Category", width: "flex-1" },
                { key: "fee", label: "Fee", width: "w-56" }
            ],
            data: [
                { category: "Faculty & Other Educators", fee: "INR 2,000/-" },
                { category: "Research Scholars", fee: "INR 2,000/-" },
                { category: "UG+PG Students", fee: "INR 1,200/-" },
                { category: "Industry Experts", fee: "INR 2,500/-" },
                { category: "International Participants", fee: "USD 50/-" }
            ],
            footerContent: [
                "After the registration dates, an additional INR 250/- per category (International Participants: USD 20/- additional).",
                "On-the-spot registration: INR 500/- additional per category.",
                "Registration Link: <a href='https://forms.gle/R1SHCWEq5kHTS3Kx8' target='_blank'>https://forms.gle/R1SHCWEq5kHTS3Kx8</a>"
            ]
        }
    ];

    /* ---------------- OTHER DETAILS (FAQ items) ---------------- */
    const conferenceInfoItems = [
        {
            id: "awards",
            question: "Awards",
            answer: [
                "Certificate/E-Certificate will be provided to every Participant.",
                "Other selected papers will be published in an edited book with an ISBN number / Scopus journal.",
                "Conference souvenir will be released at the inauguration of the Conference."
            ]
        },
        {
            id: "publication-opportunities",
            question: "Publication Opportunities",
            answer: [
                "All accepted papers will be published in the Conference Proceedings with an ISBN, released at the time of the event.",
                "Selected peer-reviewed papers will be published in a reputed peer-reviewed journal (publication charges apply).",
                "Additional selected papers will be considered for an edited volume (ISBN) with an international publisher (publication charges apply).",
                "All submissions will undergo a peer-review process by an expert academic committee."
            ]
        },
        {
            id: "accommodation",
            question: "Accommodation Within Campus",
            answer: [
                "Accommodation will be provided only to participants from outside Raipur at a cost of INR 800/- per day.",
                "No TA/DA will be provided to the participants by the organisers."
            ]
        },
        {
            id: "note",
            question: "Note",
            answer: [
                "The author has to pay the fee for the publication in the journal.",
                "A soft copy of the book/proceedings shall be provided to the authors. (Hard copy will be provided on request with applicable charges.)"
            ]
        }
    ];

    /* ---------------- COMMITTEES (card-display) ---------------- */
    const committeeSections = [
        {
            id: "chief-patrons",
            title: "Chief Patrons",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "institution", label: "Institution" }
            ],
            data: [
                { name: "Dr. Rajiv Kumar", designation: "Chairman", institution: "Kalinga University" },
                { name: "Dr. Sandeep Arora", designation: "Chancellor", institution: "Kalinga University" }
            ]
        },
        {
            id: "patrons",
            title: "Patrons",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "institution", label: "Institution" }
            ],
            data: [
                { name: "Prof. (Dr.) R. Shridhar", designation: "Vice-Chancellor", institution: "Kalinga University" },
                { name: "Dr. Byju John", designation: "Director General", institution: "Kalinga University" },
                { name: "Dr. Sandeep Gandhi", designation: "Registrar", institution: "Kalinga University" },
                { name: "Dr. Rahul Mishra", designation: "Dean Academics", institution: "Kalinga University" },
                { name: "Dr. Vijayalaxmi Biradar", designation: "Director IQAC", institution: "Kalinga University" }
            ]
        },
        {
            id: "convenor",
            title: "Convenor",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "contact", label: "Contact" }
            ],
            data: [
                { name: "Prof. Dr. Shraddha Verma", designation: "Dean, Faculty of Education, Kalinga University", contact: "+91-7024116973" }
            ]
        },
        {
            id: "coordinator",
            title: "Coordinator",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "contact", label: "Contact" }
            ],
            data: [
                { name: "Dr. Saroj Nayyar", designation: "Assistant Professor, Faculty of Education, Kalinga University", contact: "+91-9907380371" }
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
                { name: "Dr. D. Kalidoss", designation: "Director of Sports, Faculty of Education" },
                { name: "Dr. Harsha Sharma", designation: "Assistant Professor, Faculty of Education" },
                { name: "Dr. Sanjeev Yadav", designation: "Assistant Professor, Faculty of Education" }
            ]
        },
        {
            id: "technical-committee",
            title: "Technical Committee",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" }
            ],
            data: [
                { name: "Mr. Pritam Patel", designation: "Data Operator, Faculty of Education" }
            ]
        }
    ];

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="py-12 md:py-16 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h5 className="font-bold text-[var(--button-red)] titlecase tracking-[0.2em] text-sm md:text-base mb-4">
                        Faculty of Education
                    </h5>
                    <div className="flex justify-center mb-4">
                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden bg-white p-2 border border-gray-100 shadow-sm">
                            <img
                                src="https://cdn.kalingauniversity.ac.in/conferences/ai-humanity-27/educraft-club.webp"
                                alt="EduCraft Club, Faculty of Education"
                                className="w-full h-full object-contain rounded-lg"
                            />
                        </div>
                    </div>
                    <p className="font-bold text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8">
                        ORGANISES
                    </p>
                    <p className="text-lg md:text-xl text-gray-500 mb-2">Two-Day 3rd International Conference on</p>
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4">
                        AI For Humanity
                    </h1>
                    <h2 className="font-bold text-lg md:text-2xl lg:text-3xl text-gray-800 leading-tight mb-8 titlecase max-w-4xl mx-auto">
                        Leveraging Indian Knowledge Systems To Accelerate Sustainable Development Goals
                    </h2>

                    {/* Event quick facts */}
                    <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5 max-w-4xl mx-auto">
                        <div className="flex-1 min-w-[180px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">🗓️</p>
                            <p className="font-semibold text-[var(--foreground)]">22nd &amp; 23rd January 2027</p>
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
                        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-4xl mx-auto">
                            {alignedSdgs.map(sdg => (
                                <div
                                    key={sdg.id}
                                    title={`SDG ${sdg.id} - ${sdg.label}`}
                                    className="w-24 h-24 md:w-28 md:h-28 relative rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white p-1 border border-gray-100"
                                >
                                    <img
                                        src={sdg.image}
                                        alt={`SDG ${sdg.id} - ${sdg.label}`}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

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

            {/* ================= ABOUT THE FACULTY OF EDUCATION ================= */}
            <MainIntro
                title="About the Faculty of Education"
                subtitle=""
                description={[
                    "The Faculty of Education at Kalinga University, Naya Raipur, is a beacon of knowledge and innovation. With a team of highly qualified and experienced faculty members, it offers comprehensive and industry-aligned programs for aspiring educators. The Department focuses not just on theoretical knowledge but also on practical application through internships and hands-on experiences. Kalinga University's Faculty of Education instils in its students a passion for teaching, equipping them with the skills and expertise needed to excel in their careers and make a meaningful impact in the field of education."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="Faculty of Education"
                reverseLayout={true}
                sectionClassName="md:py-16 bg-[var(--lite-sand)] py-16 !pb-20"
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
                description="The International Conference on AI for Humanity: Leveraging Indian Knowledge Systems to Accelerate Sustainable Development Goals, organised by the Faculty of Education, Kalinga University, Naya Raipur, will be held on 22nd & 23rd January 2027. The conference invites contributions in the form of full-length scholarly papers documenting original and substantial research work."
                additionalContent={[
                    "Submit to: education.conferences@kalingauniversity.ac.in"
                ]}
            />

            {/* ================= THEME & ABOUT THE THEME ================= */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Theme"
                        titleClassName="text-center mb-6"
                    />
                    <p className="font-stix text-xl md:text-2xl leading-snug text-gray-800 text-center max-w-4xl mx-auto mb-10">
                        AI for Humanity: Leveraging Indian Knowledge Systems to Accelerate Sustainable Development Goals
                    </p>
                    <h3 className="font-plus-jakarta-sans font-bold text-[20px] text-[var(--button-red)] mb-4 text-center">About The Theme</h3>
                    <p className="text-gray-700 font-plus-jakarta-sans text-sm md:text-base leading-relaxed max-w-5xl mx-auto text-justify">
                        The theme <em>AI for Humanity: Leveraging Indian Knowledge Systems to Accelerate Sustainable Development Goals</em> envisions a transformative dialogue between cutting-edge artificial intelligence and the timeless wisdom embedded in India's intellectual traditions. Rooted in holistic principles such as Vasudhaiva Kutumbakam (the world as one family), harmony with nature, ethical responsibility, and community-centred living, Indian Knowledge Systems (IKS) offer sustainable models in health, agriculture, education, governance, and environmental stewardship. By integrating AI-driven analytics, predictive modelling, and digital innovation with traditional practices like Ayurveda, indigenous agricultural methods, and value-based education, this conference seeks to explore inclusive and culturally grounded solutions for achieving the Sustainable Development Goals (SDGs). The theme emphasises that technological advancement must align with human values, social equity, and ecological balance. It calls upon scholars, policymakers, technologists, and educators to collaboratively design AI systems that are ethical, sustainable, and rooted in indigenous knowledge, thereby accelerating progress toward a resilient, equitable, and sustainable global future.
                    </p>
                </div>
            </section>

            {/* ================= SUB-THEMES ================= */}
            <section className="py-16 bg-[var(--light-gray)]">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Sub-Themes"
                        titleClassName="text-center mb-12"
                    />
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Left Column */}
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                {subThemesLeft.map((group, idx) => (
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
                                {subThemesRight.map((group, idx) => (
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

            {/* ================= SUBMISSION GUIDELINES ================= */}
            <ImageListItem
                items={submissionItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                title="Submission Guidelines"
                subtitle=""
                description="Please follow the guidelines below while preparing and submitting your work:"
            />

            {/* ================= DATES, REGISTRATION & DETAILS ================= */}
            <FAQ
                id="conference-information"
                title="Dates, Registration & Guidelines"
                subtitle="Participate"
                variant="table-display"
                tableSections={registrationTableSections}
                items={conferenceInfoItems}
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
                description={`<strong>For paper submission and queries,</strong><br/>📩 education.conferences@kalingauniversity.ac.in`}
                buttons={[
                    {
                        text: "Send Email",
                        link: "mailto:education.conferences@kalingauniversity.ac.in",
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
                            AI For Humanity 2027 <br />
                            3rd International Conference — Faculty of Education
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Explore the Conference Brochure
                        </p>
                    </div>

                    <a
                        href="#"
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

export default AIForHumanityConferencePage;
