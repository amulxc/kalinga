"use client";

import Image from "next/image";
import SectionHeading from "@/app/components/general/SectionHeading";
import ImageContent from "@/app/components/ccrc/imagecontent";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import VerticalTabs from "@/app/components/general/VerticalTabs";
import DataTable from "@/app/components/general/data-table";
import Gallery from "@/app/components/general/gallery";
import MediaCardSlider from "@/app/components/general/media-card-slider";
import { diceGlimpses } from "./dice-glimpses";

const BASE = "/images/iic/dice";

// Developing Innovation Culture and Entrepreneurship (DICE) Programme - Activity Report
// Source: Kalinga_IIC_DICE_Activity_Summary.docx (IIC, Nov 2026)

const activities = [
  {
    id: "activity-1",
    label: "Activity 1 – Developing Entrepreneurial Skills: Learn & Lead",
    date: "21–22 September 2026",
    venue: "PM SHRI Kendriya Vidyalaya, Naya Raipur, Chhattisgarh",
    participants: "49 students and 8 faculty members",
    resourcePerson: "Dr. Vijayalaxmi Biradar, Director, IQAC, Kalinga University",
    summary:
      "The two-day programme introduced students to entrepreneurial skills such as creativity, leadership, teamwork, communication, problem-solving and critical thinking. Students identified their individual strengths, formed teams, observed different areas of the school, identified real-life problems and discussed affected stakeholders and possible causes. Teams then presented practical, affordable and sustainable solutions. The activity established a foundation for subsequent DICE sessions on prototyping, business modelling and start-up awareness.",
  },
  {
    id: "activity-2",
    label: "Activity 2 – Field Visit and Idea Creation",
    date: "28 September 2026",
    venue: "Kalinga University, Naya Raipur, Chhattisgarh",
    participants: "57 students and 14 faculty members",
    resourcePerson:
      "Dr. Vijayalaxmi, Director, IQAC, Kalinga University; programme also included university leadership and faculty interactions",
    summary:
      "Students participated in an interactive session on innovation and entrepreneurial thinking and visited Centres of Excellence at Kalinga University. Their exposure included Artificial Intelligence, Robotics, Drone Technology, Electric Vehicle technology, laboratory facilities and cement manufacturing processes. The field visit connected classroom learning with emerging technologies, research and industrial applications, and encouraged students to identify real-world challenges and explore innovative ideas.",
  },
  {
    id: "activity-3",
    label: "Activity 3 – Development of Proof of Concept/Prototype Business Model by Students",
    date: "27 October 2026",
    venue: "PM SHRI Kendriya Vidyalaya, Naya Raipur, Chhattisgarh",
    participants: "50 students and 4 faculty members",
    resourcePerson: "Dr. Vijayalaxmi, Director, IQAC, Kalinga University",
    summary:
      "Students worked in groups to observe their school environment, identify practical problems and understand the challenges faced by stakeholders. They brainstormed original ideas and developed proposed practical, affordable and sustainable solutions. The activity introduced the early stages of the innovation process, including problem identification, idea generation, teamwork, communication and solution-oriented thinking, and prepared students for further prototype development and business-model activities.",
  },
  {
    id: "activity-4",
    label: "Activity 4 – Session on Start-up Ecosystem and Intellectual Property Rights (IPR)",
    date: "30 October 2026",
    venue: "PM SHRI Kendriya Vidyalaya, Naya Raipur, Chhattisgarh",
    participants: "43 students and 4 faculty members",
    resourcePerson: "Mr. Soumyadeep Chakrabarti, Assistant Professor of Law, Kalinga University",
    summary:
      "The session introduced students to India's start-up ecosystem, the Startup India initiative and the role of entrepreneurship in innovation. A key focus was Intellectual Property Rights, including patents, trademarks, copyrights, industrial designs, geographical indications and trade secrets. Students learned about protection procedures, company incorporation, trademark and patent filing, confidentiality agreements, documentation and the importance of safeguarding original ideas.",
  },
];

const outcomes = [
  { text: "Strengthened entrepreneurial awareness, creativity, leadership, teamwork and communication among participating students." },
  { text: "Enabled students to identify real-life problems and think of practical, affordable and sustainable solutions." },
  { text: "Provided exposure to emerging technologies and university Centres of Excellence, including AI, robotics, drones and EV technology." },
  { text: "Introduced the foundations of prototyping, business modelling, start-up awareness and intellectual property protection." },
  { text: "Supported the DICE programme's alignment with Sustainable Development Goals (SDGs) 4, 8, 9 and 17, as stated in the activity reports." },
];

const highlights = [
  {
    id: 1,
    name: "Activity 1 – Developing Entrepreneurial Skills: Learn & Lead",
    videoUrl: "https://drive.google.com/file/d/1EI2VHiK0BfAVm0f6_djFXNrKkQSFngCS/view",
    thumbnail: `${BASE}/highlight-activity-1.webp`,
  },
  {
    id: 2,
    name: "Activity 2 – Field Visit and Idea Creation",
    videoUrl: "https://drive.google.com/file/d/1I4ECiT15iFUMa_wK7_vdZ_jibQiz2-AN/view",
    thumbnail: `${BASE}/highlight-activity-2.webp`,
  },
  {
    id: 3,
    name: "Activity 3 & 4 – Proof of Concept/Prototype Business Model and Start-up Ecosystem & IPR",
    videoUrl: "https://drive.google.com/file/d/12OZAGs5BSxx9vVrRJQLbA1lLjrWDDhSK/view",
    thumbnail: `${BASE}/highlight-activity-3-4.webp`,
  },
];

const detailColumns = [
  { key: "label", label: "Particulars", width: "w-48" },
  { key: "value", label: "Details", width: "flex-1" },
];

const activityTabs = activities.map((a) => ({
  id: a.id,
  label: a.label,
  content: (
    <div className="flex flex-col gap-6">
      <h3 className="font-stix text-2xl md:text-3xl text-[var(--foreground)]">{a.label}</h3>
      <DataTable
        columns={detailColumns}
        data={[
          { label: "Date", value: a.date },
          { label: "Venue", value: a.venue },
          { label: "Participants", value: a.participants },
          { label: "Resource Person", value: a.resourcePerson },
        ]}
        overflowX={true}
      />
      <p className="text-[var(--light-text-gray)] leading-relaxed">{a.summary}</p>
    </div>
  ),
}));

export default function DiceProgramme() {
  return (
    <div id="dice-programme">
      {/* Heading + event creative */}
      <section className="pt-16 pb-4 bg-white">
        <div className="container mx-auto px-2 text-center">
          <SectionHeading
            title="Developing Innovation Culture and Entrepreneurship (DICE) Programme"
            subtitle="Activity Report"
            titleClassName="text-center"
          />
          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={`${BASE}/dice-programme-creative.webp`}
              alt="DICE Programme – From Ideas to Innovation: Kalinga University and PM SHRI Kendriya Vidyalaya, Naya Raipur"
              width={1600}
              height={1067}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Institutional details + programme overview */}
      <ImageContent
        imageSrc={`${BASE}/dice-overview.webp`}
        imageAlt="Students of PM SHRI Kendriya Vidyalaya, Naya Raipur with Kalinga University faculty"
        imageWidth={1200}
        imageHeight={800}
        title="Programme Overview"
        subtitle=""
        description="Kalinga University, as the Mentor Higher Education Institution, conducted four activities under the Developing Innovation Culture and Entrepreneurship (DICE) initiative in collaboration with PM SHRI Kendriya Vidyalaya, Naya Raipur. The programme aimed to build an innovation-oriented and entrepreneurial mindset among school students through interactive sessions, field exposure, problem identification, idea generation, proof of concept, prototype/business-model orientation, and awareness of start-up support and intellectual property rights."
        additionalContent={[
          "Mentor Higher Education Institution: Kalinga University, Village Kotni, Near Mantralaya, Atal Nagar–Nava Raipur, Chhattisgarh – 492101.",
          "Collaborating School: PM SHRI Kendriya Vidyalaya, Naya Raipur, Chhattisgarh.",
        ]}
        readmore={false}
      />

      {/* Activity-wise summary */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-2">
          <SectionHeading title="Activity-wise Summary" titleClassName="text-center mb-6" />
          <VerticalTabs tabs={activityTabs} />
        </div>
      </section>

      {/* Overall outcomes */}
      <ImageListItem
        items={outcomes}
        imageSrc={`${BASE}/dice-outcomes.webp`}
        imageAlt="Students during the DICE Programme session"
        title="Overall Outcomes"
        subtitle=""
        description={false}
      />

      <Gallery title="Glimpses" images={diceGlimpses} enableLightbox />

      <MediaCardSlider
        title="Highlights"
        videoItems={highlights}
        swiperClassName="dice-highlights-slider"
        imageObjectPosition="object-center"
      />
    </div>
  );
}
