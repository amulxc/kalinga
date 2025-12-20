"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import GlobalArrowButton from "../general/global-arrow_button";

const defaultResources = [
  {
    id: 1,
    title: "SCOPUS",
    category: "E-Resources",
    description:
      "Scopus is a comprehensive abstract and citation database used for academic research across various disciplines. Developed by Elsevier, it is widely utilized by researchers, academics, and institutions to access a broad range of scientific literature and track research impact. A total of 49,037 journals from various disciplines are indexed in this database.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://www.elsevier.com/en-in/products/scopus",
    buttonText: "Open Link",
  },
  {
    id: 2,
    title: "LexisNexis",
    category: "E-Resources",
    description:
      "LexisNexis is a global provider of information and analytics solutions for professionals in the legal, risk management, corporate, government, and academic sectors, offering content-enabled workflows, data analytics, and AI-powered tools to enhance decision-making and productivity. LexisNexis pioneered the electronic accessibility of legal documents and has since evolved into a comprehensive database offering a vast range of resources such as legal resources, legal news, business and company information, IPR, Taxation and Labour Law etc.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://www.lexisnexis.com/community/insights/professional/resources",
    buttonText: "Open Link",
  },
  {
    id: 3,
    title: "DELNET",
    category: "E-Resources",
    description:
      "DELNET was started at the India International Centre Library in January 1988 and was registered as a society in 1992. It was initially supported by the National Information System for Science and Technology (NISSAT), Department of Scientific and Industrial Research, Government of India. It was subsequently supported by the National Informatics Centre, Department of Information Technology, Ministry of Communications and Information Technology, Government of India and the Ministry of Culture, Government of India.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://www.delnet.in/",
    buttonText: "Open Link",
  },
  {
    id: 4,
    title: "DRILLBIT",
    category: "E-Resources",
    description:
      "Drillbit is a cloud-based tool designed to assist educators and students in managing and improving academic writing skills. Drillbit is designed to enhance the writing process, providing tools and resources that support better writing practices and academic integrity. Its focus on grammar, style, and feedback makes it a valuable resource for both students looking to improve their writing and educators aiming to support their students’ development.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://www.drillbitplagiarism.com/",
    buttonText: "Open Link",
  },
  {
    id: 5,
    title: "TURNITIN",
    category: "E-Resources",
    description:
      "Turnitin is widely used across educational institutions to maintain academic integrity and improve the quality of scholarly work. It’s important to note that while Turnitin is a powerful tool, it should be used as part of a broader approach to teaching academic integrity and writing skills.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://www.turnitin.com/",
    buttonText: "Open Link",
  },
  {
    id: 6,
    title: "NPTEL",
    category: "E-Resources",
    description:
      "Initiated by seven Indian Institutes of Technology. The main goal of NPTEL Phase II was to build on the engineering and core science courses launched previously in NPTEL Phase I. An additional 600 web and video courses were created in all major branches of engineering, physical sciences at the undergraduate and postgraduate levels and management courses at the postgraduate level. Several improvements such as indexing of all video and web courses and keyword search were implemented. 3000+ courses are available for self-study.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://nptel.ac.in/",
    buttonText: "Open Link",
  },
  {
    id: 7,
    title: "National Digital Library of India (NDLI)",
    category: "E-Resources",
    description:
      "NDLI is a project under Ministry of Human Resource Development, India. The objective is to collect and collate metadata and provide full text index from several national and international digital libraries, as well as other relevant sources. It is a digital repository containing textbooks, articles, videos, audio books, lectures, simulations, fiction and all other kinds of learning media. The NDLI provides access to many books in English and various Indian languages. NDL hosts over 4,58,715+ items in its repository.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://club.ndl.iitkgp.ac.in/club-home",
    buttonText: "Open Link",
  },
  {
    id: 8,
    title: "IRINS",
    category: "E-Resources",
    description:
      "IRINS is a web-based Research Information Management (RIM) service developed by the Information and Library Network (INFLIBNET) Centre. The portal facilitates academic, R&D organizations and faculty members, scientists to collect, curate and showcase scholarly communication activities and provide an opportunity to create the scholarly network. The IRINS is available as free software-as-service to the academic and R&D organizations in India. The IRINS would support integration with existing research management systems such as HR, course management, grant management, institutional repository, and citation databases. It integrates with ORCID ID, Scopus ID, Research ID, Microsoft Academic ID, and Google Scholar ID.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://irins.org/",
    buttonText: "Open Link",
  },
  {
    id: 9,
    title: "INFEED",
    category: "E-Resources",
    description:
      "INDIAN Access Management Federation (INFED), the first Federation in India, has adopted Shibboleth, a standard-based open-source software, for authenticating authorized users from colleges and universities and providing seamless access to e-resources from anywhere, anytime. The INFLIBNET Centre, as one of its core mandates, provides access to scholarly e-resources to universities and colleges in India under e-ShodhSindhu. INFED is being set up as a centralized agency to coordinate user authentication and access control mechanisms using standardized rules and metadata.",
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
    href: "https://infeed.in/",
    buttonText: "Open Link",
  },
];

export default function LibraryResource({
  title = "E-Resources",
  subtitle = "Obtain access to premier libraries through your ERP portal.",
  resources = defaultResources,
}) {
  return (
    <section className="bg-white py-12">
      <style jsx global>{`
        .library-resource-pagination {
          display: flex;
          justify-content: center;
          gap: 18px;
          margin-top: 22px;
        }
        .library-resource-pagination .swiper-pagination-bullet {
          width: 78px;
          height: 6px;
          border-radius: 9999px;
          background: #d8d8d8;
          opacity: 1;
        }
        .library-resource-pagination .swiper-pagination-bullet-active {
          background: #f4a21a;
          width: 84px;
        }
      `}</style>

      <div className="w-full px-6 md:px-12">
        <div className="bg-[#F3F3F3] rounded-2xl px-8 md:px-12 py-10">
          <div className="text-center mb-8">
            <h2 className="mb-2 text-black">{title}</h2>
            <p className="text-black max-w-3xl mx-auto">{subtitle}</p>
          </div>

          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            grabCursor
            pagination={{ clickable: true, el: ".library-resource-pagination" }}
          >
            {resources.map((res) => (
              <SwiperSlide key={res.id}>
                <div className="relative grid grid-cols-1 md:grid-cols-12 rounded-xl overflow-hidden bg-white shadow-sm">
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 right-4 z-10 px-3 py-1 text-xs rounded-md bg-[var(--dark-blue)] text-white">
                    {res.category}
                  </span>

                  {/* Image */}
                  <div className="md:col-span-4 relative min-h-[220px] md:min-h-[260px]">
                    <Image
                      src={res.image}
                      alt={res.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-8 px-6 md:px-8 py-6 md:py-7 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl mb-2 text-black">
                      {res.title}
                    </h3>

                    <p className="text-black text-sm leading-relaxed">
                      {res.description}
                    </p>

                    <div className="mt-4">
                      <a href={res.href} target="_blank" rel="noreferrer">
                        <GlobalArrowButton className="text-sm">
                          {res.buttonText}
                        </GlobalArrowButton>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="library-resource-pagination" />
        </div>
      </div>
    </section>
  );
}
