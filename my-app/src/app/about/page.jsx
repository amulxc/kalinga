import AboutHero from "../components/about/AboutHero";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import WhoWeAre from "../components/about/who_we_are";
import OurJourney from "../components/about/our_journey";
import CenterOfExcellence from "../components/about/center_of_excellence";
import Leadership from "../components/about/leadership";
import Facility from "../components/admissions/facility";
import AccreditationRanking from "../components/home/AccreditationRanking";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
import AdmissionCareer from "../components/general/admission_cta";
import FeatureCards from "../components/home/featurecard";
import GlobalPresence from "../components/home/global_presence";

const aboutFeatureCards = [
  { 
    id: 1, 
    title: 'Academic Excellence', 
    body: 'Kalinga University offers world-class education with experienced faculty, modern curriculum, and industry-aligned programs designed to prepare students for successful careers.', 
    variant: 'amber' 
  },
  { 
    id: 2, 
    title: 'State-of-the-Art Infrastructure', 
    body: 'Our campus features modern laboratories, well-equipped classrooms, advanced research facilities, and cutting-edge technology to support comprehensive learning experiences.', 
    variant: 'gray' 
  },
  { 
    id: 3, 
    title: 'Industry Partnerships', 
    body: 'Strong collaborations with leading industries provide students with internship opportunities, live projects, and placement assistance to bridge the gap between academia and industry.', 
    variant: 'amber' 
  },
  { 
    id: 4, 
    title: 'Student Support Services', 
    body: 'Comprehensive support including career counseling, mentorship programs, scholarship opportunities, and extracurricular activities to ensure holistic development of every student.', 
    variant: 'gray' 
  },
  { 
    id: 5, 
    title: 'Student Support Services', 
    body: 'Comprehensive support including career counseling, mentorship programs, scholarship opportunities, and extracurricular activities to ensure holistic development of every student.', 
    variant: 'gray' 
  },
];

export default function About() {
  return (
    <div>
      <MainIntro />
      <AccreditationRanking />
      <VisionMission />
      <WhoWeAre />
      <Leadership />
      <AccreditationRanking />
      <OurJourney />
    <CenterOfExcellence />
    <OrganogramOfKalinga />
    <FeatureCards 
      isSlider={true}
      cards={aboutFeatureCards}
      title="Discover What Makes Kalinga University Exceptional"
      fullText="Kalinga University stands as a beacon of academic excellence, committed to nurturing future leaders through innovative education, cutting-edge research, and holistic development. Our institution combines traditional values with modern teaching methodologies to create an environment where students can thrive academically, professionally, and personally. With state-of-the-art facilities, experienced faculty, and strong industry connections, we provide a comprehensive educational experience that prepares students for success in their chosen fields."
      truncatedText="Kalinga University stands as a beacon of academic excellence, committed to nurturing future leaders through innovative education, cutting-edge research, and holistic development."
      hiddenText=" Our institution combines traditional values with modern teaching methodologies to create an environment where students can thrive academically, professionally, and personally. With state-of-the-art facilities, experienced faculty, and strong industry connections, we provide a comprehensive educational experience that prepares students for success in their chosen fields."
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
      imageAlt="Kalinga University campus"
    />
    <Facility />
    <GlobalPresence 
      subtitle="Global Presence"
      title="Building Bridges Across Continents"
      description="Kalinga University welcomes students from over 50 countries, creating a vibrant multicultural community. Through international exchange programs, collaborative research initiatives, and diverse cultural activities, we prepare students to become global citizens ready to make a positive impact worldwide."
      logos={['Infosys','Citi','Microsoft','Adobe','Cognizant','PayPal']}
      imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/globe-skin-color.png"
      imageAlt="Kalinga University global presence map"
      subtitleColor="text-[var(--button-red)]"
      titleColor="text-[var(--foreground)]"
      descriptionColor="text-gray-600"
      backgroundColor="bg-transparent"
    />
    <AdmissionCareer />
    </div>
  );
}

