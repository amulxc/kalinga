"use client";

import ImageContent from "@/app/components/ccrc/imagecontent";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import ImageListItem from "../components/ccrc/imagelistitem";

/* ---------------- Breadcrumb ---------------- */
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/kif-banner.webp",
  pageTitle: "Unnat Bharat Abhiyan",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Unnat Bharat Abhiyan", href: "/unnat-bharat-abhiyan" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

/* ---------------- Vision & Mission ---------------- */
const visionMissionData = [
  {
    visionTitle: "Vision",
    missionTitle: "Mission",
    visionText:
      "Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.",
    missionText:
      "Enable higher educational institutions to work with rural communities, identify development challenges and create sustainable solutions, strengthen the link between society and academia, and upgrade the capabilities of the public and private sectors for rural development.",
    imageAlt: "Unnat Bharat Abhiyan",
    showImage: false, // remove center image
  },
];

const objectives = [
  {
    text: "To build an understanding of the development agenda within institutions of Higher Education and an institutional capacity and training relevant to national needs, especially those of rural India."
  },
  {
    text: "To re-emphasise the need for field work, stakeholder interactions, and design for societal objectives as the basis of higher education."
  },
  {
    text: "To stress rigorous reporting and useful outputs as central to developing new professions."
  },
  {
    text: "To provide rural India and regional agencies with access to the professional resources of institutes of higher education, especially those that have acquired academic excellence in the fields of science, engineering, technology, and management."
  },
  {
    text: "To improve development outcomes as a consequence of this research and to develop new professions and new processes to sustain and absorb the outcomes of research."
  },
  {
    text: "To foster a new dialogue within the larger community on science, society, and the environment, and to develop a sense of dignity and collective destiny."
  }
];

/* ---------------- Page ---------------- */
export default function UnnatBharatAbhiyanPage() {
  return (
    <div className="bg-white">
      {/* ---------- Our Commitment (ImageContent style like CIF) ---------- */}
      <ImageContent
        title="Unnat Bharat Abhiyan"
        subtitle=""
        description="Unnat Bharat Abhiyan (UBA) was launched by the Ministry of Education in 2014, which aims to address pressing challenges of rural India and connect them with higher education institutions for their holistic growth and development. Inspired by Gandhiji's vision in Hind Swaraj, UBA supports the growth of self-sustained villages using eco-friendly and community-based technologies."
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/unnat-bharat-abhiyan/news-6047.webp"
        imageAlt="Rural Transformation"
        additionalContent={[]}
        readmore={false}
      />
      {/* ---------- Main Intro (same as CIF style) ---------- */}
      <MainIntro
        title="Our Commitment Towards Rural Transformation"
        subtitle="About the Programme"
        description={[
          "Kalinga University proudly participates in the Unnat Bharat Abhiyan as a voluntary organisation by contributing towards rural progress. It has received approval on 07-10-2022. The university has taken significant measures to promote sustainable solutions and improve its infrastructure and lifestyle. Through fieldwork and surveys, it encourages rural empowerment by bridging academic knowledge with real community needs.",
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/students-3.jpg"
        imageAlt="Unnat Bharat Abhiyan"
        showKnowMore={true}
        initialVisibleParagraphs={1}
      />

      {/* ---------- Vision & Mission (CIF style, no center image) ---------- */}
      <VisionMission data={visionMissionData} showImg={false} />

      {/* ---------- Objectives ---------- */}
      <ImageListItem
        items={objectives}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-students-2.jpg"
        title="Goals of Unnat Bharat Abhiyan"
        description="Kalinga University works closely with rural communities to bring sustainable, inclusive, and knowledge-driven development."
        className="!bg-[var(--light-gray)]"
        textClassName="text-[var(--foreground)]"
        headingClassName="text-[var(--foreground)]"
      />

    </div>
  );
}
