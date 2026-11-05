"use client";

import Link from "next/link";
import MainIntro from "@/app/components/about/main_intro";
import DataTable from "@/app/components/general/data-table";
import FAQ from "@/app/components/general/faq";
import SectionHeading from "@/app/components/general/SectionHeading";
import QuickLinkCard from "@/app/components/general/quick_link_card";
import CustomGallery from "@/app/components/general/gallery";
import SdgBarChart from "@/app/components/sustainability/SdgBarChart";

// Content from the SDG 3 report (October 2026). The full report, including the
// event photographs and scanned event reports, is linked as a PDF.
const REPORT_PDF = "/sdg-reports/sdg-03-good-health-and-well-being-report.pdf";

const mainIntroContent = {
    title: "SDG 3: Good Health and Well-Being Report",
    description: [
        "Kalinga University, Naya Raipur, India is committed to advancing Sustainable Development Goal 3 (Good Health and Well-Being) through its multidisciplinary academic programs, research initiatives, innovation activities, and community engagement. The University’s Faculties of Arts & Humanities, Law, Science, Education, Pharmacy, Technology, Commerce & Management, and Computer Science & Information Technology actively contribute to promoting health, wellness, and quality of life through education, research, and societal outreach.",
        "The University places strong emphasis on research and development in key health-related domains, including public health, clinical and allied health sciences, biomedical research, mental health and well-being, physical rehabilitation, healthcare technologies, disease prevention, nutrition, and holistic wellness practices. Faculty members, research scholars, and students undertake interdisciplinary research projects, consultancy assignments, publications, and innovation-driven activities that address contemporary healthcare challenges and support evidence-based solutions for improving community health outcomes. Research findings are disseminated through journals, conferences, patents, workshops, and collaborative projects with academic, industrial, healthcare, and government organizations.",
        "Under the guidance of the Dean of Student Welfare, the National Service Scheme (NSS) serves as a vital platform for community outreach and health promotion. NSS volunteers regularly organize health awareness campaigns, blood donation drives, sanitation and hygiene programs, nutrition awareness activities, yoga and fitness sessions, mental health awareness initiatives, vaccination awareness drives, and rural health outreach programs. These initiatives foster health consciousness, preventive healthcare practices, and social responsibility among students and local communities.",
        "The University also conducts seminars, workshops, expert lectures, health camps, wellness programs, and awareness campaigns to promote physical, mental, and social well-being. Through the integration of research, innovation, education, and extension activities, Kalinga University actively contributes towards the achievement of United Nations Sustainable Development Goal 3, ensuring healthy lives and promoting well-being for all while supporting the development of healthier and more resilient communities.",
    ],
    imageUrl: "https://cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/good-health.jpeg",
    imageAlt: "SDG 3: Good Health and Well-Being",
};

const dashboard = [
    { value: "178", label: "SDG 03 Related Publications (2024-25)" },
    { value: "317", label: "Cumulative SDG 03 Related Publications" },
    { value: "432", label: "Citation Count" },
    { value: "0.4", label: "Field-Weighted Citation Impact (FWCI)" },
    { value: "18%", label: "Proportion of Health Graduates" },
    { value: "08", label: "MoUs (Collaborations and Health Services)" },
    { value: "11", label: "Health and Community Outreach Activities" },
    { value: "15", label: "Sports related Activities" },
];

const faculties = [
    {
        name: "Faculty of Pharmacy",
        href: "/departments/faculty-of-pharmacy",
        paragraphs: [
            "The Faculty of Pharmacy at Kalinga University offers comprehensive undergraduate, postgraduate, doctoral, and diploma programmes designed to develop competent, ethical, and industry-ready pharmacy professionals. The curriculum combines rigorous academic learning with practical laboratory training, clinical exposure, research opportunities, and innovation-driven education. Through a holistic approach, the Faculty equips students with the knowledge, skills, and professional values required to contribute effectively to healthcare, pharmaceutical sciences, and community well-being.",
            "The Faculty of Pharmacy plays a pivotal role in advancing healthcare education, pharmaceutical research, and community health services. The Faculty offers a comprehensive range of academic programmes designed to develop skilled healthcare professionals, researchers, and innovators equipped to address emerging healthcare challenges.",
            "Our pharmacy faculty’s motive is to prepare students to come up with the next big medicinal cure that is safe and accessible to everyone. With the theoretical and practical-based curriculum, explore the core areas of our department of pharmaceutical sciences.",
            "We offer state-of-the-art research facilities through CIF and Pharma labs, which have advanced instruments for research scholars that are not available anywhere else in Chhattisgarh, making KU a top pharmacy university. They can carry out R&D and develop impactful solutions for human welfare. With one-on-one learning experience, you will be well-prepared to lead in the future of healthcare.",
        ],
        programmes: [
            "Diploma in Pharmacy (D.Pharm)",
            "Bachelor of Pharmacy (B.Pharm)",
            "Master of Pharmacy (M.Pharm)",
            "Doctor of Pharmacy (Pharm D)",
            "Doctor of Philosophy (PhD)",
        ],
        highlights: [
            { title: "Comprehensive Academic Programmes", text: "Offers diploma, undergraduate, postgraduate, and doctoral programmes in pharmaceutical sciences to cater to diverse educational and career aspirations." },
            { title: "Research and Innovation Focus", text: "Promotes cutting-edge research in drug discovery, formulation development, pharmacology, pharmaceutical analysis, and public health-related areas." },
            { title: "Modern Laboratories and Infrastructure", text: "Equipped with advanced laboratories, instruments, and research facilities that provide hands-on learning and practical exposure." },
            { title: "Industry and Clinical Exposure", text: "Facilitates internships, industrial visits, hospital training, and collaborations with healthcare and pharmaceutical organizations to enhance professional competencies." },
            { title: "Community Health and Outreach Activities", text: "Actively engages in health awareness campaigns, health camps, medication counseling, and public health initiatives, contributing to societal well-being and SDG 3." },
            { title: "Qualified Faculty and Holistic Learning Environment", text: "Supported by experienced academicians and researchers who foster academic excellence, ethical values, innovation, and lifelong learning among students." },
        ],
    },
    {
        name: "Faculty of Arts & Humanities",
        href: "/departments/faculty-of-arts-humanities",
        paragraphs: [
            "The Faculty of Arts and Humanities at Kalinga University provides a dynamic and intellectually stimulating environment where students explore language, culture, history, media, political science, sociology, and psychology. The Faculty nurtures creativity, critical thinking, communication, and leadership skills while encouraging students to engage with contemporary social issues. Through an industry-oriented curriculum, internships, research projects, community engagement, and experiential learning opportunities, students develop the knowledge, professional competencies, and ethical values needed to become responsible leaders and contribute meaningfully to society.",
            "The Faculty of Arts and Humanities at Kalinga University plays a vital role in promoting mental health awareness, emotional well-being, and psychological resilience through its Bachelor of Arts (B.A.) Psychology and Master of Arts (M.A.) Psychology programmes. These programmes provide students with a strong foundation in psychological theories, human behaviour, mental health assessment, and counselling practices. Through experiential learning, research, case studies, and community outreach activities, students develop the skills required to address contemporary mental health challenges, support individual well-being, and contribute to healthier and more inclusive communities, thereby supporting SDG 3: Good Health and Well-Being.",
        ],
        highlights: [
            { title: "Diverse Academic Programmes", text: "Offers undergraduate, postgraduate, and doctoral programmes in disciplines such as English, Psychology, Political Science, Sociology, History, and related humanities and social sciences fields." },
            { title: "Focus on Critical Thinking and Communication", text: "Develops analytical, creative, communication, and problem-solving skills that prepare students for diverse professional and societal roles." },
            { title: "Mental Health and Well-Being Education", text: "Through B.A. and M.A. Psychology programmes, promotes mental health awareness, counselling skills, emotional well-being, and psychological resilience, contributing to SDG 3." },
            { title: "Research and Interdisciplinary Learning", text: "Encourages research, publications, seminars, and interdisciplinary studies addressing social, cultural, behavioural, and developmental challenges." },
            { title: "Experiential and Community-Based Learning", text: "Provides opportunities for internships, field visits, social surveys, community outreach, and extension activities that connect academic learning with real-world issues." },
            { title: "Leadership and Social Responsibility Development", text: "Nurtures ethical values, cultural awareness, leadership qualities, and civic responsibility, enabling students to become informed citizens and positive agents of social change." },
        ],
    },
    {
        name: "Faculty of Science",
        href: "/departments/faculty-of-science",
        paragraphs: [
            "The Faculty of Science at Kalinga University fosters a vibrant academic environment where scientific inquiry, innovation, and experiential learning thrive. By integrating fundamental scientific principles with real-world applications, the Faculty serves as a catalyst for transforming knowledge into practical solutions that address contemporary societal and technological challenges.",
            "The Faculty offers a diverse range of undergraduate, postgraduate, and research programmes in disciplines such as Physics, Chemistry, Mathematics, Biotechnology, Microbiology, Zoology, Botany, Bioinformatics, Forensic Science, and Yoga. These programmes provide students with a strong conceptual foundation complemented by extensive hands-on training in modern laboratories and research facilities. The curriculum is carefully designed to blend theoretical knowledge with practical experimentation, encouraging students to develop analytical thinking, problem-solving abilities, and scientific temper.",
            "The Faculty of Science is committed to advancing scientific research, innovation, and interdisciplinary collaboration through research projects, publications, industry interactions, and community-oriented initiatives. By promoting excellence in education and research, the Faculty nurtures skilled scientists, researchers, and innovators who are equipped to contribute meaningfully to scientific advancement, sustainable development, healthcare, environmental conservation, and industrial growth.",
        ],
        highlights: [
            { title: "Diverse Academic Programmes", text: "Offers undergraduate, postgraduate, and research programmes in Physics, Chemistry, Mathematics, Biotechnology, Microbiology, Zoology, Botany, Bioinformatics, Forensic Science, and Yoga, providing a strong foundation in basic and applied sciences." },
            { title: "Advanced Laboratories and Research Facilities", text: "Equipped with modern laboratories, scientific instruments, and research infrastructure that facilitate experiential learning, experimentation, and innovation." },
            { title: "Research and Innovation Ecosystem", text: "Encourages faculty and students to engage in interdisciplinary research projects, publications, patents, and scientific innovations addressing societal, environmental, and healthcare challenges." },
            { title: "Industry-Oriented and Skill-Based Learning", text: "Integrates practical training, internships, workshops, field visits, and project-based learning to enhance employability and professional competence." },
            { title: "Contribution to Health and Sustainability", text: "Through programmes in Biotechnology, Microbiology, Bioinformatics, Yoga, and allied sciences, promotes public health, environmental sustainability, and well-being, supporting SDG 3 and other Sustainable Development Goals." },
            { title: "Holistic Development and Scientific Temper", text: "Nurtures critical thinking, analytical skills, ethical values, scientific reasoning, and leadership qualities, preparing students to become future scientists, researchers, educators, and innovators." },
        ],
    },
];

// Charts on pages 7 and 10 of the report.
const researchPaperCounts = [
    { label: "2021", value: 0 },
    { label: "2022", value: 7 },
    { label: "2023", value: 57 },
    { label: "2024", value: 47 },
    { label: "2025", value: 130 },
    { label: "2026", value: 76 },
];

const bookChapterCounts = [
    { label: "2021", value: 5 },
    { label: "2022", value: 6 },
    { label: "2023", value: 48 },
    { label: "2024", value: 15 },
    { label: "2025", value: 16 },
];

const sanctionedProjects = [
    { slNo: "1", pi: "Dr. Sandip Prasad Tiwari", title: "International Conference On Frontiers In Pharmaceutical And Allied Sciences: Translating Innovation Into Impact For Sustainable And Equitable Healthcare.", agency: "Anusandhan National Research Foundation (ANRF) New Delhi", year: "2025" },
    { slNo: "2", pi: "Dr. Jayakumar Rajamani", title: "Waste Optimization and Cleaner Technology: A Sustainable Approach to Solid and E-Waste Management, Energy Recovery, and Mitigating the Effects of Climate Change", agency: "All India Council for Technical Education (AICTE)", year: "2025" },
    { slNo: "3", pi: "Dr. Manoj Kumar Nigam, Dr. Swapnil Jain", title: "International Conference on \"Sustainable development towards a greener future (ICS 2026DGF)\"", agency: "Chhattisgarh Council of Science & Technology", year: "2025" },
    { slNo: "4", pi: "Dr. Sandip Tiwari, Dr. Sandeep Mishra, Ms. Rajni Yadav, Mr. Saurabh Sharma", title: "Formulation, development, and characterization of ready-to-use nutraceutical soft beverage of Curcuma angustifolia (Tikhur) powder.", agency: "State Planning Commission CG", year: "2024" },
    { slNo: "5", pi: "Dr. Vijayalaxmi Biradar", title: "ESG & Sustainability Symposium - 2024", agency: "CG Tourism Department", year: "2024" },
    { slNo: "6", pi: "Dr. Manoj Singh", title: "Envirothon: Trash to Treasure", agency: "Chhattisgarh Environment Conservation Board (CECB)", year: "2023" },
    { slNo: "7", pi: "Dr. Ajay Kumar Harit", title: "Water and Groundwater examination", agency: "Chhattisgarh State Watershed Management Agency (CGSWMA)", year: "2023" },
    { slNo: "8", pi: "Dr. Manoj Singh", title: "International Conference on Climate Change Sustainable Development and Smart Agriculture (ICSSA-2023)", agency: "NABARD", year: "2023" },
    { slNo: "9", pi: "Dr. Ajay Kumar Harit", title: "National Conference on Climate Change: Suggestion and recommendations for fostering adaptation and resilience", agency: "NABARD", year: "2023" },
    { slNo: "10", pi: "Dr. Manoj Singh", title: "Status of Environment and Related Issues to conduct a certificate course in Waste Optimisation Professional", agency: "Chhattisgarh Environment Conservation Board", year: "2023" },
];

const PHARMACY_HREF = "/departments/faculty-of-pharmacy";
const SCIENCE_HREF = "/departments/faculty-of-science";

const healthGraduates = [
    { programme: "B.Pharmacy", graduates: "100", href: PHARMACY_HREF },
    { programme: "M.Pharmacy", graduates: "23", href: PHARMACY_HREF },
    { programme: "D. Pharmacy", graduates: "63", href: PHARMACY_HREF },
    { programme: "Pharm. D", graduates: "19", href: PHARMACY_HREF },
    { programme: "PhD", graduates: "22", href: "/admissions?studyLevel=PhD" },
    { programme: "BSC (Others)", graduates: "57", href: SCIENCE_HREF },
    { programme: "BSC (Biotechnology)", graduates: "51", href: SCIENCE_HREF },
    { programme: "Total", graduates: "335" },
];

const hospitalMoUs = [
    { id: 1, year: "2025", text: "NGO - Special Education Kopalvani Child Welfare Organization Raipur (C.G.)", url: "/sustainability/mous/kopalvani-child-welfare-organization.pdf" },
    { id: 2, year: "2025", text: "Shri Ganesh Vinayak Eye Hospital, Raipur", url: "/sustainability/mous/shri-ganesh-vinayak-eye-hospital.pdf" },
    { id: 3, year: "2024", text: "City Eye Care Hospital Beside MM Silver Plaza, Infront of Udyog Bhavan, Mahaveer Nagar, Raipur, Chhattisgarh.", url: "/sustainability/mous/city-eye-care-hospital.pdf" },
    { id: 4, year: "2024", text: "Ramakrishna CARE Hospitals, Raipur", url: "/sustainability/mous/ramkrishna-care-hospital.pdf" },
    { id: 5, year: "2024", text: "M/S Urmila Memorial Hospital, (A Unit Of Adityaraj Medical Care Pvt. Ltd.) Near New Bus Stand Circle, Nahar Road, Bhatagaon Raipur CG -492015.", url: "/sustainability/mous/urmila-memorial-hospital.pdf" },
    { id: 6, year: "2023", text: "NH MMI Narayana Superspeciality Hospital, Raipur, Chhattisgarh", url: "/sustainability/mous/nh-mmi-narayana-superspeciality-hospital.pdf" },
    { id: 7, year: "2023", text: "Saptgiri Hospital, Mandir Hasaud Chowk, Raipur, Chhattisgarh- 492101.", url: "/sustainability/mous/saptgiri-hospital.pdf" },
    { id: 8, year: "2023", text: "VY Hospital, Kamal Vihar, Raipur, Chhattisgarh", url: "/sustainability/mous/vy-hospital.pdf" },
];

const outreachEvents2024_25 = [
    { slNo: "1", event: "Standard Writing Competition (Topic: Indian Standard IS: 6541, \"Hygienic Conditions for the Preparation and Supply of Foods/Meal in schools\")", date: "24-02-2025", organiser: "Faculty of Technology", participants: "52", outcome: "Promoted awareness of food hygiene standards, safe food preparation, and hygienic meal supply in schools." },
    { slNo: "2", event: "Health & Wellness Through Ayurveda", date: "07-03-2025", organiser: "Dr. A. Vijayanand (Chief Proctor)", participants: "60", outcome: "Encouraged awareness of Ayurveda, preventive healthcare, and holistic approaches to health and well-being." },
    { slNo: "3", event: "Marathon 'Run for Mann'", date: "09-03-2025", organiser: "Young India, Raipur", participants: "515", outcome: "Promoted physical fitness, mental well-being, stress management, and awareness of mental health." },
    { slNo: "4", event: "International Yoga Day 2025", date: "21-06-2025", organiser: "Department of Yoga, Faculty of Science", participants: "100", outcome: "Encouraged yoga practice for physical fitness, mental peace, stress reduction, and a healthy lifestyle." },
    { slNo: "5", event: "Blood Donation Camp", date: "13-02-2025", organiser: "Dean of Students' Welfare", participants: "80", outcome: "Raised awareness of voluntary blood donation and contributed to supporting patients requiring blood transfusions." },
    { slNo: "6", event: "International Conference on \"Emerging Perspectives and Future Trends in Pharmaceuticals and Allied Sciences for Global Health and Well-being\"", date: "25-03-2025 to 26-03-2025", organiser: "Faculty of Pharmacy", participants: "634", outcome: "Facilitated knowledge exchange, research collaboration, and discussion of emerging pharmaceutical and allied healthcare innovations." },
    { slNo: "7", event: "Doctor's Day Celebration", date: "01-07-2024", organiser: "Dean of Students' Welfare", participants: "26", outcome: "Recognised the contributions of medical professionals and promoted awareness of healthcare services and the medical profession." },
    { slNo: "8", event: "Redefining Menstrual Stigma as a Matter of Menstrual Health Hygiene: Behaviour Shift to Empower Skilful Youth", date: "15-07-2024", organiser: "Behaviour Club (UNICEF Unit)", participants: "30", outcome: "Promoted menstrual hygiene awareness, challenged social stigma, and encouraged informed and responsible health practices among youth." },
    { slNo: "9", event: "4th National Pharmacovigilance Awareness on \"Building ADR and Reporting Culture for Patient Safety\"", date: "17-09-2024", organiser: "Faculty of Pharmacy", participants: "120", outcome: "Strengthened awareness of adverse drug reaction (ADR) reporting and the importance of medication safety and pharmacovigilance." },
    { slNo: "10", event: "World Pharmacist's Day", date: "25-09-2024", organiser: "Faculty of Pharmacy", participants: "120", outcome: "Highlighted the role of pharmacists in patient care, the safe use of medicines, and public health promotion." },
    { slNo: "11", event: "Free Health Checkup Camp 2024", date: "13-09-2024", organiser: "Dean of Students' Welfare", participants: "75", outcome: "Supported early identification of potential health concerns and promoted preventive healthcare through health screening." },
];

const outreachEventReports = [
    "Enhancing Practical Knowledge through an Excursion cum Industrial Visit to Shree Dhanwantari Herbals, December 2024-January 2025.",
    "Strengthening Awareness and Compliance with the POSH Act, 2013, through a One-Month Trainers Training Certification Course.",
    "Blood Donation for a Healthier Community - Organized by the Dean of Students' Welfare on 13 February 2025",
    "Building Awareness of Hygienic Food Preparation and Supply through IS 6541 - A Step Towards Good Health and Well-Being",
    "“Health & Wellness Through Ayurveda” - Creating Awareness of Natural and Preventive Healthcare Practices",
    "Run for Health, Run for Happiness: “Run for Mann” Marathon Promoting Good Health and Well-Being",
    "DST-SERB/ANRF Government of India-Sponsored International Conference on Emerging Perspectives and Future Trends in Pharmaceuticals and Allied Sciences for Global Health and Well-Being - SDG 3",
    "International Yoga Day 2025 - Embracing Yoga for Holistic Health, Sustainable Living and Global Well-Being",
    "Honouring the Dedication of Doctors and Medical Professionals - Doctor's Day Celebration, 1 July 2024",
    "Breaking Menstrual Stigma Through Awareness, Education and Empowerment - A Step Towards Good Health and Well-Being",
    "Free Health Checkup Camp 2024 - Encouraging Regular Health Screening and Preventive Care",
    "Building a Culture of Adverse Drug Reaction (ADR) Reporting for Safer Patient Care - National Pharmacovigilance Awareness 2024",
    "World Pharmacists' Day 2024 - Celebrating Pharmacists' Vital Role in Promoting Good Health and Well-Being",
];

const campusEvents = [
    { slNo: "1", event: "Industrial Visit to AIIMS Raipur", date: "06.11.2025", organiser: "Department of Forensic Science, Faculty of Science", participants: "108", outcome: "Provided students with practical exposure to hospital operations, healthcare infrastructure, diagnostic facilities, and clinical practices, helping bridge the gap between theoretical knowledge and real-world healthcare applications." },
    { slNo: "2", event: "Model/Poster Exhibition on World Mental Health Day", date: "10.10.2025", organiser: "Department of Social Work, Faculty of Arts & Humanities", participants: "53", outcome: "Promoted mental health awareness, encouraged creative expression, and educated participants about psychological well-being, stress management, and the importance of reducing mental health stigma." },
    { slNo: "3", event: "Guest Lecture ‘Development of New Vaccines and Variants in Indian Poultry Diseases’", date: "04.09.2025", organiser: "Department of Biochemistry, Faculty of Science", participants: "18", outcome: "Enhanced participants’ understanding of vaccine development, emerging poultry disease variants, disease prevention, and advances in veterinary healthcare and infectious disease management." },
    { slNo: "4", event: "Guest Lecture ‘Mental Health and Well Being of Students and Teachers’", date: "16.07.2025", organiser: "Faculty of Education", participants: "60", outcome: "Raised awareness of mental health challenges in educational settings and highlighted strategies for stress management, emotional resilience, psychological well-being, and a supportive academic environment." },
    { slNo: "5", event: "11th International Day of Yoga ‘Yoga Sangam’", date: "21.06.2025", organiser: "Faculty of Education", participants: "100", outcome: "Encouraged the adoption of yoga and meditation for physical fitness, mental balance, stress reduction, and the promotion of a healthy lifestyle among participants." },
    { slNo: "6", event: "International Conference on “Emerging Perspectives and Future Trends in Pharmaceuticals and Allied Sciences for Global Health and Well-being”", date: "25.03.2025 To 26.03.2025", organiser: "Faculty of Pharmacy", participants: "500", outcome: "Facilitated the exchange of scientific knowledge, promoted interdisciplinary research collaboration, and highlighted emerging innovations in pharmaceutical sciences and healthcare for improved global health outcomes." },
    { slNo: "7", event: "Guest Lecture on ‘Herpes Simplex Virus: Infection & Diagnosis’", date: "10.02.2025", organiser: "Department of Microbiology & Botany, Faculty of Science", participants: "60", outcome: "Improved understanding of herpes simplex virus infections, transmission, clinical manifestations, diagnostic techniques, and the importance of timely detection and appropriate infection management." },
    { slNo: "8", event: "4th National Pharmacovigilance Awareness", date: "17.09.2024", organiser: "Faculty of Pharmacy", participants: "120", outcome: "Strengthened awareness of pharmacovigilance, adverse drug reaction (ADR) identification and reporting, and the importance of medication safety in improving patient care and public health." },
];

// "Programs and Awareness Activities on Sexual and Reproductive Well-being" (report p. 64):
// rows 1-5 repeat campus events 2, 4, 5, 6 and 7; row 6 is only listed here.
const reproductiveWellbeingActivities = [
    ...[1, 3, 4, 5, 6].map((i) => campusEvents[i]),
    { event: "One Day Free of Health Check-up Camp", date: "12.11.2024", organiser: "Department of Biotechnology, Faculty of Science", participants: "75", outcome: "Supported early identification of potential health concerns and promoted preventive healthcare through health screening." },
].map((row, i) => ({ ...row, slNo: String(i + 1) }));

const sportsStaff = [
    { slNo: "1", name: "Dr. D. Kalidoss", designation: "Associate Professor & Director, Sports" },
    { slNo: "2", name: "Dr. Sanjeev Kumar Yadav", designation: "Assistant Professor & Sports Officer" },
    { slNo: "3", name: "Mr. Rudra Narayana Behura", designation: "Data Operator" },
    { slNo: "4", name: "Mr. Prabhat Narayan Yadav", designation: "Gym Instructor" },
    { slNo: "5", name: "Ms. Sandhya Pal", designation: "Assistant, Sports" },
];

const outdoorGames = [
    { slNo: "01", game: "Cricket Ground Turf Wicket", material: "Cricket Kit 12, Bat 25, Ball 30, Wickets 30, Cricket mat 1, T Shirt, Marking Cone 80, Flag 90, Cap" },
    { slNo: "02", game: "Football Ground", material: "Football 30, Football Net 4 Set, T Shirt, Air Pump 2, Pole 1 Set, Whistle, Cap" },
    { slNo: "03", game: "Badminton Court", material: "Racket 12, Shuttle Cock 10 Box, Badminton Net 4 Set, T Shirt, Pole 4 Set, Cap" },
    { slNo: "04", game: "Basketball Ground", material: "Basketball 20, Basketball Net 20 Set, T Shirt, Pole 2 Set, Whistle, Cap" },
    { slNo: "05", game: "Volleyball Ground", material: "Volleyball 20, Volleyball Net 10, Antenna 4, T Shirt, Volleyball Pole 2 Set, Whistle, Cap" },
    { slNo: "06", game: "Kabaddi Ground", material: "Kabaddi Mat, T Shirt, Marking Tape, T Shirt, Whistle, Cap" },
    { slNo: "07", game: "Kho-Kho Ground", material: "T Shirt, Marking Tape, Whistle, Cap" },
    { slNo: "08", game: "Hockey Ground", material: "Hockey Steak 24, Hockey Ball 24, Pole 1 Set, T Shirt, Cap" },
    { slNo: "09", game: "Handball Ground", material: "Ball 10, Pole 2 Set, T Shirt, Cap" },
    { slNo: "10", game: "Lawn Tennis", material: "Racket 6 Set, Ball 40, Pole 1 Set, Net 2, T Shirt, Cap" },
    { slNo: "11", game: "Shot put Throw", material: "12 pieces" },
    { slNo: "12", game: "Discuss Throw", material: "12 pieces" },
    { slNo: "13", game: "Javelin Throw", material: "12 pieces" },
    { slNo: "14", game: "Hammer Throw", material: "12 pieces" },
    { slNo: "15", game: "Running Events", material: "Athletic Track of 200 metres" },
];

const sportsGrounds = [
    { slNo: "01", facility: "Basketball Court", total: "Two", area: "9400 Sqft." },
    { slNo: "02", facility: "Volleyball Court", total: "One", area: "1740 Sqft." },
    { slNo: "03", facility: "Lawn Tennis Court", total: "One", area: "2106 Sqft." },
    { slNo: "04", facility: "Badminton Court", total: "One", area: "880 Sqft." },
    { slNo: "05", facility: "Kabaddi Ground", total: "One", area: "1657 Sqft." },
    { slNo: "06", facility: "Kho Kho Ground", total: "One", area: "6972 Sqft." },
    { slNo: "07", facility: "Handball Ground", total: "One", area: "8646 Sqft." },
    { slNo: "08", facility: "Football Ground", total: "One", area: "76900 Sqft." },
    { slNo: "09", facility: "Cricket Ground", total: "One", area: "450 Feet" },
    { slNo: "10", facility: "Hockey Ground", total: "One", area: "54090 Sqft." },
    { slNo: "11", facility: "Athletics Track 400 Mtr.", total: "One", area: "400 Mtr." },
];

const sportsEvents = [
    { slNo: "1", event: "AIU - All India Interuniversity Wrestling Championship (Women) - 2024-25", date: "14-01-2025 to 17-01-2025", organiser: "Guru Kashi University, Badhinda, Punjab", awards: "6th Position and She has selected for Khelo India University Games" },
    { slNo: "2", event: "SAMAR Intercollegiate/University Sports Fest 2025 (Basketball)", date: "23-01-2025 to 26-01-2025", organiser: "National Institute of Technology, Raipur", awards: "Basketball (Men) - Winner; Football (Men) - Winner" },
    { slNo: "3", event: "Asmita Khelo India Pencak Silat Women's League (East Zone)", date: "31-01-2025 to 02-02-2025", organiser: "Chhattisgarh Pencak Silat Martial Arts Association with SAI", awards: "Palag Nag, B.Sc. II Yr - Bronze Medal; Sania Parveen, BCS (AIML&CS) I Yr - Bronze Medal" },
    { slNo: "4", event: "38th National Games of India (Net Ball)", date: "28-01-2025 to 14-02-2025", organiser: "The Indian Olympic Association (IOA) in collaboration with the Government of Uttarakhand and the Ministry of Youth Affairs and Sports, Government of India.", awards: "Sandeep Verma, B.Ed. I Yr - Bronze Medal" },
    { slNo: "5", event: "SAMARTH Intercollegiate/University Sports Fest 2025", date: "22-02-2025 to 23-02-2025", organiser: "Indian Institute of Management, Raipur", awards: "Football (Men) - Winner; Basketball (Men) - Runner-up; Basketball (Women) - Runner-up" },
    { slNo: "6", event: "AIU - All India Interuniversity Woodball (Men & Women) Championship - 2024-25", date: "07-03-2025 to 10-03-2025", organiser: "Parul University, Gujarat", awards: "Mixed Doubles - Gold Medal; Woodball Team (Women) - Bronze Medal" },
    { slNo: "7", event: "Technovate Intercollege/University Sports Fest 2025", date: "21-03-2025 to 23-03-2025", organiser: "IIIT, Raipur", awards: "Basketball (Men) - Runner-up" },
    { slNo: "8", event: "19th Senior & 13th Sub Junior National Woodball Championship - 2024-25", date: "22-03-2025 to 26-03-2025", organiser: "Maharashtra State Woodball Association", awards: "Aftab Hussain, B.P.Ed. II Yr - Doubles - Bronze Medal; Naveen Gupta, B.Sc. III Yr - Mixed Doubles - Silver Medal" },
    { slNo: "9", event: "26th World Para Arm-wrestling Championship - 2024", date: "15-08-2024 to 25-08-2024", organiser: "The World Arm-wrestling Federation (WAF)", awards: "Harsh Khodiar, B.Com. III Yr - Bronze Medal" },
    { slNo: "10", event: "Niraj Agarwal Memorial Inter Collegiate Football Championship 2024", date: "12-09-2024 to 18-09-2024", organiser: "Shera Krida Samiti Club", awards: "Football (Men) - Winner" },
    { slNo: "11", event: "Colossus Intercollegiate/University Sports Fest 2024 (Basketball - Men)", date: "18-10-2024 to 20-10-2024", organiser: "Hidayatullah National Law University", awards: "Football (Men) - Winner; Basketball (Men) - Winner" },
    { slNo: "12", event: "Oriana Intercollegiate/University Sports Fest 2024 (Futsal - Men)", date: "14-11-2024 to 17-11-2024", organiser: "All India Institute of Medical Science (AIIMS)", awards: "Futsal (Men) - Runner Up" },
    { slNo: "13", event: "5th Senior Open State Woodball Championship - 2024", date: "29-11-2024 to 01-12-2024", organiser: "Gariyabandh Woodball Association of Chhattisgarh", awards: "Aftab Hussain, B.P.Ed. II Yr - Runner-Up" },
    { slNo: "14", event: "Workshop on Self-Defence Techniques", date: "19-09-2024", organiser: "“NCC Department” in collaboration with “Sports Department”, Kalinga University Raipur", awards: "Internal Event" },
    { slNo: "15", event: "Tug Of War Competition For Hostel Students - 2024-25", date: "18-01-2025", organiser: "Department of Sports in association with DSW", awards: "Internal Event" },
];

const sportsEventReports = [
    "Niraj Agarwal Memorial Inter Collegiate Football Championship 2024",
    "“Workshop on Self-Defence Techniques” Organized by “NCC Department” In collaboration with “Sports Department” On 19th September 2024",
    "Tug Of War Competition For Hostel Students 2024-25, on Date: 18-01-2025",
];

const poshCommittee = [
    { slNo: "1", name: "Dr. Lincy Roy", position: "Head of the Committee", designation: "Assistant Professor" },
    { slNo: "2", name: "Dr. A. Vijayanand", position: "Member", designation: "Chief Proctor" },
    { slNo: "3", name: "Ms. Saloni Tyagi", position: "Member", designation: "Assistant Professor, Faculty of Law" },
    { slNo: "4", name: "Mrs. Shilpi N. Tanwani", position: "Member", designation: "Academic Officer, Administration" },
    { slNo: "5", name: "Dr. Ankita Nihlani", position: "Member", designation: "Assistant Professor" },
    { slNo: "6", name: "Ms. Alishiba Mahanand", position: "Member", designation: "Student Representative from B.Com." },
    { slNo: "7", name: "Ms. Arti Sinha", position: "Member", designation: "Student Representative from B.Ed." },
    { slNo: "8", name: "Dr. Naresh Sharma", position: "Member", designation: "Lawyer" },
];

const internalComplaintCommittee = [
    { slNo: "1", name: "Dr. Rahul Mishra", designation: "Dean, Academic Affairs - Chairperson of the Committee" },
    { slNo: "2", name: "Lt. Vibha Chandrakar", designation: "In-Charge Dean, Student Welfare" },
    { slNo: "3", name: "Mrs. Saloni Tyagi", designation: "In-Charge HoD, Faculty of Law" },
    { slNo: "4", name: "Dr. Shilpi Shrivastava", designation: "HoD, Chemistry" },
    { slNo: "5", name: "Mr. Manish Singh", designation: "Chief Warden" },
    { slNo: "6", name: "Dr. A. Vijayanand", designation: "Chief Proctor" },
    { slNo: "7", name: "Dr. Naresh Kumar Khunte", designation: "Assistant Professor, Faculty of Technology" },
    { slNo: "8", name: "Dr. Lincy Roy", designation: "Assistant Professor" },
];

const mentorMenteeObjectives = [
    "To provide academic guidance and support to students for improving their learning outcomes, academic performance, and educational progression.",
    "To promote students’ mental health, emotional well-being, and psychological resilience by fostering a safe, supportive, and non-judgmental environment where they can openly discuss their concerns, seek guidance, access appropriate support services, and develop positive coping strategies for personal and academic challenges.",
    "To facilitate the holistic development of students by nurturing their intellectual, personal, social, ethical, and professional growth.",
    "To identify academic, personal, behavioral, or emotional challenges at an early stage and provide appropriate support or referral mechanisms.",
    "To strengthen student engagement and participation in academic, co-curricular, extracurricular, and community-based activities.",
    "To encourage positive coping strategies, resilience, and stress-management skills that help students effectively manage academic and personal pressures.",
    "To foster meaningful mentor-mentee relationships based on trust, mutual respect, empathy, confidentiality, and open communication.",
    "To support career planning and professional development by providing guidance on higher education, skill development, employability, and career opportunities.",
    "To enhance students’ self-confidence, motivation, decision-making abilities, and leadership qualities for personal and professional success.",
    "To create a safe, inclusive, and student-centric learning environment that promotes mental wellness, academic excellence, personal growth, and overall well-being.",
];

const happinessCellObjectives = [
    "To promote mental, emotional, and psychological well-being among students and staff members through supportive and preventive interventions.",
    "To provide a safe, confidential, and non-judgmental environment where individuals can seek counselling and guidance for personal, academic, social, and workplace concerns.",
    "To identify and address emotional, social, and behavioural issues at an early stage and facilitate timely support and intervention.",
    "To enhance awareness about mental health and emotional wellness through workshops, awareness campaigns, seminars, and interactive sessions.",
    "To help individuals develop resilience, self-confidence, and coping skills for managing stress, anxiety, academic pressure, and life challenges.",
    "To foster a positive, inclusive, and supportive campus culture that promotes empathy, mutual respect, and psychological safety.",
    "To reduce stigma associated with mental health concerns and encourage help-seeking behavior among students and staff.",
    "To promote healthy interpersonal relationships, emotional intelligence, and effective communication skills within the university community.",
    "To support the holistic development of students and staff by encouraging work-life balance, mindfulness, positive thinking, and overall well-being.",
    "To contribute to the achievement of Sustainable Development Goal (SDG) 3: Good Health and Well-Being by implementing initiatives that enhance mental health, happiness, and quality of life on campus.",
];

// "Happiness Cell – Support & Wellness Flow Chart" (report p. 71): Listen | Support | Guide | Empower
const happinessCellFlow = [
    { title: "Issue/Problem Generated", text: "Concerns may include stress, anxiety, emotional distress, adjustment difficulties, interpersonal conflicts, behavioral issues, academic pressure, workplace challenges and overall mental well-being." },
    { title: "Visit at Particular Department", text: "The concerned person visits the Happiness Cell at the respective department for support and guidance." },
    { title: "Counseling", text: "Confidential counselling and guidance are provided to understand the issue and help develop resilience, emotional balance, self-awareness and healthy coping mechanisms." },
    { title: "Mindfulness Practices", text: "Mindfulness practices help in building focus, reducing stress and enhancing emotional well-being." },
    { title: "Stress Management Programs", text: "Structured programs and techniques to manage stress, improve coping skills and maintain mental and emotional health." },
    { title: "Interactive Activities", text: "Workshops, awareness campaigns, motivational talks, wellness sessions, and engaging activities promote positive mental health, emotional intelligence, healthy relationships and a balanced lifestyle." },
];

const counsellors = [
    "Dr. Babhuti Kashyap, Associate Professor - Department of Psychology",
    "Dr. L Jyoti Reddy, Assistant Professor - Department of Psychology",
    "Dr. Md. Shakil, (HoD) - Assistant Professor - Department of Social Work",
    "Dr. Manoj Mathew - Assistant Professor - Department of Social Work",
    "Dr. Greeshma Gopinath K - Assistant Professor - Department of Social Work",
    "Ms. Archana Nagwanshi - Assistant Professor - Department of Social Work",
];

const relatedLinks = [
    { id: 1, title: "Good Health and Well-Being Initiatives", href: "/sustainability/good-health-and-well-being" },
    { id: 2, title: "Policy on Emotional Wellness, Mental Health and Resilience", href: "/sustainability/emotional-wellness-and-mental-health-policy" },
    { id: 3, title: "Gender Sensitization Policy", href: "/sustainability/policies/gender-sensitization" },
    { id: 4, title: "Smoke-Free Campus Policy", href: "/sustainability/policies/smoke-free-campus-policy" },
    { id: 5, title: "Students Counselling Cell", href: "/students-counselling-cell" },
    { id: 6, title: "Media Coverage", href: "/media" },
];

const galleryImages = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    image: `https://cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-${i + 1}.webp`,
    alt: `Good Health and Well-Being ${i + 1}`,
}));

const Paragraphs = ({ children }) => (
    <div className="space-y-4 text-[var(--foreground)] leading-relaxed">{children}</div>
);

const BulletList = ({ items }) => (
    <ul className="list-disc pl-5 space-y-2 marker:text-[var(--button-red)]">
        {items.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);

const NumberedList = ({ items }) => (
    <ol className="list-decimal pl-5 space-y-2 marker:text-[var(--button-red)]">
        {items.map((item) =>
            typeof item === "string" ? (
                <li key={item}>{item}</li>
            ) : (
                <li key={item.title}>
                    <strong>{item.title}</strong> – {item.text}
                </li>
            )
        )}
    </ol>
);

const SubHeading = ({ children }) => (
    <h3 className="font-plus-jakarta-sans text-lg font-semibold pt-2">{children}</h3>
);

const MinorHeading = ({ children }) => <h4 className="font-semibold pt-1">{children}</h4>;

const TextLink = ({ href, children }) => (
    <Link href={href} className="text-[var(--button-red)] hover:underline">
        {children}
    </Link>
);

const MediaLink = () => (
    <p>
        Media Coverage Web Page Link: <TextLink href="/media">Media Coverage</TextLink>
    </p>
);

const Table = (props) => (
    <DataTable overflowX={true} disableContainer={true} className="shadow-none border border-gray-100" {...props} />
);

const eventColumns = [
    { key: "slNo", label: "Sl. No.", widthPx: 70 },
    { key: "event", label: "Activity Name", widthPx: 300 },
    { key: "date", label: "Date", widthPx: 130 },
    { key: "organiser", label: "Organized By", widthPx: 200 },
    { key: "participants", label: "No. of Participants", widthPx: 120 },
    { key: "outcome", label: "Outcome of the Programme", widthPx: 360 },
];

const reportSections = [
    {
        id: 1,
        question: "3.1 Research on Health & Well-Being",
        component: (
            <Paragraphs>
                <p>Kalinga University has demonstrated significant progress in advancing research aligned with Sustainable Development Goal 3 (Good Health and Well-Being). Between 2021 and 2026, the University published <strong>317 Scopus-indexed research papers</strong>, these publications have collectively received <strong>432 citations</strong>, reflecting the growing impact and relevance of the University’s research in the health sector. With a good citation index of these research papers, the research output highlights both the quality and influence of scholarly contributions made by faculty members, researchers, and students. This sustained commitment to health-focused research strengthens Kalinga University’s role in generating evidence-based knowledge, supporting healthcare advancements, and contributing to the achievement of SDG 3 at regional, national, and global levels.</p>

                <SubHeading>3.1.1 Good Health and Well-being: Paper Views</SubHeading>
                <p>The SDG 3-aligned research publications of Kalinga University have garnered significant academic attention and visibility, reflecting the growing impact of the University’s contributions to health and well-being research. The increasing readership and scholarly engagement demonstrate the relevance of its research in addressing contemporary healthcare challenges, public health concerns, biomedical advancements, mental health, and community well-being. A total of 255 SDG 3-aligned research papers have been viewed, indicating active engagement with the University’s research outputs related to health and well-being. This sustained research impact highlights Kalinga University’s commitment to generating knowledge that supports evidence-based decision-making, fosters innovation in healthcare, and contributes to the global scientific discourse on Sustainable Development Goal 3 (Good Health and Well-Being).</p>
                <p>The table below presents the research papers published by each teacher that are aligned with Sustainable Development Goal (SDG) 3. The data indicate that year-wise growth in the number of research papers can be observed.</p>
                <SdgBarChart
                    block={{
                        caption: "Year-wise Research Papers aligned with SDG 3",
                        xLabel: "Year-wise Count",
                        yLabel: "Count of Research Papers",
                        series: [{ name: "Research Paper: Count", color: "#70ad47" }],
                        data: researchPaperCounts,
                    }}
                />

                <SubHeading>3.1.2 Clinical Citations</SubHeading>
                <p>Kalinga University’s research aligned with <strong>SDG 3: Good Health and Well-being</strong> demonstrates a growing academic impact and contribution to health-related research. The University has published <strong>317 Scopus-indexed research articles during 2021–2026</strong>, receiving a total of <strong>432 citations</strong>. These publications cover key disciplines such as Medicine, Biochemistry, Genetics and Molecular Biology, Psychology, Pharmacology, Toxicology and Pharmaceutics, Immunology and Microbiology, Nursing, Neuroscience, and Dentistry etc, highlighting the University’s contribution to health-related research and the advancement of well-being.</p>

                <SubHeading>3.1.3 Good Health and Well-being: Publications</SubHeading>
                <p>A total <strong>317 research papers are specifically aligned with Sustainable Development Goal 3 (Good Health and Well-Being)</strong>, demonstrating the University’s strong commitment to advancing healthcare, public health, and well-being through impactful research. These publications have achieved a <strong>Field-Weighted Citation Impact (FWCI) of 0.4</strong>, indicating that they are cited significantly more often than the global average in their respective disciplines.</p>
                <p>This outstanding citation performance reflects not only the quality and relevance of the University’s research but also its growing academic influence in addressing critical health challenges at local, national, and global levels. The sustained impact of these publications highlights the University’s leadership in generating evidence-based solutions, supporting healthcare innovation, informing policy development, and contributing to the achievement of global health priorities and sustainable societal development. Below mentioned table presents the list of sanctioned research projects supporting Sustainable Development Goal (SDG) 3: Good Health and Well-being. And the graph illustrates the year-wise publication of books and book chapters aligned with SDG 3, highlighting the institution’s sustained research and academic contributions toward advancing health and well-being.</p>
                <p>
                    Projects Web Link: <TextLink href="/internal-quality-assurance-cell">Internal Quality Assurance Cell</TextLink>
                </p>
                <SubHeading>Sanctioned Research Projects Aligned with Sustainable Development Goal (SDG) 3</SubHeading>
                <Table
                    columns={[
                        { key: "slNo", label: "S.No", widthPx: 70 },
                        { key: "pi", label: "Name of the PI / Co-PI", widthPx: 220 },
                        { key: "title", label: "Title of the Research Project", widthPx: 380 },
                        { key: "agency", label: "Name of the Funding Agency", widthPx: 240 },
                        { key: "year", label: "Year of award or sanction", widthPx: 140 },
                    ]}
                    data={sanctionedProjects}
                />
                <SdgBarChart
                    block={{
                        caption: "Year-wise Book / Book Chapters aligned with SDG 3",
                        xLabel: "Year-wise Count",
                        yLabel: "Count of Book/Book Chapters",
                        series: [{ name: "Book / Book Chapters", color: "#d39e00" }],
                        data: bookChapterCounts,
                    }}
                />
            </Paragraphs>
        ),
    },
    {
        id: 2,
        question: "3.2 Number Graduating in Health Professions",
        component: (
            <Paragraphs>
                <p>Kalinga University is strongly committed to advancing <strong>SDG 3 – Good Health and Well-being</strong> through health-oriented academic programmes, interdisciplinary research, practical learning, and community engagement. The University offers diverse programmes supporting healthcare, wellness, and quality of life. The <strong>Faculty of Pharmacy</strong> provides D.Pharm, B.Pharm, M.Pharm, Pharm.D, and Ph.D. programmes, developing expertise in pharmaceutical sciences and healthcare delivery. The <strong>Faculty of Science</strong> contributes through programmes in Biotechnology, Microbiology, Zoology, Botany, Bioinformatics, Forensic Science, Physics, Chemistry, Mathematics, and Yoga, supporting medical research, disease prevention, public health, and physical well-being. The <strong>Faculty of Arts and Humanities</strong> promotes mental health, emotional well-being, and psychological resilience through B.A. and M.A. Psychology programmes. Across disciplines, health, nutrition, preventive healthcare, mental wellness, and healthy lifestyles are integrated into teaching and experiential learning. Through this holistic and interdisciplinary approach, the University develops skilled professionals and socially responsible graduates who contribute to improved health outcomes and sustainable societal development.</p>
                <Table
                    columns={[
                        { key: "programme", label: "Programme", widthPx: 220 },
                        { key: "graduates", label: "No. of Graduates", widthPx: 150 },
                        { key: "link", label: "Web Link", widthPx: 280 },
                    ]}
                    data={healthGraduates.map(({ programme, graduates, href }) => ({
                        programme,
                        graduates,
                        link: href ? <TextLink href={href}>{href}</TextLink> : "",
                    }))}
                />
                <SubHeading>3.2.1 Indicator: Proportion of graduates in health professions Year: 2024 - 25</SubHeading>
                <Table
                    columns={[
                        { key: "data", label: "Data Collected", widthPx: 240 },
                        { key: "definition", label: "Definition", widthPx: 420 },
                        { key: "value", label: "Proportion of Graduates in Health Professions", widthPx: 180 },
                    ]}
                    data={[
                        { data: "Number of graduates - 1881", definition: "This is the total headcount number of graduates at all levels from your institution in the year 2024-25", value: "1881" },
                        { data: "Number of graduates in health professions - 338", definition: "This is the headcount number of graduates at all levels in health professions in the year 2024-25. This is a subset of the total number of graduates.", value: "338 (18 %)" },
                    ]}
                />
            </Paragraphs>
        ),
    },
    {
        id: 3,
        question: "3.3 Collaborations and Health Services",
        component: (
            <Paragraphs>
                <p>Kalinga University has developed strong collaborative partnerships with reputed hospitals, research institutions, government bodies, and national as well as international organizations through Memoranda of Understanding (MoUs). These strategic collaborations foster academic excellence, research innovation, professional development, and experiential learning opportunities for students and faculty. In alignment with Sustainable Development Goal 3 (Good Health and Well-being), many of these partnerships focus on advancing healthcare education, promoting interdisciplinary research, enhancing community health services, and addressing public health challenges, thereby contributing to improved health outcomes and sustainable societal development.</p>
            </Paragraphs>
        ),
    },
    {
        id: 4,
        question: "3.3.1 Current Collaborations with Health Institutions",
        component: (
            <Paragraphs>
                <p>Kalinga University has established Memoranda of Understanding (MoUs) with leading academic institutions, NGOs and reputed hospitals to strengthen academic excellence, healthcare education, and research collaboration. These partnerships are aimed at integrating research-driven knowledge with clinical practice, thereby enhancing the quality of teaching, learning, and professional training. Through these collaborations, students gain valuable opportunities for internships, clinical postings, hands-on training, skill development, and exposure to diverse medical specialties in real healthcare settings. Such industry-academia linkages enable students to bridge the gap between theoretical learning and practical application, fostering professional competence, experiential learning, and career readiness in the healthcare sector.</p>
                <SubHeading>List of MoUs</SubHeading>
                <Table
                    columns={[
                        { key: "id", label: "Sl. No.", widthPx: 70 },
                        { key: "year", label: "Year", widthPx: 90 },
                        { key: "name", label: "MoU with", widthPx: 420 },
                    ]}
                    data={hospitalMoUs.map((mou) => ({
                        id: mou.id,
                        year: mou.year,
                        name: (
                            <a href={mou.url} target="_blank" rel="noopener noreferrer" className="text-[var(--button-red)] hover:underline">
                                {mou.text}
                            </a>
                        ),
                    }))}
                />

                <SubHeading>Collaborative Wellness Summary Report: 2024-25 Medical Initiatives</SubHeading>
                <MinorHeading>Executive Overview</MinorHeading>
                <p>In September 2024, Kalinga University executed a comprehensive series of medical wellness initiatives designed to safeguard the health of its campus community and strengthen the institutional bond between the university and leading regional healthcare providers. The primary objective of these programs was to provide accessible health screenings, promote preventive care through expert consultation, and facilitate the early detection of potential health issues. These initiatives were successfully realized through strategic collaborations with <strong>City Eye Care Hospital</strong> and <strong>Urmila Memorial Hospital</strong>, ensuring that students, faculty, and staff received high-caliber clinical attention.</p>

                <MinorHeading>Free Eye and Dental Checkup Camp (September 3, 2024)</MinorHeading>
                <BulletList
                    items={[
                        "Date: September 3, 2024",
                        "Time: 10:00 AM to 05:00 PM",
                        "Venue: Medical Room (New Building), NBGF-09",
                        "Organizing Bodies: Dean of Students' Welfare & Chief Proctor",
                        "University Leadership Presence: The camp was inaugurated in the presence of Lt. Vibha Chandrakar (In-charge Dean of Students' Welfare), Dr. A. Vijayanand (Chief Proctor), Dr. Mohammed Shaharyar Khan, Mr. Sheikh Abdul Kadir (Deputy Dean of Students' Welfare), and Ms. Nikita Joshi (Assistant Dean of Students' Welfare).",
                        "Number of Beneficiaries - 80",
                        "Outcome of the Program - Promoted awareness of eye care, oral hygiene, and preventive healthcare. The programme facilitated basic eye and dental screenings, helped identify potential health concerns, and encouraged participants to seek timely medical consultation, supporting early diagnosis and improved overall health and well-being.",
                    ]}
                />
                <MinorHeading>Clinical Partnership & Personnel</MinorHeading>
                <p>The university partnered with <strong>City Eye Care Hospital</strong>, which deployed a specialized medical team to the campus. Key experts and clinical staff included:</p>
                <BulletList
                    items={[
                        "Dr. Manish Shrivastava: Senior Ophthalmologist",
                        "Dr. Atish Sahu: Dental Consultant (Inaugural Authority)",
                        "Clinical Support Staff: Ms. Suman Chouhan (Staff Nurse) and Mr. Kuldeep Banjare (Staff Nurse).",
                    ]}
                />
                <MinorHeading>Services & Health Education</MinorHeading>
                <p>The initiative focused on two critical areas of specialized health:</p>
                <BulletList
                    items={[
                        "Comprehensive eye examinations and visual acuity tests.",
                        "Professional dental screenings and oral hygiene consultations.",
                        "Distribution of free eye drops to participants.",
                    ]}
                />
                <MinorHeading>Expert Recommendations</MinorHeading>
                <p>Dr. Manish Shrivastava provided strategic health advice to participants, emphasizing the necessity of adapting to modern digital demands. His recommendations included:</p>
                <BulletList
                    items={[
                        "Screen Time Management: Strategies to mitigate digital eye strain.",
                        "Preventive Ocular Care: Regular eye exercises designed to reduce ocular stress and maintain visual health.",
                    ]}
                />

                <MinorHeading>Free Health Checkup Camp & Heart Wellness Session (September 13, 2024)</MinorHeading>
                <p><strong>Event Logistics & Leadership</strong></p>
                <BulletList
                    items={[
                        "Date: September 13, 2024",
                        "Time: 10:00 AM to 05:00 PM",
                        "Venues: Medical Room NBGF-09 and the University Auditorium",
                        "Inaugural Authority: The event was inaugurated by Vice Chancellor Dr. R. Shridhar. Other attending officials included Dr. A. Vijayanand, Lt. Vibha Chandrakar, Mr. Sheikh Abdul Kadir, and Ms. Nikita Joshi.",
                        "Number of Beneficiaries - 75",
                        "Outcome of the Program - Promoted preventive healthcare and cardiovascular health awareness. The programme encouraged participants to undergo basic health screenings, understand heart disease risk factors, adopt healthier lifestyle practices, and seek timely medical consultation for early detection and better long-term health outcomes.",
                    ]}
                />
                <MinorHeading>Clinical Partnership & Personnel</MinorHeading>
                <p>The program was conducted in collaboration with <strong>Urmila Memorial Hospital</strong>. The partnership was represented by a high-level executive and clinical team:</p>
                <BulletList
                    items={[
                        "Dr. Vinod Kumar Singh: Medical Director (General and Laparoscopic Surgeon)",
                        "Dr. Jinesh Kumar Jain: Cardiologist",
                        "Administrative Leadership: Dr. Sangya Shrivastava (CEO), Mr. Rajesh Dubey (Corporate Head), and Mr. Chandrakant Gupta (Marketing Executive).",
                        "Clinical Nursing Team: Suman Chouhan, Kuldeep Singh, Thupendrai, Sonamani, Giteshwari, Somnath, and Dinesh.",
                    ]}
                />
                <MinorHeading>Diagnostic Services</MinorHeading>
                <p>The camp provided advanced diagnostic screenings for comprehensive health assessment:</p>
                <BulletList
                    items={[
                        "Blood Pressure and Blood Sugar monitoring.",
                        "Electrocardiogram (ECG) for cardiac health screening.",
                        "Pulmonary Function Test (PFT) for respiratory evaluation.",
                        "Urine Flow Test (UFT) specifically for male participants.",
                    ]}
                />
                <MinorHeading>Interactive Heart Health Session</MinorHeading>
                <p>In the University Auditorium, Dr. Jinesh Kumar Jain led an educational session focused on cardiac wellness. Utilizing a PowerPoint presentation, Dr. Jain provided detailed guidance on heart care. This was followed by an interactive Q&amp;A segment specifically designed for faculty members to address clinical doubts regarding cardiovascular health.</p>
            </Paragraphs>
        ),
    },
    {
        id: 5,
        question: "3.3.2 Health Outreach Programmes",
        component: (
            <Paragraphs>
                <p>Kalinga University has undertaken numerous community outreach and extension activities aimed at promoting health, hygiene, and overall well-being, particularly among underprivileged and vulnerable sections of society. Through initiatives such as <em>Malaria Prevention Awareness Programmes, Cancer Prevention and Healthy Lifestyle Campaigns, PCOD/PCOS Awareness Workshops, Eye Check-up Camps, Full Body Health Check-up Camps, Blood Donation Camps, and Self-Medication Awareness Drives, Excursion cum Industrial Visit To “Shree Dhanwantari Herbals”</em> the University has worked to enhance public understanding of disease prevention, early diagnosis, healthy living practices, and responsible healthcare behavior. The health screening camps have enabled community members to access preventive healthcare services, identify potential health issues at an early stage, and receive appropriate medical guidance.</p>
                <p>Programmes such as <em>Drug De-addiction Seminars</em> and <em>Life Skills for Drug Awareness</em> have further contributed to reducing substance abuse and encouraging positive lifestyle choices among youth and communities. The University has also placed significant emphasis on hygiene, sanitation, and nutrition through activities including <em>Menstrual Hygiene Awareness Campaigns</em> and workshops on <em>Improving Hygiene Practices in Schools</em>. These interventions have helped spread awareness regarding personal hygiene, sanitation, waste management, and the prevention of communicable diseases.</p>
                <p>Additionally, initiatives addressing <em>Women’s Health Issues in Rural Communities</em> and <em>Food Quality Testing in Anganwadi Centres</em> have focused on improving maternal and child health outcomes. Through these impactful programmes, Kalinga University demonstrates its strong commitment to social responsibility, community engagement, and sustainable public health development, creating meaningful and lasting improvements in the quality of life of marginalized populations while contributing significantly to the creation of a healthier and more resilient society.</p>
                <SubHeading>List of Events</SubHeading>
                <MediaLink />
                <Table
                    columns={[
                        { key: "slNo", label: "Sl. No.", widthPx: 70 },
                        { key: "event", label: "Event Title", widthPx: 300 },
                        { key: "date", label: "Date", widthPx: 130 },
                        { key: "organiser", label: "Organizing Department", widthPx: 200 },
                        { key: "participants", label: "Number of Participants", widthPx: 120 },
                        { key: "outcome", label: "Outcome", widthPx: 340 },
                    ]}
                    data={outreachEvents2024_25}
                />
                <SubHeading>Program Highlights and Event Reports</SubHeading>
                <BulletList items={outreachEventReports} />
                <SubHeading>Events Conducted at Kalinga University</SubHeading>
                <MediaLink />
                <Table columns={eventColumns} data={campusEvents} />
            </Paragraphs>
        ),
    },
    {
        id: 6,
        question: "3.3.3 Shared Sports Facilities",
        component: (
            <Paragraphs>
                <p>Kalinga University has adopted six villages—<strong>Kotni, Kuhera, Paloud, Kotrabhata, Tandul, and Parsada</strong>—as part of its commitment to community development and social responsibility. The University extends its sports infrastructure to students from government schools in these villages, encouraging physical fitness, talent development, and active participation in sports. In addition, Kalinga University shares its academic facilities, including the Seminar Hall and Auditorium, with government organizations for public awareness and outreach initiatives. Notably, the Reserve Bank of India (RBI), Raipur Branch, has utilized these facilities to conduct financial literacy and awareness programmes for students and members of the local community, strengthening the University’s role in societal engagement.</p>

                <SubHeading>Sports Department and Sustainable Development</SubHeading>
                <p>The Sports Department plays an important role in promoting <strong>health, well-being, inclusion, and sustainable community engagement</strong>, contributing to the objectives of the Sustainable Development Goals (SDGs). The department provides access to sports facilities, training, fitness activities, and recreational opportunities for students, staff, and community members. Through regular sports programmes, competitions, fitness initiatives, and outreach activities, it encourages active lifestyles, teamwork, discipline, leadership, and social interaction. Sports facilities are also shared with the community for various programmes, strengthening university-community engagement. These initiatives primarily contribute to <strong>SDG 3 (Good Health and Well-being), SDG 4 (Quality Education), SDG 10 (Reduced Inequalities), and SDG 11 (Sustainable Cities and Communities)</strong>.</p>
                <SubHeading>Sports Department Staff Members</SubHeading>
                <Table
                    columns={[
                        { key: "slNo", label: "Sl. No.", widthPx: 70 },
                        { key: "name", label: "Name", widthPx: 260 },
                        { key: "designation", label: "Designation", widthPx: 320 },
                    ]}
                    data={sportsStaff}
                />
                <p>
                    <TextLink href="/sustainability/emotional-wellness-and-mental-health-policy">Policy on Emotional Wellness, Mental Health and Resilience</TextLink>
                </p>

                <SubHeading>Sports Facilities Shared with the Community for Promoting Health, Well-Being, Active Lifestyles and other Community Engagement Programmes</SubHeading>
                <p>Kalinga University recognizes <strong>sports and physical fitness as essential components of holistic education and well-being</strong>, supporting <strong>SDG 3 – Good Health and Well-being</strong>. The University provides comprehensive sports infrastructure through its dedicated Sports Department, Sports Complex, recreation rooms, and modern fitness facilities. Outdoor amenities include a <strong>cricket ground, football field, basketball and volleyball courts, badminton courts, athletics facilities, and a multi-purpose sports field</strong>, supporting both recreational activities and competitive training. Indoor facilities include <strong>well-equipped gyms with modern fitness equipment</strong>, with separate facilities for boys and girls, accessible to students and staff under the guidance of qualified trainers. The University also promotes holistic wellness through <strong>yoga and aerobics sessions conducted by certified instructors</strong>, contributing to physical and mental well-being. Regular inter- and intra-university sports events, along with participation in national and international competitions, foster <strong>fitness, teamwork, discipline, leadership, and sportsmanship</strong>, strengthening the University’s commitment to a healthy and active campus community.</p>

                <SubHeading>Outdoor Sports Facilities</SubHeading>
                <p>Kalinga University provides extensive outdoor sports facilities including a cricket ground, football field, basketball and volleyball courts, open-air badminton courts, athletics facilities, and a multi-utility sports field. These spaces support training, recreation, and tournaments, promoting physical fitness, teamwork, and active student engagement.</p>
                <SubHeading>Outdoor Games Facilities</SubHeading>
                <Table
                    columns={[
                        { key: "slNo", label: "S.No.", widthPx: 70 },
                        { key: "game", label: "Outdoor Games", widthPx: 240 },
                        { key: "material", label: "Material", widthPx: 460 },
                    ]}
                    data={outdoorGames}
                />
                <SubHeading>Sports Grounds Dimension</SubHeading>
                <Table
                    columns={[
                        { key: "slNo", label: "S.No.", widthPx: 70 },
                        { key: "facility", label: "Facilities", widthPx: 260 },
                        { key: "total", label: "Total", widthPx: 100 },
                        { key: "area", label: "Area", widthPx: 160 },
                    ]}
                    data={sportsGrounds}
                />

                <SubHeading>Indoor Sports Facilities</SubHeading>
                <p>Kalinga University offers well-equipped indoor sports facilities, including a modern gymnasium with advanced fitness equipment to promote physical health and an active lifestyle. Separate gym facilities for boys and girls are available, ensuring a comfortable and inclusive environment for all users. The gym is accessible to both students and staff and supports regular fitness activities. Qualified gym trainers are available to guide users in proper exercise techniques and structured workout routines, ensuring safe and effective training. In addition, facilities for table tennis, carrom, and chess are provided, along with yoga and aerobics sessions, promoting holistic physical fitness, mental well-being, and an active lifestyle among the university community.</p>

                <SubHeading>Sports related Activities & Events</SubHeading>
                <Table
                    columns={[
                        { key: "slNo", label: "Sl. No.", widthPx: 70 },
                        { key: "event", label: "Sports Events", widthPx: 300 },
                        { key: "date", label: "Date", widthPx: 160 },
                        { key: "organiser", label: "Organized By", widthPx: 260 },
                        { key: "awards", label: "Awards", widthPx: 300 },
                    ]}
                    data={sportsEvents}
                />
                <SubHeading>Program Highlights and Event Reports</SubHeading>
                <BulletList items={sportsEventReports} />
            </Paragraphs>
        ),
    },
    {
        id: 7,
        question: "3.3.4 Sexual and Reproductive Health Care Services",
        component: (
            <Paragraphs>
                <p>Kalinga University promotes <strong>women’s health, gender equity, safety, and overall well-being</strong> through an integrated support system aligned with <strong>SDG 3 and SDG 5</strong>. Dedicated bodies, including the <strong>Internal Complaints Committee (ICC), Women’s Cell/POSH Committee, and Student Counselling Cell</strong>, provide confidential counselling, psychosocial support, awareness, and grievance redressal. Health infrastructure includes <strong>medical and first-aid facilities, resident nurses, sanitary napkin vending machines, sanitary waste incinerators, and an ERP-enabled grievance redressal system</strong>. Regular awareness programmes, workshops, expert sessions, and health camps address <strong>menstrual hygiene, reproductive health, nutrition, anaemia prevention, mental health, stress management, cancer awareness, substance-abuse prevention, and healthy lifestyles</strong>. Collaborations with hospitals, healthcare centres, diagnostic facilities, and social organizations facilitate <strong>health check-ups, specialist consultations, vaccination drives, emergency support, and counselling services</strong>. These initiatives foster a <strong>safe, inclusive, health-conscious, and supportive campus environment</strong>, empowering women and promoting holistic well-being across the University community.</p>

                <SubHeading>Institutional Mechanisms for Sexual and Reproductive Health Care Services</SubHeading>
                <MinorHeading>a) Policy on Gender Equity and Gender Sensitization</MinorHeading>
                <p>The University is committed to fostering an inclusive, equitable, and gender-sensitive academic environment where every individual is treated with dignity and respect. The Policy on Gender Equity and Gender Sensitization promotes equal opportunities in education, research, employment, leadership, and participation in campus activities. It seeks to prevent gender-based discrimination, harassment, and violence through awareness programs, counseling services, and effective grievance redressal mechanisms. The policy encourages mutual respect, diversity, and inclusiveness, thereby creating a safe, supportive, and empowering campus culture for all stakeholders.</p>
                <p>
                    <TextLink href="/sustainability/policies/gender-sensitization">Policy On Gender Equity And Gender Sensitization</TextLink>
                </p>
                <p><strong>Women Cell / Prevention of Sexual Harassment (POSH) Committee</strong></p>
                <Table
                    columns={[
                        { key: "slNo", label: "Sl. No.", widthPx: 70 },
                        { key: "name", label: "Name", widthPx: 240 },
                        { key: "position", label: "Position", widthPx: 200 },
                        { key: "designation", label: "Designation", widthPx: 300 },
                    ]}
                    data={poshCommittee}
                />

                <MinorHeading>b) Policy on Emotional Wellness, Mental Health, and Resilience</MinorHeading>
                <p>The Policy on Emotional Wellness, Mental Health, and Resilience reflects Kalinga University’s commitment to fostering a supportive, inclusive, and psychologically safe campus environment. The policy promotes emotional well-being, mental health awareness, stress management, and resilience among students, faculty, and staff. Through counselling services, mentoring, wellness programs, sports and recreational activities, and early intervention mechanisms, the University seeks to enhance overall well-being, reduce stigma associated with mental health concerns, and empower individuals to achieve personal, academic, and professional success.</p>
                <p>
                    <TextLink href="/sustainability/emotional-wellness-and-mental-health-policy">Policy on Emotional Wellness, Mental Health and Resilience</TextLink>
                </p>

                <MinorHeading>c) Internal Complaint Committee</MinorHeading>
                <p>The Internal Complaints Committee (ICC) at Kalinga University is constituted in accordance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. The Committee is committed to ensuring a safe, secure, respectful, and inclusive campus environment free from sexual harassment, gender-based discrimination, and misconduct. It provides a confidential, impartial, and transparent mechanism for receiving, investigating, and resolving complaints while safeguarding the dignity, rights, and well-being of all members of the University community.</p>
                <Table
                    columns={[
                        { key: "slNo", label: "Sl. No.", widthPx: 70 },
                        { key: "name", label: "Name", widthPx: 260 },
                        { key: "designation", label: "Designation", widthPx: 380 },
                    ]}
                    data={internalComplaintCommittee}
                />

                <MinorHeading>d) Provision of Medical Room &amp; Wellness Center</MinorHeading>
                <p><strong>Medical Room</strong></p>
                <p>The University Medical Room serves as a dedicated healthcare facility and acts as the first point of contact for addressing the immediate health and wellness needs of students, faculty members, staff, and visitors. Equipped with essential medical equipment, first-aid supplies, and basic healthcare facilities, it provides prompt medical assistance for minor illnesses, injuries, and emergency situations occurring on campus. Qualified healthcare personnel ensure timely assessment, treatment, and guidance, helping to prevent complications and promote overall well-being.</p>
                <p>In addition to providing primary healthcare services, the Medical Room plays a significant role in promoting preventive healthcare through health awareness campaigns, routine health check-ups, counseling, and wellness education programs. It also facilitates referrals to specialized healthcare providers and nearby hospitals whenever advanced medical intervention is required. By offering accessible healthcare support, encouraging healthy lifestyle practices, and ensuring a rapid response during emergencies, the University Medical Room contributes substantially to creating a safe, healthy, inclusive, and supportive campus environment that enhances the overall quality of life for the university community.</p>
                <p><strong>Sports and Wellness Center</strong></p>
                <p>The Sports and Wellness Center serves as a vital platform for promoting holistic health and well-being among students, faculty, and staff by encouraging active lifestyles and healthy habits. The Center offers a wide range of sports activities, fitness programs, yoga sessions, meditation practices, recreational events, and wellness initiatives designed to support physical, mental, and emotional health. These activities help individuals improve their physical fitness, build endurance, enhance concentration, and maintain a balanced lifestyle.</p>
                <p>Beyond physical health, the Center plays a significant role in stress management and emotional well-being by providing opportunities for relaxation, recreation, and social interaction. Participation in sports and wellness programs fosters self-discipline, resilience, teamwork, leadership, and self-confidence while helping individuals develop positive coping mechanisms to manage academic and professional pressures. Regular engagement in these activities contributes to reducing stress and anxiety, improving mental health, enhancing overall quality of life, and creating a positive, energetic, and inclusive campus environment that supports personal growth and community well-being.</p>

                <SubHeading>Facilities Available to Women Employees and Students</SubHeading>
                <MinorHeading>Sanitary Napkin Vending Machines and Incinerators</MinorHeading>
                <p>Kalinga University is committed to promoting menstrual health, hygiene, dignity, and well-being among its female students, faculty, and staff. Recognizing the importance of accessible menstrual hygiene facilities, the University has installed sanitary napkin vending machines in female washrooms across academic blocks, administrative buildings, hostels, and other key locations on campus. These machines provide convenient, hygienic, and uninterrupted access to sanitary napkins, ensuring that women can effectively manage their menstrual health without inconvenience or embarrassment.</p>
                <p>To facilitate safe and environmentally responsible disposal of used sanitary products, each vending machine is complemented by a sanitary napkin incinerator. These incinerators help maintain cleanliness, prevent improper waste disposal, and support sustainable waste management practices on campus. The availability of these facilities promotes awareness of menstrual hygiene, reduces stigma associated with menstruation, and empowers women to participate confidently in academic and professional activities. This initiative reflects the University’s commitment to fostering a gender-sensitive, inclusive, safe, and health-conscious campus environment.</p>
                <MinorHeading>Dedicated Girls Common Room</MinorHeading>
                <p>Kalinga University provides dedicated Girls’ Common Rooms and Study Rooms within the campus and hostel premises to ensure a safe, comfortable, and supportive environment for female students. These facilities serve as spaces for relaxation, informal interaction, academic discussions, and focused study. The rooms are equipped with adequate seating, lighting, ventilation, and essential amenities to meet students’ academic and personal needs. They offer a secure and peaceful atmosphere where students can spend their free time, prepare for examinations, engage in group learning activities, or seek privacy when required. By providing these facilities, the University promotes the well-being, safety, and academic success of female students while fostering an inclusive, student-friendly, and gender-sensitive campus environment.</p>

                <SubHeading>Programs and Awareness Activities on Sexual and Reproductive Well-being</SubHeading>
                <Table columns={eventColumns} data={reproductiveWellbeingActivities} />
            </Paragraphs>
        ),
    },
    {
        id: 8,
        question: "3.3.5 Mental Health Support for Students",
        component: (
            <Paragraphs>
                <p>Kalinga University is committed to promoting the mental health, emotional well-being, and overall psychological wellness of its students. Recognizing that positive mental health is fundamental to academic success, personal growth, and holistic development, the University strives to create a supportive, inclusive, and compassionate campus environment where students feel safe, valued, and empowered.</p>
                <p>The University provides a range of mental health support mechanisms through its <strong>Mentor–Mentee Framework</strong>, Student Counselling Cell, and various wellness initiatives. Faculty mentors regularly engage with students to understand their academic, emotional, and personal concerns, while trained counsellors offer confidential guidance and professional support to students experiencing stress, anxiety, emotional difficulties, or other mental health challenges.</p>
                <p>Through awareness programs, workshops, counselling sessions, stress-management activities, and peer-support initiatives, the University encourages students to seek help without fear of stigma and promotes positive coping strategies, resilience, self-care, and healthy lifestyle practices. Special attention is given to the early identification of emotional distress and timely intervention through appropriate support services.</p>
                <p>By fostering a culture of empathy, respect, inclusion, and psychological safety, Kalinga University aims to strengthen students’ emotional resilience, enhance their overall well-being, and enable them to achieve their academic and personal potential in a healthy and supportive learning environment.</p>
                <p>
                    <TextLink href="/sustainability/emotional-wellness-and-mental-health-policy">Policy on Emotional Wellness, Mental Health and Resilience</TextLink>
                </p>
                <SubHeading>Objectives of the Mentor-Mentee Framework</SubHeading>
                <NumberedList items={mentorMenteeObjectives} />
            </Paragraphs>
        ),
    },
    {
        id: 9,
        question: "3.3.6 Smoke-Free Policy",
        component: (
            <Paragraphs>
                <p>Kalinga University is firmly committed to fostering a healthy, safe, and environmentally sustainable campus environment through its comprehensive Smoke-Free and Tobacco-Free Campus Policy. Recognizing the significant health risks associated with tobacco consumption and exposure to second-hand smoke, the University strictly prohibits smoking and the use of all tobacco products within the entire campus premises.</p>
                <p>The policy applies to all students, faculty members, staff, visitors, vendors, and other stakeholders and covers all academic blocks, administrative offices, hostels, libraries, laboratories, cafeterias, recreational areas, vehicles, and open spaces within the University campus. This initiative reflects the University’s dedication to safeguarding the physical and mental well-being of its community while promoting a culture of healthy living and responsible behavior. To ensure effective implementation of the policy, prominent “No Smoking” and “Tobacco-Free Campus” signages are displayed at strategic locations across the campus. Awareness campaigns, health education programs, orientation sessions, and community engagement activities are regularly organized to educate stakeholders about the harmful effects of tobacco use and the importance of adopting healthy lifestyles.</p>
                <p>Through these sustained efforts, Kalinga University strives to create a clean, healthy, and supportive learning environment that encourages wellness, environmental responsibility, and respect for public health, thereby contributing to the holistic development of its students and the wider community.</p>
                <p>
                    <TextLink href="/sustainability/policies/smoke-free-campus-policy">Smoke-Free Campus Policy</TextLink>
                </p>
            </Paragraphs>
        ),
    },
    {
        id: 10,
        question: "3.3.7 Mental Health Support for Staff",
        component: (
            <Paragraphs>
                <p>Kalinga University recognizes that the mental health and well-being of its faculty and staff are essential for maintaining a productive, positive, and supportive work environment. The University is committed to fostering a workplace culture that promotes psychological well-being, emotional resilience, and work-life balance among all employees.</p>
                <p>To support staff mental health, the University regularly organizes awareness programs, workshops, seminars, expert talks, and wellness sessions focusing on stress management, emotional intelligence, mindfulness, resilience building, burnout prevention, and healthy coping strategies. These initiatives aim to enhance awareness of mental health issues, reduce stigma associated with seeking help, and encourage open discussions about emotional and psychological well-being. Faculty and staff members are encouraged to seek guidance and support whenever needed through appropriate counselling and wellness support mechanisms. The University also promotes a culture of empathy, mutual respect, inclusiveness, and collaboration, ensuring that employees feel valued, heard, and supported in their professional environment.</p>
                <p>Through continuous mental health awareness and support initiatives, Kalinga University strives to create a healthy and psychologically safe workplace where employees can effectively manage personal and professional challenges, maintain positive mental health, enhance job satisfaction, and contribute meaningfully to the University’s mission of academic excellence and holistic development.</p>
                <p>Kalinga University has established the <strong>Happiness Cell (Mental Health Wellness Centre)</strong> to promote the emotional, psychological, social, and behavioral well-being of students and staff members. The Centre serves as a dedicated support system that fosters a positive, inclusive, and mentally healthy campus environment where individuals can seek guidance, counselling, and assistance for personal and professional challenges.</p>
                <p>The Happiness Cell addresses a wide range of concerns, including stress, anxiety, emotional distress, adjustment difficulties, interpersonal conflicts, behavioral issues, academic pressure, workplace challenges, and overall mental well-being. Through confidential counselling and guidance services, the Centre helps students and staff develop resilience, emotional balance, self-awareness, and healthy coping mechanisms to navigate everyday challenges effectively. To promote mental health awareness and reduce stigma associated with seeking help, the Happiness Cell regularly organizes workshops, awareness campaigns, motivational talks, wellness sessions, mindfulness practices, stress management programs, and interactive activities. These initiatives encourage positive mental health practices, emotional intelligence, healthy relationships, and a balanced lifestyle among members of the university community.</p>
                <p>The Centre works collaboratively with faculty mentors, administrative departments, healthcare professionals, and student support services to identify individuals requiring additional care and provide timely interventions. Special emphasis is placed on preventive mental healthcare, early identification of concerns, and creating a supportive ecosystem that nurtures personal growth and overall well-being. Through its comprehensive mental health and wellness initiatives, the Happiness Cell contributes significantly to the University’s commitment towards holistic development and the achievement of Sustainable Development Goal 3 (Good Health and Well-Being). By prioritizing emotional, social, and behavioral wellness, Kalinga University strives to ensure that every student and staff member thrives in a healthy, supportive, and compassionate academic environment.</p>
                <SubHeading>Objectives of the Happiness Cell</SubHeading>
                <BulletList items={happinessCellObjectives} />
                <SubHeading>Team of Qualified Counsellors</SubHeading>
                <NumberedList items={counsellors} />
                <SubHeading>Happiness Cell – Support &amp; Wellness Flow Chart</SubHeading>
                <p className="font-medium">Listen | Support | Guide | Empower</p>
                <NumberedList items={happinessCellFlow} />

                <SubHeading>Events</SubHeading>
                <MinorHeading>Model/Poster Exhibition on World Mental Health Day</MinorHeading>
                <p>The Department of Social Work, Faculty of Arts and Humanities, Kalinga University, organized a <strong>Model/Poster Exhibition</strong> on the occasion of <strong>World Mental Health Day</strong> on <strong>10th October 2025</strong> from <strong>9:30 AM to 1:30 PM</strong> at <strong>WBSF-01 (offline Mode)</strong>. The event aimed to raise awareness about mental health and promote student engagement through creative models and posters. A guest talk by <strong>Dr. A. P. Senthil Kumar (Online), Associate Professor, Jigjiga University, Ethiopia</strong>, enriched the session with insights on mental well-being. <strong>The event aligned with UN SDGs 3, 4, 16, and 17</strong>, encouraging discussions on mental health, education, and sustainable partnerships for well-being. The same day the BA psychology students presented a street play on mental health in the same venue. All the faculties and students of the Department of Social Work participated in the event.</p>
                <MinorHeading>International Yoga Day 2025</MinorHeading>
                <p><strong>International Yoga Day 2025</strong> was celebrated with great enthusiasm at Kalinga University on <strong>21 June 2025</strong>, under the theme <strong>“Yoga for One Earth, One Health.”</strong> Organized by the <strong>Department of Education</strong> with support from the <strong>Chhattisgarh Yoga Aayog, Government of Chhattisgarh</strong>, the programme highlighted the importance of yoga for physical, mental, and spiritual well-being. The event began with live streaming of the national celebration inaugurated by the Hon’ble Prime Minister of India, followed by an address by the Vice Chancellor emphasizing yoga’s relevance to modern life and <strong>SDG 3: Good Health and Well-Being</strong>. A practical yoga session included Om chanting, warm-up exercises, yoga asanas, meditation, breathing techniques, and mindfulness. A <strong>30-minute yoga protocol</strong> was conducted in accordance with AYUSH Ministry guidelines, with live demonstrations by Education Department students and NSS volunteers. The programme recorded <strong>81 registered participants and 100 attendees</strong>, including faculty, staff, and NSS volunteers. Kalinga University’s contribution was also acknowledged by the Ministry of AYUSH through the <strong>“Yoga Sangam Patra” Certificate of Participation</strong>.</p>
                <MinorHeading>International Olympic Day - 2025</MinorHeading>
                <p>Kalinga University celebrated <strong>International Olympic Day</strong> on <strong>23 June 2025</strong> from <strong>10:00 a.m. to 12:30 p.m.</strong> at the <strong>Recreation Hall</strong>. The event was organized for hostel students to promote active participation in recreational sports and encourage the values of sportsmanship, discipline, strategic thinking, and healthy competition. The celebration featured indoor recreational competitions in <strong>Carrom, Pool Table, and Chess</strong>, with a total of <strong>five students participating</strong> enthusiastically. The activities provided students with an engaging platform to develop <strong>strategic thinking, precision, concentration, decision-making skills, and sportsmanship</strong> in a friendly competitive environment. The event was well received by the participants and successfully fostered a spirit of <strong>camaraderie, teamwork, healthy competition, and active engagement</strong> among the hostel students. The celebration highlighted the importance of sports and recreational activities in promoting holistic student development and a healthy campus lifestyle.</p>
            </Paragraphs>
        ),
    },
];

export default function Sdg3ReportPage() {
    return (
        <>
            <MainIntro
                title={mainIntroContent.title}
                description={mainIntroContent.description}
                imageUrl={mainIntroContent.imageUrl}
                imageAlt={mainIntroContent.imageAlt}
                initialVisibleParagraphs={1}
                showKnowMore={true}
                knowMoreLabel="View Full Report"
                knowMoreHref={REPORT_PDF}
                sectionClassName="bg-white"
            />

            <section className="container mx-auto px-4 py-10">
                <SectionHeading title="Dashboard Regarding SDG 3" titleClassName="text-center" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {dashboard.map((stat) => (
                        <div key={stat.label} className="rounded-xl bg-[var(--lite-sand)] p-5 text-center">
                            <p className="font-stix text-3xl md:text-4xl text-[var(--button-red)]">{stat.value}</p>
                            <p className="mt-2 text-sm text-[var(--foreground)]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-10">
                <SectionHeading title="Faculties Contributing to SDG 3" titleClassName="text-center" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    {faculties.map((faculty) => (
                        <div key={faculty.name} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col">
                            <h3 className="font-plus-jakarta-sans text-xl font-semibold text-[var(--button-red)]">{faculty.name}</h3>
                            <div className="mt-3 space-y-3 text-[var(--foreground)] leading-relaxed">
                                {faculty.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                            {faculty.programmes && (
                                <>
                                    <h4 className="mt-4 font-semibold">The programmes offered include:</h4>
                                    <div className="mt-2">
                                        <BulletList items={faculty.programmes} />
                                    </div>
                                </>
                            )}
                            <h4 className="mt-4 font-semibold">Key Highlights of the {faculty.name}</h4>
                            <div className="mt-2 flex-1">
                                <NumberedList items={faculty.highlights} />
                            </div>
                            <Link href={faculty.href} className="mt-5 text-[var(--button-red)] font-medium hover:underline">
                                Explore {faculty.name} →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <div className="container mx-auto px-4 pt-6">
                <SectionHeading title="Report Highlights" titleClassName="text-center" />
            </div>
            <FAQ
                items={reportSections}
                title=""
                showHeading={false}
                variant="default"
                pyClassName="py-8"
            />

            <div className="container mx-auto mt-6 px-4">
                <SectionHeading title="Related Pages" titleClassName="text-center" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {relatedLinks.map((link) => (
                        <QuickLinkCard
                            key={link.id}
                            title={link.title}
                            description=""
                            showReadMore={false}
                            descriptionContainerClassName=""
                            href={link.href}
                            fullCardLink={true}
                        />
                    ))}
                </div>
            </div>

            <CustomGallery
                images={galleryImages}
                title="Glimpses of Our Health and Well-Being Activities"
            />
        </>
    );
}
