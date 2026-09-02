"use client";

import React, { useState } from 'react';
import MainIntro from '../components/about/main_intro';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import ProgramsOffered from '../components/department/programs-offered';
import OurPrograms from '../components/admissions/our_programs';
import MentorIntro from '../components/department/dept_head_intro';
import QuickLinks from '../components/general/quick_links';
import SectionHeading from '../components/general/SectionHeading';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/general/tab';

const JournalOfLawAndAIPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [activeTab, setActiveTab] = useState("vol1_issue1");

    const EditorialBoardModal = ({ isOpen, onClose, member }) => {
        if (!isOpen || !member) return null;
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[var(--dark-blue)] text-white">
                        <div className="flex flex-col">
                            <h2 className="text-xl md:text-2xl font-bold font-plus-jakarta-sans text-white">{member.shortName}</h2>
                            <p className="text-white/80 text-sm">{member.title}</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            {member.education && (
                                <div>
                                    <h3 className="text-sm font-bold text-[var(--button-red)] uppercase tracking-wider mb-1">Education</h3>
                                    <p className="text-gray-800 font-medium">{member.education}</p>
                                </div>
                            )}

                            {member.institution && (
                                <div>
                                    <h3 className="text-sm font-bold text-[var(--button-red)] uppercase tracking-wider mb-1">Institution</h3>
                                    <p className="text-gray-800">{member.institution}</p>
                                </div>
                            )}

                            {member.address && (
                                <div>
                                    <h3 className="text-sm font-bold text-[var(--button-red)] uppercase tracking-wider mb-1">Address</h3>
                                    <p className="text-gray-600 text-sm italic">{member.address}</p>
                                </div>
                            )}

                            {member.email && (
                                <div>
                                    <h3 className="text-sm font-bold text-[var(--button-red)] uppercase tracking-wider mb-1">Contact Email</h3>
                                    <a href={`mailto:${member.email}`} className="text-[var(--button-red)] hover:underline font-medium break-all">
                                        {member.email}
                                    </a>
                                </div>
                            )}
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
        { text: "To advance rigorous legal scholarship that responds to the societal, ethical, and technological challenges of the digital age." },
        { text: "To foster multidisciplinary dialogue among law, social sciences, humanities, computer science, and related fields." },
        { text: "To bridge theory and practice by offering insights relevant to scholars, practitioners, policymakers, and technologists." },
        { text: "Law, Technology, and Society" },
        { text: "Human Rights, Social Justice, and Digital Rights" },
        { text: "Environmental Law, Sustainability, and Emerging Technologies" },
        { text: "Economic, Corporate, and AI-Driven Governance" },
        { text: "Health Law, Bioethics, and AI in Healthcare" },
        { text: "International Relations, Global Governance, and Algorithmic Regulation" },
        { text: "Criminal Justice, Penal Reform, and Legal Automation" },
        { text: "Protection of Cultural Heritage and Intellectual Property in the Digital Age" },
        { text: "Family Law, Social Change, and Technology's Impact" },
        { text: "Legal Education, Professional Ethics, and the Challenges of AI" },
    ];

    const journalQuickLinks = [
        {
            id: 1,
            title: "Long Articles/Research Papers",
            description: "7000 to 9000 words, inclusive of footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg",
            href: "#"
        },
        {
            id: 2,
            title: "Short Articles/Short Notes",
            description: "4000 to 5000 words, inclusive of footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/kif/Entrepreneurial+Thinking.svg",
            href: "#"
        },
        {
            id: 3,
            title: "Book Reviews",
            description: "2000-3000 words, excluding footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/academics/icons/teachings.svg",
            href: "#"
        },
        {
            id: 4,
            title: "Case Comments",
            description: "1,500 and 2,500 words, excluding footnotes.",
            icon: "https://cdn.kalingauniversity.ac.in/icons/facility-management.svg",
            href: "#"
        },
    ];

    const consolidatedFAQItems = [
        {
            id: 1,
            question: "Standard Format- Research Papers",
            file: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/Standard-Format-Research-Paper.pdf"
        },
        {
            id: 2,
            question: "Format and Citation Guidelines",
            answer: `
                <p><strong>File Format:</strong> Please submit your manuscript in a Microsoft Word-compatible format (.doc or .docx is preferred).</p>
                <p><strong>Font Specifications:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Main Text:</strong> Use Times New Roman, 10-point font.</li>
                    <li><strong>Main Title:</strong> Should be centered, in Capitalize Each Word, bold, and 24-point font.</li>
                    <li><strong>Below main title:</strong> mention the name of the author and co-author along with designation and institution, and 11-point font.</li>
                    <li><strong>Sub-Titles:</strong> in sentence case, and 10-point font and aligned left.</li>
                    <li><strong>Footnotes:</strong> Should be in Times New Roman, 8-point font.</li>
                    <li><strong>Citation Style:</strong> All citations must adhere to the OSCOLA Uniform Style of Citation (4th edition).</li>
                    <li><strong>Plagiarism:</strong> Ensure that the similarity index is below 10%.</li>
                </ul>
            `
        },
        {
            id: 3,
            question: "Submission Procedure",
            answer: `
                <p><strong>File Naming:</strong> The file name should include the Name of the Author(s) followed by the Title of the Submission.</p>
                <p><strong>Google Form Links:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>For PG Students (Kalinga University): <a href="https://forms.gle/Rj1fbKFP58EJgX627" target="_blank" class="text-[var(--button-red)] hover:underline">https://forms.gle/Rj1fbKFP58EJgX627</a></li>
                    <li>For UG students (Kalinga University): <a href="https://forms.gle/N77FPt187xKoKrYWA" target="_blank" class="text-[var(--button-red)] hover:underline">https://forms.gle/N77FPt187xKoKrYWA</a></li>
                    <li>For Others: <a href="https://forms.gle/8TWD7SKB8ic7R5Js7" target="_blank" class="text-[var(--button-red)] hover:underline">https://forms.gle/8TWD7SKB8ic7R5Js7</a></li>
                </ul>
                <p class="text-black px-1 rounded font-bold">Paper Processing and Publication charges: 1500 INR</p>
            `
        },
        {
            id: 4,
            question: "Publication Policy",
            answer: `
                <p><strong>Originality and Exclusivity:</strong> Submissions must be the original work of the author(s) and must not have been published elsewhere. Any submission found to contain plagiarized content or facing copyright issues will be promptly rejected.</p>
                <p><strong>Copyright Assignment:</strong> By submitting their work to the Kalinga Journal of Law and Interdisciplinary Studies, the author(s) agree to transfer exclusive copyright to Kalinga University. The university will have the right to publish and reproduce the submission, in whole or in part, in any manner it deems appropriate, with proper acknowledgment to the author(s), subject to the doctrine of fair use as outlined in the Copyright Act.</p>
                <p><strong>Editorial Rights:</strong> The editors retain the right to make necessary edits to submissions, in whole or in part, for publication purposes without seeking further permission from or providing additional notice to the author(s).</p>
                <p><strong>Peer review policy:</strong> Submissions that pass the initial screening will undergo a double-blind peer review process in which the identity of both the reviewer and author are always concealed from both parties. The final selection for publication will be based on the outcomes of this review procedure.</p>
            `
        },
        {
            id: 5,
            question: "Call for Papers - Volume 2, Issue 2",
            image: "/journal-of-law-and-artificial-intelligence/call-for-papers-vol-2-issue-2.webp"
        },
        {
            id: 6,
            question: "Call for Papers - Volume 3, Issue 1",
            image: "/journal-of-law-and-artificial-intelligence/call-for-papers-vol-3-issue-1.webp"
        },
    ];

    const archivesData = [
        {
            id: 1,
            shortName: "Frontmatter",
            title: "Vol. 1, Issue 1 | June 2025",
            duration: "Page range: i-iv",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/Front-matter-volume-1-Issue-1.pdf"
        },
        {
            id: 2,
            shortName: "Frontmatter",
            title: "Vol. 1, Issue 2 | December 2025",
            duration: "Page range: i-v",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/Vol-1-Issue-2/Front-matter-volume-1-Issue-2.pdf"
        },
        {
            id: 3,
            shortName: "Dr Gagandeep & Kritika Singh",
            title: "Vol. 1, Issue 2 | January 2025",
            duration: "Page range: 1-24",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/Vol-1-Issue-2/1-Dr-Gagandeep-&-Kritika-Singh.pdf"
        },
        {
            id: 4,
            shortName: "Krishna Deo Singh",
            title: "Vol. 1, Issue 2 | January 2025",
            duration: "Page range: 25-37",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/Vol-1-Issue-2/2-Krishna-deo-Singh.pdf"
        },
        {
            id: 5,
            shortName: "Mr. Pankaj Chhuttani",
            title: "Vol. 1, Issue 2 | January 2025",
            duration: "Page range: 38-53",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/Vol-1-Issue-2/3-Mr-Pankaj-Chhuttani.pdf"
        },
        {
            id: 6,
            shortName: "Ms. Himanshu Chauhan",
            title: "Vol. 1, Issue 2 | January 2025",
            duration: "Page range: 54-69",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/Vol-1-Issue-2/4-Ms-Himanshu-Chauhan.pdf"
        },
        {
            id: 7,
            shortName: "Banveer Jinger",
            title: "Vol. 1, Issue 2 | January 2025",
            duration: "Page range: 70-78",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/Vol-1-Issue-2/5-Banveer-Jinger.pdf"
        },
        {
            id: 8,
            shortName: "Dr.Shruti M Nadkarni",
            title: "Vol. 1, Issue 2 | January 2025",
            duration: "Page range: 79-93",
            level: "VOL 1",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/Vol-1-Issue-2/6-Dr-Shruti-M-Nadkarni.pdf"
        },
        {
            id: 201,
            shortName: "Comparative Analysis Of Remand Provisions Under The Crpc And The Bnss",
            title: "Dr. Tauheed Alam, Prof. (Dr.) Afkar Ahmad",
            duration: "Page range: 1-27",
            level: "ARCHIVE",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/1.+Afkar+ahmed.pdf"
        },
        {
            id: 202,
            shortName: "From Vernacular to Spectacular Politics",
            title: "Debasis Poddar",
            duration: "Page range: 28-46",
            level: "ARCHIVE",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/2.+Debasis+Poddar.pdf"
        },
        {
            id: 203,
            shortName: "The Admissibility and Authentication of Electronic Evidence",
            title: "Krishnaja Olappamanna, Dr. Aneesh V Pillai, Dr. Sanjith S",
            duration: "Page range: 47-66",
            level: "ARCHIVE",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/3.+Dr.+Aneesh+Pillai.pdf"
        },
        {
            id: 204,
            shortName: "Rendezvous of Law and Interdisciplinary Research",
            title: "Dr. Kaumudhi Challa",
            duration: "Page range: 67-77",
            level: "ARCHIVE",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/4.+Dr.+Kaumudhi+Challa.pdf"
        },
        {
            id: 205,
            shortName: "From Black Box Paradox to Open Ledger",
            title: "Mr. Pankaj Chhuttani",
            duration: "Page range: 78-90",
            level: "ARCHIVE",
            slug: "https://cdn.kalingauniversity.ac.in/departments/journal-of-law-and-artificial-intelligence/5.+Mr.+Pankaj+Chhuttani.pdf"
        },
        {
            id: 100,
            shortName: "Frontmatter",
            title: "Vol. 2, Issue 1",
            duration: "",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/Frontmatter.pdf"
        },
        {
            id: 101,
            shortName: "Shruti navratna & Ekta Chandrakar",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 1-9",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/1.Shruti-Navratna,-Ekta-Chandrakar-1-9.pdf"
        },
        {
            id: 102,
            shortName: "Anshika Vishwakarma,& Dr. Paluck-Sharma",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 10-15",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/2.Anshika-Vishwakarma,-Dr.Paluck-Sharma-10-15.pdf"
        },
        {
            id: 103,
            shortName: "Shraddha-Sahu, Swarnim-Sahu, Vamini-Dhruw, Aryan-Jain, Ekta-Chandrakar",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 16-22",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/3.Shraddha-Sahu,-Swarnim-Sahu,-Vamini-Dhruw,-Aryan-Jain,-Ekta-Chandrakar-16-22.pdf"
        },
        {
            id: 104,
            shortName: "Anuj Sharma, Dr. Paluck Sharma",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 23-29",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/4.-Anuj-Sharma,-Dr.Paluck-Sharma-23-29.pdf"
        },
        {
            id: 105,
            shortName: "Yograj-Dewangan,-Vishakha-Sakharkar",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 30-38",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/5.Yograj-Dewangan,-Vishakha-Sakharkar-30-38.pdf"
        },
        {
            id: 106,
            shortName: "Labhansh-Sahu,-Ritika-Sahu",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 39-51",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/6.Labhansh-Sahu,-Ritika-Sahu-39-51.pdf"
        },
        {
            id: 107,
            shortName: "Aneeta-Prasad,-Ekta-Chandrakar",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 52-57",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/7.Aneeta-Prasad,-Ekta-Chandrakar-52-57.pdf"
        },
        {
            id: 108,
            shortName: "Harshita-Awasthi, Meenakshi-Agarwal",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 58-65",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/8.Harshita-Awasthi,-Meenakshi-Agarwal-58-65.pdf"
        },
        {
            id: 109,
            shortName: "Yemika-Chandrakar, Vishakha-Sakharkar",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 66-73",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/9.Yemika-Chandrakar,-Vishakha-Sakharkar-66-73.pdf"
        },
        {
            id: 110,
            shortName: "Palak-Agrawal, Soumyadeep-Chakrabarti",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 74-81",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/10.Palak-Agrawal,-Soumyadeep-Chakrabarti-74-81.pdf"
        },
        {
            id: 111,
            shortName: "Durlabh-Agrawal, Navanshu-Shrivastava",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 82-90",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/11.Durlabh-Agrawal,-Navanshu-Shrivastava-82-90.pdf"
        },
        {
            id: 112,
            shortName: "Yatindra-Dandekar, Vishakha-Sakharkar",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 91-100",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/12.Yatindra-Dandekar,-Vishakha-Sakharkar-91-100.pdf"
        },
        {
            id: 113,
            shortName: "Ponduru-Lakshmi-Prasanna, Ainam-Fatima",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 101-107",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/13.Ponduru-Lakshmi-Prasanna,-Ainam-Fatima-101-107.pdf"
        },
        {
            id: 114,
            shortName: "Chandan-Kumar, Rashid-Hasnanin, Rishabh-Kumar-Shrivastava, Samip-Garg, Soumyadeep-Chakrabarti",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 108-111",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/14.Chandan-Kumar,-Rashid-Hasnanin,-Rishabh-Kumar-Shrivastava,-Samip-Garg,-Soumyadeep-Chakrabarti-108-111.pdf"
        },
        {
            id: 115,
            shortName: "Mahek-Zubeariya, Simran-Sinha, Nishi-Mishra, Vaishnavi, Dr.Paluck-Sharma",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 112-118",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/15.Mahek-Zubeariya,-Simran-Sinha,-Nishi-Mishra,-Vaishnavi,-Dr.Paluck-Sharma-112-118.pdf"
        },
        {
            id: 116,
            shortName: "Mitali-Thakur, Komal-Pandey, Prerna-Borker, Shlok-Pandey, Navanshu-Shrivastava",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 119-124",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/16.Mitali-Thakur,-Komal-Pandey,-Prerna-Borker,-Shlok-Pandey,-Navanshu-Shrivastava-119-124.pdf"
        },
        {
            id: 117,
            shortName: "Deepanshu-Tembhre, Manasi-Bakshi, Bhawana-Sahu, Ashmit-Bhargava, Ms. Meenakshi-Rani-Agarwal",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 125-138",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/17.Deepanshu-Tembhre,-Manasi-Bakshi,-Bhawana-Sahu,-Ashmit-Bhargava,-Ms.Meenakshi-Rani-Agarwal-125-138.pdf"
        },
        {
            id: 118,
            shortName: "Divya-Maheshwari,-Grace-Samson-Arab,-Kanishka-Puri-Dautlani,-Oshika-Goyal,-Chanchal-Jain",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 139-147",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/18.Divya-Maheshwari,-Grace-Samson-Arab,-Kanishka-Puri-Dautlani,-Oshika-Goyal,-Chanchal-Jain-139-147.pdf"
        },
        {
            id: 119,
            shortName: "Ranpriya-Bose, Mohan-Narayan-Sahu, Kaushi-Chaturvedi, Neelam-Shree-Yadu, Ritika-Sahu",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 148-155",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/19.Ranpriya-Bose,-Mohan-Narayan-Sahu,-Kaushi-Chaturvedi,-Neelam-Shree-Yadu,-Ritika-Sahu-148-155.pdf"
        },
        {
            id: 120,
            shortName: "Yashaswi-Srivastav, Rahul-Sahu, Mansi-Charde, Parth-Patel, Chanchal-Jain",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 156-163",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/20.Yashaswi-Srivastav,-Rahul-Sahu,-Mansi-Charde,-Parth-Patel,-Chanchal-Jain-156-163.pdf"
        },
        {
            id: 121,
            shortName: "Asna-Jabi, Mona-Agrawal, Suyash-Gupta, Rajkamal-Baghel, Chikita-Malhotra",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 164-173",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/21.Asna-Jabi,-Mona-Agrawal,-Suyash-Gupta,-Rajkamal-Baghel,-Chikita-Malhotra-164-173.pdf"
        },
        {
            id: 122,
            shortName: "Shriya Jha, Shruti-Kar, Dr.Savyasanchi-Pandey",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 174-181",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/22.Shriya-Jha,-Shruti-Kar,-Dr.Savyasanchi-Pandey-174-181.pdf"
        },
        {
            id: 123,
            shortName: "Asna-Jabi, Adv.-Masood-Ahmed",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 182-196",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/23.Asna-Jabi,-Adv.-Masood-Ahmed-182-196.pdf"
        },
        {
            id: 124,
            shortName: "Asna-Jabi, Adv.-Masood-Ahmed",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 197-207",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/24.Asna-Jabi,-Adv.-Masood-Ahmed-197-207.pdf"
        },
        {
            id: 125,
            shortName: "Asna-Jabi, Adv.-Masood-Ahmed",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 208-214",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/25.Asna-Jabi,-Adv.-Masood-Ahmed-208-214.pdf"
        },
        {
            id: 126,
            shortName: "Aakanksha-Sen, Bhargavi-Kumari, Surbhi-Jain, Sangeeta-Rathiya, Vanshika-Kapoor",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 215-223",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/26.Aakanksha-Sen,-Bhargavi-Kumari,-Surbhi-Jain,-Sangeeta-Rathiya,-Vanshika-Kapoor-215-223.pdf"
        },
        {
            id: 127,
            shortName: "Gunjan-Ukey, Vanshika-Bhanshali, Harsh-Sinha, Divyansh-Patel, Vishakha-Sakharkar",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 224-236",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/27.Gunjan-Ukey,-Vanshika-Bhanshali,-Harsh-Sinha,-Divyansh-Patel,-Vishakha-Sakharkar-224-236.pdf"
        },
        {
            id: 128,
            shortName: "Ashwani-Kumar, Dr.Harleen-Kaur",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 237-246",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/28.Ashwani-Kumar,Dr.-Harleen-Kaur-237-246.pdf"
        },
        {
            id: 129,
            shortName: "Bhavya-Bhartee, Dr.Harleen-Kaur",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 247-257",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/29.Bhavya-Bhartee,-Dr.-Harleen-Kaur-247-257.pdf"
        },
        {
            id: 130,
            shortName: "Aryaditya-Singh-Thakur,-Dr.Paluck-Sharma",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 258-265",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/30.Aryaditya-Singh-Thakur,-Dr.Paluck-Sharma-258-265.pdf"
        },
        {
            id: 131,
            shortName: "Kaushal-kumar-Singh,-Chikita-Malhotra",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 266-272",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/31.Kaushal-kumar-Singh,-Chikita-Malhotra-266-272.pdf"
        },
        {
            id: 132,
            shortName: "Pooja-Rani-Sharma, Ainam-Fatima",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 273-281",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/32.Pooja-Rani-Sharma,-Ainam-Fatima-273-281.pdf"
        },
        {
            id: 133,
            shortName: "Princy-Tiwari, Dr.Paluck-Sharma",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 282-291",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/33.Princy-Tiwari,-Dr.Paluck-Sharma-282-291.pdf"
        },
        {
            id: 134,
            shortName: "Prerna-Singh, Siddharth-Soni, Ujjwal-Soni, Prakash-Kashyap, Dr. Harleen-Kaur",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 292-302",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/34.Prerna-Singh,-Siddharth-Soni,-Ujjwal-Soni,-Prakash-Kashyap,-Dr.Harleen-Kaur-292-302.pdf"
        },
        {
            id: 135,
            shortName: "Siddhi-Upadhyay, Simran-Sharma, Alisha-Sharma, Jeeya-Singh, Dr. Payal-Bohria",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 303-315",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/35.Siddhi-Upadhyay,-Simran-Sharma,-Alisha-Sharma,-Jeeya-Singh,-Dr.Payal-Bohria-303-315.pdf"
        },
        {
            id: 136,
            shortName: "Bhoumik-Swami, Gamendra-Kumar-Sahu, Akash-Sahu, Lokesh-Navrange, Dr.-Payal-Bohria",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 316-327",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/36.Bhoumik-Swami,-Gamendra-Kumar-Sahu,-Akash-Sahu,-Lokesh-Navrange,-Dr.-Payal-Bohria-316-327.pdf"
        },
        {
            id: 137,
            shortName: "Khushi Tiwari,Chikita Malhotra",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 328-333",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/37.Khushi-Tiwari,-Chikita-Malhotra-328-333.pdf"
        },
        {
            id: 138,
            shortName: "Manoj Murlidharan Kumar,Chikita Malhotra",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 334-342",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/38.Manoj-Murlidharan-Kumar,-Chikita-Malhotra-334-342.pdf"
        },
        {
            id: 139,
            shortName: "Monika Verma,Dr. Savyasanchi Pandey",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 343-353",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/39.Monika-Verma,-Dr.Savyasanchi-Pandey-343-353.pdf"
        },
        {
            id: 140,
            shortName: "Shakainah Rebecca-Arthur, Dr. Payal-Bohria",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 354-362",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/40.Shakainah-Rebecca-Arthur,-Dr.Payal-Bohria-354-362.pdf"
        },
        {
            id: 141,
            shortName: "Mihika-Dubey,Anshika-Dubey,Dhairy-Yadav,Om-Giri-Goswami,Dr.-Savyasanchi-Pandey",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 363-367",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/41.Mihika-Dubey,-Anshika-Dubey,-Dhairy-Yadav,-Om-Giri-Goswami,-Dr.-Savyasanchi-Pandey-363-367.pdf"
        },
        {
            id: 142,
            shortName: "Girijanand-Yadav,Sunil-Prakash-Baghel,Navneet-Choudhary,Hemprakash-Jain,Chikita-Malhotra",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 368-380",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/42.Girijanand-Yadav,-Sunil-Prakash-Baghel,-Navneet-Choudhary,-Hemprakash-Jain,-Chikita-Malhotra-368-380.pdf"
        },
        {
            id: 143,
            shortName: "Tejaswini-Palariya,Yogita-Uplopwar,Mitakshara-Dixit,Zishan-Halim-Firdousi,Soumyadeep-Chakrabarti",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 381-386",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/43.Tejaswini-Palariya,Yogita-Uplopwar,Mitakshara-Dixit,Zishan-Halim-Firdousi,Soumyadeep-Chakrabarti-381-386.pdf"
        },
        {
            id: 144,
            shortName: "Yash-Rathore,Vanshika-Kapoor",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 387-395",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/44.Yash-Rathore,-Vanshika-Kapoor-387-395.pdf"
        },
        {
            id: 145,
            shortName: "Roushan-Kumar,Chanchal-Jain",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 396-401",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/45.Roushan-Kumar,-Chanchal-Jain-396-401.pdf"
        },
        {
            id: 146,
            shortName: "Sanjeeb-Sahu,Payal-Bohria",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 402-410",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/46.Sanjeeb-Sahu,-Payal-Bohria-402-410.pdf"
        },
        {
            id: 147,
            shortName: "Harsh Vardhan, Meenakshi Agrawal",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 411-419",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/47.Harsh-Vardhan,Meenakshi-Agrawal-411-419.pdf"
        },
        {
            id: 148,
            shortName: "Mamta Devi, Ritika Sahu",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 420-430",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/48.Mamta-Devi,Ritika-Sahu-420-430.pdf"
        },
        {
            id: 149,
            shortName: "Divyansh Chauhan, Gourav Nag, Ainam Fatima",
            title: "Vol. 2, Issue 1",
            duration: "Page range: 431-437",
            level: "VOL 2",
            slug: "https://cdn.kalingauniversity.ac.in/journal-of-law-and-artificial-intelligence/vol-2-issues-1/49.Divyansh-Chauhan,Gourav-Nag,Ainam-Fatima-431-437.pdf"
        }

    ];

    const editorialBoardData = [
        {
            id: 1,
            shortName: "Prof. (Dr.) Azim Khan Pathan",
            title: "Editor-in-chief",
            specialization: "Faculty of Law, Kalinga University",
            education: "LL.B., LLM and PhD",
            institution: "Dean, Faculty of Law, Kalinga University",
            address: "Near Mantralaya, Kotni, Atal Nagar-Nava Raipur, Chhattisgarh 492101/492001",
            email: "prof.azimkhan@kalingauniversity.ac.in",
            type: "BOARD",
            coursePageUrl: "https://kalingauniversity.ac.in/Faculty-of-Law/Faculty-Profile.php",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 2,
            shortName: "Prof. (Dr.) Manoj Kumar Sinha",
            title: "Editor",
            specialization: "Vice Chancellor, Dharmashastra National Law University",
            education: "Doctorate in International Law from JNU, LL.M. from University of Nottingham, LL.B. from University of Delhi",
            institution: "Vice Chancellor, Dharmashastra National Law University",
            address: "South Civil Lines, Pachpedi, Lekha Nagar, Jabalpur, Madhya Pradesh 482001, India",
            email: "vc@mpdnlu.ac.in",
            type: "BOARD",
            coursePageUrl: "https://www.nujs.edu/faculty/dr-manoj-kumar-sinha/",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 3,
            shortName: "Prof. (Dr.) V.K. Ahuja",
            title: "Editor",
            specialization: "Director, Indian Law Institute",
            education: "Ph.D. and LL.M. Degrees from University of Delhi and M.Phil. Degree from JNU, New Delhi",
            institution: "Director, Indian Law Institute",
            address: "Bhagwan Das Rd, opp. Supreme Court of India, Government Officers Colony, India Gate, New Delhi, Delhi 110001, India",
            email: "director@ili.ac.in",
            type: "BOARD",
            coursePageUrl: "http://www.ili.ac.in/details.php?catid=18",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 4,
            shortName: "Prof. (Dr.) Tabrez Ahmad",
            title: "Editor",
            specialization: "Founding Dean & Professor, Department of Law, MANUU",
            education: "Ph.D. (Cyberlaw & IPR), Founding Dean & Professor, Department of Law, MANUU",
            institution: "Maulana Azad National Urdu University (MANUU)",
            address: "MANUU Gowdown, Weaker Section Colony, Khajaguda, Hyderabad, Telangana 500032, India",
            email: "dean.law@manuu.edu.in",
            type: "BOARD",
            coursePageUrl: "https://manuu.edu.in/University/Law/People/1108",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 5,
            shortName: "Prof. (Dr.) S. G. Sreejith",
            title: "Editor",
            specialization: "Professor & Executive Dean, Jindal Global Law School",
            education: "LL.B.; M.B.L. (University of Kerala), M.Phil. (JNU), LL.D. (University of Lapland)",
            institution: "Professor & Executive Dean, Jindal Global Law School",
            address: "Sonipat Narela Road, Near Jagdishpur Village, Sonipat, Haryana 131001, India",
            email: "sgsreejith@jgu.edu.in",
            type: "BOARD",
            coursePageUrl: "https://jgu.edu.in/jgls/faculty/prof-dr-s-g-sreejith",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 6,
            shortName: "Ms. Ekta Chandrakar",
            title: "Editor",
            specialization: "Assistant Professor, Faculty of Law, Kalinga University",
            education: "BA. LL.B, LLM, Pursuing PhD (MNLU, Nagpur)",
            institution: "Assistant Professor, Faculty of Law, Kalinga University",
            address: "Near Mantralaya, Kotni, Atal Nagar-Nava Raipur, Chhattisgarh 492101",
            email: "ekta.chandrakar@kalingauniversity.ac.in",
            type: "BOARD",
            coursePageUrl: "https://kalingauniversity.ac.in/Faculty-of-Law/Faculty-Profile.php",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        },
        {
            id: 7,
            shortName: "Ms. Meenakshi Rani Agarwal",
            title: "Editor",
            specialization: "Assistant Professor, Faculty of Law, Kalinga University",
            education: "BA. LL.B, LLM",
            institution: "Assistant Professor, Faculty of Law, Kalinga University",
            address: "Near Mantralaya, Kotni, Atal Nagar-Nava Raipur, Chhattisgarh 492101",
            email: "meenakshi.agarwal@kalingauniversity.ac.in",
            type: "BOARD",
            coursePageUrl: "https://kalingauniversity.ac.in/Faculty-of-Law/Faculty-Profile.php",
            exploreLinkText: "View Profile",
            hideScholarshipLink: true,
            hideDuration: true
        }
    ];

    const contactInfo = {
        title: "Editorial Board Office",
        subtitle: "Contact Us",
        department: "For Any Query and Clarifications, Contact Us At:",
        quote: "<strong>Address:</strong> Editor-in-chief, Kalinga University, Near Mantralaya, Kotni, Atal Nagar-Naya Raipur, Chhattisgarh 492101/492001",
        contactInfo: {
            email: "jlai@kalingauniversity.ac.in",
            phone: "+917024116971"
        },
        imageSrc: "https://cdn.kalingauniversity.ac.in/laboratories/laboratories-mainintro.webp",
        showQuotes: false
    };

    return (
        <>
            <div className="pt-[100px] md:pt-0">
                <div className="container mx-auto px-4 mt-8 mb-4">
                    <SectionHeading
                        title="E-ISSN: 3107-8524"
                        titleClassName="text-center md:text-[40px]"
                        titleTextColor="text-[#001f3f]"
                    />
                </div>
                <MainIntro
                    title="Journal of Law and Artificial Intelligence"
                    subtitle="Faculty of Law"
                    description={[
                        "The Journal of Law and Artificial Intelligence is a pioneering, peer-reviewed, bi-annual academic publication dedicated to examining the evolving relationship between law and artificial intelligence. At the forefront of contemporary scholarship, JLAI serves as a premier platform for critical inquiry, innovative research, and interdisciplinary dialogue at the intersection of legal studies and emerging technologies.",
                        "In a rapidly transforming digital world, artificial intelligence is reshaping legal systems, regulatory frameworks, and notions of justice. JLAI seeks to explore these transformative impacts by fostering an inclusive and intellectually vibrant space where scholars, practitioners, technologists, and policymakers can converge. Our mission is to advance legal scholarship that not only engages with the implications of AI and machine learning but also contextualizes their role within broader societal, ethical, and economic dimensions.",
                        "The journal welcomes submissions that offer original research, critical analysis, case studies, and comprehensive reviews on a wide array of topics, including but not limited to AI regulation, algorithmic governance, digital rights, legal automation, ethics in AI, and the future of legal practice in the age of intelligent systems.",
                        "By embracing an interdisciplinary approach, JLAI aims to bridge traditional legal paradigms with insights from computer science, philosophy, economics, sociology, and data science. We believe that understanding the legal challenges posed by AI technologies requires not only legal expertise but also the perspectives of adjacent disciplines.",
                        "We invite scholars and professionals to contribute to this timely and vital discourse. Join us in shaping the future of legal thought and innovation through the lens of artificial intelligence.",
                        "Frequency: Bi-Annual | Medium: Online Only | Subject focus: Multidisciplinary Subject | Language: English only"
                    ]}
                    imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                    imageAlt="Journal of Law and Artificial Intelligence"
                    showKnowMore={true}
                    knowMoreLabel="Read More"
                    knowMoreHref="#"
                    onKnowMore={(e) => {
                        e.preventDefault();
                        setSelectedMember(editorialBoardData[0]); // Default to Editor-in-chief
                        setIsModalOpen(true);
                    }}
                    initialVisibleParagraphs={2}
                />

                <ImageListItem
                    items={aimsAndScopeItems}
                    imageSrc="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                    title="Aims and Scope"
                    description="Starting year of the Publication: 2025. The Journal is dedicated to examining the evolving intersections of law, technology, and society across the globe. The Journal of Law and Artificial Intelligence is a peer-reviewed, bi-annual academic publication dedicated to examining the evolving intersections of law, technology, and society. It provides a dynamic platform for multidisciplinary scholarship that critically engages with how law and artificial intelligence are reshaping legal systems, rights, responsibilities, and governance across the globe."
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

                <QuickLinks
                    title="Journal Policies & Information"
                    description="Explore the standards and processes that govern the Journal of Law and Artificial Intelligence."
                    links={journalQuickLinks}
                    backgroundColor="bg-[var(--dark-blue)]"
                    textColorClassName="text-white"
                    titleClassName="text-white"
                />

                <div className="py-12">
                    <ProgramsOffered
                        title="Archives"
                        description="Explore past volumes and issues of the Journal of Law and Artificial Intelligence."
                        programs={
                            activeTab === "vol1_issue1"
                                ? archivesData.filter(item => item.level === "VOL 1" && item.title.includes("Issue 1") || item.level === "ARCHIVE")
                                : activeTab === "vol1_issue2"
                                    ? archivesData.filter(item => item.level === "VOL 1" && item.title.includes("Issue 2"))
                                    : archivesData.filter(item => item.level === "VOL 2")
                        }
                        exploreLabel="Download PDF"
                        searchPlaceholder="Search Archives...."
                        hideSearch={false}
                        backgroundImage="https://cdn.kalingauniversity.ac.in/international-students/student-cell.webp"
                        backgroundColor="bg-white"
                        textColor="text-gray-700"
                        titleColor="text-[var(--foreground)]"
                        topRightContent={
                            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                                <TabsList className="grid grid-cols-3 gap-4 bg-transparent p-0">
                                    <TabsTrigger
                                        value="vol1_issue1"
                                        className={`!rounded-xl border ${activeTab === "vol1_issue1" ? "bg-[var(--button-red)] text-white" : "bg-gray-50 text-gray-600 border-gray-100"}`}
                                    >
                                        Vol. 1, Issue 1 - June 2025
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="vol1_issue2"
                                        className={`!rounded-xl border ${activeTab === "vol1_issue2" ? "bg-[var(--button-red)] text-white" : "bg-gray-50 text-gray-600 border-gray-100"}`}
                                    >
                                        Vol. 1, Issue 2 - Dec 2025
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="vol2_issue1"
                                        className={`!rounded-xl border ${activeTab === "vol2_issue1" ? "bg-[var(--button-red)] text-white" : "bg-gray-50 text-gray-600 border-gray-100"}`}
                                    >
                                        Vol. 2, Issue 1 - June 2026
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        }
                    />
                </div>

                <OurPrograms
                    customPrograms={editorialBoardData.map(p => ({ ...p, hideApplyNow: true }))}
                    customTitle="Editorial Board Members"
                    customSubtitle="Our distinguished members"
                    hideSearchFilter={true}
                    backgroundColor="bg-white"
                    onExploreProgramClick={(program) => {
                        setSelectedMember(program);
                        setIsModalOpen(true);
                    }}
                    onCheckEligibility={(program) => {
                        setSelectedMember(program);
                        setIsModalOpen(true);
                    }}
                />

                <MentorIntro {...contactInfo} />

                <EditorialBoardModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    member={selectedMember}
                />
            </div>
        </>
    );
};

export default JournalOfLawAndAIPage;
