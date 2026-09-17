"use client";

import React from 'react';
import MainIntro from '../components/about/main_intro';
import ImageContent from '../components/ccrc/imagecontent';
import { AccordionItem } from '../components/general/accordion';
import SectionHeading from '../components/general/SectionHeading';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import QuickLinks from '../components/general/quick_links';
import PublicationGrid from '../components/research/publication-grid';
import Gallery from '../components/general/gallery';

/* Superscripts the ordinal suffix in a date, e.g. "15th September 2026" -> 15ᵗʰ September 2026. */
const supOrdinals = (text) =>
    String(text)
        .split(/(\d+(?:st|nd|rd|th))/g)
        .map((part, i) => {
            const match = /^(\d+)(st|nd|rd|th)$/.exec(part);
            return match ? (
                <React.Fragment key={i}>
                    {match[1]}<sup className="align-super text-[0.7em]">{match[2]}</sup>
                </React.Fragment>
            ) : (
                <React.Fragment key={i}>{part}</React.Fragment>
            );
        });

/* Table cells that should read as a stacked bullet list rather than a "•"-separated run-on. */
const bulletList = (items) => (
    <ul className="list-disc pl-4 space-y-1">
        {items.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
);

const PersonCard = ({ name, role, org }) => (
    <div className="h-full rounded-xl bg-white border border-gray-100 shadow-sm p-5">
        <p className="font-semibold text-[var(--foreground)] font-plus-jakarta-sans">{name}</p>
        {role && <p className="text-sm text-gray-600 mt-1 font-plus-jakarta-sans">{role}</p>}
        {org && <p className="text-sm text-[var(--button-red)] mt-1 font-plus-jakarta-sans">{org}</p>}
    </div>
);

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

    /* ---------------- DATES / REGISTRATION / PUBLICATION / SPONSORSHIP ---------------- */
    /* Accordion order requested by the department:
       Important Dates -> Registration Details -> Registration Benefits & Concessions
       -> Publication Details -> Sponsorship Opportunities.
       The FAQ "table-display" variant renders tableSections in order, so the two
       text-only panels live here as `answer` HTML rather than as separate items. */
    const conferenceTableSections = [
        {
            id: "important-dates",
            title: "Important Dates",
            columns: [
                { key: "milestone", label: "Milestone", width: "flex-1" },
                { key: "date", label: "Date", width: "w-64" }
            ],
            data: [
                { milestone: "Abstract Submission Deadline", date: supOrdinals("15th September 2026") },
                { milestone: "Full Paper Submission Deadline", date: supOrdinals("30th September 2026") },
                { milestone: "Notification of Acceptance", date: supOrdinals("10th September 2026") },
                { milestone: "Conference Dates", date: supOrdinals("27th & 28th October 2026") },
                { milestone: "Email ID for Paper Submission", date: <strong>icstdtsd@kalingauniversity.ac.in</strong> }
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
            id: "registration-benefits",
            title: "Registration Benefits & Concessions",
            answer: `<ul class="list-disc pl-5 space-y-2">
                <li><strong>Institutional Concession:</strong> A 50% concession in the registration fee will be provided to participants from Kalinga University and institutions having an MoU with Kalinga University, Naya Raipur.</li>
                <li><strong>Group Registration:</strong> A 10% concession on the applicable registration fee for group registrations of 50 or more participants from the same institution.</li>
                <li><strong>The registration fee includes:</strong> Conference Kit, Participation Certificate, Access to all Technical Sessions, High Tea, Lunch and Snacks for both Conference Days, and E-Proceedings of the Conference.</li>
                <li><strong>Accommodation:</strong> Accommodation will be arranged for participants upon prior request (charges applicable as per availability).</li>
            </ul>`
        },
        {
            id: "publication-details",
            title: "Publication Details",
            answer: `<ul class="list-disc pl-5 space-y-2">
                <li>All accepted papers will appear in Conference Proceedings (ISBN &ndash; E-book).</li>
                <li>Selected papers will be published in Scopus-indexed journals (with applicable APCs).</li>
            </ul>`
        },
        {
            id: "sponsorship-opportunities",
            title: "Sponsorship Opportunities",
            columns: [
                { key: "slNo", label: "S.No.", width: "w-16" },
                { key: "category", label: "Category", width: "w-48" },
                { key: "amount", label: "Amount (INR)", width: "w-40" },
                { key: "benefits", label: "Benefits", widthPx: 380 }
            ],
            data: [
                {
                    slNo: 1,
                    category: "Platinum Sponsorship",
                    amount: "1,00,000/-",
                    benefits: bulletList([
                        "5 Delegate Passes",
                        "4 Standee Displays",
                        "5-min Address",
                        "Product Display Space",
                        "Logo on All Materials",
                        "4 Full-Page Ads in Proceedings",
                        "Promotional Video",
                        "Conference Kit & Memento"
                    ])
                },
                {
                    slNo: 2,
                    category: "Gold Sponsorship",
                    amount: "50,000/-",
                    benefits: bulletList([
                        "3 Delegate Passes",
                        "1 Standee Display",
                        "Logo on Materials",
                        "Inserts in Conference Kits",
                        "2 Full-Page Ads in Proceedings",
                        "Promotional Video",
                        "Conference Kit & Memento"
                    ])
                },
                {
                    slNo: 3,
                    category: "Silver Sponsorship",
                    amount: "25,000/-",
                    benefits: bulletList([
                        "2 Delegate Passes",
                        "Logo on Materials",
                        "1 Full-Page Ad in Proceedings",
                        "Conference Kit & Memento"
                    ])
                },
                {
                    slNo: 4,
                    category: "Bronze Sponsorship",
                    amount: "15,000/-",
                    benefits: bulletList([
                        "1 Delegate Pass",
                        "Logo on Conference Materials",
                        "Conference Kit & Memento"
                    ])
                },
                {
                    slNo: 5,
                    category: "Supporter Sponsorship",
                    amount: "10,000/-",
                    benefits: bulletList([
                        "Logo Display on Conference Materials"
                    ])
                }
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

    /* ---------------- ORGANISING STRUCTURE ---------------- */
    const KU = "Kalinga University, Naya Raipur";
    const CS_IT_AP = "Assistant Professor, Department of CS & Faculty of IT";
    const CS_IT_TA = "Teaching Assistant, Department of CS & Faculty of IT";

    const organisingStructure = [
        {
            title: "Chief Patrons",
            people: [
                { name: "Dr. Rajiv Kumar", role: "Chairman", org: KU },
                { name: "Dr. Sandeep Arora", role: "Chancellor", org: KU }
            ]
        },
        {
            title: "Patrons",
            people: [
                { name: "Prof. Dr. R. Shridhar", role: "Vice-Chancellor", org: KU },
                { name: "Dr. Byju John", role: "Director General", org: KU },
                { name: "Dr. Monika Sethi", role: "Pro-Vice-Chancellor", org: KU },
                { name: "Dr. Sandeep Gandhi", role: "Registrar", org: KU },
                { name: "Dr. Rahul Mishra", role: "Dean, Academic Affairs", org: KU }
            ]
        },
        {
            title: "Convenor & Co-Convenor",
            people: [
                { name: "Dr. Anupa Sinha", role: `HoD, ${CS_IT_AP}`, org: KU },
                { name: "Dr. Ayaz Ahmed Faridi", role: CS_IT_AP, org: KU },
                { name: "Dr. Sayed Athar Ali Hashmi", role: CS_IT_AP, org: KU },
                { name: "Dr. Rakesh Yashwant Gedam", role: CS_IT_AP, org: KU }
            ]
        },
        {
            title: "Organising Secretaries",
            people: [
                { name: "Ms. Anjali Goswami", role: CS_IT_AP, org: KU },
                { name: "Mr. Sanjay Behera", role: CS_IT_AP, org: KU },
                { name: "Mrs. Minakshi Soni", role: CS_IT_AP, org: KU },
                { name: "Mr. Digvijay Singh Thakur", role: CS_IT_AP, org: KU },
                { name: "Ms. Sejal Singh Kashyap", role: CS_IT_TA, org: KU }
            ]
        },
        {
            title: "Organising Committee Members",
            people: [
                { name: "Ms. Anjali Kadao", role: CS_IT_AP, org: KU },
                { name: "Ms. Roohee Khan", role: CS_IT_AP, org: KU },
                { name: "Ms. Archana Mishra", role: CS_IT_AP, org: KU },
                { name: "Mrs. Neha Shukla", role: CS_IT_AP, org: KU },
                { name: "Mr. Pravin Singh", role: CS_IT_AP, org: KU },
                { name: "Mr. Abdul Sallam", role: CS_IT_TA, org: KU },
                { name: "Mr. Tuluraj Sahu", role: CS_IT_AP, org: KU },
                { name: "Mrs. Madhavi Kshatri", role: CS_IT_AP, org: KU }
            ]
        }
    ];

    /* ---------------- CONFERENCE SESSIONS ---------------- */
    const conferenceSessions = [
        {
            day: "Day 1",
            sessions: [
                { session: "Session 1", role: "Chairperson", name: "Dr. Omprakash Vyas", org: "IIT Director, IIT New Raipur" },
                { session: "Session 2", role: "Keynote Speaker", name: "Mr. Mohammad Adil", org: "Solution Architect, Mphasis, Atlanta, Georgia, USA" }
            ]
        },
        {
            day: "Day 2",
            sessions: [
                { session: "Session 3", role: "Keynote Speaker", name: "Dr. Sarvesh Soni", org: "Scientist, Washington University" },
                { session: "Session 4", role: "Guest of Honour", name: "Dr. Sanjay Kumar", org: "Principal, CS & IT Department, PTRSU, Raipur, C.G." }
            ]
        }
    ];

    /* ---------------- ADVISORY & TECHNICAL COMMITTEES ---------------- */
    const advisoryCommittee = [
        { name: "Dr. N. K. Nagwani", role: "Professor, Department of CSE", org: "NIT Raipur" },
        { name: "Dr. Sreejit Panicker", role: "Industry Expert, Learning & Development Head", org: "Bhilai" },
        { name: "Dr. Rishi Ranjan Singh", role: "Associate Professor, CSE", org: "IIT Bhilai" },
        { name: "Dr. Sanjay Sharma", role: "Professor", org: "NIT Bhopal" },
        { name: "Dr. Rohit Miri", role: "Associate Professor, CSE", org: "CSVTU Bhilai" },
        { name: "Dr. Anuradha Tiwari", role: "Professor, CSE", org: "IIT Indore" }
    ];

    const technicalCommittee = [
        { name: "Dr. Pradeep Kumar Singh", role: "Professor, CSE", org: "NIT Raipur" },
        { name: "Dr. Tryambak Hiwarkar", role: "Professor, Director", org: "ASM Group of Institutions, Pune" },
        { name: "Mrs. Minakshi Soni", role: "Assistant Professor", org: KU },
        { name: "Mr. Digvijay Singh", role: "Assistant Professor", org: KU },
        { name: "Ms. Anjali Goswami", role: "Assistant Professor", org: KU }
    ];

    /* ---------------- CONTACT INFORMATION ---------------- */
    const contactPeople = [
        { name: "Dr. Ayaz Ahmed Faridi", role: "Assistant Professor", dept: "Department of CS & Faculty of IT", phone: "+91-9755742726", email: "ayazahmed.faridi@kalingauniversity.ac.in" },
        { name: "Dr. Sayed Athar Ali Hashmi", role: "Assistant Professor", dept: "Department of CS & Faculty of IT", phone: "+91-7000273879", email: "sayedathar.alihashmi@kalingauniversity.ac.in" },
        { name: "Dr. Rakesh Yashwant Gedam", role: "Assistant Professor", dept: "Department of CS & Faculty of IT", phone: "+91-7498664876", email: "rakesh.yashwant@kalingauniversity.ac.in" }
    ];

    /* ---------------- COLLABORATORS ---------------- */
    const collaborators = [
        { name: "Infinity Club", logo: "/icdiacs-26/collaborators/infinity-club.png" },
        { name: "Resilience Soft", logo: "/icdiacs-26/collaborators/resilience-soft.png" },
        { name: "Cyber Security Awareness Club, Kalinga University", logo: "/icdiacs-26/collaborators/cyber-security-awareness-club.png" },
        { name: "Alvitarix Services India Private Limited", logo: "/icdiacs-26/collaborators/alvitarix.png" }
    ];

    /* ---------------- GLIMPSES ---------------- */
    const glimpsesImages = [
        { id: 1, image: "/icdiacs-26/glimpses/glimpse-01.webp", alt: "ICDIACS conference glimpse 1" },
        { id: 2, image: "/icdiacs-26/glimpses/glimpse-02.webp", alt: "ICDIACS conference glimpse 2" },
        { id: 3, image: "/icdiacs-26/glimpses/glimpse-03.webp", alt: "ICDIACS conference glimpse 3" },
        { id: 4, image: "/icdiacs-26/glimpses/glimpse-04.webp", alt: "ICDIACS conference glimpse 4" },
        { id: 5, image: "/icdiacs-26/glimpses/glimpse-05.webp", alt: "ICDIACS conference glimpse 5" },
        { id: 6, image: "/icdiacs-26/glimpses/glimpse-06.webp", alt: "ICDIACS conference glimpse 6" },
        { id: 7, image: "/icdiacs-26/glimpses/glimpse-07.webp", alt: "ICDIACS conference glimpse 7" },
        { id: 8, image: "/icdiacs-26/glimpses/glimpse-08.webp", alt: "ICDIACS conference glimpse 8" },
        { id: 9, image: "/icdiacs-26/glimpses/glimpse-09.webp", alt: "ICDIACS conference glimpse 9" },
        { id: 10, image: "/icdiacs-26/glimpses/glimpse-10.webp", alt: "ICDIACS conference glimpse 10" },
        { id: 11, image: "/icdiacs-26/glimpses/glimpse-11.webp", alt: "ICDIACS conference glimpse 11" },
        { id: 12, image: "/icdiacs-26/glimpses/glimpse-12.webp", alt: "ICDIACS conference glimpse 12" },
        { id: 13, image: "/icdiacs-26/glimpses/glimpse-13.webp", alt: "ICDIACS conference glimpse 13" },
        { id: 14, image: "/icdiacs-26/glimpses/glimpse-14.webp", alt: "ICDIACS conference glimpse 14" },
        { id: 15, image: "/icdiacs-26/glimpses/glimpse-15.webp", alt: "ICDIACS conference glimpse 15" },
        { id: 16, image: "/icdiacs-26/glimpses/glimpse-16.webp", alt: "ICDIACS conference glimpse 16" },
        { id: 17, image: "/icdiacs-26/glimpses/glimpse-17.webp", alt: "ICDIACS conference glimpse 17" },
        { id: 18, image: "/icdiacs-26/glimpses/glimpse-18.webp", alt: "ICDIACS conference glimpse 18" },
        { id: 19, image: "/icdiacs-26/glimpses/glimpse-19.webp", alt: "ICDIACS conference glimpse 19" },
        { id: 20, image: "/icdiacs-26/glimpses/glimpse-20.webp", alt: "ICDIACS conference glimpse 20" },
        { id: 21, image: "/icdiacs-26/glimpses/glimpse-21.webp", alt: "ICDIACS conference glimpse 21" },
        { id: 22, image: "/icdiacs-26/glimpses/glimpse-22.webp", alt: "ICDIACS conference glimpse 22" },
        { id: 23, image: "/icdiacs-26/glimpses/glimpse-23.webp", alt: "ICDIACS conference glimpse 23" },
        { id: 24, image: "/icdiacs-26/glimpses/glimpse-24.webp", alt: "ICDIACS conference glimpse 24" },
        { id: 25, image: "/icdiacs-26/glimpses/glimpse-25.webp", alt: "ICDIACS conference glimpse 25" },
        { id: 26, image: "/icdiacs-26/glimpses/glimpse-26.webp", alt: "ICDIACS conference glimpse 26" },
        { id: 27, image: "/icdiacs-26/glimpses/glimpse-27.webp", alt: "ICDIACS conference glimpse 27" },
        { id: 28, image: "/icdiacs-26/glimpses/glimpse-28.webp", alt: "ICDIACS conference glimpse 28" },
        { id: 29, image: "/icdiacs-26/glimpses/glimpse-29.webp", alt: "ICDIACS conference glimpse 29" },
        { id: 30, image: "/icdiacs-26/glimpses/glimpse-30.webp", alt: "ICDIACS conference glimpse 30" },
        { id: 31, image: "/icdiacs-26/glimpses/glimpse-31.webp", alt: "ICDIACS conference glimpse 31" },
        { id: 32, image: "/icdiacs-26/glimpses/glimpse-32.webp", alt: "ICDIACS conference glimpse 32" },
        { id: 33, image: "/icdiacs-26/glimpses/glimpse-33.webp", alt: "ICDIACS conference glimpse 33" },
        { id: 34, image: "/icdiacs-26/glimpses/glimpse-34.webp", alt: "ICDIACS conference glimpse 34" },
        { id: 35, image: "/icdiacs-26/glimpses/glimpse-35.webp", alt: "ICDIACS conference glimpse 35" },
        { id: 36, image: "/icdiacs-26/glimpses/glimpse-36.webp", alt: "ICDIACS conference glimpse 36" },
        { id: 37, image: "/icdiacs-26/glimpses/glimpse-37.webp", alt: "ICDIACS conference glimpse 37" },
        { id: 38, image: "/icdiacs-26/glimpses/glimpse-38.webp", alt: "ICDIACS conference glimpse 38" },
        { id: 39, image: "/icdiacs-26/glimpses/glimpse-39.webp", alt: "ICDIACS conference glimpse 39" },
        { id: 40, image: "/icdiacs-26/glimpses/glimpse-40.webp", alt: "ICDIACS conference glimpse 40" },
        { id: 41, image: "/icdiacs-26/glimpses/glimpse-41.webp", alt: "ICDIACS conference glimpse 41" }
    ];

    /* ---------------- REGISTRATION QR CODES ---------------- */
    const registrationQrCodes = [
        { label: "Scan to Pay", src: "/icdiacs-26/scan-to-pay.png" },
        { label: "Scan to Register", src: "/icdiacs-26/scan-to-register.png" }
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
                        3<sup className="align-super text-[0.55em]">rd</sup> International Conference On Digital Intelligence
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
                            <p className="font-semibold text-[var(--foreground)]">{supOrdinals("27th & 28th October 2026")}</p>
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
                description=""
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
                    <strong key="submit-to">Submit to: icstdtsd@kalingauniversity.ac.in</strong>
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
                items={[]}
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

            {/* ================= ORGANISING STRUCTURE ================= */}
            <section className="py-16 bg-[var(--lite-sand)]">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Organising Structure"
                        titleClassName="text-center mb-12"
                    />
                    <div className="max-w-6xl mx-auto space-y-10">
                        {organisingStructure.map((group) => (
                            <div key={group.title}>
                                <h3 className="font-stix text-xl md:text-2xl text-[var(--button-red)] mb-4">
                                    {group.title}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {group.people.map((person) => (
                                        <PersonCard key={person.name} {...person} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CONFERENCE SESSIONS ================= */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Conference Sessions"
                        titleClassName="text-center mb-12"
                    />
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {conferenceSessions.map((day) => (
                            <div key={day.day} className="rounded-2xl bg-[var(--lite-sand)] p-6 md:p-8">
                                <h3 className="font-stix text-xl md:text-2xl text-[var(--button-red)] mb-5">
                                    {day.day}
                                </h3>
                                <div className="space-y-4">
                                    {day.sessions.map((item) => (
                                        <div key={item.session} className="rounded-xl bg-white border border-gray-100 p-5">
                                            <p className="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-plus-jakarta-sans">
                                                {item.session} &middot; {item.role}
                                            </p>
                                            <p className="font-semibold text-[var(--foreground)] mt-2 font-plus-jakarta-sans">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-gray-600 mt-1 font-plus-jakarta-sans">
                                                {item.org}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= ADVISORY, TECHNICAL & ORGANISING COMMITTEES ================= */}
            <section className="py-16 bg-[var(--lite-sand)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-14">
                        <div>
                            <SectionHeading
                                title="Advisory Committee"
                                titleClassName="text-center mb-8"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {advisoryCommittee.map((person) => (
                                    <PersonCard key={person.name} {...person} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <SectionHeading
                                title="Technical Committee"
                                titleClassName="text-center mb-8"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {technicalCommittee.map((person) => (
                                    <PersonCard key={person.name} {...person} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <SectionHeading
                                title="Organising Committee"
                                titleClassName="text-center mb-8"
                            />
                            <p className="text-center text-gray-700 font-plus-jakarta-sans">
                                All CS &amp; IT Faculty Members
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CONTACT INFORMATION ================= */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Contact Information"
                        titleClassName="text-center mb-12"
                    />
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactPeople.map((person) => (
                            <div key={person.email} className="rounded-2xl bg-[var(--lite-sand)] p-6">
                                <p className="font-semibold text-[var(--foreground)] font-plus-jakarta-sans">
                                    {person.name}
                                </p>
                                <p className="text-sm text-gray-600 mt-1 font-plus-jakarta-sans">{person.role}</p>
                                <p className="text-sm text-gray-600 font-plus-jakarta-sans">{person.dept}</p>
                                <p className="mt-4 text-sm font-plus-jakarta-sans">
                                    <a
                                        href={`tel:${person.phone.replace(/[^+\d]/g, '')}`}
                                        className="text-[var(--button-red)] hover:underline"
                                    >
                                        📲 {person.phone}
                                    </a>
                                </p>
                                <p className="text-sm font-plus-jakarta-sans break-all">
                                    <a
                                        href={`mailto:${person.email}`}
                                        className="text-[var(--button-red)] hover:underline"
                                    >
                                        📩 {person.email}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-700 mt-10 font-plus-jakarta-sans">
                        <strong>For paper submission and queries,</strong>
                        <br />
                        <a
                            href="mailto:icstdtsd@kalingauniversity.ac.in"
                            className="text-[var(--button-red)] hover:underline"
                        >
                            📩 icstdtsd@kalingauniversity.ac.in
                        </a>
                    </p>
                </div>
            </section>

            {/* ================= COLLABORATORS ================= */}
            <section className="py-16 bg-[var(--lite-sand)]">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Collaborators"
                        titleClassName="text-center mb-12"
                    />
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                        {collaborators.map((collaborator) => (
                            <div
                                key={collaborator.name}
                                className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-between gap-4"
                            >
                                <img
                                    src={collaborator.logo}
                                    alt={collaborator.name}
                                    className="h-24 w-full object-contain"
                                />
                                <p className="text-center text-sm text-gray-700 font-plus-jakarta-sans">
                                    {collaborator.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= GLIMPSES ================= */}
            <Gallery
                title="Glimpses"
                images={glimpsesImages}
            />

            {/* ================= SCAN TO PAY / SCAN TO REGISTER ================= */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {registrationQrCodes.map((qr) => (
                            <div
                                key={qr.label}
                                className="rounded-2xl bg-[var(--lite-sand)] p-6 flex flex-col items-center gap-4"
                            >
                                <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)]">
                                    {qr.label}
                                </h3>
                                <img
                                    src={qr.src}
                                    alt={qr.label}
                                    className="w-44 h-44 object-contain bg-white rounded-xl p-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= DOWNLOAD BROCHURE ================= */}
            <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10 mb-6">
                <div className="rounded-2xl bg-[var(--lite-sand)] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)]">
                            ICDIACS 2026 <br />
                            3<sup className="align-super text-[0.55em]">rd</sup> International Conference On Digital Intelligence
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
