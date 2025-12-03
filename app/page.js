import AboutCafe from "./components/home/AboutCafe";
import Chooseus from "./components/home/Chooseus";
import Footer from "./components/home/Footer";
import HeroSection from "./components/home/HeroSection";
import Navbar from "./components/home/Navbar";
import OfferBanner from "./components/home/OfferBanner";
import Photogallery from "./components/home/Photogallery";
import Popularcategory from "./components/home/Popularcategory";
import Specialmenu from "./components/home/Specialmenu";
import Testimonials from "./components/home/Testimonials";
import VisitUs from "./components/home/VisitUs";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Specialmenu/>
      <Chooseus/>
      <Popularcategory/>
      <OfferBanner/>
      <AboutCafe/>
      <Testimonials/>
      <Photogallery/>
      <VisitUs/>
    </>
  );
}
