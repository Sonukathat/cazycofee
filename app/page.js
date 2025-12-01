import Chooseus from "./components/Chooseus";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
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
    </>
  );
}
