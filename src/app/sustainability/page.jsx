"use client";

import React, { useState, useEffect } from "react";
import ImageContent from "../components/ccrc/imagecontent";
import MainIntro from "../components/about/main_intro";
import SdgImageGrid from "../components/sdg-cell/sdg-image-grid";
import GlobalArrowButton from "../components/general/global-arrow_button";
import Gallery from "@/app/components/general/gallery";
import { useRouter } from "next/navigation";
import SectionHeading from "../components/general/SectionHeading";
import VisionMission from "../components/about/vision-mission";
import ImageListItem from '../components/ccrc/imagelistitem'
import CenterOfExcellence from "../components/about/center_of_excellence";
import CtcdTrainingTabs from '../components/ctcd/ctcd_training_tabs';

const SDG_ANNUAL_REPORTS = [
  {
    label: "Annual Report 2022–23",
    pdfUrl:
      "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Annual-Report+2022-2023_compressed.pdf",
  },
  {
    label: "Annual Report 2023–24",
    pdfUrl:
      "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Annual-Report+2023-2024_compressed.pdf",
  },
  {
    label: "Annual Report 2024–25",
    pdfUrl:
      "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Annual-Report+2024-2025_compressed.pdf",
  },
];

const SDG_POLICY_PDF =
  "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Sustainability+Policy_compressed.pdf";

const SDG_OFFICE_ORDERS = [
  {
    label: "CoE Establishment 2022",
    pdfUrl:
      "https://cdn.kalingauniversity.ac.in/sdg-cell/Office-Order-2022-CoE-Committee-Members.pdf",
  },
  {
    label: "CoE Establishment 2025",
    pdfUrl:
      "https://cdn.kalingauniversity.ac.in/sdg-cell/Office-Order-2025-Revised-CoE-Committee-Members.pdf",
  },
];

function SdgReportsAndPolicyTabs() {
  const [tab, setTab] = useState("reports");

  const pdfButton = (label, pdfUrl, variant = "default") => {
    const compact = variant === "compact";
    return (
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        className={compact ? "block w-full min-w-0" : "inline-block w-full max-w-md"}
      >
        <GlobalArrowButton
          className={
            compact
              ? "w-full justify-between !py-2 !px-2 sm:!px-2.5 min-h-0 !rounded-lg !text-xs sm:!text-sm"
              : "w-full justify-between min-h-[52px] !rounded-xl"
          }
          textClassName={compact ? "!leading-snug !text-left line-clamp-2 !font-medium" : undefined}
          arrowClassName={compact ? "p-[2px] !px-1 mr-1 !py-0.5 shrink-0" : "p-[3px] !px-2 mr-2 !py-1"}
          arrowSize={compact ? 18 : 26}
        >
          {label}
        </GlobalArrowButton>
      </a>
    );
  };

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <div className="flex flex-wrap gap-8 mb-6 border-b border-gray-200">
        <button
          type="button"
          onClick={() => setTab("reports")}
          className={`pb-2 px-1 text-sm sm:text-base font-semibold border-b-2 -mb-px transition-colors ${tab === "reports" ? "border-[var(--button-red)] text-[var(--button-red)]" : "border-transparent text-[var(--light-text-gray)] hover:text-[var(--dark-gray)]"}`}
        >
          Annual Reports
        </button>
        <button
          type="button"
          onClick={() => setTab("policy")}
          className={`pb-2 px-1 text-sm sm:text-base font-semibold border-b-2 -mb-px transition-colors ${tab === "policy" ? "border-[var(--button-red)] text-[var(--button-red)]" : "border-transparent text-[var(--light-text-gray)] hover:text-[var(--dark-gray)]"}`}
        >
          About SDG Cell
        </button>
        <button
          type="button"
          onClick={() => setTab("orders")}
          className={`pb-2 px-1 text-sm sm:text-base font-semibold border-b-2 -mb-px transition-colors ${tab === "orders" ? "border-[var(--button-red)] text-[var(--button-red)]" : "border-transparent text-[var(--light-text-gray)] hover:text-[var(--dark-gray)]"}`}
        >
          CoE Establishment
        </button>
      </div>

      {tab === "reports" && (
        <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-2xl">
          {SDG_ANNUAL_REPORTS.map((r) => (
            <div key={r.pdfUrl} className="min-w-0">
              {pdfButton(r.label, r.pdfUrl, "compact")}
            </div>
          ))}
        </div>
      )}

      {tab === "policy" && <div className="max-w-xl">{pdfButton("Sustainability Policy", SDG_POLICY_PDF)}</div>}

      {tab === "orders" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full max-w-2xl">
          {SDG_OFFICE_ORDERS.map((o) => (
            <div key={o.pdfUrl} className="min-w-0">
              {pdfButton(o.label, o.pdfUrl, "compact")}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SDGCell() {
  const router = useRouter();
  const [activeClubTab, setActiveClubTab] = useState("green-club");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#green-club") {
        setActiveClubTab("green-club");
        setTimeout(() => {
          const element = document.getElementById("student-engagement-tabs");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else if (hash === "#bis-club") {
        setActiveClubTab("bis-club");
        setTimeout(() => {
          const element = document.getElementById("student-engagement-tabs");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleTabChange = (val) => {
    setActiveClubTab(val);
    window.history.pushState(null, "", `#${val}`);
  };

  const sdgPages = [
    { label: "Good Health and Well-being", href: "/sustainability/good-health-and-well-being" },
    { label: "Water Conservation", href: "/sustainability/water-conservation" },
    { label: "Energy Conservation", href: "/sustainability/energy-conservation" },
    { label: "Waste Management", href: "/sustainability/waste-management" },
    { label: "Sustainable Initiatives for a Green Campus", href: "/sustainability/sustainable-initiatives-for-a-green-campus" },
    { label: "Partnerships for the Goals", href: "/sustainability/partnerships-for-the-goals" }
  ];

  const sdgevents = [
    { label: "Frontiers in Pharmaceutical and Allied Sciences: Translating Innovation into Impact for Sustainable and Equitable Healthcare", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/Two-Day-International-Conference-on-Frontiers-in-Pharmaceutical-and-Allied-Sciences-Translating-Innovation-into-Impact-for-Sustainable-and-Equitable-Healthcare.pdf" },
    { label: "Report On Mass Drug Administration Related SDG No.", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/Report-On-Mass-Drug-Administration.pdf" },
    { label: "Industrial Visit Aspire Pharmaceutical Pvt Ltd, New Raipur", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/Industrial-Visit-Aspire-Pharmaceutical-Pvt-Ltd-New-Raipur.pdf" },
    { label: "Marathon-Run-for-Mann", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/Marathon-Run-for-Mann.pdf" },
    { label: "Nasha Mukti Abhiyaan Student Ambassador Program", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/Nasha-Mukti-Abhiyaan–Student-Ambassador-Program.pdf" },
    { label: "One Day Free Health Check-up Camp Report", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/One-Day-Free-Health-Check-up-Camp-Report.pdf" },
    { label: "4th National Pharmacovigilance Awareness on Building ADR and Reporting Culture Patient Safety", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/4th-National-Pharmacovigilance-Awareness-on-Building-ADR-and-Reporting-Culture-Patient-Safety.pdf" },
    { label: "Breast Cancer Awareness Camp", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/Breast-Cancer-Awareness-Camp.pdf" },
    { label: "Guest Lecture on-Suryanamaskara An Ancient, all inclusive cross fitness paradigm", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/Guest-Lecture-on-Suryanamaskara-An-Ancient-all-inclusive-cross-fitness-paradigm.pdf" },
    { label: "Guest lecture cum workshop on Andrology Career Pathways Clinical Insights", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/Guest-lecture–cum-workshop-on-Andrology-Career-Pathways-Clinical-Insights.pdf" },
    { label: "Guest Lecture on Herpes Simplex Virus Infection Diagnosis", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/Guest-Lecture-on-Herpes-Simplex-Virus-Infection-Diagnosis.pdf" },
    { label: "Guest Lecture On Identify Report Target and Conquer Mastering Laboratory Diagnosis of Medically Important Fungi", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/events-report/Guest-Lecture-On-Identify-Report-Target-and-Conquer–Mastering-Laboratory-Diagnosis-of-Medically-Important-Fungi.pdf" }
  ];

  const greenclub = [
    { label: "ICSSA-2026", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/ICSSA-2026-Conference-Report-Green-Club_compressed.pdf" },
    { label: "World Ozone Day Celebration: Envirothon & Painting Competition", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/Report-on-Ozone-Day-Celebration-report-2025-Green-Club.pdf" },
    { label: "World Wetland Day 2026 Celebration", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/Report-on-Wildlife-Week-2023-Green-Club_compressed.pdf" },
    { label: "Nature Camp, 2024", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/Report-on-Nature-Camp-2024-Green-Club.pdf" },
    { label: "Wildlife Week Celebration", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/Report-Wildlife-Week-Celebration-report-2025-Green-Club_compressed.pdf" },
    { label: "Tree Plantation & Environmental Awareness Drive: Ek Ped Maa K Naam", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/Report-Ek-Ped-Maa-K-Naam-Report-Green-Club_compressed.pdf" },
    { label: "Industrial Visit to Indira Gandhi Krishi Vidyalaya, Raipur", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/Zoology-Industrial Visit Report 2025 IGKV_Green Club.pdf" },
  ];

  const bisclub = [
    { label: "Exposure Visit (Industrial Visit) at Siddarth Transformers", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/Report-on-Exposure-visit-on-Siddarth-Transformer-Siltara-BIS.pdf" },
    { label: "Standard Carnival", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/Report-on-Standard-Carnival-BIS.pdf" },
    { label: "Manak Carnival", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/Report-on-Standard-Manak-Carnival-BIS.pdf" },
    { label: "Standard Writing Competition", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/Report-on-Standard-writing-competition-BIS.pdf" }
  ];

  const greenclubone = [
    { label: "Constitution of Green Club Coordinators and Student Members", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/Constitution-of-Green-Club-Coordinators-and-Student-Members.pdf" },
    { label: "Office Order", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/Office-Order-Green-Club-2019.pdf" }
  ];

  const bisclubone = [
    { label: "Constitution of BIS Club Coordinator and Student Members", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/Constitution-of-BIS-Club-Coordinators-and-Student-Members.pdf" },
    { label: "Office Order", href: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/Office-Order-BIS-Student-Club-2023.pdf" }
  ];

  const greenClubGalleryImages = [
    { id: 1, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/images-1.jpg", alt: "Green Club Image 1" },
    { id: 2, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/images-2.jpg", alt: "Green Club Image 2" },
    { id: 3, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/images-3.jpg", alt: "Green Club Image 3" },
    { id: 4, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/images-4.jpg", alt: "Green Club Image 4" },
    { id: 5, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/images-5.jpg", alt: "Green Club Image 5" },
    { id: 6, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/images-6.jpg", alt: "Green Club Image 6" },
    { id: 7, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/images-7.jpg", alt: "Green Club Image 7" },
    { id: 8, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/images-8.png", alt: "Green Club Image 8" }
  ];

  const bisClubGalleryImages = [
    { id: 1, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/Approval-Document-BISClub.jpeg", alt: "BIS Standard Club Approval Document" },
    { id: 2, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/At-Venue.jpeg", alt: "BIS Standard Club At Venue" },
    { id: 3, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/During-Demonstration.jpeg", alt: "BIS Standard Club During Demonstration" },
    { id: 4, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/During-Demonstration-1.jpeg", alt: "BIS Standard Club During Demonstration 1" },
    { id: 5, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/During-interaction.jpeg", alt: "BIS Standard Club During Interaction" },
    { id: 6, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/Quiz-Competition-Poster.jpg", alt: "BIS Standard Club Quiz Competition Poster" },
    { id: 7, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/Quiz-Comp-Photo1.jpg", alt: "BIS Standard Club Quiz Competition Photo 1" },
    { id: 8, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/Quiz-Comp-Photo2.jpg", alt: "BIS Standard Club Quiz Competition Photo 2" },
    { id: 9, image: "https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/Quiz-Comp-Photo3.jpg", alt: "BIS Standard Club Quiz Competition Photo 3" }
  ];

  const itemsnew = [
    {
      text: "Establish advanced laboratories for emerging technologies",
    },
    {
      text: "Provide experiential learning and skill-based training",
    },
    {
      text: "Develop industry-ready skills through certifications and internships",
    },
    {
      text: "Promote research, innovation, and entrepreneurship",
    },
    {
      text: "Support startups and MSMEs through collaboration and guidance",
    },
    {
      text: "Address real-world industrial and societal challenges",
    },
  ];
  const Itemsgreenclub = [
    {
      text: `<div class="font-semibold text-white text-base mb-1">1. Environmental Education</div>
<ul class="list-disc pl-5 space-y-1 text-gray-200">
  <li>Increase awareness of environmental issues among students and the university community.</li>
  <li>Conduct workshops, seminars, and awareness campaigns to educate them about environmental protection and conservation practices.</li>
</ul>`,
    },
    {
      text: `<div class="font-semibold text-white text-base mb-1">2. Promoting Sustainable Practices</div>
<ul class="list-disc pl-5 space-y-1 text-gray-200">
  <li>Encourage the adoption of eco-friendly practices in daily life, both on and off campus.</li>
  <li>Advocate for the reduction of resource consumption, waste generation, and environmentally harmful products.</li>
</ul>`,
    },
    {
      text: `<div class="font-semibold text-white text-base mb-1">3. Campus Sustainability</div>
<ul class="list-disc pl-5 space-y-1 text-gray-200">
  <li>Implement sustainable practices such as waste reduction, energy conservation, and green building initiatives.</li>
  <li>Make the campus environmentally friendly through tree plantation, green spaces, and sustainable infrastructure projects.</li>
</ul>`,
    },
    {
      text: `<div class="font-semibold text-white text-base mb-1">4. Community Outreach</div>
<ul class="list-disc pl-5 space-y-1 text-gray-200">
  <li>Engage with local communities to address environmental issues and promote sustainable living practices.</li>
  <li>Conduct outreach programs, tree-plantation drives, and environmental awareness campaigns in nearby villages/communities.</li>
</ul>`,
    },
  ];

  const Itemsbisclub = [
    {
      text: "To create awareness among students about the importance of standards, quality, safety, and sustainability",
    },
    {
      text: "To encourage the adoption of sustainable practices such as energy efficiency, waste management, resource conservation, and eco-friendly production systems.",
    },
    {
      text: "To promote innovation and research through workshops, seminars, quizzes, debates, and technical activities related to standardization.",
    },
    {
      text: "To develop quality consciousness, ethical values, and environmental responsibility among students.",
    },
    {
      text: "To strengthen collaboration with the Bureau of Indian Standards and industry experts. ",
    }
  ];

  const customClubsTabs = [
    {
      value: "green-club",
      label: "Green Club",
      content: (
        <div className="text-left">
          <MainIntro
            title={
              <>
                Green Club
                <span className="block text-sm sm:text-base font-plus-jakarta-sans font-medium text-[var(--button-red)] mt-1.5 normal-case tracking-wide">
                  [SDG 3, 4, 6, 7, 11, 12, 13, 15]
                </span>
              </>
            }
            description={[
              "The Green Club of Kalinga University is a student-led initiative established to promote environmental awareness, ecological responsibility, and sustainable development practices among students, staff, and faculty members. It encourages student participation in environmental protection activities by organizing tree plantation drives, waste management campaigns, plastic-free initiatives, energy conservation programs, water conservation activities, cleanliness drives, biodiversity awareness programs, eco-friendly competitions, and environmental awareness rallies.",
              "Through seminars, workshops, expert lectures, exhibitions, green audits, and community outreach programs, students learn to adopt eco-friendly practices. They also develop leadership qualities, teamwork spirit, social responsibility, and environmental ethics, inspiring them to become environmentally conscious citizens who are committed to the well-being of our society and environmental protection for future generations."
            ]}
            imageUrl="https://cdn.kalingauniversity.ac.in/sdg-cell/green-club.webp"
            imageAlt="Green Club"
            showKnowMore={true}
            initialVisibleParagraphs={1}
            disableClipPath={false}
            imageObjectFit="contain"
          />
          <ImageListItem
            items={Itemsgreenclub}
            imageSrc="https://cdn.kalingauniversity.ac.in/sdg-cell/green-club/images-3.jpg"
            title="Objectives"
            subtitle=""
            description="Green Club promotes sustainable living and active participation in conservation practices."
          />
          <section className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {greenclubone.map((page, index) => (
                <GlobalArrowButton
                  key={index}
                  onClick={() => router.push(page.href)}
                  className="!w-full min-h-[60px] h-auto justify-between !rounded-xl"
                  arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                  arrowSize={29}
                >
                  {page.label}
                </GlobalArrowButton>
              ))}
            </div>
          </section>
          <section className="container mx-auto px-6 py-12">
            <h2 className="text-3xl md:text-4xl text-center mb-12 font-serif text-black">
              Events and Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {greenclub.map((page, index) => (
                <GlobalArrowButton
                  key={index}
                  onClick={() => router.push(page.href)}
                  className="!w-full min-h-[60px] h-auto justify-between !rounded-xl"
                  arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                  arrowSize={29}
                >
                  {page.label}
                </GlobalArrowButton>
              ))}
            </div>
          </section>
          <Gallery title="Glimpses" paddingClassName="py-16" images={greenClubGalleryImages} />
        </div>
      )
    },
    {
      value: "bis-club",
      label: "BIS Standard Club",
      content: (
        <div className="text-left">
          <MainIntro
            title={
              <>
                BIS Standard Club
                <span className="block text-sm sm:text-base font-plus-jakarta-sans font-medium text-[var(--button-red)] mt-1.5 normal-case tracking-wide">
                  [SDG 4, 8, 9, 12, 13, 17]
                </span>
              </>
            }
            description={[
              "The “BIS Standard Club” of the Faculty of Technology at Kalinga University is a student-led initiative established on 26.09.2023. The club actively promotes the understanding of the importance of Indian Standards in ensuring product quality, safety, industrial efficiency, technological advancement,  research orientation, ethical innovation, and sustainable development. Various activities are conducted under the club, such as workshops, seminars, quizzes, expert lectures, poster presentations, debates, awareness campaigns, and industrial visits.",
              "The club emphasises sustainable practices such as energy efficiency, recycling, waste reduction, resource conservation, product reliability, and safe manufacturing processes aligned with national policies and global sustainability goals. Supported by the Bureau of Indian Standards (BIS), the club promotes responsible engineering practices among students and motivates them to develop eco-friendly solutions that balance industrial growth, environmental protection, social responsibility, and long-term societal well-being."
            ]}
            imageUrl="https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/bisclub.webp"
            imageAlt="BIS Standard Club"
            showKnowMore={true}
            initialVisibleParagraphs={1}
            disableClipPath={false}
            imageObjectFit="contain"
          />
          <ImageListItem
            items={Itemsbisclub}
            imageSrc="https://cdn.kalingauniversity.ac.in/sdg-cell/bis-club/During-interaction.jpeg"
            title="Objectives"
            subtitle=""
            description="Objectives of the BIS Club include:"
          />
          <section className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {bisclubone.map((page, index) => (
                <GlobalArrowButton
                  key={index}
                  onClick={() => router.push(page.href)}
                  className="!w-full min-h-[60px] h-auto justify-between !rounded-xl"
                  arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                  arrowSize={29}
                >
                  {page.label}
                </GlobalArrowButton>
              ))}
            </div>
          </section>
          <section className="container mx-auto px-6 py-12">
            <h2 className="text-3xl md:text-4xl text-center mb-12 font-serif text-black">
              Events and Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {bisclub.map((page, index) => (
                <GlobalArrowButton
                  key={index}
                  onClick={() => router.push(page.href)}
                  className="!w-full min-h-[60px] h-auto justify-between !rounded-xl"
                  arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                  arrowSize={29}
                >
                  {page.label}
                </GlobalArrowButton>
              ))}
            </div>
          </section>
          <Gallery title="Glimpses" paddingClassName="py-16" images={bisClubGalleryImages} />
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <ImageContent
        hasImage={false}
        readmore={false}
        className="items-center justify-center"
        title="Every Small Action Can Make A Big Difference"
        subtitle="Every Small Action Can Make A Big Difference"
        subtitleclassName="hidden"
        description={
          <>
            Our University promotes sustainable and eco-friendly practices by taking initiatives that minimise environmental impact for the betterment of our planet and future generations. The goal is to make our students environmentally conscious and responsible towards society. They are being taught ways to reduce their carbon footprints and conserve natural resources. By practising the 3 R’s (Reduce, Recycle, and Reuse), our students and faculty members work together towards green initiatives and set new benchmarks in the field of sustainable education.
          </>
        }
      />
      <MainIntro
        title="KU’s Commitment Towards Sustainable Development Goals (SDGs)"
        description={[
          "The Sustainable Development Goals (SDGs), also known as the Global Goals, were adopted by the United Nations in 2015. The SDGs' 17 goals aim to protect the planet, end poverty, and ensure peace and prosperity by 2030. These goals are well-connected, so if one area progresses or struggles, it will impact others, too.",
          "The SDG Cell at Kalinga University was established on 12.04.2022 to promote and implement initiatives related to the cell. We adopted all 17 practices to address global challenges and work towards impactful solutions by balancing social, economic, and environmental challenges. We integrate sustainable practices into our University’s academic, social, cultural, research, administrative, and community engagement activities."
        ]}
        imageUrl="https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-logo.png"
        imageAlt="SDG Goals"
        showKnowMore={true}
        initialVisibleParagraphs={1}
        disableClipPath={false}
        imageObjectFit="contain"
        extraContent={<SdgReportsAndPolicyTabs />}
      />

      <SdgImageGrid />
      <SectionHeading title="Centres of Excellence for Sustainability"
        subTitle=""
        titleClassName="text-center pt-6"
      />
      <MainIntro
        title=""
        description={[
          "The Centres of Excellence (CoE) at Kalinga University serve as a hub for advanced learning, innovation, and industry-oriented skill development, aligned with the United Nations Sustainable Development Goals. The University has established seven specialized CoE across key domains to enhance students’ practical knowledge and research capabilities. These include Artificial Intelligence & Machine Learning in collaboration with IBM Innovation Centre for Education, focusing on programming, algorithms, and deep learning; Electric Vehicles (EV) with Godawari Electric Motors Pvt. Ltd., supporting clean energy and sustainable mobility; Industrial Internet of Things (IIoT) with Technoviz Automation, promoting smart industry; Automobile Training Centre with JustAuto Solutions; Robotics, Coding & Drone Technology with BDS Education; MSME Training with IamSMEofIndia to promote entrepreneurship and economic growth, and BRIDGE courses with Bosch. ",
          "With state-of-the-art infrastructure, expert mentorship, and emerging technologies, the Centres of Excellence focus on providing hands-on learning opportunities to students and professionals and solving global technological and societal challenges."
        ]}
        imageUrl="https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-logo.png"
        imageAlt="SDG Goals"
        showKnowMore={true}
        initialVisibleParagraphs={1}
        disableClipPath={false}
        imageObjectFit="contain"
      />
      <VisionMission
        visionTitle="Vision"
        missionTitle="Mission"
        visionText="To be globally recognized for its Centres of Excellence that promote innovation, industry-oriented learning, and sustainable development through advanced technologies, while empowering students with future-ready skills aligned with the United Nations Sustainable Development Goals. "
        missionText={[
          "To deliver industry-relevant education in emerging technologies",
          "To provide hands-on training and practical exposure",
          "To encourage innovation, research, and industry collaboration",
          "To promote sustainable practices aligned with the United Nations Sustainable Development Goals (SDGs)"
        ]}
        imageSrc="https://cdn.kalingauniversity.ac.in/common/student.jpg"
        imageAlt="Central Instrumentation Facility"
        showImage={false}
        className="bg-white"
      />
      <ImageListItem
        items={itemsnew}
        imageSrc="https://cdn.kalingauniversity.ac.in/CIF/cif-objectives+(1).webp"
        title="Objectives"
        subtitle=""
        description=""
        className="!bg-[var(--dark-blue)]"
        textClassName="text-white"
        headingClassName="text-white"
      />
      <CenterOfExcellence
        title="Centres of Excellence Established at Kalinga University"
        description=""
        className="!bg-white"
      />
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-serif">
          Our Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {sdgPages.map((page, index) => (
            <GlobalArrowButton
              key={index}
              onClick={() => router.push(page.href)}
              className="!w-full min-h-[60px] h-auto justify-between !rounded-xl"
              arrowClassName="p-[3px] !px-2 mr-2 !py-1"
              arrowSize={29}
            >
              {page.label}
            </GlobalArrowButton>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-serif">
          Event Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {sdgevents.map((page, index) => (
            <GlobalArrowButton
              key={index}
              onClick={() => router.push(page.href)}
              className="!w-full min-h-[60px] h-auto justify-between !rounded-xl"
              arrowClassName="p-[3px] !px-2 mr-2 !py-1"
              arrowSize={29}
            >
              {page.label}
            </GlobalArrowButton>
          ))}
        </div>
      </section>

      <div id="student-engagement-tabs">
        <SectionHeading
          title="Student Engagement: Clubs and Societies"
          subtitle=""
          description=""
          titleClassName="text-center mt-10 mb-5"
        />
        <CtcdTrainingTabs
          customTabs={customClubsTabs}
          value={activeClubTab}
          onValueChange={handleTabChange}
        />
      </div>
    </div>

  );
}
