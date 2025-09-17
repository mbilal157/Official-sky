"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
//import { MaskContainer } from "./ui/svg-mask-effect";

const HeroSection = () => {
  const { theme, systemTheme } = useTheme();
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  return (
    <section className="hero-background flex flex-col items-center justify-center min-h-screen text-center transition-colors duration-300">
      {/* Logo */}
      <div className="w-20 h-20 mb-6">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={80}
          height={80}
          className={`w-full h-full object-contain transition-transform duration-300 hover:scale-110 ${
            resolvedTheme === "light" ? "block" : "hidden"
          }`}
        />
        <Image
          src="/images/logo1.png"
          alt="logo"
          width={80}
          height={80}
          className={`w-full h-full object-contain  transition-transform duration-300 hover:scale-110 ${
            resolvedTheme === "dark" ? "block" : "hidden"
          }`}
        />
      </div>

      {/* Heading - Use your CSS variables */}
      <h1 className="text-3xl md:text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">
        Beyond <span className="text-[#0098ff]">Limits</span>, Above The Skyline
        Of <span className="text-[#0098ff]">Creativity</span>
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-6">
        Where ideas turn into visual masterpieces
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-2xl bg-[#0098ff] text-white hover:bg-[#068be3] transform hover:scale-105 transition-transform duration-200 flex items-center gap-2">
          Explore Our Work
          <span>→</span>
        </button>
        <button className="px-6 py-2 rounded-2xl border border-[#0098ff] text-[#0098ff] hover:bg-blue-50 dark:hover:bg-blue-900/30 transform hover:scale-105 transition-transform duration-200">
          Get started today
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
