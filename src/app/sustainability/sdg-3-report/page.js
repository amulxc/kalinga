"use client";

import Link from "next/link";
import MainIntro from "@/app/components/about/main_intro";
import DataTable from "@/app/components/general/data-table";
import FAQ from "@/app/components/general/faq";
import SectionHeading from "@/app/components/general/SectionHeading";
import QuickLinkCard from "@/app/components/general/quick_link_card";
import CustomGallery from "@/app/components/general/gallery";

// Content from the SDG 3 report (October 2026). The full report, including the
// event photographs and scanned event reports, is linked as a PDF.
const REPORT_PDF = "/sdg-reports/sdg-03-good-health-and-well-being-report.pdf";

const mainIntroContent = {
    title: "SDG 3: Good Health and Well-Being Report",
    description: [
        "Kalinga University, Naya Raipur, India is committed to advancing Sustainable Development Goal 3 (Good Health and Well-Being) through its multidisciplinary academic programs, research initiatives, innovation activities, and community engagement. The University’s Faculties of Arts & Humanities, Law, Science, Education, Pharmacy, Technology, Commerce & Management, and Computer Science & Information Technology actively contribute to promoting health, wellness, and quality of life through education, research, and societal outreach.",
        "The University places strong emphasis on research and development in key health-related domains, including public health, clinical and allied health sciences, biomedical research, mental health and well-being, physical rehabilitation, healthcare technologies, disease prevention, nutrition, and holistic wellness practices. Research findings are disseminated through journals, conferences, patents, workshops, and collaborative projects with academic, industrial, healthcare, and government organizations.",
        "Under the guidance of the Dean of Student Welfare, the National Service Scheme (NSS) serves as a vital platform for community outreach and health promotion. NSS volunteers regularly organize health awareness campaigns, blood donation drives, sanitation and hygiene programs, nutrition awareness activities, yoga and fitness sessions, mental health awareness initiatives, vaccination awareness drives, and rural health outreach programs.",
    ],
    imageUrl: "https://cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/good-health.jpeg",
    imageAlt: "SDG 3: Good Health and Well-Being",
};

const dashboard = [
    { value: "178", label: "SDG 03 Related Publications (2024-25)" },
    { value: "317", label: "Cumulative SDG 03 Related Publications" },
    { value: "432", label: "Citation Count" },
    { value: "0.4", label: "Field-Weighted Citation Impact (FWCI)" },
    { value: "30%", label: "Proportion of Health Graduates" },
    { value: "08", label: "MoUs (Collaborations and Health Services)" },
    { value: "11", label: "Health and Community Outreach Activities" },
    { value: "15", label: "Sports related Activities" },
];

const faculties = [
    {
        name: "Faculty of Pharmacy",
        href: "/departments/faculty-of-pharmacy",
        description: "Offers D.Pharm, B.Pharm, M.Pharm, Pharm.D and Ph.D. programmes that combine academic learning with laboratory training, clinical exposure, research and innovation. State-of-the-art research facilities through CIF and Pharma labs support R&D in drug discovery, formulation development, pharmacology and public health.",
        highlights: [
            "Comprehensive Academic Programmes",
            "Research and Innovation Focus",
            "Modern Laboratories and Infrastructure",
            "Industry and Clinical Exposure",
            "Community Health and Outreach Activities",
            "Qualified Faculty and Holistic Learning Environment",
        ],
    },
    {
        name: "Faculty of Arts & Humanities",
        href: "/departments/faculty-of-arts-humanities",
        description: "Promotes mental health awareness, emotional well-being and psychological resilience through its B.A. and M.A. Psychology programmes, which build a strong foundation in psychological theories, human behaviour, mental health assessment and counselling practices.",
        highlights: [
            "Diverse Academic Programmes",
            "Focus on Critical Thinking and Communication",
            "Mental Health and Well-Being Education",
            "Research and Interdisciplinary Learning",
            "Experiential and Community-Based Learning",
            "Leadership and Social Responsibility Development",
        ],
    },
    {
        name: "Faculty of Science",
        href: "/departments/faculty-of-science",
        description: "Offers programmes in Physics, Chemistry, Mathematics, Biotechnology, Microbiology, Zoology, Botany, Bioinformatics, Forensic Science and Yoga, supporting medical research, disease prevention, public health and physical well-being.",
        highlights: [
            "Diverse Academic Programmes",
            "Advanced Laboratories and Research Facilities",
            "Research and Innovation Ecosystem",
            "Industry-Oriented and Skill-Based Learning",
            "Contribution to Health and Sustainability",
            "Holistic Development and Scientific Temper",
        ],
    },
];

const yearWiseCounts = [
    { year: "2021", papers: "0", books: "5" },
    { year: "2022", papers: "7", books: "6" },
    { year: "2023", papers: "57", books: "48" },
    { year: "2024", papers: "47", books: "15" },
    { year: "2025", papers: "130", books: "16" },
    { year: "2026", papers: "76", books: "–" },
];

const sanctionedProjects = [
    { slNo: "1", pi: "Dr. Sandip Prasad Tiwari", title: "International Conference On Frontiers In Pharmaceutical And Allied Sciences: Translating Innovation Into Impact For Sustainable And Equitable Healthcare", agency: "Anusandhan National Research Foundation (ANRF), New Delhi", year: "2025" },
    { slNo: "2", pi: "Dr. Jayakumar Rajamani", title: "Waste Optimization and Cleaner Technology: A Sustainable Approach to Solid and E-Waste Management, Energy Recovery, and Mitigating the Effects of Climate Change", agency: "All India Council for Technical Education (AICTE)", year: "2025" },
    { slNo: "3", pi: "Dr. Manoj Kumar Nigam, Dr. Swapnil Jain", title: "International Conference on \"Sustainable development towards a greener future (ICS 2026DGF)\"", agency: "Chhattisgarh Council of Science & Technology", year: "2025" },
    { slNo: "4", pi: "Dr. Sandip Tiwari, Dr. Sandeep Mishra, Ms. Rajni Yadav, Mr. Saurabh Sharma", title: "Formulation, development, and characterization of ready-to-use nutraceutical soft beverage of Curcuma angustifolia (Tikhur) powder", agency: "State Planning Commission CG", year: "2024" },
    { slNo: "5", pi: "Dr. Vijayalaxmi Biradar", title: "ESG & Sustainability Symposium - 2024", agency: "CG Tourism Department", year: "2024" },
    { slNo: "6", pi: "Dr. Manoj Singh", title: "Envirothon: Trash to Treasure", agency: "Chhattisgarh Environment Conservation Board (CECB)", year: "2023" },
    { slNo: "7", pi: "Dr. Ajay Kumar Harit", title: "Water and Groundwater examination", agency: "Chhattisgarh State Watershed Management Agency (CGSWMA)", year: "2023" },
    { slNo: "8", pi: "Dr. Manoj Singh", title: "International Conference on Climate Change Sustainable Development and Smart Agriculture (ICSSA-2023)", agency: "NABARD", year: "2023" },
    { slNo: "9", pi: "Dr. Ajay Kumar Harit", title: "National Conference on Climate Change: Suggestion and recommendations for fostering adaptation and resilience", agency: "NABARD", year: "2023" },
    { slNo: "10", pi: "Dr. Manoj Singh", title: "Status of Environment and Related Issues to conduct a certificate course in Waste Optimisation Professional", agency: "Chhattisgarh Environment Conservation Board", year: "2023" },
];

const healthGraduates = [
    { programme: "B.Pharmacy", graduates: "100" },
    { programme: "M.Pharmacy", graduates: "23" },
    { programme: "D. Pharmacy", graduates: "63" },
    { programme: "Pharm. D", graduates: "19" },
    { programme: "PhD", graduates: "22" },
    { programme: "BSC (Others)", graduates: "57" },
    { programme: "BSC (Biotechnology)", graduates: "51" },
    { programme: "Total", graduates: "335" },
];

const hospitalMoUs = [
    { id: 1, year: "2025", text: "NGO - Special Education Kopalvani Child Welfare Organization, Raipur (C.G.)", url: "/sustainability/mous/kopalvani-child-welfare-organization.pdf" },
    { id: 2, year: "2025", text: "Shri Ganesh Vinayak Eye Hospital, Raipur", url: "/sustainability/mous/shri-ganesh-vinayak-eye-hospital.pdf" },
    { id: 3, year: "2024", text: "City Eye Care Hospital, Mahaveer Nagar, Raipur", url: "/sustainability/mous/city-eye-care-hospital.pdf" },
    { id: 4, year: "2024", text: "Ramakrishna CARE Hospitals, Raipur", url: "/sustainability/mous/ramkrishna-care-hospital.pdf" },
    { id: 5, year: "2024", text: "Urmila Memorial Hospital, Bhatagaon, Raipur", url: "/sustainability/mous/urmila-memorial-hospital.pdf" },
    { id: 6, year: "2023", text: "NH MMI Narayana Superspeciality Hospital, Raipur", url: "/sustainability/mous/nh-mmi-narayana-superspeciality-hospital.pdf" },
    { id: 7, year: "2023", text: "Saptgiri Hospital, Mandir Hasaud Chowk, Raipur", url: "/sustainability/mous/saptgiri-hospital.pdf" },
    { id: 8, year: "2023", text: "VY Hospital, Kamal Vihar, Raipur", url: "/sustainability/mous/vy-hospital.pdf" },
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

const campusEvents = [
    { slNo: "1", event: "Industrial Visit to AIIMS Raipur", date: "06.11.2025", organiser: "Department of Forensic Science, Faculty of Science", participants: "108", outcome: "Provided students with practical exposure to hospital operations, healthcare infrastructure, diagnostic facilities, and clinical practices." },
    { slNo: "2", event: "Model/Poster Exhibition on World Mental Health Day", date: "10.10.2025", organiser: "Department of Social Work, Faculty of Arts & Humanities", participants: "53", outcome: "Promoted mental health awareness, encouraged creative expression, and educated participants about psychological well-being, stress management, and reducing mental health stigma." },
    { slNo: "3", event: "Guest Lecture ‘Development of New Vaccines and Variants in Indian Poultry Diseases’", date: "04.09.2025", organiser: "Department of Biochemistry, Faculty of Science", participants: "18", outcome: "Enhanced understanding of vaccine development, emerging poultry disease variants, disease prevention, and infectious disease management." },
    { slNo: "4", event: "Guest Lecture ‘Mental Health and Well Being of Students and Teachers’", date: "16.07.2025", organiser: "Faculty of Education", participants: "60", outcome: "Raised awareness of mental health challenges in educational settings and highlighted strategies for stress management and emotional resilience." },
    { slNo: "5", event: "11th International Day of Yoga ‘Yoga Sangam’", date: "21.06.2025", organiser: "Faculty of Education", participants: "100", outcome: "Encouraged the adoption of yoga and meditation for physical fitness, mental balance, stress reduction, and a healthy lifestyle." },
    { slNo: "6", event: "International Conference on “Emerging Perspectives and Future Trends in Pharmaceuticals and Allied Sciences for Global Health and Well-being”", date: "25.03.2025 to 26.03.2025", organiser: "Faculty of Pharmacy", participants: "500", outcome: "Facilitated the exchange of scientific knowledge, promoted interdisciplinary research collaboration, and highlighted emerging innovations in pharmaceutical sciences and healthcare." },
    { slNo: "7", event: "Guest Lecture on ‘Herpes Simplex Virus: Infection & Diagnosis’", date: "10.02.2025", organiser: "Department of Microbiology & Botany, Faculty of Science", participants: "60", outcome: "Improved understanding of herpes simplex virus infections, transmission, diagnostic techniques, and timely detection." },
    { slNo: "8", event: "4th National Pharmacovigilance Awareness", date: "17.09.2024", organiser: "Faculty of Pharmacy", participants: "120", outcome: "Strengthened awareness of pharmacovigilance, ADR identification and reporting, and medication safety." },
];

const sportsStaff = [
    { slNo: "1", name: "Dr. D. Kalidoss", designation: "Associate Professor & Director, Sports" },
    { slNo: "2", name: "Dr. Sanjeev Kumar Yadav", designation: "Assistant Professor & Sports Officer" },
    { slNo: "3", name: "Mr. Rudra Narayana Behura", designation: "Data Operator" },
    { slNo: "4", name: "Mr. Prabhat Narayan Yadav", designation: "Gym Instructor" },
    { slNo: "5", name: "Ms. Sandhya Pal", designation: "Assistant, Sports" },
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
    { slNo: "1", event: "AIU - All India Interuniversity Wrestling Championship (Women) 2024-25", date: "14-01-2025 to 17-01-2025", organiser: "Guru Kashi University, Bathinda, Punjab", awards: "6th Position; selected for Khelo India University Games" },
    { slNo: "2", event: "SAMAR Intercollegiate/University Sports Fest 2025", date: "23-01-2025 to 26-01-2025", organiser: "National Institute of Technology, Raipur", awards: "Basketball (Men) - Winner; Football (Men) - Winner" },
    { slNo: "3", event: "Asmita Khelo India Pencak Silat Women's League (East Zone)", date: "31-01-2025 to 02-02-2025", organiser: "Chhattisgarh Pencak Silat Martial Arts Association with SAI", awards: "Palag Nag (B.Sc. II Yr) - Bronze; Sania Parveen (BCS AIML&CS I Yr) - Bronze" },
    { slNo: "4", event: "38th National Games of India (Netball)", date: "28-01-2025 to 14-02-2025", organiser: "Indian Olympic Association with the Government of Uttarakhand and the Ministry of Youth Affairs and Sports", awards: "Sandeep Verma (B.Ed. I Yr) - Bronze" },
    { slNo: "5", event: "SAMARTH Intercollegiate/University Sports Fest 2025", date: "22-02-2025 to 23-02-2025", organiser: "Indian Institute of Management, Raipur", awards: "Football (Men) - Winner; Basketball (Men) - Runner-up; Basketball (Women) - Runner-up" },
    { slNo: "6", event: "AIU - All India Interuniversity Woodball (Men & Women) Championship 2024-25", date: "07-03-2025 to 10-03-2025", organiser: "Parul University, Gujarat", awards: "Mixed Doubles - Gold; Woodball Team (Women) - Bronze" },
    { slNo: "7", event: "Technovate Intercollege/University Sports Fest 2025", date: "21-03-2025 to 23-03-2025", organiser: "IIIT, Raipur", awards: "Basketball (Men) - Runner-up" },
    { slNo: "8", event: "19th Senior & 13th Sub Junior National Woodball Championship 2024-25", date: "22-03-2025 to 26-03-2025", organiser: "Maharashtra State Woodball Association", awards: "Aftab Hussain (B.P.Ed. II Yr) - Doubles Bronze; Naveen Gupta (B.Sc. III Yr) - Mixed Doubles Silver" },
    { slNo: "9", event: "26th World Para Arm-wrestling Championship 2024", date: "15-08-2024 to 25-08-2024", organiser: "The World Armwrestling Federation (WAF)", awards: "Harsh Khodiar (B.Com. III Yr) - Bronze" },
    { slNo: "10", event: "Niraj Agarwal Memorial Inter Collegiate Football Championship 2024", date: "12-09-2024 to 18-09-2024", organiser: "Shera Krida Samiti Club", awards: "Football (Men) - Winner" },
    { slNo: "11", event: "Colossus Intercollegiate/University Sports Fest 2024", date: "18-10-2024 to 20-10-2024", organiser: "Hidayatullah National Law University", awards: "Football (Men) - Winner; Basketball (Men) - Winner" },
    { slNo: "12", event: "Oriana Intercollegiate/University Sports Fest 2024 (Futsal - Men)", date: "14-11-2024 to 17-11-2024", organiser: "All India Institute of Medical Sciences (AIIMS)", awards: "Futsal (Men) - Runner-up" },
    { slNo: "13", event: "5th Senior Open State Woodball Championship 2024", date: "29-11-2024 to 01-12-2024", organiser: "Gariyaband Woodball Association of Chhattisgarh", awards: "Aftab Hussain (B.P.Ed. II Yr) - Runner-up" },
    { slNo: "14", event: "Workshop on Self-Defence Techniques", date: "19-09-2024", organiser: "NCC Department with the Sports Department, Kalinga University", awards: "Internal Event" },
    { slNo: "15", event: "Tug of War Competition for Hostel Students 2024-25", date: "18-01-2025", organiser: "Department of Sports with DSW", awards: "Internal Event" },
];

const counsellors = [
    "Dr. Babhuti Kashyap, Associate Professor - Department of Psychology",
    "Dr. L Jyoti Reddy, Assistant Professor - Department of Psychology",
    "Dr. Md. Shakil (HoD), Assistant Professor - Department of Social Work",
    "Dr. Manoj Mathew, Assistant Professor - Department of Social Work",
    "Dr. Greeshma Gopinath K, Assistant Professor - Department of Social Work",
    "Ms. Archana Nagwanshi, Assistant Professor - Department of Social Work",
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

const Table = (props) => (
    <DataTable overflowX={true} disableContainer={true} className="shadow-none border border-gray-100" {...props} />
);

const reportSections = [
    {
        id: 1,
        question: "3.1 Research on Health & Well-Being",
        component: (
            <Paragraphs>
                <p>Between 2021 and 2026, the University published 317 Scopus-indexed research papers aligned with SDG 3, which have collectively received 432 citations. These publications cover disciplines such as Medicine, Biochemistry, Genetics and Molecular Biology, Psychology, Pharmacology, Toxicology and Pharmaceutics, Immunology and Microbiology, Nursing, Neuroscience, and Dentistry.</p>
                <p><strong>3.1.1 Paper Views:</strong> A total of 255 SDG 3–aligned research papers have been viewed, indicating active engagement with the University’s research outputs related to health and well-being.</p>
                <p><strong>3.1.2 Clinical Citations:</strong> The 317 Scopus-indexed research articles published during 2021–2026 have received a total of 432 citations.</p>
                <p><strong>3.1.3 Publications:</strong> The SDG 3-aligned publications have achieved a Field-Weighted Citation Impact (FWCI) of 0.4.</p>
                <h3 className="font-plus-jakarta-sans text-lg font-semibold pt-2">Year-wise Research Papers and Book / Book Chapters aligned with SDG 3</h3>
                <Table
                    columns={[
                        { key: "year", label: "Year", widthPx: 120 },
                        { key: "papers", label: "Research Papers", widthPx: 200 },
                        { key: "books", label: "Book / Book Chapters", widthPx: 200 },
                    ]}
                    data={yearWiseCounts}
                />
                <h3 className="font-plus-jakarta-sans text-lg font-semibold pt-2">Sanctioned Research Projects Aligned with SDG 3</h3>
                <Table
                    columns={[
                        { key: "slNo", label: "S.No.", widthPx: 70 },
                        { key: "pi", label: "Name of the PI / Co-PI", widthPx: 220 },
                        { key: "title", label: "Title of the Research Project", widthPx: 380 },
                        { key: "agency", label: "Funding Agency", widthPx: 240 },
                        { key: "year", label: "Year of Award / Sanction", widthPx: 140 },
                    ]}
                    data={sanctionedProjects}
                />
                <p>
                    Projects web link:{" "}
                    <Link href="/internal-quality-assurance-cell" className="text-[var(--button-red)] hover:underline">
                        Internal Quality Assurance Cell
                    </Link>
                </p>
            </Paragraphs>
        ),
    },
    {
        id: 2,
        question: "3.2 Number Graduating in Health Professions",
        component: (
            <Paragraphs>
                <p>The University offers diverse programmes supporting healthcare, wellness, and quality of life. The Faculty of Pharmacy provides D.Pharm, B.Pharm, M.Pharm, Pharm.D, and Ph.D. programmes; the Faculty of Science contributes through programmes in Biotechnology, Microbiology, Zoology, Botany, Bioinformatics, Forensic Science, Physics, Chemistry, Mathematics, and Yoga; and the Faculty of Arts and Humanities promotes mental health through B.A. and M.A. Psychology programmes.</p>
                <Table
                    columns={[
                        { key: "programme", label: "Programme", widthPx: 260 },
                        { key: "graduates", label: "No. of Graduates", widthPx: 180 },
                    ]}
                    data={healthGraduates}
                />
                <h3 className="font-plus-jakarta-sans text-lg font-semibold pt-2">3.2.1 Indicator: Proportion of Graduates in Health Professions (2024-25)</h3>
                <Table
                    columns={[
                        { key: "data", label: "Data Collected", widthPx: 240 },
                        { key: "definition", label: "Definition", widthPx: 420 },
                        { key: "value", label: "Value", widthPx: 140 },
                    ]}
                    data={[
                        { data: "Number of graduates", definition: "Total headcount of graduates at all levels from the institution in the year 2024-25", value: "1122" },
                        { data: "Number of graduates in health professions", definition: "Headcount of graduates at all levels in health professions in the year 2024-25 (a subset of the total number of graduates)", value: "335 (30%)" },
                    ]}
                />
            </Paragraphs>
        ),
    },
    {
        id: 3,
        question: "3.3.1 Current Collaborations with Health Institutions",
        component: (
            <Paragraphs>
                <p>Kalinga University has established MoUs with leading academic institutions, NGOs, and reputed hospitals. Through these collaborations, students gain opportunities for internships, clinical postings, hands-on training, skill development, and exposure to diverse medical specialties in real healthcare settings.</p>
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
                <h3 className="font-plus-jakarta-sans text-lg font-semibold pt-2">Collaborative Wellness Summary: 2024-25 Medical Initiatives</h3>
                <p><strong>Free Eye and Dental Checkup Camp (3 September 2024)</strong> – Conducted in partnership with City Eye Care Hospital at the University Medical Room. The camp offered eye examinations, visual acuity tests, dental screenings, oral hygiene consultations, and free eye drops. Number of beneficiaries: 80.</p>
                <p><strong>Free Health Checkup Camp & Heart Wellness Session (13 September 2024)</strong> – Conducted in collaboration with Urmila Memorial Hospital and inaugurated by Vice Chancellor Dr. R. Shridhar. Services included blood pressure and blood sugar monitoring, ECG, Pulmonary Function Test (PFT) and Urine Flow Test (UFT), followed by a heart health session by cardiologist Dr. Jinesh Kumar Jain. Number of beneficiaries: 75.</p>
            </Paragraphs>
        ),
    },
    {
        id: 4,
        question: "3.3.2 Health Outreach Programmes",
        component: (
            <Paragraphs>
                <p>Kalinga University has undertaken numerous community outreach and extension activities to promote health, hygiene, and overall well-being, particularly among underprivileged and vulnerable sections of society. These include Malaria Prevention Awareness Programmes, Cancer Prevention and Healthy Lifestyle Campaigns, PCOD/PCOS Awareness Workshops, Eye Check-up Camps, Full Body Health Check-up Camps, Blood Donation Camps, Self-Medication Awareness Drives, Drug De-addiction Seminars, Menstrual Hygiene Awareness Campaigns, and Food Quality Testing in Anganwadi Centres.</p>
                <h3 className="font-plus-jakarta-sans text-lg font-semibold pt-2">List of Events</h3>
                <Table
                    columns={[
                        { key: "slNo", label: "Sl. No.", widthPx: 70 },
                        { key: "event", label: "Event Title", widthPx: 300 },
                        { key: "date", label: "Date", widthPx: 130 },
                        { key: "organiser", label: "Organizing Department", widthPx: 200 },
                        { key: "participants", label: "Participants", widthPx: 110 },
                        { key: "outcome", label: "Outcome", widthPx: 340 },
                    ]}
                    data={outreachEvents2024_25}
                />
                <h3 className="font-plus-jakarta-sans text-lg font-semibold pt-2">Events Conducted at Kalinga University</h3>
                <Table
                    columns={[
                        { key: "slNo", label: "Sl. No.", widthPx: 70 },
                        { key: "event", label: "Activity Name", widthPx: 300 },
                        { key: "date", label: "Date", widthPx: 130 },
                        { key: "organiser", label: "Organized By", widthPx: 200 },
                        { key: "participants", label: "Participants", widthPx: 110 },
                        { key: "outcome", label: "Outcome of the Programme", widthPx: 340 },
                    ]}
                    data={campusEvents}
                />
            </Paragraphs>
        ),
    },
    {
        id: 5,
        question: "3.3.3 Shared Sports Facilities",
        component: (
            <Paragraphs>
                <p>Kalinga University has adopted six villages—Kotni, Kuhera, Paloud, Kotrabhata, Tandul, and Parsada—and extends its sports infrastructure to students from government schools in these villages. The University also shares its Seminar Hall and Auditorium with government organizations for public awareness and outreach initiatives, including financial literacy programmes conducted by the Reserve Bank of India (RBI), Raipur Branch.</p>
                <p>Outdoor amenities include a cricket ground, football field, basketball and volleyball courts, badminton courts, athletics facilities, and a multi-purpose sports field. Indoor facilities include separate gyms for boys and girls with qualified trainers, along with table tennis, carrom, chess, yoga, and aerobics.</p>
                <h3 className="font-plus-jakarta-sans text-lg font-semibold pt-2">Sports Department Staff Members</h3>
                <Table
                    columns={[
                        { key: "slNo", label: "Sl. No.", widthPx: 70 },
                        { key: "name", label: "Name", widthPx: 260 },
                        { key: "designation", label: "Designation", widthPx: 320 },
                    ]}
                    data={sportsStaff}
                />
                <h3 className="font-plus-jakarta-sans text-lg font-semibold pt-2">Sports Grounds Dimension</h3>
                <Table
                    columns={[
                        { key: "slNo", label: "S.No.", widthPx: 70 },
                        { key: "facility", label: "Facilities", widthPx: 260 },
                        { key: "total", label: "Total", widthPx: 100 },
                        { key: "area", label: "Area", widthPx: 160 },
                    ]}
                    data={sportsGrounds}
                />
                <h3 className="font-plus-jakarta-sans text-lg font-semibold pt-2">Sports related Activities & Events</h3>
                <Table
                    columns={[
                        { key: "slNo", label: "Sl. No.", widthPx: 70 },
                        { key: "event", label: "Sports Event", widthPx: 300 },
                        { key: "date", label: "Date", widthPx: 160 },
                        { key: "organiser", label: "Organized By", widthPx: 260 },
                        { key: "awards", label: "Awards", widthPx: 300 },
                    ]}
                    data={sportsEvents}
                />
            </Paragraphs>
        ),
    },
    {
        id: 6,
        question: "3.3.4 Sexual and Reproductive Health Care Services",
        component: (
            <Paragraphs>
                <p>Kalinga University promotes women’s health, gender equity, safety, and overall well-being through an integrated support system aligned with SDG 3 and SDG 5. Dedicated bodies, including the Internal Complaints Committee (ICC), Women’s Cell/POSH Committee, and Student Counselling Cell, provide confidential counselling, psychosocial support, awareness, and grievance redressal.</p>
                <BulletList
                    items={[
                        "Policy on Gender Equity and Gender Sensitization",
                        "Policy on Emotional Wellness, Mental Health, and Resilience",
                        "Internal Complaints Committee, constituted under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013",
                        "University Medical Room and Sports and Wellness Center",
                        "Sanitary napkin vending machines and incinerators across academic blocks, administrative buildings, and hostels",
                        "Dedicated Girls’ Common Rooms and Study Rooms",
                    ]}
                />
                <p>Regular awareness programmes, workshops, expert sessions, and health camps address menstrual hygiene, reproductive health, nutrition, anaemia prevention, mental health, stress management, cancer awareness, substance-abuse prevention, and healthy lifestyles.</p>
            </Paragraphs>
        ),
    },
    {
        id: 7,
        question: "3.3.5 Mental Health Support for Students",
        component: (
            <Paragraphs>
                <p>The University provides mental health support through its Mentor–Mentee Framework, Student Counselling Cell, and various wellness initiatives. Faculty mentors regularly engage with students to understand their academic, emotional, and personal concerns, while trained counsellors offer confidential guidance to students experiencing stress, anxiety, emotional difficulties, or other mental health challenges.</p>
                <p>Through awareness programs, workshops, counselling sessions, stress-management activities, and peer-support initiatives, the University encourages students to seek help without fear of stigma, with special attention to the early identification of emotional distress and timely intervention.</p>
            </Paragraphs>
        ),
    },
    {
        id: 8,
        question: "3.3.6 Smoke-Free Policy",
        component: (
            <Paragraphs>
                <p>Through its Smoke-Free and Tobacco-Free Campus Policy, the University strictly prohibits smoking and the use of all tobacco products within the entire campus premises. The policy applies to all students, faculty members, staff, visitors, and vendors, and covers academic blocks, offices, hostels, libraries, laboratories, cafeterias, recreational areas, vehicles, and open spaces.</p>
                <p>“No Smoking” and “Tobacco-Free Campus” signages are displayed across the campus, and awareness campaigns, health education programs, and orientation sessions are regularly organized on the harmful effects of tobacco use.</p>
            </Paragraphs>
        ),
    },
    {
        id: 9,
        question: "3.3.7 Mental Health Support for Staff",
        component: (
            <Paragraphs>
                <p>The University regularly organizes awareness programs, workshops, seminars, expert talks, and wellness sessions for faculty and staff on stress management, emotional intelligence, mindfulness, resilience building, burnout prevention, and healthy coping strategies.</p>
                <p>Kalinga University has established the <strong>Happiness Cell (Mental Health Wellness Centre)</strong> to promote the emotional, psychological, social, and behavioral well-being of students and staff. It offers confidential counselling and guidance for stress, anxiety, emotional distress, adjustment difficulties, interpersonal conflicts, academic pressure, and workplace challenges.</p>
                <h3 className="font-plus-jakarta-sans text-lg font-semibold pt-2">Team of Qualified Counsellors</h3>
                <BulletList items={counsellors} />
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
                            <p className="mt-3 text-[var(--foreground)] leading-relaxed">{faculty.description}</p>
                            <h4 className="mt-4 font-semibold">Key Highlights</h4>
                            <div className="mt-2 flex-1">
                                <BulletList items={faculty.highlights} />
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
