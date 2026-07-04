'use client'

import { useState } from 'react'
import Image from 'next/image'
import SectionHeading from '@/app/components/general/SectionHeading'
import AdmissionCareer from '@/app/components/general/admission_cta'
import QuickLinks from "@/app/components/general/quick_links";
import Stack from '@/app/components/gsap/Stack'
import GlobalArrowButton from '@/app/components/general/global-arrow_button'

const toTitleCase = (str) => {
  if (!str) return '';
  const lowercaseWords = ['of', 'and', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'with', 'by'];
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) =>
      index === 0 || !lowercaseWords.includes(word)
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word
    )
    .join(' ');
};

const truncateToWords = (text, maxWords = 30) => {
  if (!text) return '';
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
};

const quickLinks = [
  { id: 1, icon: "https://cdn.kalingauniversity.ac.in/academics/icons/Programs.svg", title: "Student Clubs", description: "Our vibrant clubs motivate students to learn and grow with confidence inside and outside their classrooms.", link: "/student-clubs" },
  { id: 2, icon: "https://cdn.kalingauniversity.ac.in/academics/icons/teachings.svg", title: "Value Added Courses", description: "Explore a wide range of short-term value-added certification courses conducted by industry experts at the University.", link: "/value-added-course" },
  { id: 3, icon: "https://cdn.kalingauniversity.ac.in/academics/icons/Curriculum.svg", title: "Industrial Visits", description: "To understand the industry dynamics, we conduct industrial visits where students interact with industry professionals.", link: "/news-and-events#industrial-visits" },
  { id: 4, icon: "https://cdn.kalingauniversity.ac.in/icons/Industrial+Visits.svg", title: "Internships & Placement", description: "Get an on-campus or off-campus internship opportunity and get placed in top companies through our Campus Placement Drives.", link: "/training-and-placements" },
  { id: 5, icon: "https://cdn.kalingauniversity.ac.in/admission/elgbility.svg", title: "Academic Facilities", description: "Our top-notch academic facilities will support your dreams by giving an all-around practical exposure.", link: "/academic-facilities" },
  { id: 6, icon: "https://cdn.kalingauniversity.ac.in/academics/icons/Events.svg", title: "Conferences & Events", description: "Discover various National and International conferences held at Kalinga University.", link: "/conferences-and-events" },
];

export default function DepartmentsClient({ departments }) {
  const [expandedDept, setExpandedDept] = useState(null);

  const handleKnowMore = (dept) => {
    window.location.href = dept.slug === 'phd' ? '/phd' : `/departments/${dept.slug}`;
  };

  const handleApplyNow = () => {
    window.open("https://admissions.kalingauniversity.ac.in/", "_blank");
  };

  const handleReadMore = (dept) => {
    if (expandedDept === dept.id) {
      window.location.href = dept.slug === 'phd' ? '/phd' : `/departments/${dept.slug}`;
    } else {
      setExpandedDept(dept.id);
    }
  };

  return (
    <>
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-2">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <SectionHeading
              subtitle="Explore Academics"
              title="Your Journey Begins Here"
              subtitleClassName="text-center !text-[var(--button-red)]"
              titleClassName="text-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {departments.length === 0 && (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600">No departments found.</p>
              </div>
            )}
            {departments.map((dept) => {
              const isExpanded = expandedDept === dept.id;
              const displaySummary = isExpanded ? dept.fullSummary : truncateToWords(dept.fullSummary, 30);
              const shouldShowReadMore = dept.fullSummary && dept.fullSummary.split(/\s+/).length > 30;

              return (
                <div key={dept.id} className="flex justify-center">
                  <DepartmentCard
                    program={{
                      ...dept,
                      summary: displaySummary,
                      onKnowMore: () => handleKnowMore(dept),
                      onApplyNow: handleApplyNow,
                      onReadMore: shouldShowReadMore ? () => handleReadMore(dept) : null,
                      isExpanded,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <QuickLinks
        title="Quick Links"
        description="Learning at Kalinga University goes beyond classroom lectures and textbook knowledge. From participating in student clubs to attending conferences and events, these experiences will make you well-rounded learners and future professionals."
        links={quickLinks}
        titleClassName="text-white"
      />
      <AdmissionCareer />
    </>
  );
}

function DepartmentCard({ program }) {
  const imageCard = (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
      <Image src={program.img} alt={program.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-5 left-8 right-3 text-white">
        <h3 className="font-stix text-lg sm:text-xl leading-snug drop-shadow">{toTitleCase(program.title)}</h3>
      </div>
    </div>
  );

  const overviewCard = (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-xl p-4 sm:p-4 lg:p-4 flex flex-col" style={{ backgroundColor: 'rgba(254, 192, 113, 1)' }}>
      <div>
        <h3 className="font-stix !text-[25px] leading-tight mb-3 sm:mb-4">Overview</h3>
        <p className="font-plus-jakarta-sans text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 !text-gray-800">
          {program.summary || 'Learn more about this department and its opportunities.'}
        </p>
      </div>
      <div className="mt-auto flex items-center gap-2 sm:gap-3">
        <GlobalArrowButton
          className="!bg-white !text-black"
          arrowClassName="!bg-[var(--button-red)]"
          arrowIconClassName="!text-white"
          textClassName="!text-black"
          onClick={(e) => { e.stopPropagation(); program.onKnowMore?.(); }}
        >
          Know More
        </GlobalArrowButton>
        <GlobalArrowButton onClick={(e) => { e.stopPropagation(); program.onApplyNow?.(); }}>
          Apply Now
        </GlobalArrowButton>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center">
      <div className="h-[340px] sm:h-[380px] md:h-[400px] lg:h-[420px] w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px]">
        <Stack
          cards={[overviewCard, imageCard]}
          randomRotation
          sendToBackOnClick
          pauseOnHover
          autoplay={false}
          mobileClickOnly
        />
      </div>
    </div>
  );
}
