"use client";

import GlobalArrowButton from "../components/general/global-arrow_button";




const downloadsreport = [
  // {
  //   id: 0,
  //   text: "Pharmacy Magazine",
  //   href: "https://cdn.kalingauniversity.ac.in/downloads/pharmacy_magazine.pdf",
  // },
  {
    id: 0,
    text: "New Admission Form",
    href: "https://cdn.kalingauniversity.ac.in/downloads/newadmissionform.pdf",
  },
  {
    id: 1,
    text: "Application for the Issue of a Bonafide Certificate",
    href: "https://cdn.kalingauniversity.ac.in/forms/Bonafide-Application-Form.pdf",
  },
  {
    id: 2,
    text: "Application for the Issue of Semester / Year-wise Transcript",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-form-for-transcript-Certificate.pdf",
  },
  {
    id: 3,
    text: "Application for the Issue of a Migration Certificate",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-form-migration-Certificate.pdf",
  },
  {
    id: 4,
    text: "Application for the Issue of Provisional Degree / Diploma",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-Form-provisional-Certificate.pdf",
  },
  {
    id: 5,
    text: "Re-Appear Supplementary Form",
    href: "https://cdn.kalingauniversity.ac.in/downloads/Supplementary+Form+.pdf",
  },
  {
    id: 6,
    text: "Re-Appear ATKT Form",
    href: "https://cdn.kalingauniversity.ac.in/downloads/ATKT_FORM.pdf",
  },
  {
    id: 7,
    text: "Re-Registration Form",
    href: "https://cdn.kalingauniversity.ac.in/downloads/RE-REGISTRATION_FORM.pdf",
  },
  {
    id: 9,
    text: "Application Form For the Issue of Medium of Instruction",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-Form-for-Issue-of-Medium-of-Instruction.pdf",
  },
  {
    id: 10,
    text: "Application Form For the Issue of a Letter of Recommendation",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-Form-for-Issue-of-Letter-of-Recommendation.pdf",
  },
  {
    id: 11,
    text: "Application form for Name and Surname Correction",
    href: "https://cdn.kalingauniversity.ac.in/forms/Change-of-Name-and-Surname.pdf",
  },
  {
    id: 12,
    text: "Application form for the Issue of Degree",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-form-degree-Certificate.pdf",
  },
  {
    id: 13,
    text: "Application for Issue of Character Certificate",
    href: "https://cdn.kalingauniversity.ac.in/forms/Character-certificate.pdf",
  },
  {
    id: 14,
    text: "Application form for Diploma",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-form-for-issue-of-diploma-Certificate.pdf",
  },
  {
    id: 15,
    text: "Application form for Transfer Certificate",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-form-transfer-Certificate.pdf",
  },
  {
    id: 16,
    text: "Application form for Verification",
    href: "https://cdn.kalingauniversity.ac.in/forms/Verification-Form.pdf",
  },
  {
    id: 17,
    text: "Application form and Affidavit format for the issue of a Duplicate Degree",
    href: "https://cdn.kalingauniversity.ac.in/forms/Duplicate-degree-form.pdf",
  },
  {
    id: 18,
    text: "Application form and Affidavit format for the issue of a Duplicate Marksheet",
    href: "https://cdn.kalingauniversity.ac.in/forms/Duplicate-dmc-form.pdf",
  },
  {
    id: 18,
    text: "Re-Totalling / Re-Evaluation Form",
    href: "https://cdn.kalingauniversity.ac.in/downloads/RE-TOTALING_%26_REEVALUATION_FORM.pdf",
  },
  {
    id: 19,
    text: "Application For Issue of Duplicate Character Certificate",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-for-Duplicate-Character-certificate.pdf",
  },
  {
    id: 20,
    text: "Application Form For Issue of Duplicate Transfer Certificate",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-form-Duplicate-transfer-Certificate.pdf",
  },
  {
    id: 21,
    text: "Application Form For Issue of Duplicate Migration Certificate",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-form-Duplicate-Migration-Certificate.pdf",
  },{
    id: 22,
    text: "Application Form For Issue of Duplicate Provisional Certificate",
    href: "https://cdn.kalingauniversity.ac.in/forms/Application-form-Duplicate-Provisional-Certificate.pdf",
  },{
    id: 20,
    text: "Application Form For Issue of Attendance Certificate",
    href: "https://cdn.kalingauniversity.ac.in/forms/Attendance+Certificate.pdf",
  },


];

export default function Page() {

  return (
    <>


      {/* ✅ PAGE-SPECIFIC GRID */}
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadsreport.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <GlobalArrowButton
                  className="!w-full h-[60px] justify-between"
                  arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                  arrowSize={29}
                >
                  {item.text}
                </GlobalArrowButton>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
