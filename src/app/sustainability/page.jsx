"use client";

import React, { useState } from "react";
import ImageContent from "../components/ccrc/imagecontent";
import MainIntro from "../components/about/main_intro";
import SdgImageGrid from "../components/sdg-cell/sdg-image-grid";
import GlobalArrowButton from "../components/general/global-arrow_button";
import FlipbookTrigger from "../components/general/FlipbookTrigger";
import { useRouter } from "next/navigation";
import SectionHeading from "../components/general/SectionHeading";
import VisionMission from "../components/about/vision-mission";
import ImageListItem from '../components/ccrc/imagelistitem'
import CenterOfExcellence from "../components/about/center_of_excellence";

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
    label: "Office Order 2022",
    pdfUrl:
      "https://cdn.kalingauniversity.ac.in/sdg-cell/Office-Order-2022-CoE-Committee-Members.pdf",
  },
  {
    label: "Office Order 2025",
    pdfUrl:
      "https://cdn.kalingauniversity.ac.in/sdg-cell/Office-Order-2025-Revised-CoE-Committee-Members.pdf",
  },
];

function SdgReportsAndPolicyTabs() {
  const [tab, setTab] = useState("reports");

  const pdfButton = (label, pdfUrl, variant = "default") => {
    const compact = variant === "compact";
    return (
      <FlipbookTrigger pdfUrl={pdfUrl} title={label}>
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
      </FlipbookTrigger>
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
          SDG Policy
        </button>
        <button
          type="button"
          onClick={() => setTab("orders")}
          className={`pb-2 px-1 text-sm sm:text-base font-semibold border-b-2 -mb-px transition-colors ${tab === "orders" ? "border-[var(--button-red)] text-[var(--button-red)]" : "border-transparent text-[var(--light-text-gray)] hover:text-[var(--dark-gray)]"}`}
        >
          Office Orders
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

  const sdgPages = [
    { label: "Good Health and Well-being", href: "/sustainability/good-health-and-well-being" },
    { label: "Water Conservation", href: "/sustainability/water-conservation" },
    { label: "Energy Conservation", href: "/sustainability/energy-conservation" },
    { label: "Waste Management", href: "/sustainability/waste-management" },
    { label: "Sustainable Initiatives for a Green Campus", href: "/sustainability/sustainable-initiatives-for-a-green-campus" },
    { label: "Partnerships for the Goals", href: "/sustainability/partnerships-for-the-goals" }
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

  return (
    <div className="min-h-screen bg-white pb-20">
      <SectionHeading title="Centre of Excellence for Sustainability"
        subTitle=""
        titleClassName="text-center pb-12 pt-6"
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
    </div>
  );
}
