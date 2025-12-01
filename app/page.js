import AboutCafe from "./components/AboutCafe";
import Chooseus from "./components/Chooseus";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OfferBanner from "./components/OfferBanner";
import Photogallery from "./components/Photogallery";
import Popularcategory from "./components/Popularcategory";
import Specialmenu from "./components/Specialmenu";
import Testimonials from "./components/Testimonials";
import VisitUs from "./components/VisitUs";

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
      <Testimonials/>
      <Photogallery/>
      <VisitUs/>
      <Footer/>
    </>
  );
}
