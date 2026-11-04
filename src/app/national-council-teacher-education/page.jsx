"use client";

import React from "react";
import DataTable from "../components/general/data-table";
import SectionHeading from "../components/general/SectionHeading";




// const buttons = [
//   {
//     id: 1,
//     text: "National Council for Teacher Education",
//     href: "https://ncte.gov.in/Website/Index.aspx",
//   },
//   {
//     id: 2,
//     text: "Hyperlink of Council’s",
//     href: "https://ncte.gov.in/Website/regulation.aspx",
//   },
//   {
//     id: 3,
//     text: "Details of Sanctioned Programme along with Annual Intake",
//     href: "https://cdn.kalingauniversity.ac.in/common/national-council/List+of+Programmes+Running+in+KU.pdf",
//   },
//   {
//     id: 4,
//     text: "Details of Faculty",
//     href: "https://cdn.kalingauniversity.ac.in/common/national-council/List+of+Teaching+Staff+of+Faculty+of+Education.pdf",
//   },
//   {
//     id: 5,
//     text: "Details of Students",
//     href: "https://cdn.kalingauniversity.ac.in/common/national-council/List+of+Students+(Education+Deptt.)+2024-2026+%26+2023-2025.pdf",
//   },
//   {
//     id: 6,
//     text: "Details of Available Infrastructure Facilities",
//     href: "#",
//   },
//   {
//     id: 7,
//     text: "Fees Details",
//     href: "/ku-fees",
//   },
//   {
//     id: 8,
//     text: "Facilities Added During the Last Quarter",
//     href: "#",
//   },
//   {
//     id: 9,
//     text: "Number of Books in the Library, Referred Journals Subscribed to, and Addition, if any, in the Last Quarter",
//     href: "/library",
//   },
//   {
//     id: 10,
//     text: "Details of Instructional Facilities, such as the Laboratory and Library",
//     href: "/laboratories",
//   },
//   {
//     id: 11,
//     text: "Balance Sheet as on the Last Date of the Last Financial Year",
//     href: "https://cdn.kalingauniversity.ac.in/common/national-council/K.+Balance+Sheet.pdf",
//   },
//   {
//     id: 12,
//     text: "Income and Expenditure Account for the Last Financial Year",
//     href: "https://cdn.kalingauniversity.ac.in/common/national-council/L.+Income+%26+Expenditure.pdf",
//   },
//   {
//     id: 13,
//     text: "Receipt and Payment Account for the Last Financial Year",
//     href: "https://cdn.kalingauniversity.ac.in/common/national-council/M.+Receipt+%26+Payments.pdf",
//   },
//   {
//     id: 14,
//     text: "Details of biometric data",
//     href: "#",
//   },

// ];  

const tableColumns = [
  { key: "slNo", label: "Sl. No", width: "w-20" },
  { key: "title", label: "Name", width: "flex-1" },
  { key: "action", label: "Link", width: "w-32" }
];

const tableData = [
  {
    slNo: "A",
    title: "Affidavit for NCTE ITEP - Registrar",
    action: (
      <a
        href="/ncte/affidavit-registrar.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        View PDF
      </a>
    )
  },
  {
    slNo: "B",
    title: "Affidavit for NCTE ITEP - Chairman",
    action: (
      <a
        href="/ncte/affidavit-chairman.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        View PDF
      </a>
    )
  },
  {
    slNo: "C",
    title: "Balance sheet as on the last date of the last financial year",
    action: (
      <a
        href="/ncte/balance-sheet.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        View PDF
      </a>
    )
  },
  {
    slNo: "D",
    title: "Details of available infrastructure facilities",
    action: (
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        Know More
      </a>
    )
  },
  {
    slNo: "E",
    title: "Details of faculty",
    action: (
      <a
        href="/ncte/details-of-faculty.xlsx"
        download
        className="text-[var(--button-red)] hover:underline"
      >
        Download
      </a>
    )
  },
  {
    slNo: "F",
    title: "Details of instructional facilities such as laboratory and library",
    action: (
      <a
        href="/laboratories"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        Know More
      </a>
    )
  },
  {
    slNo: "G",
    title: "Details of sanctioned programme along with annual intake",
    action: (
      <a
        href="/ncte/sanctioned-programme.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        View PDF
      </a>
    )
  },
  {
    slNo: "H",
    title: "Details of students",
    action: (
      <a
        href="/ncte/students.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        View PDF
      </a>
    )
  },
  {
    slNo: "I",
    title: "Facilities added during the last quarter",
    action: (
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        Know More
      </a>
    )
  },
  {
    slNo: "J",
    title: "Fees Details",
    action: (
      <a
        href="/ku-fees"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        Know More
      </a>
    )
  },
  {
    slNo: "K",
    title: "Hyperlink of council's",
    action: (
      <a
        href="/about-us#academic-council"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        Know More
      </a>
    )
  },
  {
    slNo: "L",
    title: "Income and expenditure account for the last financial year",
    action: (
      <a
        href="/ncte/income-expenditure.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        View PDF
      </a>
    )
  },
  {
    slNo: "M",
    title: "National Council for Teacher Education",
    action: (
      <a
        href="https://ncte.gov.in/Website/Index.aspx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        Know More
      </a>
    )
  },
  {
    slNo: "N",
    title: "Number of books in the library, referred Journals subscribed to, and addition, if any, in the last quarter",
    action: (
      <a
        href="/library"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        Know More
      </a>
    )
  },
  {
    slNo: "O",
    title: "Receipt and payment account for the last financial year",
    action: (
      <a
        href="https://cdn.kalingauniversity.ac.in/common/national-council/M.+Receipt+%26+Payments.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        View PDF
      </a>
    )
  },
  {
    slNo: "P",
    title: "Resolution NCTE ITEP",
    action: (
      <a
        href="/ncte/resolution.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--button-red)] hover:underline"
      >
        View PDF
      </a>
    )
  },
];
export default function KalingaBuzz() {
  return (
    <>

      {/* <ResearchSixGridButtons buttons={buttons} /> */}
      <SectionHeading
        title="National Council Teacher Education"
        subtitle=""
        titleClassName="text-center mt-10 mb-10"
        subtitleClassName=""

      />
      <DataTable
        columns={tableColumns} data={tableData}
      />
      <div className="pt-16"></div>
    </>
  );
}
