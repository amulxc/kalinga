"use client";

import React, { useState } from 'react';
import MainIntro from '../components/about/main_intro';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import ProgramsOffered from '../components/department/programs-offered';
import OurPrograms from '../components/admissions/our_programs';
import MentorIntro from '../components/department/dept_head_intro';
import QuickLinks from '../components/general/quick_links';
import StandardFormatFAQ from '../components/general/standard-format-faq';
import PublicationCard from "../components/general/PublicationCard";
import SectionHeading from "../components/general/SectionHeading";
import { editorialBoardData } from './editorialBoardData';

const UnivistaJournalPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState(null);

    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    // Archives tabs: Volume 1 Issue 1 / Issue 2
    const [activeArchiveTab, setActiveArchiveTab] = useState("issue1");

    const handleExploreMember = (member) => {
        setSelectedMember(member);
        setIsProfileModalOpen(true);
    };

    const boardDataWithHandler = editorialBoardData.map(member => ({
        ...member,
        title: member.name,
        subtitle: member.designation,
        designation: null,
        department: member.email,
        onExplore: handleExploreMember
    }));

    const EditorialMemberModal = ({ isOpen, onClose, member }) => {
        if (!isOpen || !member) return null;
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}>
                <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
                    onClick={(e) => e.stopPropagation()}>
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[var(--dark-blue)] text-white">
                        <div className="flex flex-col">
                            <h2 className="text-xl md:text-2xl font-bold font-plus-jakarta-sans text-white">{member.name}</h2>
                            <p className="text-white/80 text-sm">{member.designation}</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div className="p-8 overflow-y-auto custom-scrollbar flex-1 flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/3 flex flex-col gap-4">
                            <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 flex items-center justify-center p-2">
                                <img src={member.img} alt={member.name} className="w-full max-h-64 object-contain rounded-lg" />
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3 text-sm">
                                <div><strong className="text-[var(--dark-blue)]">Affiliation:</strong><br />{member.affiliation}</div>
                                <div><strong className="text-[var(--dark-blue)]">Email:</strong><br /><a href={`mailto:${member.email}`} className="text-[var(--button-red)] hover:underline break-all">{member.email}</a></div>
                                {member.scopus && member.scopus !== "NA" && <div><strong className="text-[var(--dark-blue)]">Scopus ID:</strong><br />{member.scopus}</div>}
                                {member.orcid && member.orcid !== "NA" && <div><strong className="text-[var(--dark-blue)]">ORCID:</strong><br />{member.orcid}</div>}
                                {member.irins && member.irins !== "NA" && <div><strong className="text-[var(--dark-blue)]">IRINS/Vidwan ID:</strong><br />{member.irins}</div>}
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h3 className="text-lg font-bold text-[var(--button-red)] mb-4 border-b border-gray-200 pb-2">Expertise & Biography</h3>
                            <div className="text-gray-700 leading-relaxed font-plus-jakarta-sans whitespace-pre-wrap">
                                {member.expertise}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ThemeModal = ({ isOpen, onClose, theme }) => {
        if (!isOpen || !theme) return null;
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[var(--dark-blue)] text-white">
                        <div className="flex flex-col">
                            <h2 className="text-xl md:text-2xl font-bold font-plus-jakarta-sans text-white">{theme.shortName}</h2>
                            <p className="text-white/80 text-sm">{theme.title}</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <div>
                                <h3 className="text-sm font-bold text-[var(--button-red)] uppercase tracking-wider mb-3">Sub-Themes</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-800">
                                    {theme.items && theme.items.map((item, index) => (
                                        <li key={index} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border-t border-gray-100 flex justify-end">
                        <button onClick={onClose} className="px-6 py-2 bg-[var(--button-red)] text-white rounded-lg font-medium hover:bg-[var(--dark-orange-red)] transition-colors">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const aimsAndScopeItems = [
        { text: "Research Articles / Research Papers: Word Limit: 7,000 to 9,000 words, inclusive of footnotes. Submissions should present original, in-depth research with significant scholarly contribution." },
        { text: "Review Papers: Word Limit: 2,000 to 3,000 words, inclusive of footnote. Reviews should critically evaluate current literature and highlight developments or gaps in the field." },
        { text: "Case Studies: Word Limit: 1,500 to 2,500 words, excluding footnotes. Case studies should provide detailed analysis, practical insights, and implications for research or practice." },
        { text: "All submissions should follow academic standards for formatting, citations, and ethical research practices. Authors are encouraged to ensure originality, clarity, and relevance to multidisciplinary research." }
    ];

    const journalQuickLinks = [
        {
            id: 1,
            title: "Research Articles / Research Papers",
            description: "7,000 to 9,000 words, inclusive of footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg",
            href: "#"
        },
        {
            id: 2,
            title: "Review Papers",
            description: "2,000 to 3,000 words, inclusive of footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/kif/Entrepreneurial+Thinking.svg",
            href: "#"
        },
        {
            id: 3,
            title: "Case Studies",
            description: "1,500 to 2,500 words, excluding footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/academics/icons/teachings.svg",
            href: "#"
        }
    ];

    const consolidatedFAQItems = [
        {
            id: 1,
            question: "Format and Citation Guidelines",
            answer: `
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>File Format:</strong> Submit your manuscript in Microsoft Word format (.doc or .docx preferred).</li>
                    <li><strong>Main Title:</strong> Centered, bold, full capitals, 14-point font, Times New Roman.</li>
                    <li><strong>Author Details:</strong> Below the title, include author(s) name(s), designation(s), and institution(s). Capitalize Each Word, bold, 12-point Times New Roman, centered.</li>
                    <li><strong>Main Text:</strong> Times New Roman, 12-point font, 1.5 line spacing, justified alignment.</li>
                    <li><strong>Subtitles:</strong> Bold, sentence case, 12-point font, Times New Roman, left aligned.</li>
                    <li><strong>Footnotes:</strong> Times New Roman, 10-point font, single spacing.</li>
                    <li><strong>Citation Style:</strong> APA Citation Style.</li>
                    <li><strong>Plagiarism:</strong> Similarity index must be below 10%.</li>
                </ul>
            `
        },
        {
            id: 2,
            question: "Submission Procedure",
            answer: `
                <p><strong>Submission Email:</strong> Manuscripts must be submitted via email to: <a href="mailto:univista.journal@kalingauniversity.ac.in" class="text-[var(--button-red)] hover:underline">univista.journal@kalingauniversity.ac.in</a></p>
                <p class="mt-4"><strong>File Naming Convention:</strong> The manuscript file should be named using the Author’s Full Name followed by the Title of the Paper.</p>
            `
        },
        {
            id: 3,
            question: "Publication Policy",
            answer: `
                <div class="space-y-4">
                    <p><strong>Originality and Exclusivity:</strong> Submissions must be the original, unpublished work of the author(s) and should not be under consideration elsewhere. Any manuscript found to contain plagiarized material or infringing copyright laws will be immediately disqualified from publication.</p>
                    <p><strong>Copyright and Licensing:</strong> By submitting their manuscript to the Univista: International Journal of Research and Studies, the author(s) grant exclusive copyright to Kalinga University. The University reserves the right to publish, reproduce, and distribute the content in any format or medium, in full or in part, with due credit to the author(s), and in accordance with the provisions of fair use under the Copyright Act.</p>
                    <p><strong>Editorial Discretion:</strong> The editorial team reserves the right to make editorial changes to submissions for clarity, formatting, and language—either partially or fully—without requiring prior approval or further notice to the author(s), while ensuring the core content remains intact.</p>
                    <p><strong>Peer Review Process:</strong> All submissions that clear the preliminary editorial screening will undergo a double-blind peer review, ensuring anonymity of both the author(s) and reviewers. Final decisions regarding publication will be based on the recommendations received through this rigorous review process.</p>
                </div>
            `
        },
    ];

    const archivesData = [
        {
            id: 1,
            shortName: "Experimental Analysis and Modelling of Solar Panel of Two-Diode Model (TDM)...",
            title: "Praveen Kumar Yadaw, Mohammad Arsh Khan, Manoj Kumar Nigam",
            duration: "Page range: 1-10 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/1.+Experimental+Analysis+and+Modelling+of+Solar+Panel+-+Naya+Raipur+(1)+(1).pdf"
        },
        {
            id: 2,
            shortName: "Green Finance and Its Impact on Business Models in Emerging Markets",
            title: "Sweta Srivastav and Dr. Deepti Patnaik",
            duration: "Page range: 11-21 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/2.+Green+Finance+and+Its+Impact+on+Business+Models+in+Emerging+Markets_Updated+(1)+(1)+-+sweta+srivastav+(1)+(1).pdf"
        },
        {
            id: 3,
            shortName: "Impact of Artificial Intelligence on Rwandan Educational Sustainability",
            title: "Niyitanga gilbert beco",
            duration: "Page range: 22-33 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/3.+Impact+of+Artificial+Intelligence+on+Rwandan+Educational+Sustainability+(1)+(1).pdf"
        },
        {
            id: 4,
            shortName: "Design and Modelling of Autonomous Quad Copter",
            title: "Vijayalaxmi Biradar, Sarat Chandra Mohanty",
            duration: "Page range: 34-39 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/4.+Manuscript-Drone+_Modified+(1)+(1).pdf"
        },
        {
            id: 5,
            shortName: "Assistive Technology:- An Alternative for Locomotion Disability...",
            title: "Vijayalaxmi Biradar, Sarat Chandra Mohanty",
            duration: "Page range: 40-45 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/5.+IEEE+Manuscript-1+Assistive+Technology+(1)+(1).pdf"
        },
        {
            id: 6,
            shortName: "Hybrid Nano fluid: An Overview on preparation methods, properties, and its application",
            title: "Priyanshu Mahanti, Shailesh Singh Thakur",
            duration: "Page range: 46-56 | Jan - March 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/6.+Hybrid+Nano+fluid+An+Overview+on+preparation+methods%2C+properties%2C+and+its+application+(1)+(1).pdf"
        }
    ];

    // Volume 1, Issue 2 — TODO: replace these placeholder entries with the actual Issue 2 papers/PDFs
    const archivesIssue2Data = [
        {
            id: 2,
            shortName: "Performance Evaluation Of Biodegradable Hydraulic Fluids In Industrial Actuators",
            title: "Kouakou Marius Kouakoul",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/2-marius-KK.pdf"
        },
        {
            id: 3,
            shortName: "Experimental Investigation Of Self-Compacting Concrete Using Rice Husk Ash",
            title: "Angel Lakra",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/3-Angel-Lakra.pdf"
        },
        {
            id: 4,
            shortName: "Causes Of Low Hydraulic Pressure In The Excavator Control Valve And Their Solutions",
            title: "Mr. Samuel P Zarwolo",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/4-Mr-Samuel-P-Zarwoloo.pdf"
        },
        {
            id: 5,
            shortName: "Building Construction: Planning, Structural Arrangement, And Execution Of A Healthcare Facility",
            title: "Ankit Yadav",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/5-Ankit-Yadav.pdf"
        },
        {
            id: 6,
            shortName: "The Comparison Of Resistance Of V-Groove Weld And Normal Butt Joint Weld In Metal",
            title: "Toure Natouyoman Julien",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/6-Toure-Natouyoman-Julien.pdf"
        },
        {
            id: 7,
            shortName: "Experimental Evaluation Of Construction Materials Used In Building Construction",
            title: "Rahul Raj Yadav",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/7-Rahul-raj.pdf"
        },
        {
            id: 8,
            shortName: "Analys Of Foundation Design Methods For Long-Life Road Pavements",
            title: "Evandra Bartolomeu",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/8-Evandra-Bartolomeu.pdf"
        },
        {
            id: 9,
            shortName: "Analysis Of Ambient Temperature Impact On Ev Battery Degradation",
            title: "SK Farid",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/9-SK-Farid-Final-Paper.pdf"
        },
        {
            id: 10,
            shortName: "Comprehensive Analysis Of Planning, Design, Construction, And Quality Control In Nh 748a Highway Project",
            title: "Rohan Tiwari",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/10-Rohan-Tiwari.pdf"
        },
        {
            id: 11,
            shortName: "Tracking And Digital Inspection Systems In Automotive Manufacturing",
            title: "Sahil Kumar Gupta",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/11-Sahil-Kumar-Gupta.pdf"
        },
        {
            id: 12,
            shortName: "A Comparative Review Of Performance Factors Affecting The Efficiency Of Solar Photovoltaic Systems",
            title: "Ankit Kumar Tirkey",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/12-Ankit-Kumar-Tirkey-Technology.pdf"
        },
        {
            id: 14,
            shortName: "The Roles Of Diagnostic Tools In A Honda Maintenance Workshop",
            title: "Jessian Tanaka Mutsago",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/14-Jessian.pdf"
        },
        {
            id: 15,
            shortName: "A Comparative Case Study On Photovoltaic Material Used In Solar Power Generation In Industries And The Efficiency Of The Materials",
            title: "Ayush Parmar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/15-Ayush-Research-Paper.pdf"
        },
        {
            id: 16,
            shortName: "Execution Of Residential Building And Test For Quality Assurance",
            title: "Kwajok Jada Loloku",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/16-Kwajok-Jada-Loloku.pdf"
        },
        {
            id: 17,
            shortName: "Failure Analysis Of Collector Nozzle In Slide Gate System During Continuous Casting",
            title: "Shivam Prakash",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/17-Shivam-Prakash.pdf"
        },
        {
            id: 18,
            shortName: "Matlab-Based Analysis Of Condition Monitoring And Harmonic Mitigation In Industrial Motor Drives",
            title: "Saurabh Kumar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/18-Saurabh-Kumar.pdf"
        },
        {
            id: 19,
            shortName: "Energy Efficiency, Thermodynamics, And Design Optimization In Internal Combution Engines: A Comprehensive Review",
            title: "Fokou Tchioffo Padoras",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/19-Fokou.pdf"
        },
        {
            id: 20,
            shortName: "Power Quality Improvement By Mitigation Of Harmonics Using Shunt Active Power Filter And Its Comparative Analysis",
            title: "Pradeep Kumar",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/20-Pradeep.pdf"
        },
        {
            id: 21,
            shortName: "Experiment The Effect Of Excessive Superplasticizer Dosage On Concrete Property",
            title: "Tashvendra dhruw",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/21-Tashvendra-dhruw.pdf"
        },
        {
            id: 23,
            shortName: "Experimental Study Of Use Of Waste Plastic In Road Construction",
            title: "Deepa Banerjee",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/23-Deepa.pdf"
        },
        {
            id: 24,
            shortName: "Fuzzy Logic-Based Prediction Of Weld Quality In Shielded Metal Arc Welding Of Mild Steel Joints",
            title: "Navin Shrivastava",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/24-Navin-Shrivastava.pdf"
        },
        {
            id: 25,
            shortName: "Design And Implementation Of Grid Connected To Solar Pv System",
            title: "Devwrath Telam",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/25-Devwrath-Telam.pdf"
        },
        {
            id: 26,
            shortName: "An Experimental Investigation On Plain And Reinforced Self - Curing Concrete",
            title: "Lokesh Verma",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/26-Lokesh.pdf"
        },
        {
            id: 27,
            shortName: "Impact Of Curing Techniques On Sustainable Concrete",
            title: "Piyush Kumar Dewangan",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/27-piyush.pdf"
        },
        {
            id: 28,
            shortName: "An Experimental Study On The Mechanical Properties Of High-Strength Self-Compacting Concrete Mixes",
            title: "Pankaj Singh Thakur",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/28-Pankaj-Singh.pdf"
        },
        {
            id: 29,
            shortName: "Experimental Investigation On The Use Of Fiber Reinforced Concrete In Rigid Pavement",
            title: "Anil Paikara",
            duration: "April - June 2026",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/international-journal-of-research-and-studies/Vol-1-Issue-2/29-Anil.pdf"
        }
    ];

    // Derived values based on the selected archives tab
    const archiveTabs = [
        { key: "issue1", label: "Vol. 1, Issue 1" },
        { key: "issue2", label: "Vol. 1, Issue 2" }
    ];
    const activeArchivePrograms = activeArchiveTab === "issue1" ? archivesData : archivesIssue2Data;

    const callForPapersData = [
        {
            id: 1,
            shortName: "Sustainability and Development",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Climate change adaptation and mitigation",
                "Renewable energy and green technologies",
                "Sustainable urban planning and smart cities",
                "Environmental policy and governance",
                "Circular economy and waste management"
            ]
        },
        {
            id: 2,
            shortName: "Technology and Society",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Digital transformation and smart technologies",
                "Internet of Things (IoT) and society",
                "Ethical issues in emerging technologies",
                "Social media impact on communities",
                "Human-computer interaction"
            ]
        },
        {
            id: 3,
            shortName: "Health, Well-being, and Society",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Public health policy and management",
                "Mental health and psychosocial well-being",
                "Health equity and access to healthcare",
                "Nutrition and lifestyle interventions",
                "Pandemic preparedness and response"
            ]
        },
        {
            id: 4,
            shortName: "Law, Policy, and Governance",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Constitutional and human rights law",
                "Regulatory frameworks for technology",
                "Public policy and governance reforms",
                "International law and cross-border policy issues",
                "Anti-corruption and transparency measures"
            ]
        },
        {
            id: 5,
            shortName: "Education, Innovation, and Learning",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "E-learning and digital education",
                "Pedagogical innovations and teaching strategies",
                "Education policy and reform",
                "Lifelong learning and skill development",
                "STEM education and interdisciplinary learning"
            ]
        },
        {
            id: 6,
            shortName: "Business, Economics, and Entrepreneurship",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Global economic trends and policy",
                "Startups and entrepreneurship ecosystems",
                "Corporate social responsibility",
                "Digital economy and fintech innovations",
                "Sustainable business models"
            ]
        },
        {
            id: 7,
            shortName: "Media, Culture, and Communication",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Media ethics and freedom of expression",
                "Cultural heritage and preservation",
                "Digital storytelling and multimedia communication",
                "Social media and public opinion",
                "Social media and public opinion"
            ]
        },
        {
            id: 8,
            shortName: "Gender, Equity, and Inclusion",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Women’s empowerment and leadership",
                "Intersectionality and social justice",
                "Gender-based violence prevention strategies",
                "Workplace diversity and equality"
            ]
        },
        {
            id: 9,
            shortName: "Science, Research, and Innovation",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Interdisciplinary scientific research",
                "Emerging technologies and innovation",
                "Research ethics and reproducibility",
                "Scientific communication and outreach",
                "Collaborations in global research networks"
            ]
        },
        {
            id: 10,
            shortName: "Artificial Intelligence and Human Interaction",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "AI ethics and societal impact",
                "Human-AI collaboration in workplaces",
                "AI in healthcare, education, and governance",
                "Natural language processing and social applications",
                "AI policy and regulation"
            ]
        },
        {
            id: 11,
            shortName: "Arts, Humanities, and Social Change",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Literature, visual arts, and cultural critique",
                "Philosophy and ethics in contemporary society",
                "Performing arts and social activism",
                "Historical perspectives on social change",
                "Cultural narratives and identity formation"
            ]
        },
        {
            id: 12,
            shortName: "Rural and Urban Development",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Rural livelihoods and sustainable development",
                "Urbanization and smart city planning",
                "Infrastructure and transportation challenges",
                "Community engagement and participatory planning",
                "Rural-urban migration and social impact"
            ]
        },
        {
            id: 13,
            shortName: "Globalization and Cross-Cultural Perspectives",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Cross-cultural communication and diplomacy",
                "Global trade and economic interdependence",
                "Migration and transnational communities",
                "Cultural hybridization and identity",
                "Global governance and international cooperation"
            ]
        },
        {
            id: 14,
            shortName: "Security, Conflict, and Peace Studies",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Conflict resolution and peacebuilding",
                "Cybersecurity and digital threats",
                "International security and defense policies",
                "Humanitarian interventions and disaster response",
                "Community resilience and post-conflict reconstruction"
            ]
        },
        {
            id: 15,
            shortName: "Technology in Agriculture and Food Security",
            title: "",
            specialization: "",
            type: "BOARD",
            exploreLinkText: "View Details",
            hideScholarshipLink: true,
            hideDuration: true,
            hideApplyNow: true,
            items: [
                "Precision agriculture and smart farming",
                "Sustainable crop management",
                "Agricultural policy and rural development",
                "Food supply chains and logistics",
                "Agri-tech innovations and biotechnology",
                "Rural livelihoods and sustainable development",
                "Urbanization and smart city planning",
                "Infrastructure and transportation challenges",
                "Community engagement and participatory planning",
                "Rural-urban migration and social impact"
            ]
        }
    ];

    const contactInfo = {
        title: "Editorial Board Office",
        subtitle: "Contact Us",
        department: "For Any Query and Clarifications, Contact Us At:",
        quote: "<strong>Editorial Board Office:</strong> Kalinga University, Near Mantralaya, Kotni, Atal Nagar-Naya Raipur, Chhattisgarh 492101<br/><br/><strong>Address:</strong> Editor-in-chief, Kalinga University, Near Mantralaya, Kotni, Atal Nagar-Naya Raipur, Chhattisgarh 492101",
        contactInfo: {
            // email: "univista.journal@kalingauniversity.ac.in",
            phone: "+91-9754766411"
        },
        imageSrc: "https://cdn.kalingauniversity.ac.in/phd/Phd-Objectives.webp",
        showQuotes: false
    };

    return (
        <div className="pt-[100px] md:pt-0">
            <SectionHeading
                title="E-ISSN: 3139-0668"
                titleClassName="text-center mt-5 md:text-[40px]"
                titleTextColor="text-[#001f3f]"
            />
            <MainIntro
                title="Univista: International Journal of Research and Studies"
                subtitle="About the Journal"
                description={[
                    "<b style=\"color: #0d3b66\">Medium: Online Only | Subject Focus: Multidisciplinary | Language: English | Frequency: Quarterly | Starting Year of Journal: 2026</b>",
                    "Univista: International Journal of Research and Studies is a peer-reviewed, multidisciplinary journal committed to advancing knowledge across diverse fields of study. The journal provides a platform for scholars, researchers, and practitioners from around the world to share innovative research, critical analyses, and evidence-based insights. By embracing a broad spectrum of disciplines, UIJRS encourages dialogue and collaboration that transcend traditional academic boundaries, encouraging holistic and integrative approaches to research.",
                    "The journal publishes original research articles, research papers, review papers, and case studies that contribute to the understanding of complex global, social, and scientific challenges. Emphasizing both conceptual and applied research, UIJRS seeks to bridge the gap between theory and practice, promoting knowledge that is both academically rigorous and socially relevance.",
                    "UIJRS is dedicated to upholding the highest standards of academic integrity and ethical scholarship. All submissions undergo a thorough peer-review process to ensure originality, methodological soundness, and contribution to the field. The journal values diversity of thought and perspective, welcoming contributions from researchers at all career stages, from early-career scholars to established experts.",
                    "As an international platform, UIJRS encourages cross-cultural and interdisciplinary collaboration, recognizing that complex problems often require solutions that draw on multiple fields of expertise. By publishing high-quality research that spans disciplines, regions, and methodologies, Univista: International Journal of Research & Studies aims to inspire innovation, promote critical thinking, and advance global knowledge.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="Univista: International Journal of Research and Studies"
                showKnowMore={true}
                initialVisibleParagraphs={2}
            />

            <ImageListItem
                items={aimsAndScopeItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                title="Univista: International Journal Of Research And Studies Submission Guidelines, Format & Publication Policy"
                description="UIJRS welcomes submissions in the following formats: research articles, research papers, review papers, and case studies. Authors are requested to adhere to the following word limits for each submission type:"
                buttonText="Read More"
                className="!bg-white"
                textClassName="text-gray-700"
                titleTextColor="text-[var(--foreground)]"
                headingClassName=""
            />

            <FAQ
                title="Format, Citation & Policy"
                subtitle="Guidelines"
                items={consolidatedFAQItems}
            />


            {/* <QuickLinks
                title="Journal Policies & Information"
                description="Explore the standards and processes that govern the Univista: International Journal of Research and Studies."
                links={journalQuickLinks}
                backgroundColor="bg-[var(--dark-blue)]"
                textColorClassName="text-white"
                titleClassName="text-white"
            /> */}

            <ProgramsOffered
                title="Archives"
                description="Explore past volumes and issues of the Univista: International Journal of Research and Studies."
                programs={activeArchivePrograms}
                exploreLabel="Download PDF"
                searchPlaceholder="Search Archives...."
                hideSearch={false}
                backgroundImage="https://cdn.kalingauniversity.ac.in/international-students/int-g-1.webp"
                backgroundColor="bg-white"
                textColor="text-gray-700"
                titleColor="text-[var(--foreground)]"
                topRightContent={
                    <div className="flex flex-wrap gap-2">
                        {archiveTabs.map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                onClick={() => setActiveArchiveTab(tab.key)}
                                className={`px-5 py-2.5 rounded-lg font-plus-jakarta-sans font-semibold transition-colors ${
                                    activeArchiveTab === tab.key
                                        ? "bg-[var(--button-red)] text-white"
                                        : "bg-white text-[var(--button-red)] border border-[var(--button-red)] hover:bg-[var(--button-red)]/10"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                }
            />
            {/* Reused Publication Card Section */}
            <section className="bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <SectionHeading
                        title="Editorial Board Members"
                        description=""
                        titleClassName="text-center font-stix "
                        descriptionClassName="text-center mt-4"
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto mt-12">
                        {boardDataWithHandler.map((member) => (
                            <PublicationCard key={member.id} data={member} className="bg-card-sandal" />
                        ))}
                    </div>
                </div>
            </section>
            <OurPrograms
                customPrograms={callForPapersData}
                hideSearchFilter={true}
                customTitle="Research Themes & Sub-Themes"
                customSubtitle="Call for Papers"
                programCardTitleClassName="!text-xl"
                backgroundColor="bg-gray-50"
                onExploreProgramClick={(theme) => {
                    setSelectedTheme(theme);
                    setIsModalOpen(true);
                }}
            />

            <StandardFormatFAQ />
            <ThemeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                theme={selectedTheme}
            />

            <EditorialMemberModal
                isOpen={isProfileModalOpen}
                onClose={() => setIsProfileModalOpen(false)}
                member={selectedMember}
            />

            <MentorIntro {...contactInfo} />

        </div>
    );
};

export default UnivistaJournalPage;
