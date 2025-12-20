"use client";

import MentorIntro from "@/app/components/department/dept_head_intro";

const headLibrarianText =
  "I believe that a library is not just meant for reading, but it's a hub of exploration, research, and self-discovery. Kalinga University’s library offers a pool of resources to its faculty and students, providing them with informative resources in various disciplines. We constantly upgrade and expand our library’s online and offline materials, fulfilling the latest academic requirements of our students. It supports researchers with high-quality journals, research papers, and access to various digital libraries and databases. With our high-speed internet connection, students easily obtain the information they need. It is a space where they don’t just learn but get inspired to make a positive change in their lives. I welcome all students, faculty, and research scholars to make the most of our library.";

export default function LibraryHeadMessage({
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
  subtitle = "A Message From the Head Librarian",
  name = "Dr. Mohammad Nasir",
  designation = "University Librarian",
  quote = headLibrarianText,
}) {
  const items = [
    {
      id: 1,
      subtitle,
      title: name,
      department: designation,
      imageSrc,
      imageAlt: name,

      // Popup content
      message: [quote],
    },
  ];

  return (
    <section className="library-head-message -mt-12 md:-mt-16 lg:-mt-24">
      {/* ✅ Scoped + valid CSS (NO Tailwind parser issues) */}
      <style jsx>{`
        /* Align grid items from top instead of center */
        .library-head-message :global(.grid) {
          align-items: flex-start !important;
        }

        /* Remove desktop padding that pushes content down */
        @media (min-width: 1024px) {
          .library-head-message :global(.lg\\:pt-20) {
            padding-top: 0 !important;
          }
        }

        /* Ensure image starts from top */
        .library-head-message :global(img) {
          object-position: top;
        }
      `}</style>

      <MentorIntro items={items} />
    </section>
  );
}
