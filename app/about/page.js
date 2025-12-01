import AboutHero from "../components/about/AboutHero";
import CafeStory from "../components/about/CafeStory";
import CafeEnvironment from "../components/about/CafeEnvironment";
import QualityIngredients from "../components/about/QualityIngredients";
import TeamSection from "../components/about/TeamSection";
import Chooseus from "../components/Chooseus";
import MiniGallery from "../components/about/MiniGallery";
// import VisitUs from "../components/VisitUs";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CafeStory />
      <CafeEnvironment />
      <QualityIngredients />
      <TeamSection />
      <Chooseus />
      <MiniGallery />
    </>
  );
}
