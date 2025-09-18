"use client";

import HeroSection from "./components/Hero";
import AboutUs from "./components/AboutUs";
import FeaturesSection from "./components/About";
import CreativeServices from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero should be separate */}
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
