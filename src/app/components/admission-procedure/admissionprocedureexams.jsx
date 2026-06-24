"use client";

import React from "react";
import OurPrograms from "../admissions/our_programs";

function Admissionprocedureexams() {
  return (
    <div className="admission-exams-programs">
      <OurPrograms
        customPrograms={[
          {
            id: 1,
            title: "About KALSEE",
            specialization:
              "The Kalinga Scholastic Entrance Examination (KALSEE) is a Computer-Based Test for all the streams except BBA and MBA. It is an MCQ-based exam with flexible scheduling options and no negative marking.",
            eligibility: "",
            type: "",
            coursePageUrl: "/kalsee",
            hideScholarshipLink: true,
            exploreLinkText: "Know More",
          },
          {
            id: 2,
            title: "About KAL-MAT",
            specialization:
              "The Kalinga Management Aptitude Test (KAL-MAT) is an online entrance exam for BBA and MBA. It includes two steps: An online entrance exam and a personal interview.",
            eligibility: "",
            type: "",
            coursePageUrl: "/kalmat",
            hideScholarshipLink: true,
            exploreLinkText: "Know More",
          },
        ]}
        hideSearchFilter={true}
        customTitle=""
        customSubtitle=""
        maxPrograms={2}
        mobileMaxWidth={700}
      />

      {/* ✅ Scoped global fix ONLY for this block */}
      <style jsx global>{`
        /* ===============================
           MOBILE PADDING NORMALIZATION
           =============================== */
        @media (max-width: 767px) {
          /* 1️⃣ Equal top & bottom padding of the section */
          .admission-exams-programs section {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }

          /* 2️⃣ Remove empty header spacing (title/subtitle not used) */
          .admission-exams-programs .text-center.mb-5 {
            display: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* 3️⃣ Reduce excess bottom spacing from program cards */
          .admission-exams-programs .grid > div:last-child {
            margin-bottom: 0 !important;
          }
        }

        /* ===============================
           EXISTING OVERRIDES (UNCHANGED)
           =============================== */

        /* Hide "Duration : ..." */
        .admission-exams-programs p.whitespace-nowrap {
          display: none !important;
        }

        /* Hide Apply Now button */
        .admission-exams-programs
          .flex.flex-row.gap-2.md\\:gap-3
          > a:last-child {
          display: none !important;
        }

        /* Adjust button gap */
        .admission-exams-programs .flex.flex-row.gap-2.md\\:gap-3 {
          gap: 0.5rem !important;
        }

        /* Align content to stretch to ensure both cards have the same height and content fills it */
        .admission-exams-programs .bg-white.flex {
          align-items: stretch !important;
        }

        /* Make the inner content container a flex column and grow to fill the card height */
        .admission-exams-programs .bg-white.flex .relative.z-10 {
          display: flex !important;
          flex-direction: column !important;
          flex-grow: 1 !important;
        }

        /* Justify the description paragraph text */
        .admission-exams-programs .bg-white.flex p.leading-relaxed {
          text-align: justify !important;
        }

        /* Push the button row to the bottom of the card and adjust spacing */
        .admission-exams-programs .flex.flex-row.gap-2.md\\:gap-3 {
          gap: 0.5rem !important;
          margin-top: auto !important;
          padding-top: 1rem !important;
        }
      `}</style>
    </div>
  );
}

export default Admissionprocedureexams;
