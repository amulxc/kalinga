"use client";

import React, { useEffect, useState } from "react";
import ncteFaculty from "./faculty-data";

const columns = [
  { key: "sNo", label: "S.No." },
  { key: "type", label: "Type" },
  { key: "name", label: "Name" },
  { key: "qualification", label: "Qualification" },
  { key: "experience", label: "Experience" },
  { key: "subject", label: "Subject" },
  { key: "dob", label: "DOB" },
  { key: "fatherName", label: "Father Name" },
  { key: "mobile", label: "Mobile No." },
  { key: "email", label: "Email" },
  { key: "pan", label: "PAN" },
  { key: "joiningDate", label: "Joining Date" },
  { key: "status", label: "Status" },
];

const blockEvent = (e) => e.preventDefault();

// View-only viewer for the NCTE "Details of faculty" sheet: no file link, no download.
export default function FacultyViewer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="text-[var(--button-red)] hover:underline cursor-pointer"
      >
        View
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ncte-faculty-title"
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-7xl flex-col rounded-lg bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={blockEvent}
            onCopy={blockEvent}
            onDragStart={blockEvent}
          >
            <div className="flex items-center justify-between border-b px-5 py-3">
              <h2 id="ncte-faculty-title" className="text-lg font-semibold">
                Teaching Staff Details
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="text-2xl leading-none text-gray-500 hover:text-black cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="overflow-auto select-none">
              <table className="min-w-full border-collapse text-sm">
                <thead className="sticky top-0 bg-gray-100">
                  <tr>
                    {columns.map((col) => (
                      <th key={col.key} className="border px-3 py-2 text-left font-semibold whitespace-nowrap">
                        {col.label}
                      </th>
                    ))}
                    <th className="border px-3 py-2 text-left font-semibold">Photo</th>
                  </tr>
                </thead>
                <tbody>
                  {ncteFaculty.map((row) => (
                    <tr key={row.sNo} className="even:bg-gray-50">
                      {columns.map((col) => (
                        <td key={col.key} className="border px-3 py-2 whitespace-nowrap">
                          {row[col.key]}
                        </td>
                      ))}
                      <td className="border px-3 py-2">
                        {row.photo && (
                          <img
                            src={row.photo}
                            alt={row.name}
                            draggable={false}
                            className="h-16 w-14 object-cover pointer-events-none"
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
