"use client";

import React from "react";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import FAQ from "@/app/components/general/faq";
import ImageListItem from "../components/ccrc/imagelistitem";
import GlobalArrowButton from "../components/general/global-arrow_button";
import SectionHeading from "../components/general/SectionHeading";
import AccreditationRanking from "../components/home/AccreditationRanking";
import ContactSection from '../components/cif/contact_section'
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
import VisaFroFrroGuidelines from "../components/international/visa_frofrro_guidelines";
import DataTable from "../components/general/data-table";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";
import AchievementsGallery from '../components/ieee/achievements-gallery'

/* ---------------- DYNAMIC IMPORT ---------------- */








const CARD_TEXT_CLASSNAME = "mt-[10px] text-white";
const SECTION_TITLE_CLASSNAME = "text-white";


const admissionOrganogramContent = {
  cardBackgroundColor: "bg-[var(--button-red)]",
  title: "IEEE Student Branch Magazine",
  description: "MINDROID is a reflection of IEEE KU Student Branch’s journey into technology, innovation, and research. It highlights student articles, futuristic tech topics, and hands-on learning experiences.",
  buttonLabel: "Explore MINDROID",
  onClick: null,
  href: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE-KU-SB-Magazine_Apr-Sept-2022.pdf",
  buttonClassName: "!bg-white !text-black",
  arrowClassName: "!bg-[var(--dark-orange-red)]",
  arrowIconClassName: "!text-white",
  textClassName: "!text-black",

  useContainer: false,
  buttons: null,
};





const Gallery = dynamic(
  () => import("@/app/components/general/gallery"),
  { ssr: false }
);

/* ---------------- GALLERY IMAGES ---------------- */

const galleryImages = [
  { id: 1, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(1).webp", alt: "IEEE(1)" },
  { id: 2, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(2).webp", alt: "IEEE(2)" },
  { id: 3, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(3).webp", alt: "IEEE(3)" },
  { id: 4, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(4).webp", alt: "IEEE(4)" },
  { id: 5, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(5).webp", alt: "IEEE(5)" },
  { id: 6, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(6).webp", alt: "IEEE(6)" },
  { id: 7, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(7).webp", alt: "IEEE(7)" },
  { id: 8, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(8).webp", alt: "IEEE(8)" },
  { id: 9, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(9).webp", alt: "IEEE(9)" },
  { id: 10, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(10).webp", alt: "IEEE(10)" },
  { id: 11, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(11).webp", alt: "IEEE(11)" },
  { id: 12, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(12).webp", alt: "IEEE(12)" },
  { id: 13, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(13).webp", alt: "IEEE(13)" },
  { id: 14, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(14).webp", alt: "IEEE(14)" },
  { id: 15, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(15).webp", alt: "IEEE(15)" },
  { id: 16, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(16).webp", alt: "IEEE(16)" },
  // { id: 17, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(17).webp", alt: "IEEE(17)" },
  { id: 18, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(18).webp", alt: "IEEE(18)" },
  { id: 19, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(19).webp", alt: "IEEE(19)" },
  // { id: 20, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(20).webp", alt: "IEEE(20)" },
  { id: 21, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(21).webp", alt: "IEEE(21)" },
  { id: 22, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(22).webp", alt: "IEEE(22)" },
  { id: 23, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(23).webp", alt: "IEEE(23)" },
  { id: 24, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(24).webp", alt: "IEEE(24)" },
  { id: 25, image: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE(25).webp", alt: "IEEE(25)" },
];

/* ---------------- BREADCRUMB DATA ---------------- */

const objectives = [

  {
    text: "About IEEE: IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities."
  },
  {
    text: "History: IEEE was formed in 1963 with the merger of the American Institute of Electrical Engineers (AIEE), founded in 1884, and the Institute of Radio Engineers (IRE), founded in 1912. Since then, it has grown into a vast global network with members from around the world."
  },
  {
    text: "Membership: IEEE membership is open to individuals who have demonstrated professional competency in IEEE-designated fields. Members gain access to a wide range of resources, including publications, conferences, networking opportunities, and professional development programs."
  },
  {
    text: "Publications: IEEE publishes a significant portion of the world's literature in the electrical and electronics engineering and computer science fields. Its publications include journals, conference proceedings, standards, and magazines covering various topics, from fundamental research to practical applications."
  },
  {
    text: "Conferences: IEEE sponsors numerous conferences and events worldwide, providing platforms for researchers, practitioners, and industry professionals to exchange ideas, present their work, and collaborate on cutting-edge technologies and innovations."
  },
  {
    text: "Standards: IEEE is renowned for its standards development activities. It establishes technical standards that often become benchmarks for industries and governments worldwide. These standards ensure interoperability, reliability, and quality in various technologies, including telecommunications, networking, and computing."
  },
  {
    text: "Technical Societies: IEEE consists of numerous technical societies and councils, each focusing on specific areas of interest within the broader field of technology. These societies organize conferences, publish journals, and provide professional networking opportunities tailored to their respective disciplines."
  },
  {
    text: "Education and Professional Development: IEEE offers a range of educational and professional development resources, including online courses, webinars, workshops, and certification programs. These resources help members stay abreast of the latest advancements in their fields and enhance their skills and expertise."
  }
];

const ieeeGlanceConcludingParagraph =
  "Overall, IEEE plays a vital role in advancing technology and fostering innovation across various domains, contributing to the development of solutions to global challenges and improving the quality of life worldwide.";

const researchSixGridButtons = [
  {
    id: 1,
    text: "Read More",
    onClick: null,
    href: "#",
  },
];

const aboutAccreditations = [
  { id: 1, name: "KU Logo", logo: "https://cdn.kalingauniversity.ac.in/IEEE/ku+sb+logo.jpeg" },
  { id: 2, name: "IEEE MP", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+MP+SECTION.jpg" },
  { id: 3, name: "IEEE CS", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE-CS_LogoTM-black.png" },
  { id: 4, name: "WIE", logo: "https://cdn.kalingauniversity.ac.in/IEEE/WIE+logo.png" },
];

const aboutsponsors = [
  { id: 1, name: "A", logo: "https://cdn.kalingauniversity.ac.in/IEEE/A.png" },
  { id: 2, name: "IEEE HTB", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+HTB.png" },
  { id: 3, name: "IEEE CS", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+CS.png" },
  { id: 5, name: "Chhattisgarh", logo: "https://cdn.kalingauniversity.ac.in/IEEE/chhattisgarh.png" },
  { id: 6, name: "IEEE GGV", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+GGV.png" },
  { id: 7, name: "IEEE B", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+B.png" },
  { id: 8, name: "IEEE NRSB", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+NRSB.png" },
  { id: 9, name: "KU", logo: "https://cdn.kalingauniversity.ac.in/IEEE/KU.png" },
  { id: 10, name: "IEEE CT", logo: "https://cdn.kalingauniversity.ac.in/IEEE/IEEE+CT.png" },
  { id: 11, name: "Global", logo: "https://cdn.kalingauniversity.ac.in/IEEE/global.png" },
];
/* ---------------- PAGE COMPONENT ---------------- */


// REQUIRED CONSTANTS
const imageSrc =
  "https://cdn.kalingauniversity.ac.in/IQAC/kalinga.webp";

const message =
  "For research collaboration, testing services, and technical support, please contact us.";


const galleryImages1 = [
  {
    id: 1,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-1.jpg",
    alt: "Achievement Gallery 1"
  },
  {
    id: 2,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-2.jpg",
    alt: "Achievement Gallery 2"
  },
  {
    id: 3,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-3.jpg",
    alt: "Achievement Gallery 3"
  },
  {
    id: 4,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-4.jpg",
    alt: "Achievement Gallery 4"
  },
  {
    id: 5,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-5.jpg",
    alt: "Achievement Gallery 5"
  },
  {
    id: 6,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-6.jpg",
    alt: "Achievement Gallery 6"
  },
  {
    id: 7,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-7.jpg",
    alt: "Achievement Gallery 7"
  },
  {
    id: 8,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-8.jpg",
    alt: "Achievement Gallery 8"
  },
  {
    id: 9,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-9.jpg",
    alt: "Achievement Gallery 9"
  },
  {
    id: 10,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-10.jpg",
    alt: "Achievement Gallery 10"
  },
  {
    id: 11,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-11.jpg",
    alt: "Achievement Gallery 11"
  },
  {
    id: 12,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/MM-School-8-12.jpg",
    alt: "Achievement Gallery 12"
  },
  {
    id: 13,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Priyanshu-Singh.jpg",
    alt: "Achievement Gallery 13"
  },
  {
    id: 14,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Priyanshu-Singh-1.jpg",
    alt: "Achievement Gallery 14"
  },
  {
    id: 15,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/SAC-2026.png",
    alt: "Achievement Gallery 15"
  },
  {
    id: 16,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Simpi-Kumari.jpg",
    alt: "Achievement Gallery 16"
  },
  // {
  //   id: 17,
  //   image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Simpi-Kumari-1.jpg",
  //   alt: "Achievement Gallery 17"
  // },
  {
    id: 18,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Vedant-Raj.jpg",
    alt: "Achievement Gallery 18"
  },
  {
    id: 19,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Vedant-Raj-1.jpg",
    alt: "Achievement Gallery 19"
  },
  {
    id: 20,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/aayushi-rao.webp",
    alt: "Achievement Gallery 20"
  },
  {
    id: 21,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Aiman-Shafi.jpg",
    alt: "Achievement Gallery 21"
  },
  {
    id: 22,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Chilikuri-Shivani.jpg",
    alt: "Achievement Gallery 22"
  },
  {
    id: 23,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Goon-Shah.jpg",
    alt: "Achievement Gallery 23"
  },
  // {
  //   id: 24,
  //   image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/IEEE-MP-Section-Students.webp",
  //   alt: "Achievement Gallery 24"
  // },
  {
    id: 25,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/images-1.png",
    alt: "Achievement Gallery 25"
  },
  {
    id: 26,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/images-2.png",
    alt: "Achievement Gallery 26"
  },
  {
    id: 27,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/images-3.png",
    alt: "Achievement Gallery 27"
  },
  {
    id: 28,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/images-4.png",
    alt: "Achievement Gallery 28"
  },
  {
    id: 29,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/images-5.png",
    alt: "Achievement Gallery 29"
  },
  {
    id: 30,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/images-6.jpeg",
    alt: "Achievement Gallery 30"
  },
  {
    id: 31,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/images-7.jpeg",
    alt: "Achievement Gallery 31"
  },
  {
    id: 32,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/images-8.jpeg",
    alt: "Achievement Gallery 32"
  },
  {
    id: 33,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Internship-Letter-1.jpg",
    alt: "Achievement Gallery 33"
  },
  {
    id: 34,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Kalinga-University-page-1.jpg",
    alt: "Achievement Gallery 34"
  },
  {
    id: 35,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Appreciation-Certificate-1.jpg",
    alt: "Achievement Gallery 35"
  },
  {
    id: 36,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Appreciation-Certificate-2.jpg",
    alt: "Achievement Gallery 36"
  },
  {
    id: 37,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Appreciation-Certificate-3.jpg",
    alt: "Achievement Gallery 37"
  },
  {
    id: 38,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Appreciation-Certificate-4.jpg",
    alt: "Achievement Gallery 38"
  },
  {
    id: 39,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Appreciation-Certificate-5.jpg",
    alt: "Achievement Gallery 39"
  },
  {
    id: 40,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Appreciation-Certificate-6.jpg",
    alt: "Achievement Gallery 40"
  },
  {
    id: 41,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Appreciation-Certificate-7.jpg",
    alt: "Achievement Gallery 41"
  },
  {
    id: 42,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-1.jpg",
    alt: "Achievement Gallery 42"
  },
  {
    id: 43,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-2.jpg",
    alt: "Achievement Gallery 43"
  },
  {
    id: 44,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-3.jpg",
    alt: "Achievement Gallery 44"
  },
  {
    id: 45,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-4.jpg",
    alt: "Achievement Gallery 45"
  },
  {
    id: 46,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-5.jpg",
    alt: "Achievement Gallery 46"
  },
  {
    id: 47,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-6.jpg",
    alt: "Achievement Gallery 47"
  },
  {
    id: 48,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-7.jpg",
    alt: "Achievement Gallery 48"
  },
  {
    id: 49,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-8.jpg",
    alt: "Achievement Gallery 49"
  },
  {
    id: 50,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-9.jpg",
    alt: "Achievement Gallery 50"
  },
  {
    id: 51,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-10.jpg",
    alt: "Achievement Gallery 51"
  },
  {
    id: 52,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-11.jpg",
    alt: "Achievement Gallery 52"
  },
  {
    id: 53,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-12.jpg",
    alt: "Achievement Gallery 53"
  },
  {
    id: 54,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-13.jpg",
    alt: "Achievement Gallery 54"
  },
  {
    id: 55,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-14.jpg",
    alt: "Achievement Gallery 55"
  },
  {
    id: 56,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-15.jpg",
    alt: "Achievement Gallery 56"
  },
  {
    id: 57,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-16.jpg",
    alt: "Achievement Gallery 57"
  },
  {
    id: 58,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-17.jpg",
    alt: "Achievement Gallery 58"
  },
  {
    id: 59,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-18.jpg",
    alt: "Achievement Gallery 59"
  },
  {
    id: 60,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-19.jpg",
    alt: "Achievement Gallery 60"
  },
  {
    id: 61,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-20.jpg",
    alt: "Achievement Gallery 61"
  },
  {
    id: 62,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-21.jpg",
    alt: "Achievement Gallery 62"
  },
  {
    id: 63,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-22.jpg",
    alt: "Achievement Gallery 63"
  },
  {
    id: 64,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-23.jpg",
    alt: "Achievement Gallery 64"
  },
  {
    id: 65,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-24.jpg",
    alt: "Achievement Gallery 65"
  },
  {
    id: 66,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-25.jpg",
    alt: "Achievement Gallery 66"
  },
  {
    id: 67,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-26.jpg",
    alt: "Achievement Gallery 67"
  },
  {
    id: 68,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-27.jpg",
    alt: "Achievement Gallery 68"
  },
  {
    id: 69,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-28.jpg",
    alt: "Achievement Gallery 69"
  },
  {
    id: 70,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-29.jpg",
    alt: "Achievement Gallery 70"
  },
  {
    id: 71,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-30.jpg",
    alt: "Achievement Gallery 71"
  },
  {
    id: 72,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Piyush-Shrivastava-1.jpg",
    alt: "Achievement Gallery 72"
  },
  {
    id: 73,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Piyush Srivastava.jpg",
    alt: "Achievement Gallery 73"
  },
  {
    id: 74,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/volunteer-Certificate-30.jpg",
    alt: "Achievement Gallery 74"
  },
  {
    id: 75,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Abhishek-Certificate-1.jpg",
    alt: "Achievement Gallery 75"
  },
  {
    id: 76,
    image: "https://cdn.kalingauniversity.ac.in/ieee/achievement/Koda-Aayshi Rao-1.jpg",
    alt: "Achievement Gallery 76"
  }

]

// Branch Awards images (shown after Achievements, click opens the popup).
// Add entries as { id, image: "<cdn url>", alt } - the section appears once filled.
const branchAwardsImages = [
  { id: 1, image: "/ieee/branch-awards/outstanding-student-branch-award-2025.jpg", alt: "IEEE India Council Outstanding Student Branch Award 2025" },
  { id: 2, image: "/ieee/branch-awards/regional-exemplary-student-branch-award-2025.jpg", alt: "IEEE Regional Exemplary Student Branch Award 2025" },
];

const defaultButtons = [
  {
    id: 9,
    text: "Edition 9 - Volume 5, Issue - 1 January 2026 - June 2026",
    onClick: null,
    href: "/ieee/mindroid-vol-5-issue-1.pdf",
  },
  {
    id: 1,
    text: "Edition 8 - Volume 4, Issue -2 July 2025 - December 2025",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/Vol4+issue+2.pdf",
  },
  {
    id: 2,
    text: "Edition 7 - Volume 4, Issue -1 January 2025 - June 2025",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/Vol4+issue+1.pdf",
  },
  {
    id: 3,
    text: "Edition 6 - Volume 3, Issue - 2 July - December 2024",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol3+issue+2.pdf",
  },
  {
    id: 4,
    text: "Edition 5 - Volume 3, Issue- 1 January - June 2024",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol3+issue+1.pdf",
  },
  {
    id: 5,
    text: "Edition 4 - Volume 2, Issue 2 July 2023-December 2023",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol+2+issue+2.pdf",
  },
  {
    id: 6,
    text: "Edition 3 - Volume 2, Issue 1 January - June 2023",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol+2+issue+1.pdf",
  },
  {
    id: 7,
    text: "Edition 2 - Volume 1, Issue 2 October –December 2022",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol+1+issue+2.pdf",
  },
  {
    id: 8,
    text: "Edition 1 - Volume 1, Issue 1 April-September 2022",
    onClick: null,
    href: "https://cdn.kalingauniversity.ac.in/ieee/vol1+issue+1.pdf",
  },
];

export default function Page() {
  return (
    <>
      <ImageListItem
        items={objectives}
        imageSrc="https://cdn.kalingauniversity.ac.in/IEEE/IEEE(12).webp"
        title="IEEE at a Glance"
        subtitle=""
        description={false}
        subtitle1={ieeeGlanceConcludingParagraph}
        className="mt-16"
      />


      <FAQ
        title={false}
        subtitleClassName="!hidden"
        variant="table-display"
        items={[]}
        headerBgColor="bg-[var(--button-red)]"
        headerTextColor="text-white"
        evenRowBg="bg-white"
        oddRowBg="bg-gray-50"
        borderColor="border-gray-200"
        tableSections={[

          {
            id: 1,
            title: "About IEEE Kalinga University Student Branch (IEEE KU SB)",
            description: (
              <div className="space-y-3">
                <p>IEEE Student Branch of Kalinga University was established on 4th April, 2022. IEEE Student Branch of Kalinga University is a part of the IEEE Madhya Pradesh Section. The Objective of IEEE KU SB is to enhance the learning experience of the student community and develop a research environment among Faculty members. The Student Branch focuses on conducting social and technical activities for students, and also encourages the students to take full advantage of the benefits of IEEE membership, including scholarships, competitions, and conference grants. The Student Branch also intends to provide opportunities for students to network with peers in other institutes, academicians, professionals, engineers, and scientists through the on-campus IEEE Student Branch and the Local IEEE Section, thereby encouraging students to be a part of the global IEEE community.</p>
                <p className="font-semibold">Student Branch Code: STB60204569</p>
              </div>
            ),
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "name", label: "Name of Member", width: "w-[360px]" },
              { key: "designation", label: "Designation / Position", width: "w-[280px]" },
              { key: "memberId", label: "Member ID", width: "w-48" },
            ],
            data: [
              { slNo: 1, name: "Dr. Vijayalaxmi Biradar", designation: "IEEE KU SB Counsellor", memberId: "92478983" },
              { slNo: 2, name: "Dr. Anita Verma", designation: "Member", memberId: "99682747" },
              { slNo: 3, name: "Mr. Abhishek Kumar Gupta", designation: "Member", memberId: "100827345" },
              { slNo: 4, name: "Dr. Amita Gautam", designation: "Member", memberId: "102745563" },
              { slNo: 5, name: "Mr. Piyush Srivastava", designation: "Chairperson", memberId: "100057465" },
              { slNo: 6, name: "Ms. Simpi Kumari", designation: "Vice Chairperson", memberId: "100511898" },
              { slNo: 7, name: "Ms. Chilikuri Shivani", designation: "Secretary", memberId: "100666290" },
              { slNo: 8, name: "Mr. Ashutosh Kumar", designation: "Treasurer", memberId: "100050482" },
              { slNo: 9, name: "Mr. Vishesh Satapathy", designation: "Web Master", memberId: "101181975" },
            ],
          }
          , {
            id: 2,
            title: "About Kalinga University IEEE Women-in-Engineering Affinity Group (WIE AG)",
            description: (
              <div className="space-y-3">
                <p>The IEEE Women in Engineering (WIE) Affinity Group at Kalinga University was established on 18th May 2022 under the IEEE Student Branch. It aims to inspire, engage, and empower women in engineering and technology. The group actively promotes gender diversity, leadership, and innovation through workshops, mentorship, networking events, and outreach programs. It provides a platform for female students to collaborate, grow professionally, and connect with the global WIE community. Dedicated to IEEE’s mission of “Advancing Technology for Humanity,” the WIE Affinity Group fosters a supportive environment where women in STEM can thrive and make meaningful contributions.</p>
                <p className="font-semibold">Student Branch Affinity Group Code: SBA60204569</p>
              </div>
            ),
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "name", label: "Name", width: "w-[320px]" },
              { key: "designation", label: "Designation", width: "w-[280px]" },
              { key: "membershipId", label: "IEEE Membership Number", width: "w-48" },
            ],
            data: [
              {
                slNo: 1,
                name: "Dr. Vijayalaxmi Biradar",
                designation: "IEEE WIE AG Advisor",
                membershipId: "92478983",
              },
              {
                slNo: 2,
                name: "Ms. Simpi Kumari",
                designation: "Chairperson",
                membershipId: "100511898",
              },
              {
                slNo: 3,
                name: "Mr. Vishal Raj",
                designation: "Vice Chairperson",
                membershipId: "101182019",
              },
            ],
          }
          ,
          {
            id: 3,
            title: "About Kalinga University IEEE Aerospace Electronics Systems Society (AESS)",
            description: (
              <div className="space-y-3">
                <p>The mission of the AESS is to provide a responsive and relevant professional society that attracts, engages, aids, and retains a diverse set of members (age, culture, community – theoretical, managerial, and applications) worldwide in the areas of our fields of interest as defined in our constitution. AESS will accomplish this through technical, chapter and society activities in the areas of conferences, publications, education, technical operations, industry relations, and member services.</p>
                <p className="font-semibold">Student Branch Chapter Code: SBC60204569</p>
              </div>
            ),
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "name", label: "Name", width: "w-[320px]" },
              { key: "designation", label: "Designation", width: "w-[280px]" },
              { key: "membershipId", label: "IEEE Membership Number", width: "w-48" },
            ],
            data: [
              {
                slNo: 1,
                name: "Dr. Vijayalaxmi Biradar",
                designation: "IEEE AESS Chapter Advisor",
                membershipId: "92478983",
              },
              {
                slNo: 2,
                name: "Ms. Goon Shah",
                designation: "Chairperson",
                membershipId: "101177641",
              },
              {
                slNo: 3,
                name: "Mr. Ashutosh Kumar",
                designation: "Vice Chairperson",
                membershipId: "100050482",
              },
            ],
          }
          , {
            id: 4,
            title: "About IEEE Kalinga University Computer Society Chapter (CS)",
            description: (
              <div className="space-y-3">
                <p>Established on 13th June under the IEEE Student Branch, the IEEE Computer Society Chapter at Kalinga University promotes excellence in computing, software, and emerging technologies. It engages students through workshops, coding events, and technical activities, fostering innovation, collaboration, and professional growth. Dedicated to IEEE’s mission of “Advancing Technology for Humanity”, the society empowers members to contribute to impactful solutions in the field of computer science.</p>
                <p className="font-semibold">Student Branch Chapter Code: SBC60204569A</p>
              </div>
            ),
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "name", label: "Name", width: "w-[320px]" },
              { key: "designation", label: "Designation", width: "w-[280px]" },
              { key: "membershipId", label: "IEEE Membership Number", width: "w-48" },
            ],
            data: [
              {
                slNo: 1,
                name: "Dr. Vijayalaxmi Biradar",
                designation: "IEEE CS Chapter Advisor",
                membershipId: "92478983",
              },
              {
                slNo: 2,
                name: "Md. Aiman Shafi",
                designation: "Chairperson",
                membershipId: "100477950",
              },
              {
                slNo: 3,
                name: "Mr. Prajjval Vyas",
                designation: "Vice Chairperson",
                membershipId: "100638125",
              },
            ],
          }
          ,
          {
            id: 5,
            title: "IEEE KU SB Members",
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "name", label: "Name", width: "w-80" },
              { key: "designation", label: "Designation", width: "w-48" },
              { key: "membershipId", label: "Membership ID", width: "w-48" },
            ],
            data: [
              { slNo: 1, name: "Dr. Vijayalaxmi", designation: "Faculty", membershipId: "92478983" },
              { slNo: 2, name: "Dr. Sanyogita Shahi", designation: "Faculty", membershipId: "97528578" },
              { slNo: 3, name: "Dr. Rahul Mishra", designation: "Faculty", membershipId: "98299084" },
              { slNo: 4, name: "Mr. Sandeep Roy", designation: "Faculty", membershipId: "98463066" },
              { slNo: 5, name: "Dr. Anu G. Pillai", designation: "Faculty", membershipId: "98754085" },
              { slNo: 6, name: "Dr. Anita Verma", designation: "Faculty", membershipId: "99682747" },
              { slNo: 7, name: "Dr. Praveen Kumar Yadaw", designation: "Faculty", membershipId: "99982254" },
              { slNo: 8, name: "Abhishek Kumar Gupta", designation: "Faculty", membershipId: "100827345" },
              { slNo: 9, name: "Dr. Md. Arsh Khan", designation: "Faculty", membershipId: "101147721" },
              { slNo: 10, name: "Khushaboo Karia Thakkar", designation: "Faculty", membershipId: "102109031" },
              { slNo: 11, name: "Dr. Velpuri Leeladevi", designation: "Faculty", membershipId: "102700886" },
              { slNo: 12, name: "Dr. Monika Sethi Sharma", designation: "Faculty", membershipId: "102731405" },
              { slNo: 13, name: "Dr. Amita Gautam", designation: "Faculty", membershipId: "102745563" },
              { slNo: 14, name: "Ashutosh Kumar", designation: "Student", membershipId: "100050482" },
              { slNo: 15, name: "Vedant Raj", designation: "Student", membershipId: "100057335" },
              { slNo: 16, name: "Piyush Srivastava", designation: "Student", membershipId: "100057465" },
              { slNo: 17, name: "Priyanshu Singh", designation: "Student", membershipId: "100071324" },
              { slNo: 18, name: "Simpi Kumari", designation: "Student", membershipId: "100511898" },
              { slNo: 19, name: "Prajjval Vyas", designation: "Student", membershipId: "100638125" },
              { slNo: 20, name: "Md. Aiman Shafi", designation: "Student", membershipId: "100664029" },
              { slNo: 21, name: "Luckey Kumar", designation: "Student", membershipId: "100665820" },
              { slNo: 22, name: "Chilikuri Shivani", designation: "Student", membershipId: "100666290" },
              { slNo: 23, name: "Aditya Shekhar", designation: "Student", membershipId: "100669618" },
              { slNo: 24, name: "Md. Tawis Ansari", designation: "Student", membershipId: "100887194" },
              { slNo: 25, name: "Goon Shah", designation: "Student", membershipId: "101177641" },
              { slNo: 26, name: "Vishesh Satapathy", designation: "Student", membershipId: "101181975" },
              { slNo: 27, name: "Vishal Raj", designation: "Student", membershipId: "101182019" },
              { slNo: 28, name: "Tejaswi Ledekar", designation: "Student", membershipId: "101616571" },
              { slNo: 29, name: "Harish Kumar Dwivedi", designation: "Student", membershipId: "101719903" },
              { slNo: 30, name: "Ankit Mishra", designation: "Student", membershipId: "101766952" },
              { slNo: 31, name: "Akshay Pandey", designation: "Student", membershipId: "102239655" },
              { slNo: 32, name: "Sumeet Kumar", designation: "Student", membershipId: "102245145" },
              { slNo: 33, name: "Om Hari Rai", designation: "Student", membershipId: "102262766" },
              { slNo: 34, name: "Hricha Kumari", designation: "Student", membershipId: "102262798" },
              { slNo: 35, name: "Shalu Kumari", designation: "Student", membershipId: "102263312" },
              { slNo: 36, name: "Vikki Saw", designation: "Student", membershipId: "102269445" },
              { slNo: 37, name: "Sanjana Kumari", designation: "Student", membershipId: "102269510" },
              { slNo: 38, name: "Khushi Sharma", designation: "Student", membershipId: "102282968" },
              { slNo: 39, name: "Sahil Yadav", designation: "Student", membershipId: "102560606" },
            ],
          },
          {
            id: 6,
            title: "Funds Received For IEEE Activities",
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "activity", label: "Name of the Activity", width: "w-[420px]" },
              { key: "coordinator", label: "Project / Event Coordinator", width: "w-[360px]" },
              { key: "organization", label: "Funding Organization", width: "w-[360px]" },
              { key: "amount", label: "Amount", width: "w-48" },
            ],
            data: [
              { slNo: 1, activity: "Teacher’s Congress- Towards Capacity Building", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Region 10 Educational Activities Committee", amount: "USD 250" },
              { slNo: 2, activity: "Social Ideas Enterprise Challenge", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Region 10 Educational Activities Committee", amount: "USD 200" },
              { slNo: 3, activity: "Developing a video in Hindi Language of IEEE Resume Lab usage and access to build a professional resume", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Region 10 Educational Activities Committee", amount: "USD 200" },
              { slNo: 4, activity: "Workshop On “Teaching Science Holistically: Rural School Teachers”", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Region 10 Educational Activities Committee", amount: "USD 150" },
              { slNo: 5, activity: "IEEE Congress", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Pankaj Tiwari, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "IEEE SPAx", amount: "USD 380" },
              { slNo: 6, activity: "IEEE Congress", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Pankaj Tiwari, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "IEEE SPAA", amount: "Rs. 30,720" },
              { slNo: 7, activity: "Smart Garbage monitoring system", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE SPS/HAC", amount: "Rs. 82,180" },
              { slNo: 8, activity: "WIE ILS 2023", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE R10 WIE ILS 2023", amount: "Rs. 1,24,500" },
              { slNo: 9, activity: "WIE ILS 2023", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE MP Section", amount: "Rs. 5,00,000" },
              { slNo: 10, activity: "WIE ILS 2023", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Sponsorship- https://attend.ieee.org/wieils-raipur-2023/sponsorship/", amount: "Rs. 13,04,185" },
              { slNo: 11, activity: "2- days Workshop on Aeromodelling for Girl Students", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE", amount: "Rs. 16,600" },
              { slNo: 12, activity: "IEEE- Innovation Summit", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "IEEE SPAx", amount: "Rs. 28,700" },
              { slNo: 13, activity: "MGA Student Operating Funds", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "IEEE", amount: "Rs. 18,336" },
              { slNo: 14, activity: "AESS Student Chapter Rebate", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "IEEE AESS", amount: "Rs. 20,500" },
              { slNo: 15, activity: "IEEE WiE Champion 2023", coordinator: "Dr. Vijayalaxmi Biradar", organization: "R10 IEEE WiE", amount: "Rs. 16,574" },
              { slNo: 16, activity: "IEEE WCONF Conference", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Sarat Chandra Mohanty, Mr. Anup Kumar Jana", organization: "IEEE", amount: "Rs. 83,450" },
              { slNo: 17, activity: "IEEE Robotics Competition 2024", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty, Mrs.Anu G Pillai, Dr.Anita Verma, Ms.Rupal Gupta", organization: "$450 (IEEE R10)           $100 (IEEE Madhya Pradesh Section)", amount: "Rs. 77,200" },
              { slNo: 18, activity: "IEEE Robotics Competition 2024", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty, Mrs.Anu G Pillai, Dr.Anita Verma, Ms.Rupal Gupta", organization: "IEEE GNDEC SB, Bidar Sharnabasva University, Kalaburgi S B Jain College IEEE SB, Nagpur", amount: "Rs. 17,000" },
              { slNo: 19, activity: "IEEE Climate Crisis event", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty, Mrs.Anu G Pillai, Dr.Anita Verma, Ms.Rupal Gupta", organization: "IEEE SPAx", amount: "Rs. 16,679" },
              { slNo: 20, activity: "One week Hands on training on Robotics", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", organization: "", amount: "Rs. 14,600/-" },
              { slNo: 21, activity: "Best out of Waste (Chhattisgarh Regional Science Centre)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Chhattisgarh Regional Science Centre", amount: "Rs. 47,500/-" },
              { slNo: 22, activity: "Robotics Workshop (Chhattisgarh Regional Science Centre)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Chhattisgarh Regional Science Centre", amount: "Rs. 50,000/-" },
              { slNo: 23, activity: "IEEE STEM Grant", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty, Mrs.Anu G Pillai, Dr.Anita Verma, Ms.Rupal Gupta", organization: "IEEE STEM", amount: "Rs. 78,389" },
              { slNo: 24, activity: "Mentoring of HEI's towards Accreditation (NAAC/NBA)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE MP Section", amount: "Rs.25,000" },
              { slNo: 25, activity: "IEEE SIGHT Seed Funding", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Seed Grant", amount: "Rs. 20,750" },
              { slNo: 26, activity: "IEEE 2nd WCONF 2024", coordinator: "Dr. Vijayalaxmi Biradar, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty, Mrs. Anu G Pillai, Dr. Anita Verma", organization: "SERB, IEEE, IEEE Xplore", amount: "Rs. 2,96,484" },
              { slNo: 27, activity: "IEEE Robotics Workshop 2024", coordinator: "Dr. Vijayalaxmi Biradar, Mrs. Anu G Pillai, Dr. Anita Verma", organization: "IEEE MP Section", amount: "Rs. 30,450" },
              { slNo: 28, activity: "IEEE Branch Counsellors Meet 2024", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE MP Section", amount: "Rs. 9642" },
              { slNo: 29, activity: "IEEE MP Section Students & Leadership Congress - 2024", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE MP Section", amount: "Rs. 4,000" },
              { slNo: 30, activity: "ESG & Sustainability Symposium", coordinator: "Dr. Vijayalaxmi Biradar", organization: "New Delhi Institute of Management, Registration, IEEE CS, IEEE HTB, SPAx, AG Enterprises, CG Tourism Board", amount: "Rs. 16,52,400" },
              { slNo: 31, activity: "Seminar on “Writing an Effective IEEE Proposal for Funding”", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 7,500" },
              { slNo: 32, activity: "One-Day Hands-On Training on Python, Coding and Robotics", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 49,250" },
              { slNo: 33, activity: "Launch of Magazine WeSmriti 2.0", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE MP Section", amount: "Rs. 6,000" },
              { slNo: 34, activity: "Two-Day Hands-On Training on Python, Coding and Robotics (SJMIT Chitradurga)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 70,000" },
              { slNo: 35, activity: "15-Day Summer Camp on Python, Coding and Robotics (MM School, Raipur)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 32,600" },
              { slNo: 36, activity: "10-Day Summer Camp on Python, Coding and Robotics (Adarsh Vidyalaya Tatibandh, Adarsh Vidyalaya Mowa, VSS Umariya)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 31,000" },
              { slNo: 37, activity: "IEEE 3rd World Conference on Communication and Computing 2025", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Anusandhan National Research Foundation, Registration Fees", amount: "Rs. 3,53,800" },
              { slNo: 38, activity: "IEEE Workshop on Quality Conference", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Region 10, IEEE MP Section, Registration Fees", amount: "Rs.  1,95,330" },
              { slNo: 39, activity: "Block Coding Bootcamp: Hands-On Training Workshop for Young Coders", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE TryEngineering STEM Grant", amount: "USD 960" },
              { slNo: 40, activity: "A Two-Day Cyber Security Extravaganza for School Students", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE Education Activities Committee", amount: "USD 545" },
              { slNo: 41, activity: "LifeSync (IEEE R10 WIE ATHEnA #1 Project 2025)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE R10 WIE", amount: "USD 500" },
              { slNo: 42, activity: "Establishment of STEM Lab at Future Public School, Raipur", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Future Public School", amount: "Rs. 46,500" },
              { slNo: 43, activity: "R10 ACEI Event Funding", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE R10 ACEI", amount: "USD 200" },
              { slNo: 44, activity: "Bootcamp on Innovation & Entrepreneurship", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE SPAx", amount: "USD 180" },
              { slNo: 45, activity: "STEM Grant – Thinking Like a Computer Scientist", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE TryEngineering STEM Grant (IEEE CS Juniors)", amount: "USD 820" },
              { slNo: 46, activity: "9-Day Summer Camp on AI & Robotics (MM School, Raipur)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 16,800" },
              { slNo: 47, activity: "10-Day Summer Camp on AI & Robotics (Adarsh Vidyalaya Mowa)", coordinator: "Dr. Vijayalaxmi Biradar", organization: "Registration Fees", amount: "Rs. 2,000" },
              { slNo: 48, activity: "Physics & Chemistry Fun Factory (Chhattisgarh Regional Science Centre)", coordinator: "Dr. Vijayalaxmi Biradar, Dr. Sanyogita Shahi, Dr. Anita Verma", organization: "Chhattisgarh Regional Science Centre", amount: "Rs. 50,000" },
              { slNo: 49, activity: "Robotics Workshop (Chhattisgarh Regional Science Centre)", coordinator: "Dr. Vijayalaxmi Biradar, Dr. Sanyogita Shahi, Dr. Anita Verma", organization: "Chhattisgarh Regional Science Centre", amount: "Rs. 50,000" },
              { slNo: 50, activity: "Robotics Bootcamp for Government Girl Students", coordinator: "Dr. Vijayalaxmi Biradar", organization: "IEEE AESS", amount: "USD 2350" },
            ],
          },
          {
            id: 7,
            title: "List of Activities and Events",
            description: "The following is the list of activities and events conducted by IEEE Kalinga University Student Branch:",
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "event", label: "Name of the Event", width: "w-[520px]" },
              { key: "date", label: "Date of the Event", width: "w-64" },
            ],
            data: [
              { slNo: 1, event: "Capacity Building Program on Discrete Kits, Sensors, Coding, Robotics and STEM Robots Learning Platforms", date: "19th September, 2026 (Ongoing)" },
              { slNo: 2, event: "IEEE Membership Benefits Awareness Session for Students", date: "02nd September, 2026" },
              { slNo: 3, event: "2024 Robotics Bootcamp for Government Girl Students", date: "03rd August, 2026 (Ongoing)" },
              { slNo: 4, event: "IEEE Membership Awareness Session for Faculty", date: "30th July, 2026" },
              { slNo: 5, event: "IEEE Kalinga Conference on Communication and Computing 2026", date: "24th – 26th July, 2026" },
              { slNo: 6, event: "Dr. Vijayalaxmi invited to serve as Plenary Speaker at 18th CICN 2026", date: "11th – 14th June, 2026" },
              { slNo: 7, event: "Waste to Wow Science", date: "21st – 22nd May, 2026" },
              { slNo: 8, event: "Physics & Chemistry Fun Factory", date: "19th – 20th May, 2026" },
              { slNo: 9, event: "10-Day Summer Camp on Robotics, AI & STEM Education (Adarsh Vidyalaya, Mowa, Raipur)", date: "23rd April – 05th May, 2026" },
              { slNo: 10, event: "Training Program on Robotics & STEM Education (Sharnbasva Public School, Karnataka)", date: "04th – 14th April, 2026" },
              { slNo: 11, event: "Celebration of Four successful Years of IEEE Kalinga University Student Branch", date: "04th April, 2026" },
              { slNo: 12, event: "STEM Demonstration at Bangur Public School, Baloda Bazar", date: "28th March, 2026" },
              { slNo: 13, event: "9-Day STEM Summer Camp on ‘AI & Robotics’ at MM School, Nakti, Raipur", date: "09th – 20th March, 2026" },
              { slNo: 14, event: "International Women’s Day 2026 Celebration and Launch of Magazine WeSmriti 3.0", date: "08th March, 2026" },
              { slNo: 15, event: "IEEE Awareness Session (Nagarjuna College of Engineering & Technology, Bangalore) where Dr. Vijayalaxmi (Branch Counsellor IEEE KU SB and Treasurer & WIE Chair IEEE MP Section) was the resource person", date: "25th February, 2026" },
              { slNo: 16, event: "IEEE Awareness Session (SJM Institute of Technology, Chitradurga) where Dr. Vijayalaxmi (Branch Counsellor IEEE KU SB and Treasurer & WIE Chair IEEE MP Section) was the resource person", date: "24th February, 2026" },
              { slNo: 17, event: "Bootcamp on Data empowerment for local innovation and Entrepreneurship", date: "27th – 31st January, 2026" },
              { slNo: 18, event: "Success Celebration of IEEE Kalinga University Student Branch", date: "21st January, 2026" },
              { slNo: 19, event: "STEM Showcase at Adarsh International School, Naya Raipur", date: "10th January, 2026" },
              { slNo: 20, event: "Six Day Online FDP on “Advanced Functional Materials for Societal Applications” (Sponsored by AICTE Training and Learning (ATAL) Academy, New Delhi & IEEE Education Society Madhya Pradesh Chapter)", date: "05th – 10th January, 2026" },
              { slNo: 21, event: "STEM Showcase at Anand Mela 2025", date: "22nd November, 2025" },
              { slNo: 22, event: "Inauguration of IEEE Student Branch at SJM Institute of Technology, Chitradurga", date: "21st November, 2025" },
              { slNo: 23, event: "STEM Exploration at NH Goel World School", date: "05th – 07th November, 2025" },
              { slNo: 24, event: "Six-day ATAL FDP on AR/VR/MR: Differences and its Application Areas (Sponsored by AICTE Training and Learning (ATAL) Academy, New Delhi & IEEE Education Society Madhya Pradesh Chapter)", date: "06th – 11th October, 2025" },
              { slNo: 25, event: "Cyber Security Extravaganza 2025 for School Students", date: "26th – 27th September, 2025" },
              { slNo: 26, event: "Inauguration of IEEE Student Branch at IPS Academy, Indore", date: "26th September, 2025" },
              { slNo: 27, event: "IEEE-MOVE Outreach India: Promoting Climate Change Awareness and Sustainability (Govt. High School, Tandul, Naya Raipur)", date: "13th September, 2025" },
              { slNo: 28, event: "IEEE-MOVE Outreach India: Promoting Climate Change Awareness and Sustainability (Govt. High School, Palaud, Naya Raipur)", date: "08th September, 2025" },
              { slNo: 29, event: "“Gateway to Innovation – Orientation and Introduction to IEEE Student Chapter” (SJMIT Chitradurga)", date: "04th September, 2025" },
              { slNo: 30, event: "STEM Awareness Session (Blossoms School, Naya Raipur)", date: "02nd September, 2025" },
              { slNo: 31, event: "IEEE-MOVE Outreach India: Promoting Climate Change Awareness and Sustainability (Govt. Middle School, Kuhera, Naya Raipur)", date: "30th August, 2025" },
              { slNo: 32, event: "Dr. Vijayalaxmi attended the Induction Ceremony of the Board of Governors of Eta Chapter of IEEE HKN", date: "29th August, 2025" },
              { slNo: 33, event: "IEEE Workshop on Quality Conference", date: "25th – 26th July, 2025" },
              { slNo: 34, event: "IEEE 3rd World Conference on Communication and Computing 2025", date: "25th to 27th July, 2025" },
              { slNo: 35, event: "5-Day Faculty Development Program on “NextGen STEM Teaching with Python and Intelligent Machines” at Geethanjali College of Engineering and Technology, Hyderabad", date: "30th June to 04th July, 2025" },
              { slNo: 36, event: "Dr. Vijayalaxmi attended IEEE Women in Engineering International Leadership Conference 2025 at San Jose, USA", date: "15th – 16th May, 2025" },
              { slNo: 37, event: "10-Day Summer Camp 2025 on Python, Coding and Robotics (VSS, Umariya, Naya Raipur)", date: "01st to 10th May, 2025" },
              { slNo: 38, event: "10-Day Summer Camp 2025 on Python, Coding and Robotics (Adarsh Vidyalaya, Tatibandh, Raipur)", date: "01st to 10th May, 2025" },
              { slNo: 39, event: "10-Day Summer Camp 2025 on Python, Coding and Robotics (Adarsh Vidyalaya, Mowa, Raipur)", date: "01st to 10th May, 2025" },
              { slNo: 40, event: "STEM Exploration at Adarsh Vidyalaya, Tatibandh", date: "12th April, 2025" },
              { slNo: 41, event: "Transformation through the NAAC Accreditation Process at Kingston Educational Institute, Kolkata", date: "10th April, 2025" },
              { slNo: 42, event: "Faculty Development Program at SJM Institute of Technology, Chitradurga", date: "09th April, 2025" },
              { slNo: 43, event: "Two-Day Hands-On Training on Python, Coding and Robotics at SJM Institute of Technology, Chitradurga", date: "07th – 08th April, 2025" },
              { slNo: 44, event: "IEEE KU SB 3rd Anniversary Celebration", date: "04th April, 2025" },
              { slNo: 45, event: "Community Survey in Tandul", date: "29th March, 2025" },
              { slNo: 46, event: "STEM Exploration at Standard Carnival, Palaud", date: "28th March, 2025" },
              { slNo: 47, event: "Training on STEM Kit", date: "24th March, 2025" },
              { slNo: 48, event: "Community Survey in Kuhera", date: "22nd March, 2025" },
              { slNo: 49, event: "15-Day Summer Camp 2025 on Python, Coding and Robotics (MM School, Nakti, Raipur)", date: "20th March to 11th April, 2025" },
              { slNo: 50, event: "International Women’s Day 2025 Celebration and Launch of Magazine WeSmriti 2.0", date: "08th March, 2025" },
              { slNo: 51, event: "IEEE Membership Benefits Awareness 2025", date: "25th February, 2025" },
              { slNo: 52, event: "One-Day Hands-On Training on Python, Coding and Robotics", date: "25th January, 2025" },
              { slNo: 53, event: "Meeting for planning a One-Day Hands-On Training Session on Python, Coding and Robotics", date: "24th January, 2025" },
              { slNo: 54, event: "STEM Exploration at Education Excellence Conclave, Babylon Capital, Raipur", date: "11th January, 2025" },
              { slNo: 55, event: "STEM Exploration at Standard Carnival, Kalinga University", date: "07th January, 2025" },
              { slNo: 56, event: "Unlocking IEEE Funding Opportunities: Tips, Tricks & Evaluation Insights", date: "26th December, 2024" },
              { slNo: 57, event: "IEEE-MOVE Outreach India: Promoting Climate Change Awareness and Sustainability (MM School, Airport Road, Raipur)", date: "24th December, 2024" },
              { slNo: 58, event: "Seminar on Writing an Effective IEEE Proposal for Funding", date: "21st December, 2024" },
              { slNo: 59, event: "IEEE-MOVE Outreach India: Promoting Climate Change Awareness and Sustainability (Oriental Institute of Science & Technology, Bhopal)", date: "19th December, 2024" },
              { slNo: 60, event: "IEEE-MOVE Outreach India: Promoting Climate Change Awareness and Sustainability (Saraswati Shishu Mandir Higher Sec. School Jagadish Mandir, Garhafatak, Jabalpur)", date: "16th December, 2024" },
              { slNo: 61, event: "IEEE-MOVE Outreach India: Promoting Climate Change Awareness and Sustainability (Govt. Higher Sec. School, Uperwara, Naya Raipur)", date: "07th December, 2024" },
              { slNo: 62, event: "STEM Exploration: Science working model competition 3.0", date: "07th December, 2024" },
              { slNo: 63, event: "IEEE-MOVE Outreach India: Promoting Climate Change & Sustainability (Govt. Middle School, Kuhera, Naya Raipur)", date: "05th December, 2024" },
              { slNo: 64, event: "ESG & Sustainability Symposium", date: "22nd - 23rd November, 2024" },
              { slNo: 65, event: "IEEE MP Section Branch Counsellors Meet", date: "30th September, 2024" },
              { slNo: 66, event: "Hands on IOT Training: Exposing Rural Students to Opportunities in STEM", date: "05th to 09th August, 2024" },
              { slNo: 67, event: "Climate Crisis, Sustainable Solutions: Building a Resilient Future", date: "15th June, 2024" },
              { slNo: 68, event: "Best Out of Waste workshop", date: "05th to 07th June, 2024" },
              { slNo: 69, event: "IEEE MP Robotech Quest (IEEE R10 Robotics Competition 2024-Stage 1)", date: "29th April, 2024" },
              { slNo: 70, event: "Personality development session for students", date: "11th March, 2024" },
              { slNo: 71, event: "Launch of WeSmriti Magazine", date: "07th March, 2024" },
              { slNo: 72, event: "International Women’s Day Celebration", date: "07th March, 2024" },
              { slNo: 73, event: "IEEE Membership Development Program", date: "19th February, 2024" },
              { slNo: 74, event: "“Mentoring of HEI's towards Accreditation (NAAC/NBA)”", date: "22nd to 23rd December, 2023" },
              { slNo: 75, event: "“IEEE WIE AG Mentor-Mentee Event: How to make IEEE WIE AG self-sustainable”", date: "08th December, 2023" },
              { slNo: 76, event: "“IEEE WIE AG Mentor-Mentee Event: Benefits of IEEE WIE AG Membership” launched under the R10 WIE Championship Initiative", date: "04th December, 2023" },
              { slNo: 77, event: "Dr. Vijayalaxmi attended 2023 R10 Section Chapter Symposium", date: "01st to 03rd December, 2023" },
              { slNo: 78, event: "WORKSHOP ON SCIENTIFIC TOY", date: "28th to 30th November, 2023" },
              { slNo: 79, event: "Dr. Vijayalaxmi Biradar, Director of the IQAC Kalinga University, Naya Raipur, was invited as a keynote speaker at the Returning Mothers Conference 2023", date: "27th October, 2023" },
              { slNo: 80, event: "An Invited talk on “Hydrogen Fuel Cell Vehicle (HFCV): Revolution in Transportation” on the eve of IEEE Day 2023", date: "09th October, 2023" },
              { slNo: 81, event: "Participated in IEEE ICBDS 2023", date: "07th October, 2023" },
              { slNo: 82, event: "Training on Smart Garbage Monitoring System for Govt. School students", date: "03rd to 07th October, 2023" },
              { slNo: 83, event: "Dr. Vijayalaxmi delivered a talk on “Unlocking Potential Opportunities & Benefits in WIE”", date: "11th September, 2023" },
              { slNo: 84, event: "IEEE WIE ILS 2023, Raipur https://attend.ieee.org/wieils-raipur-2023/", date: "25th to 26th August, 2023" },
              { slNo: 85, event: "Expert talk on Funding Opportunities on Humanitarian Projects to Meet SDGs through IEEE” to IEEE Vizag Section", date: "04th August, 2023" },
              { slNo: 86, event: "WCONF 2023", date: "14th to 16th July, 2023" },
              { slNo: 87, event: "IEEE KU SB Annual Meet", date: "20th April, 2023" },
              { slNo: 88, event: "Dr. Vijayalaxmi was invited as Keynote speaker of 8th I2CT Conference 2023", date: "07th to 09th April, 2023" },
              { slNo: 89, event: "Branch Counsellor and ExCom members meet", date: "05th April, 2023" },
              { slNo: 90, event: "One week Robotics Workshop (Hands-on Training) and a robotics competition", date: "20th to 25th March, 2023" },
              { slNo: 91, event: "Aeromodelling Workshop for rural Girl Students", date: "16th & 17th March, 2023" },
              { slNo: 92, event: "Students’ Internship at Godawari Electric Motors Pvt. Ltd.", date: "01st to 28th February, 2023" },
              { slNo: 93, event: "IEEE WIE CON ECE 2022 (Kalinga University was one of the sponsors). Dr. Vijayalaxmi acted as Secretary and Keynote Speaker.", date: "30th & 31st December, 2022" },
              { slNo: 94, event: "Teaching Science Holistically Rural School Teacher", date: "02nd – 03rd Sep, 2022" },
              { slNo: 95, event: "Social Idea Enterprise Challenge", date: "29th Aug, 2022" },
              { slNo: 96, event: "Incubation Project Exhibition", date: "05th July, 2022" },
              { slNo: 97, event: "Workshop on IOT", date: "09th to 13th May, 2022" },
              { slNo: 98, event: "Seminar On IEEE Women In Engineering (WIE) - Towards Technology & Leadership", date: "27th April, 2022" },
              { slNo: 99, event: "IEEE Logo Making Competition", date: "25th April, 2022" },
              { slNo: 100, event: "IEEE KU SB Inauguration", date: "4th April, 2022" },
            ],
          },
          {
            id: 8,
            title: "Awards, Achievements and Recognitions",
            columns: [
              { key: "slNo", label: "S. No.", width: "w-20" },
              { key: "award", label: "Name of Award / Achievement", width: "w-[520px]" },
              { key: "awardee", label: "Awardee / Member Achieved", width: "w-[360px]" },
              { key: "year", label: "Year", width: "w-32" },
            ],
            data: [
              { slNo: 1, award: "Judge of the 2026 IEEE WIE Awards", awardee: "Dr. Vijayalaxmi Biradar", year: "2026" },
              { slNo: 2, award: "Elected as Student Chair, Industry Relations Committee, IEEE MP Section", awardee: "Priyanshu Singh", year: "2026" },
              { slNo: 3, award: "Elected as Treasurer, IEEE Madhya Pradesh SAC Students Committee", awardee: "Prajjval Vyas", year: "2026" },
              { slNo: 4, award: "Elected as Vice Chair, IEEE Madhya Pradesh SAC Students Committee", awardee: "Piyush Srivastava", year: "2026" },
              { slNo: 5, award: "Certificate of Appreciation from MM School for conduct of 9-day Summer Camp on AI & Robotics", awardee: "Ashwan Kumar Sahu, Hemant Sahu, Pushpraj Gendre, Piyush Srivastava, Simpi Kumari, Priyanshu Singh, Ashutosh Kumar, Goon Shah, Chilikuri Shivani", year: "2026" },
              { slNo: 6, award: "Elected as Treasurer & WIE Chair of IEEE Madhya Pradesh Section", awardee: "Dr. Vijayalaxmi Biradar", year: "2026" },
              { slNo: 7, award: "Regional Exemplary Student Branch 2025 by IEEE MGA", awardee: "IEEE Kalinga University Student Branch", year: "2025" },
              { slNo: 8, award: "Outstanding Student Branch 2025 by IEEE India Council", awardee: "IEEE Kalinga University Student Branch", year: "2025" },
              { slNo: 9, award: "Design Selected for IEEE R10 WIE Committee Call for “WIE Design” Infographics 2025 (Banner Displayed at R10 HTC 2025 – Chiba, Japan)", awardee: "Dr. Vijayalaxmi Biradar, Koda Aayushi Rao, Simpi Kumari", year: "2025" },
              { slNo: 10, award: "Certificate of Completion for “TryEngineering STEM Grant Reviewer Training”", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 11, award: "Certificate of Completion for “Community Engagement in Sustainable Development Projects”", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 12, award: "Certificate of Completion for “Community Engagement in Sustainable Development Projects”", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 13, award: "Appreciation Letters from BMSS School, Naya Raipur for the successful organization of 5-day “Hands-On Coding Bootcamp: Workshop for Young Coders”", awardee: "Koda Aayushi Rao, Simpi Kumari, Goon Shah, Chilikuri Shivani, Vedant Raj, Piyush Srivastava, Md. Aiman Shafi", year: "2025" },
              { slNo: 14, award: "Induction as professional member in the Eta Chapter of the Board of Governors into IEEE-HKN", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 15, award: "Appreciation Letters from GCET Hyderabad for the successful organization of 5-day FDP on “NextGen STEM Teaching with Python & Intelligent Machines”", awardee: "Koda Aayushi Rao, Simpi Kumari, Vedant Raj, Piyush Srivastava, Priyanshu Singh, Md. Aiman Shafi", year: "2025" },
              { slNo: 16, award: "Selection as Entrepreneurship Ambassador under IEEE Region 10 ACEI", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 17, award: "Program Committee Co-Chair – IEEE Women in Engineering International Leadership Conference during 15-16 May 2025, San Jose, USA", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 18, award: "IEEE R10 Professional Certification Grant 2025", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 19, award: "Certificate of Appreciation for Contribution as a Judge of the 2025 IEEE WIE Awards", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 20, award: "Certificate of Appreciation from MM School for conduct of 15-day Summer Camp on Python, Coding & Robotics", awardee: "Dr. Vijayalaxmi Biradar, Dr. Anita Verma, Ms. Apurva Sharma, Mr. Abhishek Gupta, Mr. Ashwan Kumar Sahu, Mr. Hemant Sahu, Koda Aayushi Rao, Simpi Kumari, Vedant Raj, Piyush Srivastava, Priyanshu Singh", year: "2025" },
              { slNo: 21, award: "Selected as Secretary and WIE Chair of IEEE Madhya Pradesh Section", awardee: "Dr. Vijayalaxmi Biradar", year: "2025" },
              { slNo: 22, award: "Felicitation at Returning Mothers Conference", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 23, award: "IEEE WIE Inspiring Member of the Year Award", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 24, award: "IEEE R10 WIE Outstanding Professional Volunteer Award 2024", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 25, award: "BIRAC - 2nd Residential at New Delhi", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 26, award: "BIRAC - 1st Residential at Mussoorie", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 27, award: "IEEE India Council Sustainable Development Activity (SDA) Committee Member", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 28, award: "R10 IEEE WIE Education/Outreach Sub-committee Chair", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 29, award: "Elected as Exe-Com Members of IEEE Madhya Pradesh Section", awardee: "Dr. Vijayalaxmi Biradar, Dr. Anita Verma, Dr. Anu G Pillai, Mr. Anup Kumar Jana, Mr. Sarat Chandra Mohanty", year: "2024" },
              { slNo: 30, award: "Elected as Joint Secretary & Chairperson WIE AG IEEE Madhya Pradesh Section", awardee: "Dr. Vijayalaxmi Biradar", year: "2024" },
              { slNo: 31, award: "IEEE R10 WIE Champions as a Mentor to WIE IIIT Naya Raipur SB", awardee: "Dr. Vijayalaxmi Biradar", year: "2023" },
              { slNo: 32, award: "IEEE STEM Champion", awardee: "Dr. Vijayalaxmi Biradar", year: "2023 Onwards" },
              { slNo: 33, award: "Program Chair for IEEE Women in Engineering (WIE) International Leadership Summit at Raipur, Chhattisgarh happening during 25th – 26th August 2023", awardee: "Dr. Vijayalaxmi Biradar", year: "2023" },
              { slNo: 34, award: "IEEE Pre-University Champion", awardee: "Dr. Vijayalaxmi Biradar", year: "2023" },
              { slNo: 35, award: "Elected as Chairperson IEEE WIE AG Madhya Pradesh Section", awardee: "Dr. Vijayalaxmi Biradar", year: "2023" },
            ],
          },

        ]}

        overflowX={false}
        allowMultipleOpen={false}
      />

      <section>
        <OrganogramOfKalinga
          title={admissionOrganogramContent.title}
          description={admissionOrganogramContent.description}
          buttonLabel={admissionOrganogramContent.buttonLabel}
          cardBackgroundColor={admissionOrganogramContent.cardBackgroundColor}
          showImage={admissionOrganogramContent.showImage}
          imageUrl={admissionOrganogramContent.imageUrl}
          imageAlt={admissionOrganogramContent.imageAlt}
          buttonClassName={admissionOrganogramContent.buttonClassName}
          arrowClassName={admissionOrganogramContent.arrowClassName}
          arrowIconClassName={admissionOrganogramContent.arrowIconClassName}
          textClassName={admissionOrganogramContent.textClassName}
          useContainer={true}
          href={admissionOrganogramContent.href}
        />
      </section>


      <AccreditationRanking
        heading="Organized By"
        secondHeading=""
        accreditations={aboutAccreditations}
      />
      <ResearchSixGridButtons buttons={defaultButtons} />

      {/* <SectionHeading
        title={
          <>
            High Impact Zonal Event on ESG & Sustainability Symposium
            <span className="block text-base mt-2">
              22/11/2024 to 23/11/2024
            </span>
          </>
        }
        titleClassName="text-center"
      /> */}



      {/* <section className="w-full h-full container mx-auto  py-6">
        <img src="https://cdn.kalingauniversity.ac.in/IEEE/posters.jpeg" alt=" Symposium Poster" className="w-full h-auto object-cover" />
      </section> */}
      <AccreditationRanking
        heading="Sponsors"
        secondHeading=""
        accreditations={aboutsponsors}
      />
      <AchievementsGallery
        images={galleryImages1}
        title="Achievements"
      />
      {branchAwardsImages.length > 0 && (
        <AchievementsGallery
          images={branchAwardsImages}
          title="Branch Awards"
        />
      )}
      {/* ================== UBA ACTIVITIES TABS ================== */}
      {/* <VisaFroFrroGuidelines
        title={<>ESG & Sustainability Symposium</>}
        showModal={false}
        backgroundClassName="bg-[var(--dark-blue)]"
        tabs={[
          {
            id: "event",
            title: "Event Schedule",
            content: (
              <div className="space-y-6">
                <h3 className="text-white">
                  22/11/2024 to 23/11/2024 - Event Schedule
                </h3>
                <div className="overflow-x-auto rounded-xl border border-gray-300">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-[var(--dark-blue)] text-white">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3">Date</th>
                        <th className="border border-gray-300 px-4 py-3">Time</th>
                        <th className="border border-gray-300 px-4 py-3">Particular</th>
                        <th className="border border-gray-300 px-4 py-3">Venue</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium align-middle" rowSpan={8}>
                          Day – 1<br />22-11-2024
                        </td>
                        <td className="border border-gray-300 px-4 py-3">10:00 AM – 10:30 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Physical Registration & Check-in</td>
                        <td className="border border-gray-300 px-4 py-3 align-middle font-medium" rowSpan={15}>
                          Kalinga University Auditorium
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:30 AM – 11:15 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Inauguration</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">11:15 AM – 11:30 AM</td>
                        <td className="border border-gray-300 px-4 py-3">High Tea</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">11:30 AM – 12:10 PM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Keynote Session by <strong>Mr. Shivam</strong><br />
                          Chairperson, New Initiative Committee IEEE CS, MGA Board
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:10 PM – 12:50 PM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Session 1: Dr. Sangmesh, Associate Professor, JNU New Delhi<br />
                          <strong>Topic:</strong> Sustainable Development: Role of Energy and Individuals
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:50 PM – 01:30 PM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Session 2: Mr. Rohit Raj, Founder & CEO, Techsics Technologies<br />
                          <strong>Topic:</strong> Navigating Startups, Robotics and the Future of Technology
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">01:30 PM – 02:30 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Networking Lunch</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">02:30 PM – 04:30 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Poster / Project Demonstration</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium align-middle" rowSpan={7}>
                          Day – 2<br />23-11-2024
                        </td>
                        <td className="border border-gray-300 px-4 py-3">10:00 AM – 11:00 AM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Session 3: Ms. Devina Kothari, Director – Zuan Design Labs LLP<br />
                          <strong>Topic:</strong> Beyond Sustainability: Shaping the Future with ESG 2.0 (2025–2050)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">11:00 AM – 11:15 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Tea Break</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">11:15 AM – 12:15 PM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Session 4: Dr. Vinamra Bhushan Sharma, Deputy Manager – Infrastructure & Sustainability<br />
                          <strong>Topic:</strong> Environmental Social Governance towards Sustainability
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:15 PM – 01:30 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Valedictory</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">01:40 PM – 02:15 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Networking Lunch</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">02:15 PM – 06:00 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Visit to Champaran</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
          {
            id: "inauguration",
            title: "Inauguration Schedule",
            content: (
              <div className="space-y-6">
                <h3 className="text-white">
                  22/11/2024 to 23/11/2024 - Inauguration Schedule
                </h3>
                <p className="mt-[10px] text-white">
                  <strong>Master of Ceremony: Dr. Anu G. Pillai</strong>
                  <br />Timing: 10:30 AM to 11:15 AM
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-300">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-[var(--dark-blue)] text-white">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3">Time</th>
                        <th className="border border-gray-300 px-4 py-3">Particular</th>
                        <th className="border border-gray-300 px-4 py-3">Venue</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:30 AM to 10:32 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Welcome note by Master of Ceremony</td>
                        <td className="border border-gray-300 px-4 py-3 align-middle font-medium" rowSpan={11}>
                          Kalinga University Auditorium
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:32 AM to 10:35 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Lamp Lighting</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:35 AM to 10:38 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Welcome of guests and address by Master of Ceremony</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:38 AM to 10:40 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Honourable Chairman</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:40 AM to 10:42 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Honourable Chancellor</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:42 AM to 10:45 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Honourable Vice Chancellor</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:45 AM to 10:50 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Welcome note by Dr. Vijayalaxmi, Director IQAC</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:50 AM to 10:55 AM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Respected Registrar</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">10:55 AM to 11:15 AM</td>
                        <td className="border border-gray-300 px-4 py-3">
                          SDG – Logo Launching Ceremony and Inauguration of SDG Wall headed by Mrs. Saloni Tyagi, HoD Faculty of Law
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">11:15 AM to 11:30 AM</td>
                        <td className="border border-gray-300 px-4 py-3">High Tea</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
          {
            id: "poster",
            title: "Poster / Project Presentation",
            content: (
              <div className="space-y-6">
                <h3 className="text-white">
                  22/11/2024 - Poster / Project Presentation Schedule
                </h3>
                <p className="text-white">
                  <strong>Overall Coordinator: Dr. Anu G. Pillai</strong>
                  <br />Date of Event: 22/11/2024, <br />
                  Timing: 2:30 PM to 4:30 PM, Venue: Auditorium, Kalinga University
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-300">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-[var(--dark-blue)] text-white">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3">Time</th>
                        <th className="border border-gray-300 px-4 py-3">Team No</th>
                        <th className="border border-gray-300 px-4 py-3">University / College</th>
                        <th className="border border-gray-300 px-4 py-3">Team Members</th>
                        <th className="border border-gray-300 px-4 py-3">Participation Type</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {[
                        { time: "2:30 PM – 2:39 PM", team: "TEAM-01", uni: "Kalinga University", members: "Md Tawis Ansari, Sanjana Kumari, Komal Sahu, Md Aiman Shafi, Vinay Manikpuri", type: "Offline" },
                        { time: "2:39 PM – 2:48 PM", team: "TEAM-02", uni: "IIIT Naya Raipur", members: "Nidhee Bhuwal, Chanchal Ijardar", type: "Offline" },
                        { time: "2:48 PM – 2:57 PM", team: "TEAM-03", uni: "Dr. C. V. Raman University", members: "Mr. Ravish Gupta, Dr. Shikha Singh", type: "Offline" },
                        { time: "2:57 PM – 3:06 PM", team: "TEAM-04", uni: "Dr. C. V. Raman University", members: "Dr. Ayaz Ahmed Faridi, Ravish Gupta, Adarsh Sharma", type: "Offline" },
                        { time: "3:06 PM – 3:15 PM", team: "TEAM-05", uni: "Dr. C. V. Raman University", members: "Rajesh, Dr. Ragini Shukla", type: "Offline" },
                        { time: "3:15 PM – 3:24 PM", team: "TEAM-06", uni: "BIT Durg", members: "Geetish Mahato, Anamika Dey", type: "Offline" },
                        { time: "3:24 PM – 3:33 PM", team: "TEAM-07", uni: "Guru Ghasidas University, Bilaspur", members: "Kumar Gulshan Raj, Aditya Raj, G Santhosh Nayak", type: "Offline" },
                        { time: "3:33 PM – 3:42 PM", team: "TEAM-08", uni: "IIIT Naya Raipur", members: "Manjistha Bidkar, Alankar Saxena, Sanjana Sori", type: "Offline" },
                        { time: "3:42 PM – 3:51 PM", team: "TEAM-09", uni: "Guru Ghasidas University, Bilaspur", members: "Kishan Sahu, Rustam, Rohit Saijare, Mansee Singh", type: "Online" },
                        { time: "3:51 PM – 4:00 PM", team: "TEAM-10", uni: "SJMIT Chitradurga", members: "Pallavi S A, Nikhitha P H, Manupriya P, Prof. Raghu S, Prof. Tanuja T", type: "Online" },
                        { time: "4:00 PM – 4:09 PM", team: "TEAM-11", uni: "IIIT Naya Raipur", members: "Thampula Kartheek, Vaduguru Sai Venu Satya Ramlalith", type: "Offline" },
                        { time: "4:09 PM – 4:18 PM", team: "TEAM-12", uni: "SJMIT Chitradurga", members: "Devika S, Divya B S, Hema B T, Purushotham T P, Sujith G R", type: "Online" },
                        { time: "4:18 PM – 4:27 PM", team: "TEAM-13", uni: "Guru Nanak Dev Engineering College, Bidar", members: "Kennath Jason, Abdul Aziz, Sheshank Sonji, Abhishek Patil", type: "Online" },
                        { time: "4:27 PM – 4:35 PM", team: "TEAM-14", uni: "Guru Ghasidas University, Bilaspur", members: "Shrey Anant Sandiman, Nipun Kumar Mishra, Laxmikant Dewangan", type: "Online" },
                      ].map((row, idx) => (
                        <tr key={idx}>
                          <td className="border border-gray-300 px-4 py-3">{row.time}</td>
                          <td className="border border-gray-300 px-4 py-3">{row.team}</td>
                          <td className="border border-gray-300 px-4 py-3">{row.uni}</td>
                          <td className="border border-gray-300 px-4 py-3">{row.members}</td>
                          <td className="border border-gray-300 px-4 py-3">{row.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
          {
            id: "valedictory",
            title: "Valedictory Schedule",
            content: (
              <div className="space-y-6">
                <h3 className="text-white">
                  23-11-2024 - Valedictory Schedule
                </h3>
                <div className="text-sm text-[var(--foreground)] leading-relaxed">
                  <p className="text-white">
                    <strong>Master of Ceremony: Dr. Anu G. Pillai</strong><br />
                    Date: 22/11/2024 to 23/11/2024<br />
                    Timing: 12:15 PM to 1:30 PM
                  </p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-gray-300">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-[var(--dark-blue)] text-white">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3">Time</th>
                        <th className="border border-gray-300 px-4 py-3">Particular</th>
                        <th className="border border-gray-300 px-4 py-3">Venue</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:15 PM to 12:20 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Welcome of guests and address by the Master of the Ceremony</td>
                        <td className="border border-gray-300 px-4 py-3 align-middle font-medium" rowSpan={7}>
                          Kalinga University Auditorium
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:20 PM to 12:50 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Mr. Rahul Pinnamaneni, Founder & CEO, Polygon Geospatial, Hyderabad</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">12:50 PM to 1:20 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Address by Mr. Abhinav Gambhir, Event Lead – IEEE CS SYP High Impact Zonal Events</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1:20 PM to 1:25 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Concluding note by Dr. Vijayalaxmi, Director IQAC</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1:25 PM to 1:35 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Certificates & Prize Distribution</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1:35 PM to 1:38 PM</td>
                        <td className="border border-gray-300 px-4 py-3">Vote of Thanks by Dr. Anita Verma</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">1:38 PM</td>
                        <td className="border border-gray-300 px-4 py-3">National Anthem</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
        ]}
      /> */}





      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-0 container pt-[50px]">
        <div className="lg:col-span-4 z-20 h-full">
          <div className="relative z-20 bg-[var(--lite-sand)] rounded-2xl p-2 w-full">
            <Image
              src={imageSrc}
              alt=""
              width={500}
              height={500}
              className="w-full h-[320px] md:h-full object-cover rounded-2xl"
            />
            {message && (
              <div className="absolute right-4 bottom-4 z-30">
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="w-10 h-10 rounded-lg bg-[var(--button-red)] hover:opacity-80 cursor-pointer  flex items-center justify-center transition-colors shadow-md"
                  aria-label="Open message"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-6 relative lg:left-[-25px] lg:pt-35 lg:pt-0 z-10">

          {/* Contact Details Section */}
          <div className="bg-[var(--dark-blue)] rounded-xl md:p-14 p-6 relative overflow-hidden md:pl-16 z-10">
            <div className="relative z-10">
              <h3 className="text-white text-xl sm:text-2xl font-stix mb-6">Contact Details</h3>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 text-white/80">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:ieeeku@kalingauniversity.ac.in" className="text-sm sm:text-base hover:text-white transition-colors underline">
                    ieeeku@kalingauniversity.ac.in

                  </a>
                </div>
                {/* <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--dark-orange-red)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>

                  <a href="http://www.kalingauniversity.ac.in/ieee/" className="text-sm sm:text-base hover:text-white transition-colors">
                    http://www.kalingauniversity.ac.in/ieee/
                  </a>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>




      <Gallery title="Glimpses" images={galleryImages} enableLightbox />
    </>
  );
}
