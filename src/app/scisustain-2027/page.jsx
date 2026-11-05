"use client";

import React from 'react';
import MainIntro from '../components/about/main_intro';
import { AccordionItem } from '../components/general/accordion';
import SectionHeading from '../components/general/SectionHeading';
import FAQ from '../components/general/faq';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';

const CONFERENCE_EMAIL = "scisustain@kalingauniversity.ac.in";
const REGISTRATION_FORM_URL = "https://forms.gle/m389AmPmtNw8ANgLA";
const KU = "Kalinga University, Naya Raipur";

const sponsors = [
    { name: "Alpha Scientific Works", logo: "/scisustain-2027/sponsor-alpha-scientific-works.webp" },
    { name: "Siddhachalam", logo: "/scisustain-2027/sponsor-siddhachalam.webp" },
    { name: "State Bar Council of Chhattisgarh, Bilaspur", logo: "/scisustain-2027/sponsor-state-bar-council-cg.webp" },
];

const themes = [
    {
        title: "Theme 1: Physical Sciences, Mathematical Sciences and Computational Intelligence",
        items: [
            "Artificial Intelligence, Machine Learning and Computational Sciences",
            "Physics and Advanced Materials",
            "Quantum Science, Electronics and Photonics",
            "Renewable Energy, Space and Applied Physics",
            "Mathematics, Statistics and Scientific Computing",
        ],
    },
    {
        title: "Theme 2: Chemical Sciences, Materials Science and Green Technologies",
        items: [
            "Green, Sustainable and Environmental Chemistry",
            "Advanced Materials, Nanotechnology and Polymer Science",
            "Computational, Analytical and Physical Chemistry",
            "Energy Storage, Electrochemistry and Hydrogen Technologies",
            "Industrial, Medicinal and Catalytic Chemistry",
        ],
    },
    {
        title: "Theme 3: Biological Sciences, Biotechnology and Health Innovations",
        items: [
            "Biotechnology, Molecular Biology and Genetics",
            "Artificial Intelligence in Healthcare and Precision Medicine",
            "Bioinformatics, Computational Biology and Multi-omics",
            "Biomedical Engineering, Diagnostics and Drug Discovery",
            "Microbiology, Immunology and Industrial Biotechnology",
        ],
    },
    {
        title: "Theme 4: Agriculture, Horticulture, Biodiversity, Climate Change and Environmental Sustainability",
        items: [
            "Smart Agriculture, Precision Farming and Digital Agriculture",
            "Horticultural Sciences and Protected Cultivation",
            "Plant Sciences, Soil Science and Agricultural Biotechnology",
            "Biodiversity, Forestry, Ecology and Natural Resource Management",
            "Climate Change, Environmental Sustainability and Water Resource Management",
        ],
    },
    {
        title: "Theme 5: Digital Technologies, Forensic Sciences and Intelligent Systems",
        items: [
            "Artificial Intelligence, Intelligent Computing and Data Analytics",
            "Cybersecurity, Digital Forensics and Blockchain",
            "Internet of Things (IoT), Robotics and Embedded Systems",
            "Computer Vision, Smart Sensors and Intelligent Infrastructure",
            "Forensic Biology, Chemistry and Crime Investigation",
        ],
    },
    {
        title: "Theme 6: Human Health, Wellness, Design and Sustainable Living",
        items: [
            "Digital Healthcare, AI and Smart Health Systems",
            "Public Health, Preventive Healthcare and Wellness",
            "Smart Textiles, Wearable Technologies and Sustainable Fashion",
            "Interior Design, Human-Centred Design and Ergonomics",
            "Sustainable Lifestyle, Circular Design and Inclusive Innovation",
        ],
    },
    {
        title: "Theme 7: Innovation, Entrepreneurship, Policy and Sustainable Development",
        items: [
            "Industry 5.0, Digital Transformation and Smart Manufacturing",
            "Innovation, Entrepreneurship and Technology Commercialization",
            "Research Methodology, Scientific Communication and Higher Education",
            "Intellectual Property, Technology Transfer and Industry–Academia Collaboration",
            "Governance, Public Policy, Ethical AI and Sustainable Development Goals",
        ],
    },
    {
        title: "Theme 8: Climate Change, Resilience and Net-Zero Technologies",
        items: [
            "Climate Change Mitigation, Adaptation and Risk Assessment",
            "Renewable Energy, Green Hydrogen and Net-Zero Technologies",
            "Carbon Management, Circular Economy and Nature-Based Solutions",
            "Water, Food and Energy Security",
            "Disaster Risk Reduction and Climate-Resilient Infrastructure",
        ],
    },
    {
        title: "Theme 9: Artificial Intelligence for Sustainable Development Goals (SDGs)",
        items: [
            "AI for Health, Education and Agriculture",
            "AI for Environmental Sustainability and Climate Action",
            "AI for Smart Governance and Digital Inclusion",
            "Responsible, Ethical and Explainable AI",
            "AI for Social Good, Rural Development and SDG Implementation",
        ],
    },
    {
        title: "Theme 10: Sustainable Mining for a Resilient Future",
        items: [
            "Advanced Technologies in Mining (Automation, Digitalisation and Smart Mining)",
            "Mine Waste Management and Circular Economy",
            "Mining, Water and Environmental Sustainability",
            "Climate Change and Green Mining (Low-Carbon and Eco-Friendly Practices)",
            "Mineral Policy, Governance and Transparency (Regulatory Frameworks and Social Responsibility)",
        ],
    },
];

const keynoteSpeakers = [
    ["Prof. (Dr.) Rajendra Kumar Sarin", "Professor, Department of Forensic Sciences", "National Forensic Sciences University (NFSU) – Delhi Campus, Delhi, India"],
    ["Prof. (Dr.) Rakesh Kumar Singh", "Professor & Head, Department of Biochemistry", "Banaras Hindu University (BHU), Varanasi, Uttar Pradesh, India"],
    ["Prof. (Dr.) Shakeel Khan", "Principal Scientist", "ICAR–Indian Agricultural Research Institute (ICAR-IARI), New Delhi, India"],
    ["Dr. M. Shyamala Devi", "Scientist and Professor, Department of Robot and Smart System Engineering", "Kyungpook National University, Republic of Korea"],
    ["Dr. N. V. Singh", "Senior Scientist, Division of Fruit Science", "ICAR–Indian Agricultural Research Institute (ICAR-IARI), New Delhi, India"],
    ["Dr. Dinesh Kumar", "Head and Principal Scientist, Division of Food Science and Postharvest Technology", "ICAR–Indian Agricultural Research Institute (ICAR-IARI), New Delhi, India"],
    ["Dr. A. K. Handa", "Principal Scientist, Division of Forestry and Agroforestry", "ICAR–Central Agroforestry Research Institute (ICAR-CAFRI), Jhansi, Uttar Pradesh, India"],
    ["Dr. O. P. Awasthi", "Head and Principal Scientist, Division of Fruits and Horticultural Technology", "ICAR–Indian Agricultural Research Institute (ICAR-IARI), New Delhi, India"],
    ["Prof. (Dr.) L. V. K. S. Bhaskar", "Professor, Department of Zoology", "Guru Ghasidas Vishwavidyalaya, Bilaspur, Chhattisgarh, India"],
    ["Dr. Sanjeev Kanojiya", "Scientist F, SAIF & Research", "CSIR-Central Drug Research Institute (CSIR-CDRI), Lucknow, Uttar Pradesh"],
];

const nameDesignationColumns = [
    { key: "name", label: "Name" },
    { key: "designation", label: "Designation" },
];

const committeeSections = [
    {
        id: "chief-patrons",
        title: "Chief Patrons",
        columns: nameDesignationColumns,
        data: [
            { name: "Dr. Rajiv Kumar", designation: `Chairman, ${KU}` },
            { name: "Dr. Sandeep Arora", designation: `Chancellor, ${KU}` },
        ],
    },
    {
        id: "patrons",
        title: "Patrons",
        columns: nameDesignationColumns,
        data: [
            { name: "Dr. R. Shridhar", designation: `Vice-Chancellor, ${KU}` },
            { name: "Prof. Ravi R. Saxena", designation: "Vice-Chancellor, MGUVV, Durg" },
            { name: "Dr. Byju John", designation: `Director General, ${KU}` },
            { name: "Dr. Monika Sethi Sharma", designation: `Pro Vice-Chancellor, ${KU}` },
            { name: "Dr. Sandeep Gandhi", designation: `Registrar, ${KU}` },
            { name: "Dr. Rahul Mishra", designation: `Dean, Academic Affairs, ${KU}` },
            { name: "Dr. Vijayalaxmi Biradar", designation: `Director IQAC, ${KU}` },
        ],
    },
    {
        id: "conveners",
        title: "Conveners",
        columns: nameDesignationColumns,
        data: [
            { name: "Dr. Bendi Anjaneyulu", designation: `Deputy DAA & Dean (I/c), Faculty of Science, ${KU}` },
            { name: "Dr. Jitendra Singh", designation: "Director Research Services, MGUVV, Durg" },
        ],
    },
    {
        id: "co-conveners",
        title: "Co-Conveners",
        columns: nameDesignationColumns,
        data: [
            { name: "Dr. Rupesh Thakur", designation: `Head, Dept. of Biochemistry, ${KU}` },
            { name: "Dr. Sushma Dubey", designation: `Head, Dept. of Biotechnology, ${KU}` },
            { name: "Dr. Manoj Singh", designation: `Head, Dept. of Zoology, ${KU}` },
            { name: "Dr. Rekha Singh", designation: "Associate Professor, Agriculture Extension, MGUVV, Durg" },
            { name: "Dr. Gopeshwar Dhar Dwivedi", designation: `Associate Professor, Dept. of Physics, ${KU}` },
        ],
    },
    {
        id: "secretaries",
        title: "Secretaries",
        columns: nameDesignationColumns,
        data: [
            { name: "Dr. Shilpi Shrivastava", designation: `Head, Dept. of Chemistry, ${KU}` },
            { name: "Dr. Deepa Biswas", designation: `Head, Dept. of Botany, ${KU}` },
            { name: "Dr. Aloke Verma", designation: `Head, Dept. of Physics, ${KU}` },
        ],
    },
    {
        id: "joint-secretaries",
        title: "Joint Secretaries",
        columns: nameDesignationColumns,
        data: [
            { name: "Dr. U.B. Deshmukh", designation: "Dean, Pt. K.L.S., CHRS, Rajnandgaon" },
            { name: "Dr. Priyambada Singh", designation: `Head, Dept. of Microbiology, ${KU}` },
            { name: "Dr. Amresh Kumar Sharma", designation: `Head, Dept. of Bioinformatics, ${KU}` },
            { name: "Dr. Nigam Prasan Sahoo", designation: `Head, Dept. of Mathematics, ${KU}` },
            { name: "Dr. Sanyogita Shahi", designation: `Professor, Dept. of Chemistry, ${KU}` },
            { name: "Dr. Mohammad Nasir", designation: `Professor, Dept. of Library Science, ${KU}` },
        ],
    },
    {
        id: "organizing-committee",
        title: "Organizing Committee",
        columns: [
            { key: "name", label: "Name" },
            { key: "designation", label: "Department" },
        ],
        data: [
            ["Dr. Abhijeeta Nandha", "Biotechnology"],
            ["Dr. Abhishek Kumar Pandey", "Botany"],
            ["Dr. Ajay Kumar Harit", "Zoology"],
            ["Dr. Amit Joshi", "Biochemistry"],
            ["Dr. Anita Verma", "Physics"],
            ["Dr. Anushree Saha", "Chemistry"],
            ["Dr. Arpita Srivastava", "Biotechnology"],
            ["Dr. Avinash Singh", "Physics"],
            ["Dr. Debasmita Sarkar", "Mathematics"],
            ["Dr. Dhananjay Kumar Jain", "Yoga"],
            ["Dr. Faiz Bux", "Botany"],
            ["Dr. Pradeep Kumar", "Microbiology"],
            ["Dr. Preeti Pandey", "Chemistry"],
            ["Dr. Priyanka Gupta", "Chemistry"],
            ["Dr. Rajesh Kumar Manik", "Yoga"],
            ["Dr. Rakesh Kumar", "Bioinformatics"],
            ["Dr. Rittick Mondal", "Microbiology"],
            ["Dr. Sohini Bhattacharya", "Zoology"],
            ["Dr. Suchitra Panigrahy", "Biotechnology"],
            ["Dr. Tanmay Bera", "Biotechnology"],
            ["Dr. Tejaswini Pradhan", "Mathematics"],
            ["Lt. Vibha Chandrakar", "Fashion Design"],
            ["Mr. Aayush Dey", "Forensic Science"],
            ["Mr. Abhishek Dasgupta", "Forensic Science"],
            ["Mr. Krishnendu Mondal", "Microbiology"],
            ["Mr. Prince Kumar Namdev", "Mathematics"],
            ["Mr. Sangram Keshari Samal", "Biotechnology"],
            ["Mr. Satpal Panika", "Mathematics"],
            ["Mr. Vinayak Gupta", "Forensic Science"],
            ["Mrs. Faith Ruth Dixon", "Biotechnology"],
            ["Mrs. Khushaboo Karia Thakkar", "Interior Design"],
            ["Mrs. Kshama Pandey", "Mathematics"],
            ["Mrs. Priya Paul", "Biotechnology"],
            ["Mrs. Sarvaree Bano", "Chemistry"],
            ["Ms. Abhismita Roy", "Botany"],
            ["Ms. Debosmita Saha", "Forensic Science"],
            ["Ms. Deeksha Moolya", "Forensic Science"],
            ["Ms. Jharna Maiti", "Biochemistry"],
            ["Ms. Mansi Majumdar", "Zoology"],
            ["Ms. Shainey Das", "Fashion Design"],
            ["Ms. Urvashi Sharma", "Zoology"],
            ["Ms. Vaishnavee B", "Bioinformatics"],
        ].map(([name, designation]) => ({ name, designation })),
    },
];

const advisorySections = [
    {
        id: "international-advisory",
        title: "International Advisory Committee",
        columns: nameDesignationColumns,
        data: [
            ["Prof. (Dr.) S. A. Mohiuddine", "Professor, Department of Mathematics, King Abdulaziz University, Jeddah, Saudi Arabia"],
            ["Prof. (Dr.) Mehmet Dik", "Professor, Department of Mathematics, Computer Science & Physics, Rockford University, Rockford, IL, USA"],
            ["Prof. (Dr.) Kanhu Charan Pattnaya", "Senior Climate Scientist, Hadley Centre for Climate, Met Office, Exeter, UK"],
            ["Prof. (Dr.) Aisha Kabir", "Professor, Department of Microbiology, Bayero University Kano, Kano State, Nigeria"],
            ["Prof. (Dr.) Wasan R. Saleh", "Professor, Department of Physics, College of Science, University of Baghdad, Baghdad, Iraq"],
            ["Prof. (Dr.) Balogun Joshua Babalola", "Department of Animal and Environmental Biology, Federal University Dutse, Jigawa State, Nigeria"],
            ["Prof. (Dr.) Ahmed J. Obaid", "Professor, Department of Computer Science, Faculty of Computer Science and Mathematics, University of Kufa, Najaf, Iraq"],
            ["Dr. Stephen Mathew", "Associate Professor, Department of Microbiology, Immunology & Genetics, University of North Texas Health Science Center, Fort Worth, TX, USA"],
            ["Dr. Olivier Monfort", "Associate Professor, Department of Inorganic Chemistry, Faculty of Natural Sciences, Comenius University Bratislava, Bratislava, Slovakia"],
            ["Dr. Jyoti Giri", "Soil Scientist, Environmental Assessment and Material Testing Division, Baneshwar, Kathmandu, Nepal"],
            ["Dr. Puneet Khandelwal", "Scientist, Department of Radiology and Radiological Science, The Johns Hopkins University School of Medicine, Baltimore, Maryland, USA"],
        ].map(([name, designation]) => ({ name, designation })),
    },
    {
        id: "national-advisory",
        title: "National Advisory Committee",
        columns: nameDesignationColumns,
        data: [
            ["Prof. (Dr.) Allam Srinivasa Rao", "Vice-Chancellor, Vikrama Simhapuri University, Nellore, Andhra Pradesh"],
            ["Prof. Binod Chandra Tripathy", "Professor & Director, IQAC, Tripura University (A Central University), Suryamaninagar, Agartala, Tripura"],
            ["Prof. (Dr.) Rup Lal", "Professor & INSA Senior Scientist, Department of Microbiology, Acharya Narendra Dev College, University of Delhi, New Delhi"],
            ["Prof. (Dr.) Neera Raghav", "Director, Institute of Pharmaceutical Sciences, Kurukshetra University, Kurukshetra, Haryana"],
            ["Prof. (Dr.) Sapna Garg", "Director IQAC, Maharshi Dayanand University, Rohtak, Haryana"],
            ["Prof. (Dr.) M. Vijjulatha", "Professor & Head, Department of Chemistry & Principal, University College of Science, Osmania University, Hyderabad, Telangana"],
            ["Prof. (Dr.) Shyama Prasad Mahapatra", "Professor & Head, Department of Chemistry, National Institute of Technology Raipur, Raipur, Chhattisgarh"],
            ["Prof. (Dr.) Krishnadutt Chavali", "Professor & Head, Department of Forensic Medicine & Toxicology, AIIMS Raipur, Chhattisgarh"],
            ["Dr. Renu Bhatt", "Professor & Dean, SoS of Interdisciplinary Education and Research, Guru Ghasidas Vishwavidyalaya, Bilaspur, Chhattisgarh"],
            ["Prof. (Dr.) Devasish Bose", "Professor & Head, Department of Criminology & Forensic Science, Dr. H. S. Gaur University, Sagar, Madhya Pradesh"],
            ["Prof. (Dr.) A. K. Thakur", "Professor & Head, Department of Mathematics, Guru Ghasidas Vishwavidyalaya, Bilaspur, Chhattisgarh"],
            ["Prof. (Dr.) Seema Rai", "Professor & Head, School of Studies in Life Science, Guru Ghasidas Vishwavidyalaya, Bilaspur, Chhattisgarh"],
            ["Dr. Manisha Sathe", "Scientist G, Defence Research and Development Establishment (DRDE), Gwalior, Madhya Pradesh"],
            ["Prof. (Dr.) D. P. Bisen", "Professor, School of Studies in Physics and Astrophysics, Pt. Ravishankar Shukla University, Raipur, Chhattisgarh"],
            ["Prof. (Dr.) Jai Singh", "Professor, Department of Physics & Astrophysics, University of Delhi, Delhi"],
            ["Prof. (Dr.) Manish Kumar Niranjan", "Professor, Department of Physics, Indian Institute of Technology Hyderabad, Telangana"],
            ["Prof. (Dr.) Susanta Kumar Paikray", "Professor, Department of Mathematics, Veer Surendra Sai University of Technology, Burla, Odisha"],
            ["Prof. (Dr.) Sreenivasa Rao Amaraneni", "Professor, Department of Chemistry, School of Engineering, Dayananda Sagar University, Ramanagara, Bengaluru, Karnataka"],
            ["Prof. (Dr.) Rahul M. Shrivastava", "Professor, Department of Biological Science & Engineering, MANIT, Bhopal, Madhya Pradesh"],
            ["Prof. (Dr.) Puneeta Pandey", "Professor, Centre of Environmental Studies, Institute of Interdisciplinary Studies, University of Allahabad, Prayagraj, Uttar Pradesh"],
        ].map(([name, designation]) => ({ name, designation })),
    },
];

const registrationTableSections = [
    {
        id: "important-dates",
        title: "Important Dates",
        columns: [
            { key: "activity", label: "Activity", width: "flex-1" },
            { key: "date", label: "Date", width: "w-56" },
        ],
        data: [
            { activity: "Abstract Submission Deadline", date: "20th December 2026" },
            { activity: "Full Paper Submission Deadline", date: "31st December 2026" },
            { activity: "Notification of Acceptance", date: "31st December 2026" },
            { activity: "Early Bird Registration Deadline", date: "31st December 2026" },
            { activity: "Conference Dates", date: "19th & 20th January 2027" },
        ],
    },
    {
        id: "registration-fee",
        title: "Registration Details",
        description: "The registration fee covers access to all technical sessions, conference kit, participation certificate, refreshments, and e-proceedings.",
        columns: [
            { key: "category", label: "Category", width: "flex-1" },
            { key: "fee", label: "Fee", width: "w-56" },
        ],
        data: [
            { category: "Faculty & Academicians", fee: "INR 2,000" },
            { category: "Research Scholars", fee: "INR 2,000" },
            { category: "UG/PG Students", fee: "INR 1,200" },
            { category: "Industry Delegates", fee: "INR 2,500" },
            { category: "International Participants", fee: "INR 5,000" },
            { category: "Late Fee", fee: "INR 250 (Additional)" },
            { category: "Late Fee for International Participants", fee: "INR 2,000" },
            { category: "On-the-Spot Registration", fee: "INR 500/- extra" },
        ],
    },
];

const registrationInfoItems = [
    {
        id: "registration-benefits",
        question: "Registration Benefits & Concessions",
        answer: [
            "<strong>Institutional Concession:</strong> A 50% concession in the registration fee will be provided to participants from Kalinga University and institutions having an MoU with Kalinga University, Naya Raipur.",
            "<strong>Group Registration:</strong> A 10% concession on the applicable registration fee for group registrations of 50 or more participants from the same institution.",
            "<strong>The registration fee includes:</strong> Conference Kit, Participation Certificate, Access to all Technical Sessions, High Tea, Lunch and Snacks for both Conference Days, and E-Proceedings of the Conference.",
            "<strong>Accommodation:</strong> Accommodation will be arranged for participants upon prior request (charges applicable as per availability).",
        ],
    },
];

const awardsTableSections = [
    {
        id: "awards",
        title: "Awards",
        columns: [
            { key: "slNo", label: "S.No.", width: "w-16" },
            { key: "award", label: "Award Category", width: "w-64" },
            { key: "eligibility", label: "Eligibility / Recognition", width: "flex-1" },
        ],
        data: [
            ["Young Scientist Excellence Award", "Outstanding research contribution by a young scientist/researcher, preferably below 40 years"],
            ["Young Achiever Award", "Outstanding research, innovation, or presentation by UG and PG students"],
            ["Best Research Paper Award", "Best overall research paper demonstrating originality, scientific rigor, innovation, and significance"],
            ["Best Oral Presentation Award", "Excellence in scientific presentation, clarity, methodology, technical delivery, and response to questions"],
            ["Best Poster Presentation Award", "Best scientific poster based on research quality, originality, visual communication, and presentation"],
            ["Sustainability Innovation Award", "Innovative research or technology making a significant contribution to sustainability and the SDGs"],
            ["AI for Sustainable Development Award", "Outstanding application of AI, ML, computational intelligence, or data analytics to sustainable development"],
            ["Innovation & Technology Excellence Award", "Research demonstrating strong innovation, technological advancement, or commercialization potential"],
            ["Emerging Researcher Award", "Promising and impactful research contribution by an early-career researcher"],
            ["Women Scientist Excellence Award", "Outstanding research contribution by a woman scientist/researcher"],
            ["Global Research Excellence Award", "Exceptional research contribution by an international participant"],
            ["Best Student Research Award", "Exceptional research work presented by a student with strong scientific merit and innovation"],
        ].map(([award, eligibility], index) => ({ slNo: index + 1, award, eligibility })),
    },
];

const sponsorshipTableSections = [
    {
        id: "sponsorship-opportunities",
        title: "Sponsorship Opportunities",
        columns: [
            { key: "slNo", label: "S.No.", width: "w-16" },
            { key: "level", label: "Sponsorship Category", width: "w-48" },
            { key: "amount", label: "Amount (INR)", width: "w-32" },
            { key: "description", label: "Benefits", width: "flex-1" },
        ],
        data: [
            {
                level: "Platinum Sponsorship",
                amount: "₹1,00,000",
                listItems: [
                    "Delegate Passes – 05",
                    "Standee Displays – 04",
                    "5-minute Address during the Conference",
                    "Product Display Space",
                    "Logo on All Conference Materials",
                    "Full-Page Advertisements in Conference Proceedings – 04",
                    "Promotional Video Display",
                    "Conference Kit & Memento",
                ],
            },
            {
                level: "Gold Sponsorship",
                amount: "₹50,000",
                listItems: [
                    "Delegate Passes – 03",
                    "Standee Display – 01",
                    "Logo on Conference Materials",
                    "Inserts in Conference Kits",
                    "Full-Page Advertisements in Conference Proceedings – 02",
                    "Promotional Video Display",
                    "Conference Kit & Memento",
                ],
            },
            {
                level: "Silver Sponsorship",
                amount: "₹25,000",
                listItems: [
                    "Delegate Passes – 01",
                    "Logo on Conference Materials",
                    "Full-Page Advertisement in Conference Proceedings",
                    "Conference Kit & Memento",
                ],
            },
            {
                level: "Bronze Sponsorship",
                amount: "₹15,000",
                listItems: [
                    "Delegate Pass – 01",
                    "Logo on Conference Materials",
                    "Conference Kit & Memento",
                ],
            },
            {
                level: "Supporter",
                amount: "₹10,000",
                listItems: ["Logo Display on Conference Materials"],
            },
        ].map((row, index) => ({ slNo: index + 1, description: "", ...row })),
    },
];

const bankDetails = [
    ["UPI ID", "7024125549m2@pnb"],
    ["Merchant", "KALINGA UNIVERSITY"],
    ["A/C Name", "KALINGA UNIVERSITY FACULTY OF SCIENCE"],
    ["A/C No.", "1744100100003476"],
    ["IFSC Code", "PUNB0174410"],
    ["SWIFT Code", "PUNBINBBRPM"],
    ["Branch", "RAKHI, NAYA RAIPUR, RAIPUR, CHHATTISGARH, INDIA"],
];

const contacts = [
    { name: "Dr. Gopeshwar Dhar Dwivedi", designation: "Associate Professor", department: "Department of Physics", phone: "+91 9839262728", email: "gopeshwar.dwivedi@kalingauniversity.ac.in" },
    { name: "Ms. Abhismita Roy", designation: "Assistant Professor", department: "Department of Botany", phone: "+91 7209292182", email: "abhismita.roy@kalingauniversity.ac.in" },
];

function ThemeColumn({ items }) {
    return (
        <div className="flex-1 flex flex-col gap-4 w-full">
            {items.map((group) => (
                <AccordionItem
                    key={group.title}
                    title={group.title}
                    titleClassName="font-stix text-[18px] md:text-[20px] leading-tight text-[var(--button-red)]"
                    bgClassName="bg-[var(--card-sandal)] p-4 md:p-5"
                >
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700 font-plus-jakarta-sans py-4 text-sm">
                        {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                </AccordionItem>
            ))}
        </div>
    );
}

const SciSustainConferencePage = () => {
    return (
        <>
            {/* Hero */}
            <section className="py-12 md:py-16 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <p className="text-lg md:text-xl text-gray-500 mb-3">
                        3rd International Conference on
                    </p>
                    <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4">
                        SciSustain 2027
                    </h1>
                    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800 leading-tight mb-10 titlecase max-w-4xl mx-auto">
                        AI-Driven Scientific Innovations for Sustainable Development Goals
                    </h2>

                    <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5 max-w-4xl mx-auto">
                        {[
                            ["🗓️", "19th & 20th January 2027"],
                            ["💻", "Mode: Hybrid"],
                            ["📍", "Campus, Kalinga University"],
                        ].map(([icon, label]) => (
                            <div key={label} className="flex-1 min-w-[180px] rounded-xl bg-[var(--lite-sand)] p-5 shadow-sm">
                                <p className="text-2xl mb-1" aria-hidden="true">{icon}</p>
                                <p className="font-semibold text-[var(--foreground)]">{label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 border-t border-gray-100 pt-8">
                        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800 leading-tight mb-8">
                            Jointly Organized by
                        </h3>
                        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 max-w-4xl mx-auto">
                            <div className="flex-1 w-full rounded-xl border border-gray-100 shadow-sm bg-white p-6 flex flex-col items-center gap-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/kalingacolorlogo.svg" alt="Kalinga University" className="h-24 w-auto object-contain" />
                                <p className="font-semibold text-gray-800">Faculty of Science, Kalinga University, Naya Raipur, Chhattisgarh, India</p>
                            </div>
                            <p className="self-center font-stix text-3xl text-[var(--button-red)]">&amp;</p>
                            <div className="flex-1 w-full rounded-xl border border-gray-100 shadow-sm bg-white p-6 flex flex-col items-center gap-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/scisustain-2027/mguvv-logo.webp" alt="Mahatma Gandhi Udyanikee Evam Vanikee Vishwavidyalaya logo" className="h-24 w-auto object-contain" />
                                <p className="font-semibold text-gray-800">Mahatma Gandhi Udyanikee Evam Vanikee Vishwavidyalaya (MGUVV), Durg, Chhattisgarh</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-100 pt-8">
                        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800 leading-tight mb-8">
                            Sponsors
                        </h3>
                        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {sponsors.map((sponsor) => (
                                <div key={sponsor.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-center h-36 md:h-40">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <MainIntro
                title="About Kalinga University"
                subtitle=""
                description={[
                    "Kalinga University, Naya Raipur, is a NAAC-accredited institution recognized for its academic excellence, research innovation, and commitment to sustainable development. Established in 2013, the University has rapidly emerged as a leading centre of higher education in Central India, offering undergraduate, postgraduate, and doctoral programmes across science, technology, management, law, and interdisciplinary domains.",
                    "The University emphasizes a strong research ecosystem supported by advanced laboratories, funded research projects, industry collaborations, and doctoral programmes. It actively promotes interdisciplinary research in emerging areas such as materials science, biotechnology, artificial intelligence, environmental sustainability, and applied sciences, aligning academic inquiry with national priorities and global Sustainable Development Goals (SDGs).",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="Kalinga University"
            />

            <MainIntro
                title="About Faculty of Science"
                subtitle=""
                description={[
                    "The Faculty of Science, Kalinga University is a multidisciplinary academic and research hub committed to excellence in education, innovation, and sustainable scientific development. The faculty comprises 14 departments — Biotechnology, Biochemistry, Bioinformatics, Botany, Chemistry, Fashion Design, Forensic Science, Interior Design, Library Science, Mathematics, Microbiology, Physics, Yoga, and Zoology — and offers Undergraduate (UG), Postgraduate (PG), and Ph.D. programmes across diverse scientific and interdisciplinary domains.",
                    "The faculty promotes research, innovation, interdisciplinary collaboration, and skill-based education through modern laboratories, research projects, seminars, workshops, and academic partnerships, with its academic and research activities aligned with emerging scientific challenges, national priorities, technological advancement, and the United Nations Sustainable Development Goals (SDGs).",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-green-campus/sdg-images-1.webp"
                imageAlt="Faculty of Science, Kalinga University"
            />

            <section className="py-12 md:py-16 bg-[var(--lite-sand)] mx-2 rounded-xl">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
                    <article className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/scisustain-2027/mguvv-logo.webp" alt="" className="h-16 w-16 object-contain shrink-0" />
                            <h2 className="font-stix text-2xl text-[var(--foreground)]">About Mahatma Gandhi Udyanikee Evam Vanikee Vishwavidyalaya (MGUVV)</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Mahatma Gandhi Udyanikee Evam Vanikee Vishwavidyalaya (MGUVV), Sankra–Patan, Durg, Chhattisgarh, is a State University committed to excellence in education, research, innovation, and extension in Horticulture, Forestry, and allied sciences. Established under the Mahatma Gandhi Udyanikee Evam Vanikee Vishwavidyalaya Adhiniyam, 2019, the University focuses on generating and disseminating knowledge that contributes to sustainable agriculture, horticultural advancement, forest conservation, biodiversity management, natural-resource conservation, and rural development. With its multidisciplinary academic and research programmes spanning fruit and vegetable science, floriculture, medicinal and aromatic crops, post-harvest technology, forestry, agroforestry, natural-resource management, forest products, and tree improvement, MGUVV provides a vibrant platform for scientific collaboration and innovation. Its commitment to sustainable production systems, environmental stewardship, technology transfer, and community-oriented research makes the University an important academic partner for advancing science, sustainability, food security, climate resilience, and the Sustainable Development Goals.
                        </p>
                    </article>
                    <article className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                        <h2 className="font-stix text-2xl text-[var(--foreground)] mb-4">About Chhattisgarh</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Chhattisgarh, located in central India, is a state known for its rich natural resources, biodiversity, cultural heritage, and growing industrial significance. Often referred to as the “Rice Bowl of India,” the state possesses extensive forest cover, fertile plains, and diverse ecosystems. The capital region, Naya Raipur (Atal Nagar), is a planned smart city designed with modern infrastructure, sustainable urban planning, and digital connectivity, an emerging hub for education, research, and innovation.
                        </p>
                    </article>
                </div>
            </section>

            {/* Objective */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="rounded-2xl bg-[var(--dark-blue)] text-white p-8 md:p-12">
                        <SectionHeading
                            title="Objective of Conference"
                            titleClassName="text-center !text-white mb-6"
                        />
                        <p className="text-white/90 leading-relaxed text-center md:text-lg">
                            The 3rd International Conference on SciSustain 2027 envisions establishing a globally recognized interdisciplinary platform that advances scientific excellence, technological innovation, and sustainable development through collaborative research. The conference integrates Material Science, Mathematical Sciences, Life Sciences, Forensic Sciences, and Emerging Technologies to address complex global challenges. Its objectives are to foster cross-disciplinary research collaboration, promote sustainable and innovation-driven technological solutions, strengthen academia–industry–government partnerships, and align scientific inquiry with the United Nations Sustainable Development Goals (SDGs).
                        </p>
                    </div>
                </div>
            </section>

            {/* Tracks & Call for Papers */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Conference Tracks (Themes & Sub-Themes) & Call for Papers"
                        titleClassName="text-center mb-6"
                    />
                    <p className="max-w-4xl mx-auto text-center text-gray-700 leading-relaxed mb-12">
                        The Organizing Committee invites original and unpublished research papers, review articles, and case studies from academicians, scientists, industry professionals, policymakers, and research scholars. Submissions will undergo a rigorous double-blind peer review process. Accepted papers will be published in the Conference Proceedings with ISBN, and selected papers will be recommended for UGC-CARE listed and Scopus-indexed journals. Submission email:{" "}
                        <a href={`mailto:${CONFERENCE_EMAIL}`} className="text-[var(--button-red)] font-semibold hover:underline">{CONFERENCE_EMAIL}</a>
                    </p>
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-start">
                        <ThemeColumn items={themes.slice(0, 5)} />
                        <ThemeColumn items={themes.slice(5)} />
                    </div>
                </div>
            </section>

            {/* Keynote Speakers */}
            <section className="px-4 py-12 md:px-8 bg-[var(--lite-sand)]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        title="Keynote Speakers"
                        subtitle="Our Guests"
                        subtitleClassName="text-center"
                        titleClassName="text-center"
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                        {keynoteSpeakers.map(([name, ...details]) => (
                            <article key={name} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                                <h3 className="text-lg font-bold mb-3">{name}</h3>
                                {details.map((detail) => <p key={detail} className="text-gray-700 text-sm leading-relaxed">{detail}</p>)}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dates & Registration */}
            <FAQ
                id="registration-details"
                title="Important Dates & Registration"
                subtitle="Participate"
                variant="table-display"
                tableSections={registrationTableSections}
                items={registrationInfoItems}
                pyClassName="py-12"
            />

            {/* Register & Pay */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <SectionHeading title="Register & Pay" titleClassName="text-center mb-10" />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center">
                            <h3 className="font-bold text-xl text-[var(--foreground)] mb-4">Register</h3>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/scisustain-2027/register-qr.png" alt="QR code for the SciSustain 2027 registration form" className="w-44 h-44 object-contain" />
                            <a
                                href={REGISTRATION_FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center rounded-xl bg-[var(--button-red)] px-6 py-3 text-white font-semibold hover:opacity-90 transition"
                            >
                                Register Now
                            </a>
                        </div>
                        <div className="rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center">
                            <h3 className="font-bold text-xl text-[var(--foreground)] mb-4">Pay</h3>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/scisustain-2027/payment-qr.png" alt="UPI QR code for payment to Kalinga University (7024125549m2@pnb)" className="w-44 h-44 object-contain" />
                            <p className="mt-5 text-sm text-gray-600">Scan with any UPI app</p>
                        </div>
                        <div className="rounded-xl bg-[var(--lite-sand)] p-6">
                            <h3 className="font-bold text-xl text-[var(--foreground)] mb-4">Account Details for Payment</h3>
                            <dl className="space-y-2 text-sm">
                                {bankDetails.map(([label, value]) => (
                                    <div key={label} className="grid grid-cols-[110px_1fr] gap-2">
                                        <dt className="font-semibold text-gray-800">{label}:</dt>
                                        <dd className="text-gray-700 break-words">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards */}
            <FAQ
                id="awards"
                title="Awards"
                subtitle="Recognition"
                variant="table-display"
                tableSections={awardsTableSections}
                items={[]}
                pyClassName="py-8 md:py-12"
            />

            {/* Committees */}
            <FAQ
                id="conference-committees"
                title="Conference Committees"
                subtitle="Committees"
                variant="card-display"
                tableSections={committeeSections}
                items={[]}
                pyClassName="py-8 md:py-12"
            />

            <FAQ
                id="advisory-committees"
                title="Advisory Committees"
                subtitle="Committees"
                variant="card-display"
                tableSections={advisorySections}
                items={[]}
                pyClassName="py-8 md:py-12"
            />

            {/* Sponsorship */}
            <FAQ
                id="sponsorship-opportunities"
                title="Sponsorship Opportunities"
                subtitle="Sponsorship"
                variant="table-display"
                tableSections={sponsorshipTableSections}
                items={[]}
                pyClassName="py-8 md:py-12"
            />

            {/* Contact */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionHeading title="Contact" subtitle="Reach Out To Us" subtitleClassName="text-center" titleClassName="text-center mb-10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contacts.map((contact) => (
                            <article key={contact.email} className="rounded-xl bg-[var(--card-sandal)] p-6">
                                <h3 className="text-xl font-bold text-[var(--foreground)]">{contact.name}</h3>
                                <p className="text-gray-700 mt-1">{contact.designation}</p>
                                <p className="text-gray-700">{contact.department}</p>
                                <p className="mt-4">
                                    <span aria-hidden="true">📲 </span>
                                    <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:underline">{contact.phone}</a>
                                </p>
                                <p className="break-all">
                                    <span aria-hidden="true">📩 </span>
                                    <a href={`mailto:${contact.email}`} className="text-[var(--button-red)] hover:underline">{contact.email}</a>
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <OrganogramOfKalinga
                title="Submit Your Paper"
                description={`<strong>Submission Email:</strong><br/>📩 ${CONFERENCE_EMAIL}`}
                buttons={[
                    {
                        text: "Send Email",
                        link: `mailto:${CONFERENCE_EMAIL}`,
                        id: 1
                    }
                ]}
                useContainer={true}
            />

            {/* Download Brochure */}
            <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10 mb-6">
                <div className="rounded-2xl bg-[var(--lite-sand)] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)]">
                            SciSustain 2027 <br />
                            AI-Driven Scientific Innovations for Sustainable Development Goals
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Explore the Conference Brochure
                        </p>
                    </div>

                    <a
                        href="/brochure/scisustain-2027.pdf"
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[var(--button-red)] px-5 py-3 text-white font-semibold hover:opacity-90 transition"
                    >
                        Download Brochure
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M12 3v10m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 17v3h16v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default SciSustainConferencePage;
