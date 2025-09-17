import FeaturesSection from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import CreativeServices from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/Contact";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main className="pt-1">
      {" "}
      <HeroSection />
      <AboutUs />
      <FeaturesSection />
      <CreativeServices />
      <Portfolio />
      <ContactUs />
      <Footer />
    </main>
  );
}
