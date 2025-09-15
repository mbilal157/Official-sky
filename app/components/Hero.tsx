import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-white">
      {/* Logo */}
      <div className="w-20 h-20 mb-6">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="w-full h-full object-contain rounded-lg shadow-md shadow-black/30 transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to Our Website
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        We build modern solutions for your business
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-2xl bg-[#0098ff] text-white hover:bg-[#068be3] transform hover:scale-105 transition-transform duration-200 flex items-center gap-2">
          Explore Our Work
          <span>→</span>
        </button>
        <button className="px-6 py-2 rounded-2xl border border-[#0098ff] text-[#0098ff] hover:bg-blue-50 transform hover:scale-105 transition-transform duration-200">
          Get started today
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
