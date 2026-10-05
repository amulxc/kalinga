"use client";

import ImageContent from "@/app/components/ccrc/imagecontent";
import AdmissionCareer from "@/app/components/general/admission_cta";
import CareerPath from "@/app/components/course/career_path";
import Gallery from "@/app/components/general/gallery";

const learnCards = [
  "Cement Manufacturing Processes",
  "Modern Engineering Practices",
  "Industrial Automation & Digital Technologies",
  "Mechanical Engineering Applications",
  "Sustainable Manufacturing Practices",
  "Quality & Process Management",
  "Industry-Oriented Problem Solving",
  "Insights into Sustainable Practices",
].map((description, index) => ({ id: index + 1, title: "", description }));

const galleryImages = [1, 2, 3, 4, 5].map((n) => ({
  id: n,
  image: `/centresofexcellence/ultratech/glimpses/${n}.webp`,
  alt: `UltraTech Cement Training and Research Centre glimpse ${n}`,
}));

export default function UltraTechTrainingCentrePage() {
  return (
    <main className="bg-white">
      <ImageContent
        imageSrc="/centresofexcellence/ultratech/logo.webp"
        title="In Collaboration With UltraTech Cement"
        subtitle=""
        description={[
          "UltraTech Cement is a flagship company of the Aditya Birla Group, one of the world’s leading cement manufacturing companies and a major provider of building solutions. The company focuses on quality, innovation, sustainability, and customer satisfaction. This centre of excellence empowers future engineers with industry-ready skills through experiential learning, industry interaction, and applied research. Through hands-on exposure to modern manufacturing processes, emerging technologies, and advanced engineering practices, it strengthens technical competency in cement manufacturing, mechanical engineering, sustainability, automation, and digital technologies.",
        ]}
        readmore={false}
      />

      <CareerPath careers={learnCards} title="What You’ll Learn" description="" />

      <Gallery images={galleryImages} title="Glimpses" enableLightbox />

      <AdmissionCareer />
    </main>
  );
}
