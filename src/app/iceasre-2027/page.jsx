"use client";

import React from 'react';
import MainIntro from '../components/about/main_intro';
import { AccordionItem } from '../components/general/accordion';
import SectionHeading from '../components/general/SectionHeading';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';

const ICEASREConferencePage = () => {

    /* ---------------- CALL FOR PAPERS / TRACKS ---------------- */
    const tracksLeft = [
        {
            title: "Track 1: Innovative Technologies for Sustainable Agriculture and Food Security",
            items: [
                "AI and IoT in Precision Agriculture for Enhanced Productivity",
                "Genetic Engineering for Resilient Crops and Food Security",
                "Biotechnology for Converting Agricultural Waste into Renewable Energy"
            ]
        },
        {
            title: "Track 2: Sustainable Innovations for Global Health Advancement",
            items: [
                "Wearable Health Technologies for Real-time Monitoring and Preventive Care",
                "Sustainable Production of Biopharmaceuticals and Eco-friendly Pharmaceuticals",
                "Biotechnological Solutions for Accessible and Green Healthcare"
            ]
        },
        {
            title: "Track 3: Advanced Solutions for Water Management and Sanitation",
            items: [
                "IoT-Driven Smart Water Monitoring and Distribution Systems",
                "AI for Predictive Maintenance of Water Infrastructure",
                "Sustainable Desalination and Water Treatment Technologies for Remote Regions"
            ]
        },
        {
            title: "Track 4: Transformative Energy Technologies for a Sustainable Future",
            items: [
                "Renewable Energy Systems and Innovative Energy Storage Solutions",
                "Nanotechnology for Clean and Efficient Energy Production",
                "Smart Grids and Renewable Energy Integration for Energy Optimization"
            ]
        }
    ];

    const tracksRight = [
        {
            title: "Track 5: Technological Innovations for Resilient and Sustainable Development",
            items: [
                "Smart Manufacturing and the Role of Industry 4.0 in Sustainability",
                "Composite and Advanced Materials for Sustainable Infrastructure",
                "3D Printing and Digital Twins for Eco-friendly Industrial Optimization"
            ]
        },
        {
            title: "Track 6: Technology-Driven Governance and Justice for Sustainable Development",
            items: [
                "Blockchain for Transparent Governance and Anti-corruption Efforts",
                "AI for Predicting and Preventing Conflicts in Resource Distribution",
                "Digital Platforms for Strengthening Legal and Social Justice Systems"
            ]
        },
        {
            title: "Track 7: Innovative Educational Technologies for Sustainable Learning",
            items: [
                "Integrating Technology in Education for Promoting Sustainability Awareness",
                "Sustainable Pedagogies for 21st Century Learning",
                "AR/VR Technologies in Promoting Hands-on Sustainability Learning"
            ]
        }
    ];

    /* ---------------- AWARDS ---------------- */
    const awardsItems = [
        { id: 1, text: "Registration Kit" },
        { id: 2, text: "Presentation / Participation Certificates" },
        { id: 3, text: "Best Paper Presentation Certificate" }
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
                { milestone: "Last Date of Abstract Submission", date: "10th December 2026" },
                { milestone: "Notification of Acceptance (Abstract)", date: "01st January 2027" },
                { milestone: "Registration Deadline", date: "20th February 2027" },
                { milestone: "Last Date of Paper Submission", date: "20th February 2027" },
                { milestone: "Notification of Acceptance (Paper)", date: "01st March 2027" },
                { milestone: "Release of Conference Schedule", date: "02nd March 2027" },
                { milestone: "Conference Date", date: "12th & 13th March 2027" }
            ]
        },
        {
            id: "registration-fee",
            title: "Registration & Fee Payment",
            columns: [
                { key: "category", label: "Category", width: "flex-1" },
                { key: "fee", label: "Registration Charges", width: "w-56" }
            ],
            data: [
                { category: "Faculty & Other Educators", fee: "INR 2,000/-" },
                { category: "Research Scholars", fee: "INR 2,000/-" },
                { category: "UG+PG Students", fee: "INR 1,200/-" },
                { category: "Industry Experts", fee: "INR 2,500/-" },
                { category: "International Participants", fee: "USD 50/-" }
            ],
            footerContent: [
                "After the last date of registration, an additional INR 250/- per category (International Participants: USD 20/- additional).",
                "On-the-spot registration: INR 500/- additional per category.",
                "50% concession to participants from Kalinga University and colleges having an MoU with Kalinga University, Naya Raipur.",
                "Accommodation will be provided at the participants' request (charges applicable).",
                "Registration fees include a Conference Kit, High Tea, Lunch and Snacks for both days.",
                "Paper Submission Email ID: <a href='mailto:iceasre2027@kalingauniversity.ac.in'>iceasre2027@kalingauniversity.ac.in</a> — Camera-ready paper should be in IEEE format."
            ]
        }
    ];

    /* ---------------- COMMITTEES (card-display) ---------------- */
    const committeeSections = [
        {
            id: "convenors",
            title: "Convenors",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "department", label: "Department" }
            ],
            data: [
                { name: "Dr. Vinay Chandra Jha", designation: "Professor & HoD", department: "Department of Mechanical Engineering" },
                { name: "Dr. Manoj Kumar Nigam", designation: "Professor & HoD", department: "Department of Electrical Engineering" },
                { name: "Dr. E. V. Raghava Rao", designation: "HoD", department: "Department of Civil Engineering" },
                { name: "Dr. Swapnil Jain", designation: "Associate Professor", department: "Department of Mechanical Engineering" }
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
                { name: "Dr. Mukesh Kumar Sahu", designation: "Associate Professor" },
                { name: "Mr. Shailesh Singh Thakur", designation: "Assistant Professor" },
                { name: "Dr. Nuresh Kumar Khunte", designation: "Assistant Professor" },
                { name: "Mr. Gaurav Tamrakar", designation: "Assistant Professor" },
                { name: "Mr. Swapnil Shukla", designation: "Assistant Professor" },
                { name: "Dr. Abhishek Sahu", designation: "Assistant Professor" },
                { name: "Dr. Anu G. Pillai", designation: "Assistant Professor" },
                { name: "Dr. Praveen Kumar Yadav", designation: "Assistant Professor" },
                { name: "Mr. Sandeep Roy", designation: "Assistant Professor" },
                { name: "Dr. Arsh Khan", designation: "Assistant Professor" },
                { name: "Mr. Salik Ram Dewangan", designation: "Assistant Professor" },
                { name: "Ms. Soma Rajwade", designation: "Assistant Professor" },
                { name: "Dr. V. Leela Devi", designation: "Assistant Professor" },
                { name: "Dr. Akshit Lamba", designation: "Assistant Professor" },
                { name: "Dr. Ruchi Chandrakar", designation: "Assistant Professor" },
                { name: "Ms. Madhu Sahu", designation: "Assistant Professor" },
                { name: "Ms. Sakshi Agrawal", designation: "Assistant Professor" },
                { name: "Mr. Rajesh Kumar Sahu", designation: "Assistant Professor" },
                { name: "Mr. Arun Kumar Lahre", designation: "Assistant Professor" },
                { name: "Mr. Vikash Sahu", designation: "Assistant Professor" }
            ]
        },
        {
            id: "technical-committee",
            title: "Technical Committee",
            columns: [
                { key: "name", label: "Name" },
                { key: "affiliation", label: "Affiliation" }
            ],
            data: [
                { name: "Prof. Dr. N. K. Nagwani", affiliation: "NIT Raipur" },
                { name: "Mr. Manvendra Yadav", affiliation: "COO, AIC-EMPI Incubation Foundation, New Delhi" },
                { name: "Dr. Rakash Bhandari", affiliation: "Dean Research, SU Bilwara (Raj)" },
                { name: "Prof. Dr. S. P. Shukla", affiliation: "BIT Durg" },
                { name: "Dr. M. K. Singh", affiliation: "Prof. & Head, IPE, GGU Bilaspur" },
                { name: "Prof. Dr. Bharat Raj Bundel", affiliation: "Pt. L. R. Institute of Technology, Faridabad" },
                { name: "Prof. Dr. Shubhojit Ghosh", affiliation: "NIT Raipur" },
                { name: "Prof. Dr. Pankaj Mishra", affiliation: "CSVTU, Bhilai" },
                { name: "Prof. C. N. V. Satyanarayana Reddy", affiliation: "Andhra University, Visakhapatnam, AP" },
                { name: "Prof. Siddhartha Ghosh", affiliation: "IIT Mumbai" },
                { name: "Dr. Anil Singh Yadav", affiliation: "Assoc. Prof., Bakhtiyarpur College of Engineering, Patna" },
                { name: "Dr. Rohit Raja", affiliation: "Assoc. Prof., Guru Ghasidas University, Bilaspur" },
                { name: "Dr. Suraj Mukti", affiliation: "Assoc. Prof., NIT Raipur" },
                { name: "Dr. Joyti Prakash Patra", affiliation: "Assoc. Prof., CSVTU, Bhilai" },
                { name: "Dr. Dipti Verma", affiliation: "Assoc. Prof., CSVTU, Bhilai" },
                { name: "Dr. Vikash Dubey", affiliation: "Assoc. Prof., NEHU, Shillong, Meghalaya" },
                { name: "Dr. Snehal Gawande", affiliation: "Assoc. Prof., Yashwantrao Chauhan College of Engineering (Autonomous), Nagpur" },
                { name: "Dr. Uday Raj", affiliation: "Assistant Professor, IIT Bhilai" }
            ]
        },
        {
            id: "advisory-committee",
            title: "Advisory Committee",
            columns: [
                { key: "name", label: "Name" },
                { key: "affiliation", label: "Affiliation" }
            ],
            data: [
                { name: "Dr. Sharad Chandra Srivastava", affiliation: "Dean, SOE, GGU, Bilaspur" },
                { name: "Prof. N. V. Ramana Rao", affiliation: "Director, NIT Raipur" },
                { name: "Dr. MZR Khan", affiliation: "Director, KIPM COET, GIDA, Gorakhpur" },
                { name: "Dr. Alok Sahu", affiliation: "Principal Director, CIPET, Raipur" },
                { name: "Dr. Ajay Tripathi", affiliation: "Prof. & Head, Mechanical Engineering, GEC Raipur" },
                { name: "Prof. G. L. Siva Kumar Babu", affiliation: "IISc, Bangalore" },
                { name: "Dr. Sandeep Gholap", affiliation: "Senior Scientist, Institute of Sustainability for Chemicals, Energy and Environment, Singapore" },
                { name: "Prof. Dr. Jawar Singh", affiliation: "IIT Patna" },
                { name: "Prof. Dr. Man Mohan", affiliation: "Ajou University, S. Korea" },
                { name: "Prof. Dr. Desta Goytom Tewolde", affiliation: "Jimma Institute of Technology, Jimma, Ethiopia" },
                { name: "Prof. Dr. Prasad Patnaik", affiliation: "IIT Madras" },
                { name: "Prof. Dr. Brijesh Patel", affiliation: "National Taiwan University of Science and Technology, Taipei, Taiwan" },
                { name: "Dr. Bogireddy Chandra", affiliation: "Asst. Prof., ALT University, Almaty, Kazakhstan" },
                { name: "Dr. Ratinun Luampon", affiliation: "Asst. Prof., Rajamangala University of Technology, Thailand" }
            ]
        },
        {
            id: "contact-person",
            title: "Contact Person",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "contact", label: "Contact" }
            ],
            data: [
                { name: "Dr. Mukesh Kumar Sahu", designation: "Associate Professor, Department of Mechanical Engineering", contact: "+91-8877189522" }
            ]
        }
    ];

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="py-12 md:py-16 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h5 className="font-bold text-[var(--button-red)] titlecase tracking-[0.2em] text-sm md:text-base mb-2">
                        Faculty of Technology
                    </h5>
                    <p className="font-bold text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8">
                        ORGANISES
                    </p>
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-tight mb-4 max-w-5xl mx-auto">
                        International Conference On Engineering, Agritech &amp; Sustainable Rural Ecosystems
                    </h1>
                    <p className="font-stix text-lg md:text-2xl text-[var(--button-red)] mb-8">
                        (ICEASRE - 2027)
                    </p>

                    {/* Event quick facts */}
                    <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5 max-w-2xl mx-auto">
                        <div className="flex-1 min-w-[200px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">🗓️</p>
                            <p className="font-semibold text-[var(--foreground)]">12th - 13th March 2027</p>
                        </div>
                        <div className="flex-1 min-w-[200px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">💻</p>
                            <p className="font-semibold text-[var(--foreground)]">Mode: Hybrid</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT FACULTY OF TECHNOLOGY ================= */}
            <MainIntro
                title="About Faculty of Technology"
                subtitle=""
                description={[
                    "The Faculty of Technology at Kalinga University is a comprehensive educational hub offering programs in engineering and technology, including B.Tech degrees in Electrical Engineering, Civil Engineering, and Mechanical Engineering. It also provides Diploma programs and M.Tech degrees. The faculty focuses on providing students with a strong foundation in theory and practical skills, preparing them for a variety of careers in the field."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/Home/about-kalinga.webp"
                imageAlt="Faculty of Technology"
            />

            {/* ================= SCOPE OF PAPERS ================= */}
            <MainIntro
                title="Scope of Papers"
                subtitle=""
                description={[
                    "The International Conference on Engineering, Agritech and Sustainable Rural Ecosystems (ICEASRE-2027) aims to provide a comprehensive platform for professionals, academics, researchers, policymakers, and industry experts to discuss, share, and explore the latest advancements, applications, and potential impacts of a greener future on sustainable development.",
                    "The conference will provide insights into the United Nations Sustainable Development Goals (SDGs), focusing on how emerging technologies can contribute to achieving these goals. This includes addressing global challenges such as poverty, hunger, clean water and sanitation, affordable and clean energy, decent work, and climate action."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="Scope of Papers - ICEASRE 2027"
                reverseLayout={true}
                sectionClassName="md:py-16 bg-[var(--lite-sand)] py-16 !pb-20"
            />

            {/* ================= CALL FOR PAPERS ================= */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading title="Call For Papers" titleClassName="text-center mb-12" />
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

            {/* ================= AWARDS ================= */}
            <ImageListItem
                items={awardsItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                title="Awards"
                subtitle=""
                description="Participants will be given:"
            />

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
                title="Conference Committees"
                subtitle="Committees"
                variant="card-display"
                tableSections={committeeSections}
                items={[]}
                pyClassName="py-8 md:py-12"
            />

            {/* ================= CONTACT ================= */}
            <OrganogramOfKalinga
                title="Contact Us"
                description={`<strong>For paper submission and queries,</strong><br/>📩 iceasre2027@kalingauniversity.ac.in`}
                buttons={[
                    {
                        text: "Send Email",
                        link: "mailto:iceasre2027@kalingauniversity.ac.in",
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
                            ICEASRE - 2027 <br />
                            International Conference — Faculty of Technology
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Explore the Conference Brochure
                        </p>
                    </div>

                    <a
                        href="https://cdn.kalingauniversity.ac.in/ICEASRE-2027/FOT-ICEASRE-2026-27.pdf"
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

export default ICEASREConferencePage;
