"use client";

import React from 'react';
import MainIntro from '../components/about/main_intro';
import { AccordionItem } from '../components/general/accordion';
import SectionHeading from '../components/general/SectionHeading';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';

const IndianKnowledgeSystemsConferencePage = () => {

    /* ---------------- CONFERENCE AIMS ---------------- */
    const aimsItems = [
        { id: 1, text: "To promote the integration of Indian Knowledge Systems (IKS) into contemporary education, research, and innovation for holistic and sustainable development." },
        { id: 2, text: "To explore the relevance of traditional Indian knowledge in addressing modern challenges related to sustainability, environmental conservation, and societal well-being." },
        { id: 3, text: "To encourage interdisciplinary research that combines Indian Knowledge Systems with emerging technologies and scientific advancements." },
        { id: 4, text: "To provide a platform for scholars, researchers, academicians, policymakers, and industry experts to exchange ideas, research findings, and best practices on IKS and technological transformation." },
        { id: 5, text: "To identify innovative applications of indigenous knowledge in areas such as agriculture, healthcare, education, energy, environmental management, and entrepreneurship." },
        { id: 6, text: "To foster collaboration among educational institutions, research organisations, industries, and government agencies for the effective implementation of Indian Knowledge Systems in national development." },
        { id: 7, text: "To examine the role of Indian philosophical, ethical, and cultural values in promoting sustainable technologies, responsible innovation, and inclusive growth." },
        { id: 8, text: "To support the objectives of the National Education Policy (NEP) 2020 by encouraging the integration of Indian Knowledge Systems into higher education curricula and research initiatives." },
        { id: 9, text: "To inspire young researchers and students to undertake innovative research that bridges traditional wisdom with modern science and technology." },
        { id: 10, text: "To develop policy recommendations and strategic frameworks for leveraging Indian Knowledge Systems to achieve sustainable development, technological advancement, and the vision of a self-reliant India (Atmanirbhar Bharat)." }
    ];

    /* ---------------- SUB-THEMES ---------------- */
    const subThemesLeft = [
        { title: "1. Viksit Bharat @2047 and Humanities Futures", text: "Indian Knowledge Systems as cultural foundations for national vision, identity, and transformation." },
        { title: "2. Governance, Political Thought, and Ethics", text: "Traditions in administration, political science, ethics, and policy innovation." },
        { title: "3. Economic Thought, Rural Humanities, and Geography", text: "Self-reliance, rural transformation, and spatial-cultural development." },
        { title: "4. Pedagogy, Educational Philosophy, and Literary Traditions", text: "NEP 2020 enriched by Hindi and English literature, pedagogy, and cultural learning." },
        { title: "5. Traditional Sciences and Innovation Histories", text: "Knowledge trajectories, indigenous sciences, and historical innovation." }
    ];

    const subThemesRight = [
        { title: "6. Artificial Intelligence, Psychology, and Digital Humanities", text: "Indian epistemologies in technology, cognition, and digital storytelling." },
        { title: "7. Urban Development, Sociology, and Cultural Landscapes", text: "Heritage-conscious, inclusive, and socially sustainable cities." },
        { title: "8. Health, Wellness, and Embodied Traditions", text: "Yoga, psychology of well-being, and holistic cultural practices." },
        { title: "9. Climate Sustainability and Environmental Humanities", text: "Resilience, ecological ethics, and cultural imagination." },
        { title: "10. Law, Sports, and Media Narratives", text: "Justice, indigenous games, sociology of sports, and cultural journalism." }
    ];

    /* ---------------- SUBMISSION GUIDELINES ---------------- */
    const submissionItems = [
        { id: 1, text: "The abstract should be 100 - 150 words." },
        { id: 2, text: "The full paper should be within 3000–3700 words, including title, abstract, main text, and references. It should include: Abstract, Keywords, Introduction, Literature Review, Methodology, Findings/Discussion, Conclusion, and References." },
        { id: 3, text: "Plagiarism must be below 10%. Authors must submit their own plagiarism report (Urkund / Turnitin / iThenticate / Drillbit). The review committee may conduct an additional plagiarism check." },
        { id: 4, text: "The paper title should align with the conference themes and sub-themes." },
        { id: 5, text: "All citations and references must follow the Harvard Author–Date referencing style with consistent formatting. Proper in-text citations corresponding to the reference list are mandatory." },
        { id: 6, text: "All papers should be in Times New Roman / Unicode-10, font size 12, with 1.5-line spacing." },
        { id: 7, text: "Authors must send abstracts in a Word Document only to <a href='mailto:arts.conference@kalingauniversity.ac.in'>arts.conference@kalingauniversity.ac.in</a> by 25th December 2026." }
    ];

    /* ---------------- DATES, REGISTRATION & PAYMENT TABLES ---------------- */
    const conferenceTableSections = [
        {
            id: "important-dates",
            title: "Important Dates",
            columns: [
                { key: "milestone", label: "Milestone", width: "flex-1" },
                { key: "date", label: "Date", width: "w-64" }
            ],
            data: [
                { milestone: "Last Date of Abstract Submission", date: "25th January 2027" },
                { milestone: "Abstract Acceptance Notification", date: "31st January 2027" },
                { milestone: "Last Date of Full-length Paper Submission", date: "10th February 2027" },
                { milestone: "Last Date of Registration", date: "19th February 2027" },
                { milestone: "Date of Conference", date: "26th - 27th February 2027" }
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
                "50% concession to participants from Kalinga University and institutions having an MoU with Kalinga University, Naya Raipur.",
                "Accommodation will be provided at the participants' request (charges applicable).",
                "Registration fees include a Conference Kit, High Tea, and Lunch for both days.",
                "Registration Link: <a href='https://docs.google.com/forms/d/e/1FAIpQLSdBsfb3f63Y42_Q58w25lNRbi9aokrWcB6ED6w4uGY0mFUQ1w/viewform?usp=dialog' target='_blank'>Register Here</a>"
            ]
        },
        {
            id: "payment-details",
            title: "Payment Details",
            columns: [
                { key: "field", label: "Field", width: "w-64" },
                { key: "value", label: "Details", width: "flex-1" }
            ],
            data: [
                { field: "Merchant", value: "Kalinga University" },
                { field: "A/C Name", value: "Kalinga University Faculty of Arts and Humanities" },
                { field: "A/C No.", value: "1744100100003500" },
                { field: "IFSC Code", value: "PUNB0174410" },
                { field: "Branch", value: "Rakhi, Naya Raipur" }
            ]
        }
    ];

    /* ---------------- PUBLICATION NOTE (FAQ item) ---------------- */
    const conferenceInfoItems = [
        {
            id: "publication-note",
            question: "Publication",
            answer: [
                "Selected papers will be included in the conference proceedings with an ISBN (E-book).",
                "Selected papers will be published in UGC / ABDC / Scopus-indexed journals, with applicable charges determined by the respective journals."
            ]
        }
    ];

    /* ---------------- CONTACTS (card-display) ---------------- */
    const contactSections = [
        {
            id: "contacts",
            title: "For Any Queries, Contact",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "contact", label: "Contact" }
            ],
            data: [
                { name: "Dr. Abhishek Agrawal", designation: "Assistant Professor, Department of History", contact: "+91-9827900833" },
                { name: "Ms. Sumira Madan", designation: "Assistant Professor, Department of English", contact: "+91-9650034149" }
            ]
        }
    ];

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="py-12 md:py-16 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h5 className="font-bold text-[var(--button-red)] titlecase tracking-[0.2em] text-sm md:text-base mb-2">
                        Faculty of Arts and Humanities
                    </h5>
                    <p className="font-bold text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8">
                        ORGANISES
                    </p>
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-tight mb-6 max-w-5xl mx-auto">
                        Integration of Indian Knowledge Systems for Sustainable Development and Technological Transformation
                    </h1>

                    {/* Event quick facts */}
                    <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5 max-w-2xl mx-auto">
                        <div className="flex-1 min-w-[200px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">🗓️</p>
                            <p className="font-semibold text-[var(--foreground)]">26th - 27th February 2027</p>
                        </div>
                        <div className="flex-1 min-w-[200px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
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
                            <div className="w-28 h-28 md:w-32 md:h-32 relative rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white p-1 border border-gray-100">
                                <img
                                    src="https://cdn.kalingauniversity.ac.in/law-conference/sustainability-4.webp"
                                    alt="SDG 4 - Quality Education"
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= THEME ================= */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading title="Theme" titleClassName="text-center mb-6" />
                    <p className="font-stix text-xl md:text-2xl leading-snug text-gray-800 text-center max-w-5xl mx-auto">
                        Integration of Indian Knowledge Systems for Sustainable Development and Technological Transformation: Harnessing cultural heritage, social sciences and humanities as foundations for innovation, resilience, and national progress.
                    </p>
                </div>
            </section>

            {/* ================= CONCEPT NOTE ================= */}
            <MainIntro
                title="Concept Note"
                subtitle=""
                description={[
                    "The global landscape is undergoing profound transformations driven by environmental challenges, technological advances, social inequalities, and shifting political dynamics. In this context, the pursuit of a sustainable future requires a multidisciplinary and inclusive approach — one that bridges the spheres of culture, society, and governance.",
                    "This conference aims to create a vibrant platform for scholars, policymakers, practitioners, and community leaders to engage in critical dialogue about how we can transition toward a more just, resilient, and sustainable world. By examining the intersections of cultural narratives, social systems, and governance models, the event seeks to challenge conventional paradigms and propose innovative solutions to the complex challenges of our time. Culture shapes our values, beliefs, and behaviours; society reflects our collective organisation and resilience; governance determines how power and resources are distributed. This conference invites contributions that explore emerging trends, indigenous knowledge systems, participatory governance, social justice, and the role of education, media, and the arts in shaping sustainable futures."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="Indian Knowledge Systems Conference"
            />

            {/* ================= CONFERENCE AIMS ================= */}
            <ImageListItem
                items={aimsItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/Home/about-kalinga.webp"
                title="This Conference Aims To"
                subtitle=""
                description="The key objectives of the conference are as follows:"
                reverseLayout={true}
            />

            {/* ================= SUB-THEMES ================= */}
            <section className="py-16 bg-[var(--light-gray)]">
                <div className="container mx-auto px-4">
                    <SectionHeading title="Sub-Themes" titleClassName="text-center mb-12" />
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
                                        <p className="text-gray-700 font-plus-jakarta-sans py-4 text-sm leading-relaxed">
                                            {group.text}
                                        </p>
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
                                        <p className="text-gray-700 font-plus-jakarta-sans py-4 text-sm leading-relaxed">
                                            {group.text}
                                        </p>
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
                imageSrc="https://cdn.kalingauniversity.ac.in/gallery/UG/Bachelor-of-Computer-Applications-in-Artificial-Intelligence-and-Machine-Learning.jpg"
                title="Submission Guidelines"
                subtitle=""
                description="Please follow the guidelines below while preparing and submitting your work:"
            />

            {/* ================= DATES, REGISTRATION & PAYMENT ================= */}
            <FAQ
                id="conference-information"
                title="Dates, Registration & Payment"
                subtitle="Participate"
                variant="table-display"
                tableSections={conferenceTableSections}
                items={conferenceInfoItems}
                pyClassName="py-12"
            />

            {/* ================= CONTACTS ================= */}
            <FAQ
                id="conference-contacts"
                title="Contacts"
                subtitle="Reach Out To Us"
                variant="card-display"
                tableSections={contactSections}
                items={[]}
                pyClassName="py-8 md:py-12"
            />

            {/* ================= CONTACT CTA ================= */}
            <OrganogramOfKalinga
                title="Contact Us"
                description={`<strong>For paper submission and queries,</strong><br/>📩 arts.conference@kalingauniversity.ac.in`}
                buttons={[
                    {
                        text: "Send Email",
                        link: "mailto:arts.conference@kalingauniversity.ac.in",
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
                            Integration of Indian Knowledge Systems 2027 <br />
                            International Conference — Faculty of Arts &amp; Humanities
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

export default IndianKnowledgeSystemsConferencePage;
