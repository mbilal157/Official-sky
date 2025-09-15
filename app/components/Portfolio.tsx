"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    category: "Graphic Design",
    title: "Brand Identity Design",
    subtitle: "Complete brand identity for a tech startup",
    image: "/images/whyus.jpg",
  },
  {
    id: 2,
    category: "Web Development",
    title: "E-commerce Platform",
    subtitle: "Full-stack e-commerce solution with payment integration",
    image: "/images/whyus.jpg",
  },
  {
    id: 3,
    category: "Filmography",
    title: "Documentary Series",
    subtitle: "Award-winning documentary on climate change",
    image: "/images/whyus.jpg",
  },
  {
    id: 4,
    category: "Video Graphy",
    title: "Wedding Highlights",
    subtitle: "Cinematic wedding video with drone footage",
    image: "/images/whyus.jpg",
  },
  {
    id: 5,
    category: "Video Editing",
    title: "Commercial Ad Campaign",
    subtitle: "30-second TV commercial for a national brand",
    image: "/images/whyus.jpg",
  },
  {
    id: 6,
    category: "Creative media solutions",
    title: "Social Media Campaign",
    subtitle: "Multi-platform campaign for a fashion brand",
    image: "/images/whyus.jpg",
  },
  {
    id: 7,
    category: "Graphic Design",
    title: "Packaging Design",
    subtitle: "Sustainable packaging for organic products",
    image: "/images/whyus.jpg",
  },
  {
    id: 8,
    category: "Web Development",
    title: "Mobile App UI",
    subtitle: "User interface for a fitness tracking application",
    image: "/images/whyus.jpg",
  },
  {
    id: 9,
    category: "Filmography",
    title: "Short Film",
    subtitle: "Dramatic short film selected for international festivals",
    image: "/images/whyus.jpg",
  },
];

const categories = [
  "All",
  "Graphic Design",
  "Web Development",
  "Filmography",
  "Video Graphy",
  "Video Editing",
  "Creative media solutions",
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">Our Portfolio</h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our creative work across various domains. Each project
          represents our dedication to quality and innovation.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full border border-[#0098ff] transition-all duration-300 ${
                activeFilter === category
                  ? "bg-[#0098ff] text-white"
                  : "bg-white text-black hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer"
            >
              {/* Image Container - 75% of card */}
              <div className="h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600} // pick approximate natural size
                  height={400} // required, can be overridden by Tailwind
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Container - 25% of card */}
              <div className="p-5">
                <h3 className="text-sm font-semibold text-gray-600 mb-1">
                  {item.category}
                </h3>
                <h2 className="text-xl font-bold text-gray-700 transition-colors duration-300 group-hover:text-[#0098ff] mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
