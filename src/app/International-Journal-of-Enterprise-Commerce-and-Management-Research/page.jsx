"use client";

import React, { useState } from 'react';
import MainIntro from '../components/about/main_intro';
import ImageListItem from '../components/ccrc/imagelistitem';
import FAQ from '../components/general/faq';
import OurPrograms from '../components/admissions/our_programs';
import MentorIntro from '../components/department/dept_head_intro';
import SectionHeading from "../components/general/SectionHeading";

const JOURNAL_NAME = "International Journal of Enterprise, Commerce and Management Research (IJECMR)";
const JOURNAL_EMAIL = "ijecmr@kalingauniversity.ac.in";

// Placeholder images reused from the site; replace when final images are provided.
const IMAGES = {
    intro: "https://cdn.kalingauniversity.ac.in/academics/commerce-management.webp",
    aims: "https://cdn.kalingauniversity.ac.in/academic-facilities/businesslab.webp",
    submission: "https://cdn.kalingauniversity.ac.in/academic-facilities/research-and-statistical-database-lab1.webp",
    contact: "https://cdn.kalingauniversity.ac.in/academic-facilities/resourcerichlibrary.webp",
};

const objectives = [
    "Promote original and high-quality research across business, commerce, management, finance, economics, and allied disciplines.",
    "Encourage interdisciplinary research addressing contemporary organizational, economic, financial, and societal challenges.",
    "Provide a platform for emerging scholars, experienced academicians, and industry researchers to exchange knowledge and research findings.",
    "Advance understanding of entrepreneurship, innovation, digital transformation, and enterprise development.",
    "Encourage research on sustainable business practices, corporate responsibility, governance, and inclusive economic growth.",
    "Facilitate the application of research findings to business strategy, policy formulation, organisational development, and managerial decision-making.",
    "Support evidence-based research that contributes to academic advancement and professional practice at national and international levels.",
].map(text => ({ text }));

const scopeAreas = [
    {
        title: "A. Management and Organisational Studies",
        items: [
            "General Management and Management Principles",
            "Strategic Management and Corporate Strategy",
            "Organisational Behaviour and Organisational Development",
            "Leadership, Decision-Making, and Change Management",
            "Human Resource Management and Human Resource Development",
            "Talent Management, Employee Engagement, and Workforce Transformation",
            "Performance Management and Organisational Effectiveness",
            "Operations, Production, and Supply Chain Management",
            "Project Management and Quality Management",
        ],
    },
    {
        title: "B. Commerce and Business Studies",
        items: [
            "Financial Accounting and Corporate Accounting",
            "Cost Accounting and Management Accounting",
            "Corporate Reporting and Financial Statement Analysis",
            "Auditing, Taxation, and Regulatory Compliance",
            "Corporate Finance and Business Finance",
            "International Business and Global Commerce",
            "Business Law and Corporate Governance",
            "Digital Commerce, E-Commerce, and Emerging Business Models",
            "Business Policy and Commercial Practices",
        ],
    },
    {
        title: "C. Finance, Banking, and Investment",
        items: [
            "Financial Management and Corporate Finance",
            "Banking, Insurance, and Financial Services",
            "Investment Management and Portfolio Analysis",
            "Capital Markets and Securities Market Research",
            "Financial Literacy and Investor Behaviour",
            "FinTech, Digital Banking, and Financial Innovation",
            "Risk Management and Financial Risk Modelling",
            "Behavioural Finance and Financial Decision-Making",
            "Financial Inclusion and Inclusive Finance",
            "International Finance and Foreign Exchange Markets",
        ],
    },
    {
        title: "D. Marketing and Consumer Studies",
        items: [
            "Strategic Marketing and Marketing Management",
            "Consumer Behaviour and Consumer Psychology",
            "Digital Marketing and Social Media Marketing",
            "Brand Management and Integrated Marketing Communication",
            "Retailing, E-Commerce, and Omnichannel Marketing",
            "Services Marketing and Relationship Marketing",
            "Marketing Analytics and Data-Driven Marketing",
            "Customer Experience, Satisfaction, and Loyalty",
            "Rural Marketing and Emerging Market Strategies",
            "Sustainable Marketing and Responsible Consumption",
        ],
    },
    {
        title: "E. Entrepreneurship, Innovation, and Enterprise Development",
        items: [
            "Entrepreneurship and Entrepreneurial Intentions",
            "Start-ups, Business Incubation, and Innovation Ecosystems",
            "Micro, Small, and Medium Enterprises (MSMEs)",
            "Family Businesses and Small Business Management",
            "Women Entrepreneurship and Inclusive Entrepreneurship",
            "Social Entrepreneurship and Community Enterprises",
            "Business Model Innovation and Enterprise Competitiveness",
            "Entrepreneurial Finance and Venture Development",
            "Innovation Management and Technology Commercialisation",
            "Enterprise Growth, Resilience, and Sustainability",
        ],
    },
    {
        title: "F. Economics, Trade, and Public Policy",
        items: [
            "Business Economics and Managerial Economics",
            "Macroeconomic and Microeconomic Issues Affecting Enterprises",
            "International Trade and Global Economic Integration",
            "Industrial Economics and Sectoral Development",
            "Economic Policy and Business Regulation",
            "Employment, Productivity, and Economic Growth",
            "Rural Development and Regional Economic Development",
            "Public Finance and Fiscal Policy",
            "GST, Tax Policy, and Business Competitiveness",
            "Economic Implications of Digitalisation and Globalisation",
        ],
    },
    {
        title: "G. Digital Transformation, Artificial Intelligence, and Business Analytics",
        items: [
            "Artificial Intelligence in Business and Management",
            "Generative AI and Emerging Business Applications",
            "Business Analytics and Big Data Applications",
            "Machine Learning Applications in Finance, Marketing, and Management",
            "Business Intelligence and Decision Support Systems",
            "Digital Transformation and Industry 4.0",
            "FinTech, Digital Platforms, and Platform-Based Business Models",
            "Automation, Intelligent Systems, and Process Innovation",
            "Predictive Analytics and Business Forecasting",
            "Data-Driven Decision-Making and Digital Strategy",
        ],
    },
    {
        title: "H. Corporate Governance, Ethics, and Sustainability",
        items: [
            "Corporate Governance and Board Effectiveness",
            "Business Ethics and Ethical Decision-Making",
            "Corporate Social Responsibility (CSR)",
            "Environmental, Social, and Governance (ESG) Practices",
            "Sustainability Reporting and Integrated Reporting",
            "Sustainable Business Models and Circular Economy",
            "Green Finance and Responsible Investment",
            "Stakeholder Management and Corporate Accountability",
            "Business Sustainability and Climate-Related Risks",
            "Social Inclusion and Responsible Enterprise Development",
        ],
    },
    {
        title: "I. International Business and Global Management",
        items: [
            "International Business Strategy",
            "Global Supply Chains and International Logistics",
            "Cross-Cultural Management and Global Leadership",
            "Foreign Direct Investment and International Capital Flows",
            "International Marketing and Global Branding",
            "Multinational Enterprises and Global Competitiveness",
            "International Business Negotiations",
            "Geopolitical Risks and Global Business Resilience",
            "International Trade Policy and Market Entry Strategies",
            "Globalisation and Emerging Market Dynamics",
        ],
    },
    {
        title: "J. Research Methods and Emerging Interdisciplinary Themes",
        items: [
            "Business Research Methodology and Research Design",
            "Econometric Modelling and Statistical Analysis",
            "Structural Equation Modelling and Multivariate Analysis",
            "Quantitative, Qualitative, and Mixed-Methods Research",
            "Systematic Literature Reviews and Meta-Analysis",
            "Bibliometric Analysis and Science Mapping",
            "Case-Based Research and Evidence-Based Management",
            "Behavioural Studies in Business and Economics",
            "Interdisciplinary Research in Commerce and Management",
            "Emerging Issues in Business, Society, and the Economy",
        ],
    },
];

const scopeCards = scopeAreas.map((area, index) => ({
    id: index + 1,
    shortName: area.title,
    title: "",
    specialization: "",
    type: "SCOPE",
    exploreLinkText: "View Details",
    hideScholarshipLink: true,
    hideDuration: true,
    hideApplyNow: true,
    items: area.items,
}));

const submissionItems = [
    { text: "Research Articles / Research Papers: Word Limit: 3,000 to 5,000 words, inclusive of footnotes. Submissions should present original, in-depth research with significant scholarly contribution." },
    { text: "Review Papers: Word Limit: 2,000 to 3,000 words, inclusive of footnote. Reviews should critically evaluate current literature and highlight developments or gaps in the field." },
    { text: "Case Studies: Word Limit: 1,500 to 2,500 words, excluding footnotes. Case studies should provide detailed analysis, practical insights, and implications for research or practice." },
    { text: "All submissions should follow academic standards for formatting, citations, and ethical research practices. Authors are encouraged to ensure originality, clarity, and relevance to multidisciplinary research." },
];

const guidelineFAQItems = [
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
            <p><strong>Submission Email:</strong> Manuscripts must be submitted via email to: <a href="mailto:${JOURNAL_EMAIL}" class="text-[var(--button-red)] hover:underline">${JOURNAL_EMAIL}</a></p>
            <p class="mt-4"><strong>File Naming Convention:</strong> The manuscript file should be named using the Author’s Full Name followed by the Title of the Paper.</p>
        `
    },
    {
        id: 3,
        question: "Publication Policy",
        answer: `
            <div class="space-y-4">
                <p><strong>Originality and Exclusivity:</strong> Submissions must be the original, unpublished work of the author(s) and should not be under consideration elsewhere. Any manuscript found to contain plagiarized material or infringing copyright laws will be immediately disqualified from publication.</p>
                <p><strong>Copyright and Licensing:</strong> By submitting their manuscript to the IJECMR, the author(s) grant exclusive copyright to Kalinga University. The University reserves the right to publish, reproduce, and distribute the content in any format or medium, in full or in part, with due credit to the author(s), and in accordance with the provisions of fair use under the Copyright Act.</p>
                <p><strong>Editorial Discretion:</strong> The editorial team reserves the right to make editorial changes to submissions for clarity, formatting, and language—either partially or fully—without requiring prior approval or further notice to the author(s), while ensuring the core content remains intact.</p>
                <p><strong>Peer Review Process:</strong> All submissions that clear the preliminary editorial screening will undergo a double-blind peer review, ensuring anonymity of both the author(s) and reviewers. Final decisions regarding publication will be based on the recommendations received through this rigorous review process.</p>
            </div>
        `
    },
];

const editors = [
    { role: "Editor-in-Chief", name: "Dr. Shrikrishna Dhale", designation: "Dean, Faculty of Commerce & Management" },
    { role: "Associate Editor", name: "Dr. Deepti Patnaik", designation: "Assistant Professor, Department of Management" },
    { role: "Managing Editor", name: "Dr. Divya Nandini Sharma", designation: "Assistant Professor, Faculty of Commerce & Management" },
];

const advisoryBoard = [
    { name: "Dr. Vasilios N. Katsikis", affiliation: "National and Kapodistrian University of Athens" },
    { name: "Dr. Georgios Mamanis", affiliation: "International Hellenic University, Greece" },
    { name: "Dr. Sagi Kunju Kunju Mathew", affiliation: "Curtin University, Australia" },
    { name: "Dr. Sasikant Tripathy", affiliation: "University of Bahrain" },
    { name: "Dr. Munshi Ram", affiliation: "Guru Ghasidas Vishwavidyalaya, Bilaspur, C.G." },
    { name: "Dr. Amit Manglani", affiliation: "University of Allahabad, Prayagraj, U.P." },
    { name: "Dr. Anudeep Arora", affiliation: "Symbiosis International University, Pune" },
];

const contactInfo = {
    title: "Editorial Board Office",
    subtitle: "Contact Us",
    department: "For Any Query and Clarifications, Contact Us At:",
    quote: "<strong>Editorial Board Office:</strong> Kalinga University, Near Mantralaya, Kotni, Atal Nagar-Naya Raipur, Chhattisgarh 492101",
    contactInfo: {
        email: JOURNAL_EMAIL,
    },
    imageSrc: IMAGES.contact,
    showQuotes: false
};

function ScopeModal({ area, onClose }) {
    if (!area) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[var(--dark-blue)] text-white">
                    <h2 className="text-xl md:text-2xl font-bold font-plus-jakarta-sans text-white">{area.shortName}</h2>
                    <button onClick={onClose} aria-label="Close" className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                    <ul className="list-disc pl-5 space-y-2 text-gray-800">
                        {area.items.map((item, index) => <li key={index} className="leading-relaxed">{item}</li>)}
                    </ul>
                </div>
                <div className="p-6 border-t border-gray-100 flex justify-end">
                    <button onClick={onClose} className="px-6 py-2 bg-[var(--button-red)] text-white rounded-lg font-medium hover:bg-[var(--dark-orange-red)] transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function IJECMRJournalPage() {
    const [selectedArea, setSelectedArea] = useState(null);

    return (
        <div className="pt-[100px] md:pt-0">
            <MainIntro
                title={JOURNAL_NAME}
                subtitle="About the Journal"
                description={[
                    "The International Journal of Enterprise, Commerce and Management Research (IJECMR) is a multidisciplinary, peer-reviewed academic journal dedicated to promoting high-quality research, scholarly discussion, and knowledge dissemination in the fields of commerce, management, business administration, entrepreneurship, economics, finance, marketing, and related disciplines.",
                    "The journal provides an interdisciplinary platform for academicians, researchers, industry professionals, policymakers, research scholars, and practitioners to publish original research articles, empirical studies, conceptual papers, case studies, and review articles that contribute to the advancement of business knowledge and management practices.",
                    "IJECMR seeks to bridge the gap between academic research and practical business applications by encouraging innovative, evidence-based, and theoretically grounded studies addressing contemporary challenges in enterprises, markets, financial systems, organizations, and the global business environment.",
                    "With a focus on emerging trends, technological advancements, sustainable business practices, entrepreneurial development, and organizational transformation, the journal aims to contribute to the development of responsible, inclusive, and future-ready business ecosystems. It welcomes contributions employing diverse research methodologies, including quantitative, qualitative, mixed-method, analytical, and interdisciplinary approaches.",
                    "The journal aspires to serve as a valuable scholarly resource for advancing knowledge, encouraging intellectual exchange, and supporting informed decision-making in commerce, enterprise, and management.",
                ]}
                imageUrl={IMAGES.intro}
                imageAlt={JOURNAL_NAME}
                showKnowMore={true}
                initialVisibleParagraphs={2}
            />

            <ImageListItem
                items={objectives}
                imageSrc={IMAGES.aims}
                title="Aims and Objectives"
                description="The primary aim of IJECMR is to encourage the creation and dissemination of original, rigorous, and relevant research in commerce, enterprise, and management. The key objectives of the journal are to:"
            />

            <div className="mx-2 rounded-t-xl bg-gray-50 pt-12 md:pt-16">
                <p className="container mx-auto px-4 max-w-4xl text-center text-gray-700 leading-relaxed">
                    IJECMR welcomes original and unpublished scholarly contributions covering a broad range of subjects related to commerce, enterprise, management, and associated fields. The scope includes, but is not limited to, the following areas.
                </p>
            </div>
            <OurPrograms
                customPrograms={scopeCards}
                hideSearchFilter={true}
                customTitle="Scope of the Journal"
                customSubtitle="Areas of Research"
                programCardTitleClassName="!text-xl"
                backgroundColor="bg-gray-50"
                onExploreProgramClick={setSelectedArea}
            />

            <ImageListItem
                items={submissionItems}
                imageSrc={IMAGES.submission}
                title="IJECMR Submission Guidelines, Format & Publication Policy"
                description="IJECMR welcomes submissions in the following formats: research articles, research papers, review papers, and case studies. Authors are requested to adhere to the following word limits for each submission type:"
                className="!bg-white"
                textClassName="text-gray-700"
                titleTextColor="text-[var(--foreground)]"
                headingClassName=""
            />

            <FAQ
                title="Format, Citation & Policy"
                subtitle="Guidelines"
                items={guidelineFAQItems}
            />

            <section className="bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <SectionHeading
                        title="Editors"
                        titleClassName="text-center font-stix"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
                        {editors.map((editor) => (
                            <div key={editor.role} className="bg-card-sandal rounded-xl p-6 text-center">
                                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--button-red)]">{editor.role}</p>
                                <h3 className="mt-3 text-xl font-bold font-plus-jakarta-sans text-[var(--dark-blue)]">{editor.name}</h3>
                                <p className="mt-2 text-gray-700">{editor.designation}</p>
                            </div>
                        ))}
                    </div>

                    <SectionHeading
                        title="Advisory Editorial Board Members"
                        titleClassName="text-center font-stix mt-16"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
                        {advisoryBoard.map((member) => (
                            <div key={member.name} className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
                                <h3 className="text-lg font-bold font-plus-jakarta-sans text-[var(--dark-blue)]">{member.name}</h3>
                                <p className="mt-2 text-gray-700">{member.affiliation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ScopeModal area={selectedArea} onClose={() => setSelectedArea(null)} />

            <MentorIntro {...contactInfo} />
        </div>
    );
}
