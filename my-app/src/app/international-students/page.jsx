"use client";

import React from 'react'   
import MainIntro from '../components/about/main_intro'
import PublicationGrid from '../components/research/publication-grid'
import AccreditationRanking from '../components/home/AccreditationRanking'
import FeatureCards from "../components/home/featurecard";
import ImageListItem from '../components/ccrc/imagelistitem';
import StudentCell from '../components/international-students/student_cell';
import AdmissionSteps from '../components/admissions/admission-steps';
import AppreciationLetterLayout from '../components/international-students/appreciation_letter_layout';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';
import MediaCardSlider from '../components/general/media-card-slider';
import UpcomingConference from '../components/research/upcoming_conference';
import Gallery from '../components/campuslife/campusgallery';
import AdmissionCareer from '../components/general/admission_cta';

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-students-banner.webp",
  pageTitle: "International Students",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'International Students', href: '/international-students' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

export default function InternationalStudents() {
  const newsConferences = [
    {
      id: 1,
      title: "Annual Research Symposium 2025",
      date: "November 10 · 2025",
      category: "Research & Innovation",
      description: "Join us for our annual research symposium featuring cutting-edge research presentations, keynote speakers, and networking opportunities for researchers and academics.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 2,
      title: "International Education Summit",
      date: "December 05 · 2025",
      category: "Education",
      description: "A global gathering of educators, policymakers, and thought leaders to discuss the future of higher education and innovative teaching methodologies.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 3,
      title: "Technology & Innovation Conference",
      date: "January 20 · 2026",
      category: "Technology",
      description: "Explore the latest trends in technology, artificial intelligence, and digital transformation in education and industry applications.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
  ]
  const videoItems = [
    {
      id: 1,
      name: "Name",
      description: "Lorem ipsum",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 2,
      name: "Name",
      description: "Lorem ipsum",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 3,
      name: "Name",
      description: "Lorem ipsum",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },  
  ]
  const boxItems = [
    {
      id: 1,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]
  const internationalStudentsFeatureCards = [
    {
      id: 1,
      title: 'Holistic Development And Explorative Learning',
      body: 'With our 360-degree learning approach, your learning will not be limited to just classroom-based studies, but you will also learn practical skills through interactive workshops, hands-on training programs, industrial visits, project work, and case studies.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Holistic+Development.svg',
      variant: 'gray',
    },
    {
      id: 2,
      title: 'Choose From Diverse Programs',
      body: 'Our programs are designed to provide updated industry-relevant knowledge to our students. From Fashion Designing to Biotechnology, choose from unlimited career options.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Wide+Range+of+Programs.svg',
      variant: 'amber',
    },
    {
      id: 3,
      title: 'English Is Our Primary Language',
      body: 'English is one of the widely spoken languages in the world, and at Kalinga, you will not face any language barrier. All our programs are taught in English by highly qualified professors, and your friends from all around the Globe will even communicate with you in English.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Global.svg',
      variant: 'gray',
    },
    {
      id: 4,
      title: 'Co-curricular And Extracurricular Activities',
      body: 'Participate in competitions, workshops, events, seminars, National and International conferences, training programs, tribal fests, and more. The University also offers indoor and outdoor sports facilities and even conducts sports competitions.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Cultural+Celebrations.svg',
      variant: 'amber',
    },
    {
      id: 5,
      title: 'Extensive Research Facilities',
      body: "With 90 + Labs, including IT Labs and CIF labs, we're Chhattisgarh's No. 1 institute, committed to innovation and groundbreaking research facilities.",
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Extensive+Research+Facilities.svg',
      variant: 'gray',
    },
    {
      id: 6,
      title: 'Build Networks And Lifelong Connections',
      body: "Here, you'll not just study but collaborate, meet industry leaders, make new connections, learn new languages, participate in multi-cultural programs, and grow together.",
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Networking+Opportunities.svg',
      variant: 'amber',
    },
    {
      id: 7,
      title: 'Multicultural Environment',
      body: 'With students from different countries, our campus buzzes with high energy, new cultures, ideas, friendships, and celebrations.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Cultural+Celebrations.svg',
      variant: 'gray',
    },
    {
      id: 8,
      title: 'Unmatched Support and Guidance',
      body: 'We let our students enjoy their academic journey without any obstacles, as our international student cell guides them at every step. From enrollment in a program till the convocation ceremony, we ensure that they get a seamless experience.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Mentor-Mentee+System.svg',
      variant: 'amber',
    },
    {
      id: 9,
      title: 'Residential Facilities',
      body: 'We have well-furnished separate hostels for both boys and girls for our international students where all their needs are properly taken care of and they can live comfortably in a supportive environment.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/campus+life.svg',
      variant: 'gray',
    },
    {
      id: 10,
      title: 'Enjoy an Economical Lifestyle',
      body: 'Enjoy a vibrant lifestyle at a feasible rate in Raipur, Chhattisgarh. From affordable shopping markets to transportation systems, enjoy a rich culture and diversity.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Community+Services.svg',
      variant: 'amber',
    },
  ];
  
  const publicationStats = [
    {
      id: 1,
      title: "Students",
      value: 8000,
      description: "Students",
    },
    {
      id: 2,
      title: "International students from",
      value: 600,
      description: "International students from",
    },
    {
      id: 3,
      title: "Countries",
      value: 29,
      description: "Countries",
    },
    {
      id: 4,
      title: "Scholarships Distributed",
      value: 3,
      description: "3 Cr. + Scholarships Distributed",
    },
    {
      id: 5,
      title: "Programs",
      value: 130,
      description: "Programs",
    },
    {
      id: 6,
      title: "Recruitment Partners",
      value: 250,
      description: "Recruitment Partners",
    },
    {
      id: 7,
      title: "Research Publications",
      value: 3360,
      description: "Research Publications",
    },
    {
      id: 8,
      title: "Patents",
      value: 510,
      description: "Patents",
    },
    {
      id: 9,
      title: "Sponsored Research Projects",
      value: 160,
      description: "Sponsored Research Projects",
    },
    {
      id: 10,
      title: "Consultancy Projects",
      value: 130,
      description: "Consultancy Projects",
    },
    {
      id: 11,
      title: "MoUs Signed",
      value: 200,
      description: "MoUs Signed",
    },
    {
      id: 12,
      title: "Centres of Excellence",
      value: 7,
      description: "Centres of Excellence",
    },
    {
      id: 13,
      title: "Laboratories",
      value: 90,
      description: "Laboratories",
    },
  ]

  const internationalAdmissionSteps = [
    {
      id: 1,
      stepNumber: "01",
      title: "Step 1",
      description: "Document Verification",
      backDescription: "Document Verification",
    },
    {
      id: 2,
      stepNumber: "02",
      title: "Step 2",
      description: "Offer letter will be issued after checking the eligibility",
      backDescription: "Offer letter will be issued after checking the eligibility",
    },
    {
      id: 3,
      stepNumber: "03",
      title: "Step 3",
      description: "Registration fee of USD 300 is to be paid to the University, and share the proof of payment with us over email",
      backDescription: "Registration fee of USD 300 is to be paid to the University, and share the proof of payment with us over email",
    },
    {
      id: 4,
      stepNumber: "04",
      title: "Step 4",
      description: "Admission Letter and Visa Letter will be issued by the University. You need to contact the nearest Indian Embassy / High Commission to initiate the Student Visa Process",
      backDescription: "Admission Letter and Visa Letter will be issued by the University. You need to contact the nearest Indian Embassy / High Commission to initiate the Student Visa Process",
    },
  ]
  return (
    <>
      <MainIntro
        title="International Students At KU"
        description="Kalinga University, established in 2013, stands out as one of the leading private universities strategically located in the Smart City of New Raipur, Chhattisgarh. The University has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year and has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education with equal opportunities to its international students."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-main-intro.webp"
        imageAlt="International Students"
      />
      <PublicationGrid stats={publicationStats} />
      <AccreditationRanking
        heading="Accreditations & Rankings"
        secondHeading=""
      />
      <FeatureCards 
        title="Why is Kalinga University the Right Choice?"
        subtitle=""
        description="At Kalinga University, our international students benefit from complete support and guidance, world-class infrastructure, and unmatched campus facilities. With our quality education system, our global students will be well-prepared for the professional world. Here, we just don't value your academic journey, but care about your emotional well-being too."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
        imageAlt="International Students"
        cards={internationalStudentsFeatureCards}
      />        
       <ImageListItem 
         imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/kif.webp" 
         boxItems={boxItems} 
         title="Why Study At India" 
         subtitle="" 
         description="The number of international students choosing India for higher education is increasing due to its high-quality and affordable education system. India is one of the fastest-developing countries in the world, providing young aspirants with the opportunity to research, innovate, and contribute to global progress. The country’s education system is becoming globally competitive with the implementation of the New Education Policy 2020. The rise in international students choosing Indian institutes shows their desire to study and grow in a leading economy. "
         className="bg-white"
         textClassName="text-white"
         headingClassName="" 
         cardBackgroundColor="bg-[var(--button-red)]"
         cardTitleClassName="text-white"
       /> 
      <StudentCell />
      <AdmissionSteps   
        steps={internationalAdmissionSteps}
        bgColor="bg-[var(--background)]"
      />
      <AppreciationLetterLayout />
      <MainIntro
        title="International Students At KU"
        description="Kalinga University, established in 2013, stands out as one of the leading private universities strategically located in the Smart City of New Raipur, Chhattisgarh. The University has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year and has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education with equal opportunities to its international students."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-students-group.webp"
        imageAlt="International Students"
        reverseLayout={true}
        applyTransform3dSlant={false}
      />
      <OrganogramOfKalinga
        title="Download Brochure 2025-26"
        description="Kalinga University follows a well-defined governance structure that ensures smooth administration, transparency, and institutional excellence."
        buttonLabel="Download PDF"
        href="/about-us"
      />
      <MainIntro 
        title="International Students At KU"
        description="Kalinga University, established in 2013, stands out as one of the leading private universities strategically located in the Smart City of New Raipur, Chhattisgarh. The University has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year and has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education with equal opportunities to its international students."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-students-group.webp"
        imageAlt="International Students"
        reverseLayout={false}
        applyTransform3dSlant={true}
      />
      <MediaCardSlider
        categoryTitle="Video Interviews"
        title="Lorem ipsum dolor sit amet, consectetur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass=""
        swiperClassName="ccrc-video-slider"
      />
      <UpcomingConference 
        conferences={newsConferences}
        title="Upcoming Conferences & Events"
        backgroundColor="bg-[var(--light-gray)]"
        backgroundColorcard="bg-white"
        showCategory={false}
        showDate={false}
        imageWidth={300}
        imageHeight={300}
        imageContainerClass="w-full md:w-1/3 flex justify-center"
      />
      <Gallery title="International Students Glimpse" /> 
      <AdmissionCareer />
    </>
  )
}