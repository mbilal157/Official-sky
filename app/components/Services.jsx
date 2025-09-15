"use client";
import { useState } from "react";
import { Code, Palette, Smartphone } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Graphic Design",
    subtitle: "Modern & Responsive Websites",
    features: [
      "Logos & Branding",
      "Posters & Flyers",
      "Business Cards & Stationery",
      "Custom Illustrations / Vector Work",
    ],
    href: "/services/graphic-design",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Social Media Design",
    subtitle: " ",
    features: [
      "Instagram Posts",
      "Stories & Highlights",
      "Facebook & LinkedIn Banners",
      "YouTube Thumbnails & Channel Art",
    ],
    href: "/services/social-media-design",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Video Editing",
    subtitle: "Native & Cross-Platform",
    features: [
      "Reels & Shorts (15–60 sec)",
      "Corporate / Promo Videos",
      "Event Highlights",
      "Motion Graphics / Typography Videos",
    ],
    href: "/services/video-editing",
  },
];

export default function CreativeServices() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Creative Services
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          We offer a comprehensive suite of digital services to help your
          business thrive in the modern landscape. Our team of experts delivers
          innovative solutions tailored to your specific needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block bg-blue-50 border border-[#b9dff6] rounded-xl p-6 transition-all duration-300 hover:bg-[#cbe6f7]"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon Box */}
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:rotate-12 ${
                  hoveredCard === index ? "bg-white" : "bg-[#0098ff]"
                }`}
              >
                <div
                  className={
                    hoveredCard === index ? "text-[#0098ff]" : "text-white"
                  }
                >
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className="mb-4 text-gray-600">{service.subtitle}</p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-lg mr-2 text-[#0098ff]">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link - Only shows on hover */}
              {hoveredCard === index && (
                <div className="flex items-center text-[#0098ff] font-medium mt-4">
                  <span>Learn more</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
