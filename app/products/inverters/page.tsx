// app/solar-panels/page.tsx (Next.js 13+ App Router)
// or pages/solar-panels.tsx (Next.js 12)
"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import Image from "next/image";

export default function SolarPanelsPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-black">
        {/* Hero Section */}
        <section className="relative h-[50vh] w-full">
          <Image
            src="/images/products/pages/iinver.jpg"
            alt="Solar Panels Hero"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl font-bold">Solar Panels</h1>
            <p className="mt-4 text-lg max-w-2xl">
              Harness the power of the sun with our efficient and affordable
              solar solutions.
            </p>
          </div>
        </section>

        {/* Section: Types of Solar Panels */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#fad716]">
            Different Types of Highly Efficient Solar Panels
          </h2>

          {/* Pattern 1: Details | Image */}
          <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Monocrystalline Panels
              </h3>
              <p className="text-gray-700">
                High efficiency and sleek design. Perfect for homes with limited
                roof space. Known for durability and long lifespan.
              </p>
            </div>
            <Image
              src="/images/products/pages/inver.jpg"
              alt="Monocrystalline Panels"
              width={500}
              height={300}
              className="rounded-xl shadow-md hover:opacity-95 hover:brightness-90 transition"
            />
          </div>

          {/* Pattern 2: Image | Details */}
          <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
            <Image
              src="/images/products/pages/inver.jpg"
              alt="Polycrystalline Panels"
              width={500}
              height={300}
              className="rounded-xl shadow-md hover:opacity-95 hover:brightness-90 transition"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Polycrystalline Panels
              </h3>
              <p className="text-gray-700">
                A cost-effective option with decent efficiency. Great for large
                installations where space isn’t a concern.
              </p>
            </div>
          </div>

          {/* Pattern 3: Details | Image */}
          <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Thin-Film Panels</h3>
              <p className="text-gray-700">
                Lightweight and flexible. Ideal for irregular surfaces and
                portable solar solutions.
              </p>
            </div>
            <Image
              src="/images/products/pages/inver.jpg"
              alt="Thin-Film Panels"
              width={500}
              height={300}
              className="rounded-xl shadow-md hover:opacity-95 hover:brightness-90 transition"
            />
          </div>

          {/* Pattern 4: Image | Details */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Image
              src="/images/products/pages/inver.jpg"
              alt="Bifacial Panels"
              width={500}
              height={300}
              className="rounded-xl shadow-md hover:opacity-95 hover:brightness-90 transition"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Bifacial Panels</h3>
              <p className="text-gray-700">
                Capture sunlight from both sides, increasing efficiency.
                Commonly used in commercial projects.
              </p>
            </div>
          </div>
        </section>

        {/* Availability Section */}
        <section className="bg-[#fad716] py-10 text-center text-black">
          <h2 className="text-2xl font-bold">Available All Over Pakistan</h2>
          <p className="mt-2 text-lg">
            No matter where you live, we deliver and install solar panels
            nationwide.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
