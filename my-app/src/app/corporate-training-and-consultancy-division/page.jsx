import HeroSectionTwo from '../components/general/hero-section-two';
import MainIntro from '../components/about/main_intro';
export default function CorporateTrainingAndConsultancyDivision() {
  return (
    <>
      <HeroSectionTwo />
      <MainIntro 
        title="Corporate Training And Consultancy Division (CTCD)"
        description="Due to increasing competition in the domestic and international markets, political influence, and technological advancements, organisations find it difficult to compete in the marketplace."
        points={[
          "Enhancing employee skills through targeted training programs aligned with industry needs",
          "Providing strategic consultancy services to help organizations navigate complex business challenges",
          "Developing customized training modules tailored to specific organizational requirements",
          "Fostering innovation and continuous learning culture within corporate environments",
          "Building strong partnerships with industry leaders to deliver world-class training solutions"
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd-1.png"
        imageAlt="CTCD"
      />
    </>
  );
}