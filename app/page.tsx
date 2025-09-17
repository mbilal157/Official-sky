import FeaturesSection from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import CreativeServices from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/Contact";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <FeaturesSection />
      <CreativeServices />
      <Portfolio />
      <ContactUs />
      <Footer />
    </>
  );
}
