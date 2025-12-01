import AboutCafe from "./components/AboutCafe";
import Chooseus from "./components/Chooseus";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OfferBanner from "./components/OfferBanner";
import Popularcategory from "./components/Popularcategory";
import Specialmenu from "./components/Specialmenu";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Specialmenu/>
      <Chooseus/>
      <Popularcategory/>
      <OfferBanner/>
      <AboutCafe/>
    </>
  );
}
