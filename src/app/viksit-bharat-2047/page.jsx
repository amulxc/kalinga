"use client";

import React from 'react';
import MainIntro from '../components/about/main_intro';
import ImageContent from '../components/ccrc/imagecontent';
import { AccordionItem } from '../components/general/accordion';
import SectionHeading from '../components/general/SectionHeading';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';

const ViksitBharatPharmacyConferencePage = () => {

    /* ---------------- IN ASSOCIATION WITH ---------------- */
    const associatedInstitutions = [
        { id: 1, images: "https://cdn.kalingauniversity.ac.in/conferences/viksit-bharat/logos-conference.webp",name: "RITEE College of Pharmacy", location: "Chhatauna, Mandirhasaud, Raipur, CG" },
        { id: 2, images: "https://cdn.kalingauniversity.ac.in/conferences/viksit-bharat/logos-conference-2.webp", name: "Gracious College of Pharmacy", location: "Abhanpur, Raipur, CG" },
        { id: 3, images: "https://cdn.kalingauniversity.ac.in/conferences/viksit-bharat/logos-conference-3.webp", name: "Danteswari College of Pharmacy", location: "Jagdalpur, CG" }
    ];

    /* ---------------- OBJECTIVES ---------------- */
    const objectiveItems = [
        { id: 1, text: "To explore the application of AI and machine learning in drug discovery, drug design, pharmacovigilance, precision medicine, clinical decision support systems, and healthcare management." },
        { id: 2, text: "To promote translational research that bridges laboratory innovations with real-world clinical and healthcare applications for improving patient outcomes and public health." },
        { id: 3, text: "To promote research and innovation aimed at strengthening India's healthcare infrastructure, digital health ecosystem, and pharmaceutical self-reliance under the Viksit Bharat 2047 mission." },
        { id: 4, text: "To identify future directions and policy frameworks for integrating AI, healthcare technologies, and pharmaceutical sciences in achieving equitable, accessible, and quality healthcare for all citizens." }
    ];

    /* ---------------- WHY ATTEND ---------------- */
    const whyAttendItems = [
        { id: 1, text: "Keynote Speeches" },
        { id: 2, text: "Technical Sessions" },
        { id: 3, text: "Exhibition Booths" },
        { id: 4, text: "Panel Discussions" },
        { id: 5, text: "Poster Presentations" }
    ];

    /* ---------------- THEMES / SUB-THEMES / AREAS ---------------- */
    const themeGroupsLeft = [
        {
            title: "AI and Digital Transformation in Healthcare",
            items: [
                "Artificial Intelligence in Drug Discovery and Healthcare",
                "AI in Clinical Research and Diagnostics",
                "Digital Health, Telemedicine, and Healthcare Informatics",
                "Emerging Frontiers in AI and Pharmaceutical Sciences"
            ]
        },
        {
            title: "Translational Research and Precision Medicine",
            items: [
                "Precision Medicine and Personalised Healthcare",
                "Translational Research and Clinical Innovations",
                "Biotechnology, Biologics, and Advanced Therapeutics"
            ]
        }
    ];

    const themeGroupsRight = [
        {
            title: "Advanced Pharmaceutical Technologies and Manufacturing",
            items: [
                "Smart Drug Delivery and Advanced Pharmaceutical Technologies",
                "Industry 5.0 and Future Pharmaceutical Manufacturing"
            ]
        },
        {
            title: "Policy, Sustainability and the Innovation Ecosystem",
            items: [
                "Regulatory Science, Ethics, and Healthcare Policies",
                "Sustainable and Affordable Healthcare for Viksit Bharat 2047",
                "Integrative Healthcare and Traditional Medicine",
                "Entrepreneurship, Startups, and Healthcare Innovation"
            ]
        }
    ];

    /* ---------------- REGISTRATION & DATES TABLES (document order) ---------------- */
    const conferenceTableSections = [
        {
            id: "early-bird",
            title: "Early Bird",
            columns: [
                { key: "category", label: "Category", width: "flex-1" },
                { key: "fee", label: "Fees", width: "w-64" }
            ],
            data: [
                { category: "Faculty & Other Educators", fee: "INR 1,500/-" },
                { category: "Research Scholars", fee: "INR 1,500/-" },
                { category: "UG+PG Students", fee: "INR 1,200/-" },
                { category: "Industry Experts", fee: "INR 2,500/-" },
                { category: "International Participants", fee: "USD 50/-" }
            ]
        },
        {
            id: "after-early-bird",
            title: "After Early Bird",
            columns: [
                { key: "category", label: "Category", width: "flex-1" },
                { key: "fee", label: "Fees", width: "w-64" }
            ],
            data: [
                { category: "Faculty & Other Educators", fee: "INR 250/- additional" },
                { category: "International Participants", fee: "USD 20/- additional" }
            ]
        },
        {
            id: "on-the-spot-registration",
            title: "On-the-Spot Registration",
            columns: [
                { key: "category", label: "Category", width: "flex-1" },
                { key: "fee", label: "Fees", width: "w-64" }
            ],
            data: [
                { category: "Each Category", fee: "INR 500/- additional" }
            ],
            footerContent: [
                "50% Concession to participants from Kalinga University and Colleges having an MoU with Kalinga University, Naya Raipur.",
                "Accommodation will be provided at the Participants' request (Charges Applicable).",
                "Registration Fees include a Conference Kit, High Tea, and Lunch for both days.",
                "Registration Email ID: <a href='mailto:icfop@kalingauniversity.ac.in'>icfop@kalingauniversity.ac.in</a>"
            ]
        },
        {
            id: "important-dates",
            title: "Important Dates",
            columns: [
                { key: "milestone", label: "Milestone", width: "flex-1" },
                { key: "date", label: "Date", width: "w-64" }
            ],
            data: [
                { milestone: "Early Bird Registration & Abstract Submission Close On", date: "20th February 2027" },
                { milestone: "Last Date of Registration", date: "10th March 2027" },
                { milestone: "Notification of Acceptance of Abstracts", date: "15th March 2027" },
                { milestone: "Dates of Conference", date: "30th & 31st March 2027" }
            ]
        }
    ];

    /* ---------------- SPONSORSHIP LEVELS ---------------- */
    const sponsorshipLevels = [
        {
            category: "Platinum Sponsorship",
            amount: "1,00,000/-",
            benefits: [
                "5 Complimentary Delegate Passes",
                "4 Complimentary Standee/Banner Displays",
                "5-Minute Address to the Audience",
                "Dedicated Space for Product Display",
                "Prominent Display of Logo on Conference Materials",
                "Inserts/Flyers in Conference Kits",
                "4 Full-page Advertisements in Conference Proceedings",
                "5-Minute Promotional Video",
                "Conference Kit and Memento"
            ]
        },
        {
            category: "Diamond Sponsorship",
            amount: "50,000/-",
            benefits: [
                "3 Complimentary Delegate Passes",
                "1 Complimentary Standee/Banner",
                "Prominent Display of Logo on Conference Materials",
                "Inserts/Flyers in Conference Kits",
                "2 Full-page Advertisements in Conference Proceedings",
                "5-Minute Promotional Video",
                "Conference Kit and Memento"
            ]
        },
        {
            category: "Gold Sponsorship",
            amount: "25,000/-",
            benefits: [
                "2 Complimentary Delegate Passes",
                "Display of Logo on Conference Materials",
                "1 Full-page Advertisement in Conference Proceedings",
                "Conference Kit and Memento"
            ]
        },
        {
            category: "Silver Sponsorship",
            amount: "15,000/-",
            benefits: [
                "1 Complimentary Delegate Pass",
                "Display of Logo on Conference Materials",
                "Conference Kit and Memento"
            ]
        },
        {
            category: "Bronze Sponsorship",
            amount: "10,000/-",
            benefits: [
                "Display of Logo on Conference Materials"
            ]
        }
    ];

    const sponsorshipTableSections = [
        {
            id: "sponsorship-levels",
            title: "Sponsorship Levels",
            columns: [
                { key: "category", label: "Sponsorship Category", width: "w-48" },
                { key: "amount", label: "Amount (INR)", width: "w-40" },
                { key: "benefits", label: "Exclusive Sponsorship Benefits", width: "flex-1" }
            ],
            data: sponsorshipLevels.map((level) => ({
                category: level.category,
                amount: level.amount,
                benefits: (
                    <ul className="list-disc pl-4 space-y-1">
                        {level.benefits.map((benefit, idx) => (
                            <li key={idx}>{benefit}</li>
                        ))}
                    </ul>
                )
            }))
        }
    ];

    /* ---------------- SUBMISSION / PUBLICATION INFO ---------------- */
    const conferenceInfoItems = [
        {
            id: "submission-guidelines",
            question: "Submission Guidelines",
            answer: [
                "An abstract may have a maximum of 300 words and a maximum of 5 keywords.",
                "Abstract and full-length papers should be emailed to <a href='mailto:icfop@kalingauniversity.ac.in'>icfop@kalingauniversity.ac.in</a>.",
                "The full paper must be formatted as an MS Word document in Times New Roman, 12-point font size.",
                "All papers will be checked for plagiarism per the university guidelines.",
                "Registration is compulsory for all participants."
            ]
        },
        {
            id: "paper-presentation",
            question: "Paper cum Oral/Poster Presentation",
            answer: [
                "Paper cum Oral/Poster presentation will be presented in a prescribed format.",
                "Each presentation will be 5 minutes, plus 2 minutes for discussion.",
                "A certificate of presentation will be provided to participants presenting their research work."
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
                { key: "designation", label: "Designation" }
            ],
            data: [
                { name: "Dr. Rajiv Kumar", designation: "Chairman, Kalinga University, Naya Raipur" },
                { name: "Dr. Sandeep Arora", designation: "Chancellor, Kalinga University, Naya Raipur" }
            ]
        },
        {
            id: "patrons",
            title: "Patrons",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" }
            ],
            data: [
                { name: "Prof. Dr. R. Shridhar", designation: "Vice-Chancellor, Kalinga University, Naya Raipur" },
                { name: "Prof. Dr. Monika Sethi", designation: "Pro-Vice-Chancellor, Kalinga University, Naya Raipur" },
                { name: "Dr. Byju John", designation: "Director General, Kalinga University, Naya Raipur" },
                { name: "Dr. Sandeep Gandhi", designation: "Registrar, Kalinga University, Naya Raipur" },
                { name: "Dr. Rahul Mishra", designation: "Dean, Academic Affairs, Kalinga University, Naya Raipur" },
                { name: "Dr. Vijayalaxmi Biradar", designation: "Director, IQAC, Kalinga University, Naya Raipur" }
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
                {
                    name: "Dr. Sandip Prasad Tiwari",
                    designation: "Principal, Faculty of Pharmacy, Kalinga University, Naya Raipur",
                    contact: "+91-9907824851"
                }
            ]
        },
        {
            id: "co-convenors",
            title: "Co-Convenors",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" }
            ],
            data: [
                { name: "Dr. L. Shrikanth", designation: "Professor, Faculty of Pharmacy, Kalinga University, Naya Raipur" },
                { name: "Ms. Rajni Yadav", designation: "Assistant Professor, Faculty of Pharmacy, Kalinga University, Naya Raipur" }
            ]
        },
        {
            id: "scientific-committee",
            title: "Scientific Committee",
            columns: [
                { key: "name", label: "Name" },
                { key: "designation", label: "Designation" }
            ],
            data: [
                { name: "Dr. Sandeep Kumar Mishra", designation: "Associate Professor, Faculty of Pharmacy" },
                { name: "Dr. Smrutiranjan Dash", designation: "Associate Professor, Institute of Pharmacy" },
                { name: "Dr. Vaibhav Tripathi", designation: "Associate Professor, Institute of Pharmacy" },
                { name: "Mr. Pranjul Shrivastava", designation: "Associate Professor, Faculty of Pharmacy" },
                { name: "Ms. Khushboo Gupta", designation: "Associate Professor, Faculty of Pharmacy" },
                { name: "Mr. Ayushmaan Roy", designation: "Associate Professor, Institute of Pharmacy" },
                { name: "Mr. Deepesh Kumar", designation: "Associate Professor, Faculty of Pharmacy" }
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
                { name: "Ms. Akanksha Bhagat", designation: "Assistant Professor, Faculty of Pharmacy" },
                { name: "Ms. Saloni Saw", designation: "Assistant Professor, Institute of Pharmacy" },
                { name: "Mr. Dipak Bhadre", designation: "Assistant Professor, Faculty of Pharmacy" },
                { name: "Ms. Jaya Sahu", designation: "Assistant Professor, Faculty of Pharmacy" },
                { name: "Mr. Devendra Kumar Sahu", designation: "Assistant Professor, Faculty of Pharmacy" },
                { name: "Mr. Bhaskar Dewangan", designation: "Assistant Professor, Faculty of Pharmacy" },
                { name: "Ms. Akanksha Dubey", designation: "Assistant Professor, Faculty of Pharmacy" },
                { name: "Mr. Ankit Dash", designation: "Assistant Professor, Faculty of Pharmacy" }
            ]
        }
    ];

    /* ---------------- TRAVEL / HOW TO REACH ---------------- */
    const howToReachItems = [
        { id: 1, text: "<strong>Railways:</strong> Raipur Junction railway station is situated on the Howrah-Nagpur-Mumbai line of the Indian Railways (via Bhusawal, Nagpur, Gondia, Bilaspur, Rourkela, Kharagpur) and is connected with most major cities." },
        { id: 2, text: "<strong>Airport:</strong> Swami Vivekananda Airport is the primary airport serving the state of Chhattisgarh. The airport is located 15 km south of Raipur near Atal Nagar." }
    ];

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="py-12 md:py-16 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h5 className="font-bold text-[var(--button-red)] titlecase tracking-[0.2em] text-sm md:text-base mb-2">
                        Faculty of Pharmacy
                    </h5>
                    <p className="font-bold text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8">
                        ORGANISES
                    </p>
                    <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-gray-900 leading-tight mb-4 max-w-5xl mx-auto">
                        International Conference on AI and Translational Innovations in Pharmaceutical Sciences and Healthcare
                    </h1>
                    <p className="font-stix text-lg md:text-2xl text-[var(--button-red)] mb-8">
                        for Viksit Bharat @2047
                    </p>

                    {/* Event quick facts */}
                    <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5 max-w-4xl mx-auto">
                        <div className="flex-1 min-w-[180px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">🗓️</p>
                            <p className="font-semibold text-[var(--foreground)]">30th - 31st March 2027</p>
                        </div>
                        <div className="flex-1 min-w-[180px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">💻</p>
                            <p className="font-semibold text-[var(--foreground)]">Mode: Hybrid</p>
                        </div>
                        <div className="flex-1 min-w-[180px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                            <p className="text-2xl mb-1">📍</p>
                            <p className="font-semibold text-[var(--foreground)]">Kalinga University, Naya Raipur</p>
                        </div>
                    </div>

                    {/* In Association With */}
                    <div className="mt-12 border-t border-gray-100 pt-8">
                        <h3 className="font-bold text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">
                            In Association With
                        </h3>
                        <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5 max-w-5xl mx-auto">
                            {associatedInstitutions.map((institution) => (
                                <div
                                    key={institution.id}
                                    className="flex-1 min-w-[240px] rounded-xl bg-[var(--card-sandal)] p-5 shadow-sm flex flex-col items-center"
                                >
                                    <div className="w-24 h-24 md:w-28 md:h-28 mb-4 rounded-xl overflow-hidden bg-white p-2 border border-gray-100 shadow-sm">
                                        <img
                                            src={institution.images}
                                            alt={institution.name}
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </div>
                                    <p className="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)] mb-2">
                                        {institution.name}
                                    </p>
                                    <p className="text-sm text-gray-700 font-plus-jakarta-sans">
                                        {institution.location}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT THE FACULTY OF PHARMACY ================= */}
            <MainIntro
                title="About the Faculty of Pharmacy"
                subtitle=""
                description={[
                    "The Faculty of Pharmacy at Kalinga University is deeply committed to producing highly skilled pharmacists and scientists who uphold ethical standards and are equipped to address community health needs. The emphasis on international standards, scientific research, and community service reflects a holistic approach to education and professional development. The investment in state-of-the-art laboratories demonstrates a dedication to providing students with practical, hands-on learning experiences in pharmaceutical sciences."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/course/pharamcy-1.webp"
                imageAlt="Faculty of Pharmacy"
            />

            {/* ================= ABOUT THE CONFERENCE ================= */}
            <MainIntro
                title="About the Conference"
                subtitle=""
                description={[
                    "The conference on “AI and Translational Innovations in Pharmaceutical Sciences and Healthcare for Viksit Bharat 2047” aims to provide a dynamic platform for researchers, academicians, healthcare professionals, industry experts, and students to discuss the transformative role of Artificial Intelligence and translational research in advancing healthcare in India. The conference will focus on emerging areas such as AI-driven drug discovery, precision medicine, digital healthcare, pharmacovigilance, bioinformatics, smart drug delivery, and clinical research.",
                    "Aligned with the vision of Viksit Bharat 2047, the event seeks to encourage innovation, interdisciplinary collaboration, and sustainable healthcare solutions while addressing ethical and regulatory aspects of AI integration to build an accessible, affordable, and patient-centric healthcare system for the future."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="AI and Translational Innovations in Pharmaceutical Sciences and Healthcare"
                reverseLayout={true}
                sectionClassName="md:py-16 bg-[var(--lite-sand)] py-16 !pb-20"
            />

            {/* ================= OBJECTIVES ================= */}
            <ImageListItem
                items={objectiveItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/laboratories/lab-1.webp"
                imageAlt="Pharmaceutical sciences research laboratory, Kalinga University"
                title="Objectives"
                subtitle=""
                description="The conference creates a multidisciplinary platform for researchers, academicians, healthcare professionals, pharmaceutical scientists, industry experts, policymakers, and students to exchange knowledge on recent advancements in Artificial Intelligence and translational research in healthcare. The conference aims:"
            />

            {/* ================= WHY ATTEND ================= */}
            <ImageListItem
                items={whyAttendItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                imageAlt="Why attend Kalinga University international conferences"
                title="Why Attend KU International Conferences?"
                subtitle=""
                description=""
                reverseLayout={true}
                className="!bg-white"
                textClassName="text-gray-700"
                headingClassName="text-[var(--foreground)]"
            />

            {/* ================= CALL FOR PAPERS ================= */}
            <ImageContent
                hasImage={true}
                readmore={false}
                className="items-center justify-center my-8 md:my-12 [&_img]:!w-[100px] [&_img]:!h-auto md:[&>img]:order-last md:[&>div]:order-first"
                title="Call For Papers"
                subtitleclassName="hidden"
                imageSrc="https://cdn.kalingauniversity.ac.in/law-conference/document.svg"
                imageAlt="Call for papers"
                imageWidth={100}
                imageHeight={100}
                description="The International Conference invites abstracts from delegates from all over the globe, including guest/invited speakers, faculty, research scholars, postgraduate and graduate students from different organisations. This conference will be a suitable forum for sharing views on the applications of AI and machine learning in drug discovery, drug design, pharmacovigilance, precision medicine, clinical decision support systems, and healthcare management. Abstracts up to 250-300 words should be prepared using Times New Roman (12pt) in a single line. The title should be in bold. The abstract should be free from plagiarism. Mention the names of the author(s), affiliation(s), and Email ID of the corresponding author. Underline the name of the presenting author. All abstracts will be published as conference proceedings with an ISBN."
                additionalContent={[
                    "Publication: All the papers will be included in the conference proceedings with an ISBN as an E-Book. A soft copy of the conference proceedings will be provided to all the participants.",
                    "Submit to: icfop@kalingauniversity.ac.in"
                ]}
            />

            {/* ================= THEMES / SUB-THEMES / AREAS ================= */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Themes / Sub-Themes / Areas"
                        titleClassName="text-center mb-4"
                    />
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 font-plus-jakarta-sans">
                        (including but not limited to)
                    </p>
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

            {/* ================= SUBMISSION GUIDELINES & PRESENTATION ================= */}
            <FAQ
                id="submission-guidelines"
                title="Submission Guidelines & Presentation"
                subtitle="Submit"
                variant="table-display"
                tableSections={[]}
                items={conferenceInfoItems}
                pyClassName="py-12"
            />

            {/* ================= REGISTRATION & IMPORTANT DATES ================= */}
            <FAQ
                id="conference-information"
                title="Registration & Important Dates"
                subtitle="Participate"
                variant="table-display"
                tableSections={conferenceTableSections}
                expandAllSections={true}
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

            {/* ================= SPONSORSHIP LEVELS ================= */}
            <FAQ
                id="sponsorship-levels"
                title="Sponsorship Levels"
                subtitle="Sponsor"
                variant="table-display"
                tableSections={sponsorshipTableSections}
                items={[]}
                pyClassName="py-12"
            />

            {/* ================= TRAVEL & HOW TO REACH ================= */}
            <ImageListItem
                items={howToReachItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/about-raipur/gallery/raipur-images-4.jpg"
                imageAlt="Reaching Kalinga University, Naya Raipur"
                title="How To Reach"
                subtitle=""
                description="How to reach Kalinga University, Naya Raipur:"
            />

            {/* ================= CONTACT ================= */}
            <OrganogramOfKalinga
                title="Contact Us"
                description={`<strong>For abstract submission, registration and queries,</strong><br/>📩 icfop@kalingauniversity.ac.in<br/>📲 +91-9907824851 (Dr. Sandip Prasad Tiwari, Convenor)`}
                buttons={[
                    {
                        text: "Send Email",
                        link: "mailto:icfop@kalingauniversity.ac.in",
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
                            Viksit Bharat @2047 <br />
                            International Conference — Faculty of Pharmacy
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Explore the Conference Brochure
                        </p>
                    </div>

                    <a
                        href="https://cdn.kalingauniversity.ac.in/conferences/viksit-bharat/FOPH-2026-27.pdf"
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

export default ViksitBharatPharmacyConferencePage;
