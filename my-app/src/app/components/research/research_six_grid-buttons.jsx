import GlobalArrowButton from "../general/global-arrow_button";

const buttons = [
  {
    id: 1,
    text: "Research, Consultancy & IPR Policy",
    href: "#",
  },
  {
    id: 2,
    text: "Research Advisory Committee",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/Constitution+of+Research+Advisory+Committee.pdf",
  },
  {
    id: 3,
    text: "Ethics Committee Constitution",
    href: "#",
  },
  {
    id: 4,
    text: "Plagiarism Policy",
    href: "#",
  },
  {
    id: 5,
    text: "Software used for Plagiarism",
    href: "#",
  },
  {
    id: 6,
    text: "Ph.D. Admissions",
    href: "/admissions/phd",
  },
  {
    id: 7,
    text: "Research Policy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/1.+Research+Policy+(2).pdf",
  },
  {
    id: 8,
    text: "Research Integrity & Ethics Policy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/Constitution+of+Research+Advisory+Committee.pdf",
  },
  {
    id: 9,
    text: "Constitution Of the Research Advisory Committee",
    href: "#",
  },
  {
    id: 10,
    text: "Doctoral Research Committee",
    href: "#",
  },
];

export default function ResearchSixGridButtons() {
  return (
    <section className="pt-16 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {buttons.map((button) => (
            <a
              key={button.id}
              href={button.href}
              className="block"
              target={button.href.startsWith("http") ? "_blank" : undefined}
              rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <GlobalArrowButton
                className="!w-full h-[60px] justify-between"
                arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                arrowSize={29}
              >
                {button.text}
              </GlobalArrowButton>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

