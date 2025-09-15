"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AboutUs() {
  const router = useRouter();
  return (
    <section
      id="about"
      className="relative py-16 px-6 md:px-12 bg-gray-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative group overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/about-us.jpg"
            alt="About Skyline Production"
            width={1200} // pick a width close to your design
            height={400} // height to match aspect ratio
            className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h2 className="absolute bottom-4 left-4 text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
            Who We Are
          </h2>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            The Sky Line Production
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            At Skyline Production, we believe in the power of creativity and
            innovation. With years of experience in media production, our team
            delivers high-quality visuals, films, and branding solutions that
            leave a lasting impact.
          </p>

          <button
            onClick={() => router.push("/about")}
            className="self-start px-6 py-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all duration-300"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
