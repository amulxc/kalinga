"use client";

import React, { useState } from 'react';
import MainIntro from '../components/about/main_intro';
import ImageContent from '../components/ccrc/imagecontent';
import { AccordionItem } from '../components/general/accordion';
import SectionHeading from '../components/general/SectionHeading';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';
import PublicationGrid from '../components/research/publication-grid';



const LawConferencePage = () => {

    const Items = [
        {
            id: 1,
            text: "The abstract must be in an A4 sheet in Word Document Format, typed in Times New Roman in 12 font size with 1.5-line spacing in not more than 300 words. It should not contain more than eight keywords.",
        },
        {
            id: 2,
            text: "The abstract should contain personal details of the author(s) in the order: Title of the Paper, Name, Designation, Institute/University/College/Organisation, Contact Number, E-mail, and Address of Correspondence of the Author(s).",
        },
        {
            id: 3,
            text: "Kindly indicate the name of the main author for correspondence in case of more than one author.",
        },
        {
            id: 4,
            text: "Acceptance of the Abstract will be communicated via e-mail <a href=\"mailto:lawconference@kalingauniversity.ac.in\">lawconference@kalingauniversity.ac.in</a>",
        },
    ]

    const tableSections = [
        {
            id: 1,
            title: "Chief Patrons",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "institution", label: "Institution" }
            ],
            data: [
                { name: "Dr. Rajiv Kumar", designation: "Chairman", institution: "Kalinga University, Naya Raipur" },
                { name: "Dr. Sandeep Arora", designation: "Chancellor", institution: "Kalinga University, Naya Raipur" }
            ]
        },
        {
            id: 2,
            title: "Patrons",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "institution", label: "Institution" }
            ],
            data: [
                { name: "Prof. (Dr.) R. Shridhar", designation: "Vice-Chancellor", institution: "Kalinga University, Naya Raipur" },
                { name: "Dr. Byju John", designation: "Director General", institution: "Kalinga University, Naya Raipur" },
                { name: "Dr. Sandeep Gandhi", designation: "Registrar", institution: "Kalinga University, Naya Raipur" }
            ]
        },
        {
            id: 3,
            title: "Advisory Committee",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "institution", label: "Institution" }
            ],
            data: [
                { name: "Dr. Rahul Mishra", designation: "Dean of Academic Affairs", institution: "Kalinga University, Naya Raipur" },
                { name: "Dr. Vijayalaxmi Biradar", designation: "Director IQAC", institution: "Kalinga University, Naya Raipur" },
                { name: "Dr. Azim Khan B. Pathan", designation: "Dean, Faculty of Law", institution: "Kalinga University, Naya Raipur" }
            ]
        },
        {
            id: 4,
            title: "External Advisory Board",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation/Institution" }
            ],
            data: [
                { name: "Prof. (Dr.) Farhana Helal Mehtab", designation: "Dean, Faculty of Law, Green University of Bangladesh" },
                { name: "Dr. Sarah Jane Fox", designation: "Staffordshire University, UK" },
                { name: "Alfredo M. Ronchi", designation: "EC, Medici Framework, Italy" },
                { name: "Andrii Paziuk", designation: "Kyiv Aviation Institute, Ukraine" },
                { name: "Ahmad Ghouri", designation: "Associate Professor, University of Sussex" },
                { name: "Prof. Balamurugan Baluswamy", designation: "Professor and Chairperson, School of Engineering and IT, MAHE, Dubai" },
                { name: "Dr. Mohammad Ataur Rahman", designation: "Advocate, Supreme Court of Bangladesh" },
                { name: "Dr. Garry Fehr", designation: "Associate Vice-President Research, Engagement and Graduate Studies, University of the Fraser Valley" }
            ]
        },
        {
            id: 5,
            title: "Legal Experts",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation/Affiliation" }
            ],
            data: [
                { name: "Dr. Pavan Duggal", designation: "Advocate, Supreme Court of India" },
                { name: "Advocate Rajas Pingle", designation: "Cyber Law Expert" },
                { name: "Mr. Ashutosh Shrivastava", designation: "Advocate, Supreme Court of India" },
                { name: "Mr. Rodney D. Ryder", designation: "Founding Partner, Scriboard" },
                { name: "Dr. Saket Anand", designation: "Advocate on Record, Supreme Court of India" }
            ]
        },
        {
            id: 6,
            title: "Academic Experts",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation/Affiliation" }
            ],
            data: [
                { name: "Prof. Dr. Dilip Ukey", designation: "Vice-Chancellor, MNLU Mumbai" },
                { name: "Prof. Dr. V. C. Vivekanandan", designation: "Vice-Chancellor, HNLU Raipur" },
                { name: "Dr. Manoj Kumar Sinha", designation: "Vice-Chancellor, DSNLU, Jabalpur" },
                { name: "Prof. Venkat Rao", designation: "Vice-Chancellor, India International University of Legal Studies and Research, Goa" },
                { name: "Prof. Dr. V. K. Ahuja", designation: "Director, Indian Law Institute, New Delhi" },
                { name: "Dr. A. Nagarathna", designation: "Associate Professor of Law, NLSIU Bengaluru" },
                { name: "Dr. Mohd. Nizam Ashraf Khan", designation: "Professor of Law, IILM University, Greater Noida" },
                { name: "Dr. Mamta Rana", designation: "Associate Professor, HNB Garhwal University" },
                { name: "Prof. Dr. Mohd. Imran", designation: "Professor, MANUU Law School" },
                { name: "Dr. Rajeev Khare", designation: "Dean, NLIU Bhopal" }
            ]
        },
        {
            id: 7,
            title: "Convenor",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "institution", label: "Institution" }
            ],
            data: [
                { name: "Mrs. Saloni Tyagi Shrivastava", designation: "HoD (In-charge), Faculty of Law", institution: "Kalinga University, Naya Raipur" }
            ]
        },
        {
            id: 8,
            title: "Co-Convenors",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "institution", label: "Institution" }
            ],
            data: [
                { name: "Dr. Payal Bohria", designation: "Assistant Professor", institution: "Kalinga University, Naya Raipur" },
                { name: "Dr. Savyasanchi Pandey", designation: "Assistant Professor", institution: "Kalinga University, Naya Raipur" }
            ]
        },
        {
            id: 9,
            title: "Organising Secretary",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "institution", label: "Institution" }
            ],
            data: [
                { name: "Ms. Chikita Malhotra", designation: "Assistant Professor", institution: "Kalinga University, Naya Raipur" }
            ]
        },
        {
            id: 10,
            title: "Joint Organising Secretaries",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" },
                { key: "institution", label: "Institution" }
            ],
            data: [
                { name: "Ms. Vishakha Sakharkar", designation: "Assistant Professor", institution: "Kalinga University, Naya Raipur" },
                { name: "Ms. Vanshika Kapoor", designation: "Assistant Professor", institution: "Kalinga University, Naya Raipur" }
            ]
        }
    ];

    const publicationdata = [
        {
            id: 1,
            title: 'Students',
            value: '8000+',
            description: 'Learners across diverse disciplines.',
        },
        {
            id: 2,
            title: 'International Students',
            value: '650+',
            description: 'From 33+ countries',
        },
        {
            id: 3,
            title: 'Scholarships Distributed',
            value: 'INR 3Cr+',
            description: 'Enabling access and excellence',
        },
        {
            id: 4,
            title: 'Programs',
            value: '130+',
            description: 'Undergraduate, postgraduate, and doctoral',
        },
        {
            id: 5,
            title: 'Recruitment Partners',
            value: '400+',
            description: 'Leading organizations and firms',
        },
        {
            id: 6,
            title: 'Research Publications',
            value: '4700+',
            description: 'Peer-reviewed contributions',
        },
        {
            id: 7,
            title: 'Patents',
            value: '549+',
            description: 'Innovations protected',
        },
        {
            id: 8,
            title: 'Sponsored Research Projects',
            value: '160+',
            description: 'Industry and government funded',
        },
        {
            id: 9,
            title: 'Consultancy Projects',
            value: '130+',
            description: 'Applied solutions for partners',
        },
        {
            id: 10,
            title: 'MoUs Signed',
            value: '200+',
            description: 'Strategic academic collaborations',
        },
        {
            id: 11,
            title: 'Centres of Excellence',
            value: '7',
            description: 'Specialized research and innovation hubs',
        },
        {
            id: 12,
            title: 'Laboratories',
            value: '100+',
            description: 'State-of-the-art lab facilities',
        },
    ]

    const sponsorshipData = [
        {
            slNo: 1,
            level: "Platinum Sponsorship",
            amount: "INR 100,000/-",
            description: "Exclusive Sponsorship Benefits:",
            listItems: [
                "5 Complimentary Delegate Passes",
                "4 Complimentary Standee/Banner",
                "Address to the audience for 5 Minutes",
                "Dedicated space to display products, etc.",
                "Prominent Display of Logo on Conference Materials",
                "Inserts/Flyers will be put in Conference Kits",
                "4 Full-page ads in our Conference Proceedings",
                "5-minute promotional video",
                "Conference Kit and Memento"
            ]
        },
        {
            slNo: 2,
            level: "Diamond Sponsorship",
            amount: "INR 50,000/-",
            description: "Exclusive Sponsorship Benefits:",
            listItems: [
                "3 Complimentary Delegate Passes",
                "1 Complimentary Standee/Banner",
                "Prominent Display of Logo on Conference Materials",
                "Inserts/Flyers will be put in Conference Kits",
                "2 Full-page ads in our Conference Proceedings",
                "5-minute promotional video",
                "Conference Kit and Memento"
            ]
        },
        {
            slNo: 3,
            level: "Gold Sponsorship",
            amount: "INR 25,000/-",
            description: "Exclusive Sponsorship Benefits:",
            listItems: [
                "2 Complimentary Delegate Passes",
                "Display of Logo on Conference Materials",
                "1 Full-page ad in our Conference Proceedings",
                "Conference Kit and Memento"
            ]
        },
        {
            slNo: 4,
            level: "Silver Sponsorship",
            amount: "INR 15,000/-",
            description: "Exclusive Sponsorship Benefits:",
            listItems: [
                "1 Complimentary Delegate Pass",
                "Display of Logo on Conference Materials",
                "Conference Kit and Memento"
            ]
        },
        {
            slNo: 5,
            level: "Bronze Sponsorship",
            amount: "INR 10,000/-",
            description: "Exclusive Sponsorship Benefits:",
            listItems: [
                "Display of Logo on Conference Materials"
            ]
        }
    ];

    const sponsorshipTableSections = [
        {
            id: "sponsorship-levels",
            title: "Sponsorship Levels",
            columns: [
                { key: "slNo", label: "S.No.", width: "w-16" },
                { key: "level", label: "Sponsorship Levels", width: "w-48" },
                { key: "amount", label: "Amount", width: "w-32" },
                { key: "description", label: "Exclusive Sponsorship Benefits", width: "flex-1" }
            ],
            data: sponsorshipData
        }
    ];

    const importantDatesItems = [
        {
            id: 1,
            question: "Important Dates",
            answer: [
                "Submission of Abstract: 15th August 2026",
                "Confirmation of Abstract: 31st August 2026",
                "Last Date for Registration And Payment: 30th September 2026",
                "Submission of Full Paper: 15th October 2026",
                "Global Conference: 20th & 21st November 2026",
                "Mode of the Conference: Hybrid Mode (Online & Offline)"
            ]
        }
    ];

    const registrationFeeSections = [
        {
            id: "registration-fee-table",
            title: "Registration Fee Structure",
            columns: [
                { key: "category", label: "Category", width: "flex-1" },
                { key: "fee", label: "Fee (inclusive of taxes)", width: "w-48" }
            ],
            data: [
                { category: "Faculty & Other Educators", fee: "INR 1500/-" },
                { category: "Research Scholars", fee: "INR 1500/-" },
                { category: "UG+PG Students", fee: "INR 1200/-" },
                { category: "Industry Experts", fee: "INR 2500/-" },
                { category: "International Participants", fee: "USD 50/-" },
                { category: "Law Firms, Senior Counsel and General Counsel", fee: "INR 5000/-" },
                { category: "Advocates Below 40 years", fee: "INR 1200/-" }
            ],
            footerContent: [
                "After the Registration Dates, each category will have an additional charge of INR 250/-, and International Participants will have an additional charge of USD 20/-.",
                "50% concession to participants from Kalinga University and Colleges having an MoU with Kalinga University, Naya Raipur.",
                "Accommodation will be provided at the Participants' request (Charges Applicable).",
                "Registration Fees include a Conference Kit, High Tea, Lunch, and Snacks for both days."
            ]
        }
    ];

    const conferenceInfoItems = [
        {
            id: "payment",
            question: "Fee Payment",
            answer: [
                "Step 1: Participants will have to make a payment on the given bank details:",
                "Bank Name: PNB",
                "Account Name: KALINGA UNIVERSITY FACULTY OF LAW",
                "Account No.: 1744100100003546",
                "IFSC Code: PUNB0174410",
                "Step 2: Fill out the registration form with all necessary information and add a screenshot of the payment details."
            ]
        },
        {
            id: "submission",
            question: "Submission Process",
            answer: [
                "The submission link for the full paper and payment will be shared via email only with participants whose abstracts are selected. Participants who want to attend the conference without a paper presentation will also receive a final registration link.",
                "Registration Link: <a href='https://forms.gle/VdmyVBuzvnVV3GbB8' target='_blank'>https://forms.gle/VdmyVBuzvnVV3GbB8</a>",
                "Note – Authors who are ready with the final papers before the submission deadline can directly send them via e-mail to: <a href='mailto:lawconference@kalingauniversity.ac.in'>lawconference@kalingauniversity.ac.in</a>"
            ]
        },
        {
            id: "registration-fee",
            question: "Registration Fee",
            answer: `<div class="overflow-x-auto mb-6">
                <table class="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border border-gray-300 p-2 text-left">Category</th>
                            <th class="border border-gray-300 p-2 text-left">Fee (inclusive of taxes)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 p-2">Faculty & Other Educators</td><td class="border border-gray-300 p-2">INR 1500/-</td></tr>
                        <tr><td class="border border-gray-300 p-2">Research Scholars</td><td class="border border-gray-300 p-2">INR 1500/-</td></tr>
                        <tr><td class="border border-gray-300 p-2">UG+PG Students</td><td class="border border-gray-300 p-2">INR 1200/-</td></tr>
                        <tr><td class="border border-gray-300 p-2">Industry Experts</td><td class="border border-gray-300 p-2">INR 2500/-</td></tr>
                        <tr><td class="border border-gray-300 p-2">International Participants</td><td class="border border-gray-300 p-2">USD 50/-</td></tr>
                        <tr><td class="border border-gray-300 p-2">Law Firms, Senior Counsel and General Counsel</td><td class="border border-gray-300 p-2">INR 5000/-</td></tr>
                        <tr><td class="border border-gray-300 p-2">Advocates Below 40 years</td><td class="border border-gray-300 p-2">INR 1200/-</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="space-y-3 text-gray-700 text-sm">
                <p><strong>After the Registration Dates, the Charges will be Applicable as follows:</strong></p>
                <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>Each Category: INR 250/- additional</li>
                    <li>International Participants: USD 20/- additional</li>
                </ul>
                <p>➢ 50% concession to participants from Kalinga University and Colleges having an MoU with Kalinga University, Naya Raipur.</p>
                <p>➢ Accommodation will be provided at the Participants’ request (Charges Applicable).</p>
                <p>➢ Registration Fees include a Conference Kit, High Tea, Lunch, and Snacks for both days.</p>
            </div>`
        },
        {
            id: "awards",
            question: "Awards & Publication",
            answer: `<ul class="list-disc list-inside space-y-2 mb-6">
                <li>Certificate/E-Certificate will be provided to every Participant.</li>
                <li>Certificate of Merit will be provided to the 3 Best Paper Presentations.</li>
                <li>The 10 Best Selected Papers will be published in a reputed Scopus-indexed journal.</li>
                <li>Other Selected Papers will be published in an edited book with an ISBN.</li>
                <li>Conference proceedings will be released at the Inauguration of the Conference.</li>
            </ul>
            <div class="mt-4 pt-4 border-t border-gray-200">
                <strong class="text-lg text-gray-900 block mb-2">Note:</strong>
                <p class="text-gray-700 mb-2">The Author has to pay the publication charges for the publication in the Scopus-indexed journal.</p>
                <p class="text-gray-700">A soft copy of the book/proceeding shall be provided to the authors. (A hard copy will be provided on request with applicable charges).</p>
            </div>`
        }
    ];

    return (
        <>
            <section className="py-12 md:py-16 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h5 className="font-plus-jakarta-sans font-bold text-[var(--button-red)] titlecase tracking-[0.2em] text-sm md:text-base mb-2">
                        FACULTY OF LAW
                    </h5>
                    <p className="font-plus-jakarta-sans font-semibold text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8">
                        ORGANISES
                    </p>
                    <h1 className="font-stix font-bold text-2xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4">
                        Two Day Global Conference
                    </h1>
                    <p className="font-stix italic text-lg md:text-xl text-gray-500 mb-4 lowercase">
                        on
                    </p>
                    <h2 className="font-stix font-bold text-xl md:text-2xl lg:text-4xl text-gray-800 leading-tight mb-10 titlecase max-w-4xl mx-auto">
                        Emerging Trends In Artificial Intelligence: <br className="hidden md:block" /> Comparative Approaches Of Legal Governance
                    </h2>
                    <p className="font-plus-jakarta-sans font-extrabold text-xl md:text-2xl lg:text-3xl text-gray-900 border-t border-gray-100 pt-8 inline-block">
                        20th & 21st November 2026
                    </p>
                </div>
            </section>


            <MainIntro
                title="About Kalinga University"
                subtitle=""
                description={[
                    "Kalinga University, established in 2013, stands out as one of the leading private universities strategically located in the Smart City of New Raipur, Chhattisgarh. The University has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year and has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/academic-facilities/mootcourt.webp"
                imageAlt="Kalinga University Campus"
            />
            <PublicationGrid stats={publicationdata} />
            <MainIntro
                title="About The Faculty Of Law"
                subtitle=""
                description={[
                    "The faculty of law at Kalinga University is a time-tested department offering excellence in the field of legal education and fulfilling the demands of young aspirants by making them employable in the legal sector. We are one of the best colleges for law admissions as our different legal education programs are aligned with UGC and NEP guidelines and offer high-quality education through outcome-based learning methods. The courses offered by our faculty of law are carefully designed to ensure that our graduates turn out to be industry-ready professionals.",
                    "We have digital classrooms and a moot court with all the modern technologies and facilities, preparing students for real-world legal challenges. Our curriculum is designed to satisfy the academic needs of every student and to make them professionally ready. Our law school prepares young legal professionals with a thorough understanding of theoretical and practical legal studies so that they can get familiar with the complex legal systems.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/law-conference/BA-LLB-AboutImage.webp"
                imageAlt="International Conference on Law and AI"
            />
            <MainIntro
                title="About The Two-Day Global Conference"
                subtitle=""
                description={[
                    "The Two-Day Global Conference on “Emerging Trends in Artificial Intelligence: Comparative Approaches of Legal Governance” aims to examine the growing relationship between AI and legal systems globally. Due to the growing influence of AI across commercial laws, criminal justice systems, intellectual property regimes, judicial institutions, healthcare regulations, cyber law frameworks, and international legal mechanisms, it raises concerns regarding privacy, transparency, accountability, liability, bias, and protection of human rights",
                    "The conference will provide a global platform for legal professionals, judges, academicians, researchers, and industry experts to discuss comparative legal and regulatory approaches to AI governance. Through keynote addresses, research paper presentations, case-study analysis, and panel discussions, participants will explore global regulatory practices, emerging challenges, and policy recommendations for ethical, accountable, and future-ready AI governance.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/law-conference/FacultyOfLaw-AboutDept.webp"
                imageAlt="International Conference on Law and AI"
                reverseLayout={true}
                sectionClassName="md:py-16 bg-[var(--lite-sand)] py-16 !pb-20"
            />
            <ImageContent
                hasImage={true}
                readmore={false}
                className="items-center justify-center mt-12 [&_img]:!w-[100px] [&_img]:!h-auto md:[&>img]:order-last md:[&>div]:order-first"
                title="Call For Papers"
                subtitleclassName="hidden"
                imageSrc="https://cdn.kalingauniversity.ac.in/law-conference/document.svg"
                imageWidth={100}
                imageHeight={100}
                description="This Global Conference on 'Emerging Trends in Artificial Intelligence: Comparative Approaches of Legal Governance”, organised by the Faculty of Law, Kalinga University, Naya Raipur, will be held on 20th & 21st November 2026. The Conference invites contributions in the form of full-length scholarly papers documenting original and substantial research work."
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Theme And Sub-Themes"
                        titleClassName="text-center mb-12"
                    />
                    <div className="max-w-4xl mx-auto mb-8">
                        <div className="mb-8">
                            <h3 className="font-plus-jakarta-sans font-bold text-[20px] text-[var(--button-red)] mb-2 text-center">Theme</h3>
                            <p className="font-stix text-[26px] leading-tight text-gray-800 text-center">Emerging Trends in Artificial Intelligence: Comparative Approaches of Legal Governance</p>
                        </div>
                        <h3 className="font-plus-jakarta-sans font-bold text-[20px] text-[var(--button-red)] mb-4 text-center">Sub Themes</h3>
                    </div>
                    <div className="max-w-6xl mx-auto mb-12">
                        <h3 className="font-plus-jakarta-sans font-bold text-[20px] text-[var(--button-red)] mb-8 text-center">Sub Themes</h3>
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Left Column */}
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                <AccordionItem 
                                    title="AI in Commercial Law and Financial Regulation"
                                    titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                    bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                >
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                        <li>AI-driven contracts and smart contracts</li>
                                        <li>Algorithmic decision-making in Banking, Fintech and Digital Transactions</li>
                                        <li>Consumer protection in AI-powered marketplaces</li>
                                        <li>Corporate Social Responsibility in the Tech Industry</li>
                                        <li>Antitrust implications of AI in markets</li>
                                        <li>Data Privacy Regulations and Competition Law</li>
                                        <li>Taxation Challenges in the era of AI</li>
                                        <li>Public-Private partnerships in AI oversight</li>
                                        <li>Comparative regulatory approaches in global trade</li>
                                    </ul>
                                </AccordionItem>
                                <AccordionItem 
                                    title="AI in Criminal Law"
                                    titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                    bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                >
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                        <li>Criminal liability for AI-assisted offences</li>
                                        <li>Autonomous Systems and Mens Rea</li>
                                        <li>AI in predictive policing</li>
                                        <li>Criminal Liability for Deep Fake Offences</li>
                                        <li>Sentencing algorithms: fairness and bias</li>
                                        <li>Digital Forensics and Authenticity Verification</li>
                                    </ul>
                                </AccordionItem>
                                <AccordionItem 
                                    title="Intellectual Property Law and Innovation in AI"
                                    titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                    bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                >
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                        <li>Copyright ownership of AI-generated works</li>
                                        <li>Patentability of AI inventions</li>
                                        <li>AI and traditional knowledge protection</li>
                                        <li>Intellectual Property Rights and AI Innovation</li>
                                        <li>Trade Secrets and AI Technology</li>
                                        <li>Trade Law and the Global AI Market</li>
                                        <li>Comparative IP reforms in the US, EU, India and Japan</li>
                                    </ul>
                                </AccordionItem>
                                <AccordionItem 
                                    title="Access to Justice Through AI"
                                    titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                    bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                >
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                        <li>Online Dispute Resolution and AI</li>
                                        <li>AI-Powered Legal Aid Services</li>
                                        <li>Chatbots and Virtual Assistants in Legal Aid</li>
                                        <li>AI in Pro Bono Legal Services</li>
                                        <li>Justice Tech for Vulnerable Communities</li>
                                        <li>AI tools in Indian courts (case management, translation, research)</li>
                                        <li>AI and judicial decision-making ethics</li>
                                        <li>Digital courts and e-governance</li>
                                        <li>Comparative judicial technology models (UK, Estonia, Singapore)</li>
                                    </ul>
                                </AccordionItem>
                                <AccordionItem 
                                    title="AI, Healthcare, and Legal Governance"
                                    titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                    bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                >
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                        <li>Regulation of AI in Healthcare: Challenges and Opportunities</li>
                                        <li>Data Protection and Privacy in AI-driven Health Systems</li>
                                        <li>Liability and Accountability in AI-based Medical Decisions</li>
                                        <li>Ethical and Legal Issues in AI-assisted Diagnosis and Treatment</li>
                                        <li>Intellectual Property Rights in AI-generated Medical Innovations</li>
                                        <li>AI and the Right to Health</li>
                                        <li>Informed Consent in AI-based Healthcare Systems</li>
                                        <li>Digital Health Policies and AI Integration in India</li>
                                        <li>AI in Rural and Remote Healthcare Delivery</li>
                                        <li>Global Regulatory Approaches to AI in Healthcare</li>
                                    </ul>
                                </AccordionItem>
                            </div>

                            {/* Right Column */}
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                <AccordionItem 
                                    title="Data Protection, Privacy, and Cybersecurity"
                                    titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                    bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                >
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                        <li>Data protection and AI systems</li>
                                        <li>Personal data protection in AI-driven systems</li>
                                        <li>Privacy challenges in big data and machine learning</li>
                                        <li>Consent and data ownership in digital ecosystems</li>
                                        <li>Role of encryption and cryptography in data protection</li>
                                        <li>Cybersecurity risks in AI-enabled technologies</li>
                                        <li>Data breaches and liability in AI systems</li>
                                        <li>International Collaboration and Standardisation</li>
                                        <li>Ethical Considerations in AI Governance</li>
                                        <li>Regulatory Challenges in Emerging Technologies</li>
                                        <li>Transparency and Explainability in AI Decision-making</li>
                                    </ul>
                                </AccordionItem>
                                <AccordionItem 
                                    title="Legal Policies and Deep Fakes"
                                    titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                    bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                >
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                        <li>Legislative Responses to Deep Fakes</li>
                                        <li>Intellectual Property Rights in the Era of Deep Fakes</li>
                                        <li>Privacy Concerns and Deep Fake Regulations</li>
                                        <li>Criminal Liability for Deep Fake Offences</li>
                                        <li>Digital Forensics and Authenticity Verification</li>
                                        <li>Impact on Political Discourse and Election Integrity</li>
                                        <li>Media and Journalism Ethics in the Deep Fake Era</li>
                                        <li>Cross-Border Challenges in Deep Fake Regulation</li>
                                        <li>Technology-Assisted Dispute Resolution for Deep Fakes</li>
                                    </ul>
                                </AccordionItem>
                                <AccordionItem 
                                    title="AI in Legal Practice and Education"
                                    titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                    bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                >
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                        <li>Education and Awareness in Digital Literacy</li>
                                        <li>Innovative Tools for Legal Research and Analysis</li>
                                        <li>AI-Enhanced Legal Writing and Document Generation</li>
                                        <li>Virtual Legal Assistants and AI in Law Firms</li>
                                        <li>Simulation and Training in Legal Education</li>
                                        <li>Ethical Considerations in AI-Driven Legal Practice</li>
                                        <li>AI in Predictive Legal Analytics</li>
                                        <li>AI and the Future of Legal Practice</li>
                                        <li>Adapting Legal Curricula to AI Advancements</li>
                                        <li>AI and diversity in the legal profession</li>
                                    </ul>
                                </AccordionItem>
                                <AccordionItem 
                                    title="Digital Sovereignty and Ethical Challenges"
                                    titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                                    bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                                >
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                                        <li>AI and Human Rights Law</li>
                                        <li>Autonomous Weapons and International Humanitarian Law</li>
                                        <li>Data Governance and Digital Sovereignty: Issues and Challenges</li>
                                        <li>Digital Citizenship and Rights in the Digital Age</li>
                                        <li>Digital Imperialism and Global Technology Influence</li>
                                        <li>Cybersecurity and International Security Implications</li>
                                        <li>Cross-border AI governance</li>
                                        <li>Global AI treaties and regulatory harmonisation</li>
                                        <li>Role of WTO, WIPO and UN bodies in AI regulation</li>
                                    </ul>
                                </AccordionItem>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto mt-8">
                        <p className="text-gray-600 font-plus-jakarta-sans italic">
                            [Note: The above themes are illustrative; researchers can submit their papers relevant to the above themes and other relevant themes.]
                        </p>
                    </div>
                </div>
            </section>

            <ImageListItem
                items={Items}
                imageSrc="https://cdn.kalingauniversity.ac.in/course/law-2.webp"
                title="Submission Guidelines"
                subtitle=""
                description="Abstract Submission:"
            />

            <FAQ
                id="conference-information"
                title="Conference Information"
                subtitle="Guidelines & Fees"
                variant="table-display"
                tableSections={[]}
                items={[...importantDatesItems, ...conferenceInfoItems]}
                pyClassName="py-12"
            />

            <FAQ
                id="committee-members"
                title="List Of Important Committee Members"
                subtitle="Committees"
                variant="card-display"
                tableSections={tableSections}
                items={[]}
                pyClassName="py-8 md:py-12"
            />

            <FAQ
                id="sponsorship-details"
                title="Sponsorship Details"
                subtitle="Sponsorship"
                variant="table-display"
                tableSections={sponsorshipTableSections}
                items={[]}
                pyClassName="py-8 md:py-12"
            />

            <OrganogramOfKalinga
                title="Contact Us"
                description={`<strong>For more queries,</strong><br/>📩 lawconference@kalingauniversity.ac.in`}
                buttons={[
                    {
                        text: "Send Email",
                        link: "mailto:lawconference@kalingauniversity.ac.in",
                        id: 2
                    }
                ]}
                useContainer={true}
            />


        </>
    );
};

export default LawConferencePage;