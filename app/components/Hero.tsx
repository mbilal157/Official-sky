"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MaskContainer } from "./ui/svg-mask-effect";

const HeroSection = () => {
  const { theme, systemTheme } = useTheme();
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  return (
    <section className="hero-background flex flex-col items-center justify-center min-h-screen text-center transition-colors duration-300">
      {/* Logo */}
      <div className="w-30 h-25 mb-6">
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

      <div className="flex h-[15rem] w-full items-center justify-center overflow-hidden">
        <MaskContainer
          size={100}
          revealSize={200}
          revealText={
            <p className="mx-auto max-w-4xl text-center mb-2 text-4xl font-bold text-slate-600 dark:text-white">
              Beyond <span className="text-blue-500">Limits</span>, Above The
              Skyline Of <span className="text-blue-500">Creativity</span>
            </p>
          }
          className="h-[15rem] rounded-md text-white dark:text-black"
        >
          Where ideas turn into visual masterpieces
        </MaskContainer>
      </div>

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
