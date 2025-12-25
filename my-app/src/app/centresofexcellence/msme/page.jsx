"use client";

import { useLayoutEffect } from "react";
import ImageContent from "@/app/components/ccrc/imagecontent";
import AdmissionCareer from "@/app/components/general/admission_cta";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ScholarshipCard from "@/app/components/general/scholarship-card";
import Image from "next/image";

// ✅ Use the correct last component (Glimpses UI)
import MediaCardSlider from "@/app/components/general/media-card-slider";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  pageTitle: "MSME Training Centre",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Centres of Excellence", href: "/centres-of-excellence" },
    { label: "MSME Training Centre", href: "/centres-of-excellence/msme-training-centre" },
  ],
};

// ✅ About content from PDF
const aboutCentreDescription =
  "We have partnered with India’s first and only “Gold” Category accredited MSME association that provides a wide range of business solutions to MSMEs across India. Their Tried, Tested, Credible, Affordable, and Ready-made solutions help companies save their time, energy, and cost.\n\nKalinga University has partnered with IamSMEofIndia to train students in developing effective business strategies through their workshops and seminars, in which they provide them with the latest industrial knowledge and develop an entrepreneurial spirit among them. Their industry experts prepare students to make informed business decisions and to understand how companies can overcome their hurdles in the competitive business world.";

// ✅ Bring back original icons (NO placeholders)
const learnCards = [
  {
    id: 1,
    title: "Understanding of MSME Business Models & Industrial Practices",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/merit.svg",
  },
  {
    id: 2,
    title: "Real-Time Methods Used by Successful MSMEs",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/social.svg",
  },
  {
    id: 3,
    title: "Effective Strategy Planning & Decision-Making Skills",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
  {
    id: 4,
    title: "Market Research & Opportunity Identification",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/merit.svg",
  },
  {
    id: 5,
    title: "Financial Planning & Risk Management",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/social.svg",
  },
  {
    id: 6,
    title: "Communication & Negotiation Skills",
    icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
  },
];

// ✅ Glimpses (MediaCardSlider expects imageItems/videoItems)
const glimpsesImageItems = [
  {
    id: 1,
    name: "Glimpses",
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    dateLabel: "",
    href: "#",
  },
];

function WhatYoullLearnSlider({ title = "What You’ll Learn", cards = [] }) {
  return (
    <section className="py-14 bg-white relative">
      {/* ✅ QC FIX: prevent title overlap + remove divider line inside ScholarshipCard */}
      <style jsx global>{`
        .learn-swiper .swiper-slide {
          height: auto !important;
        }
        .learn-swiper .learn-card-shell {
          min-height: 250px !important;
        }

        /* Reduce line height + clamp titles */
        .learn-swiper h3,
        .learn-swiper h4,
        .learn-swiper [class*="title"] {
          line-height: 1.2 !important;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* ✅ Remove “below line” (divider) */
        .learn-swiper hr,
        .learn-swiper .divider,
        .learn-swiper [class*="divider"],
        .learn-swiper [class*="border-b"] {
          display: none !important;
        }

        .learn-swiper p {
          line-height: 1.25 !important;
        }
      `}</style>

      <div className="container mx-auto px-2">
        <div className="mb-8 md:mb-10">
          <h2 className="font-stix text-[var(--foreground)] text-3xl md:text-4xl lg:text-5xl mb-2 text-center">
            {title}
          </h2>
        </div>

        <div className="relative pt-4 rounded-xl">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            navigation={{
              nextEl: ".learn-swiper-button-next",
              prevEl: ".learn-swiper-button-prev",
            }}
            className="learn-swiper !p-6 [&_.swiper-wrapper]:!flex [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!flex [&_.swiper-wrapper]:overflow-visible [&_.swiper-slide]:overflow-visible"
            loop={false}
            autoHeight={false}
          >
            {cards.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-full w-full overflow-visible">
                  <div className="learn-card-shell bg-white rounded-xl p-1 h-full relative max-w-[380px] mx-auto overflow-visible">
                    <ScholarshipCard
                      title={item.title}
                      description=""
                      icon={
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={180}
                          height={180}
                          className="object-contain"
                        />
                      }
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-end items-center gap-3 pr-6">
            <button className="learn-swiper-button-prev w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center shadow-md">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className="learn-swiper-button-next w-12 h-12 rounded-lg bg-[var(--button-red)] hover:bg-[#A2A2A2] flex items-center justify-center shadow-md">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MSMETrainingCentrePage() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") window.__breadcrumbData = breadcrumbData;
    return () => {
      if (typeof window !== "undefined") delete window.__breadcrumbData;
    };
  }, []);

  return (
    <main className="bg-white">
      {/* ✅ QC: reduce bottom padding + align fonts */}
      <section className="pt-10 pb-3">
        <div className="container mx-auto px-4">
          <h1 className="font-stix text-2xl md:text-4xl font-semibold text-[var(--title-color)]">
            MSME Training Centre
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600 font-plus-jakarta-sans">
            In collaboration with IamSMEofIndia
          </p>
        </div>
      </section>

      <ImageContent
        title="MSME Training Centre"
        subtitle="In collaboration with IamSMEofIndia"
        description={aboutCentreDescription}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        imageAlt="MSME Training Centre"
        readmore={false}
      />

      <WhatYoullLearnSlider title="What You’ll Learn" cards={learnCards} />

      {/* ✅ Correct last component (instead of StudentActivities) */}
      <MediaCardSlider
        title="Events and Activities"
        categoryTitle="Glimpses"
        description=""
        imageItems={glimpsesImageItems}
        videoItems={[]}
      />

      <AdmissionCareer />
    </main>
  );
}
