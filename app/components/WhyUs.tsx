"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaBolt,
  FaLeaf,
  FaPiggyBank,
  FaSolarPanel,
  FaRecycle,
} from "react-icons/fa";

export default function WhyUs() {
  const [imageError, setImageError] = useState(false);
  return (
    <section className="py-16 px-4 bg-[#fad716] rounded-tl-[4rem]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Solar with Us?
            </h2>
            <p className="text-lg text-gray-900 mb-10">
              We provide sustainable and cost-effective solar energy solutions
              that help you save money, protect the environment, and enjoy a
              reliable power source for years to come.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="text-gray-800 text-3xl">
                  <FaBolt />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Reduce Electricity Bills
                  </h3>
                  <p className="text-gray-800">
                    Generate your own clean power and cut down monthly expenses.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="text-gray-800 text-3xl">
                  <FaLeaf />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Zero Carbon Emissions
                  </h3>
                  <p className="text-gray-800">
                    Switch to renewable energy and reduce your carbon footprint.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="text-gray-800 text-3xl">
                  <FaPiggyBank />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Long-Term Savings
                  </h3>
                  <p className="text-gray-800">
                    Invest once and enjoy decades of reduced energy costs.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="text-gray-800 text-3xl">
                  <FaSolarPanel />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Durable Solar Panels
                  </h3>
                  <p className="text-gray-800">
                    High-quality panels built to withstand harsh weather.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex gap-4 md:col-span-2">
                <div className="text-gray-800 text-3xl">
                  <FaRecycle />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Renewable Energy Source
                  </h3>
                  <p className="text-gray-800">
                    A clean, infinite energy source powering your future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2 relative h-130 w-full">
            {imageError ? (
              <div className="bg-gray-200 w-full h-full rounded-lg flex items-center justify-center">
                <span>Image not available</span>
              </div>
            ) : (
              <Image
                src="/images/whyus.jpg"
                alt="Why choose solar energy"
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 780px) 100vw, 50vw"
                priority
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
