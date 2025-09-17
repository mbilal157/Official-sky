"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const portfolioItems = [
  {
    id: 1,
    category: "Graphic Design",
    title: "Logos",
    subtitle: "Unique and memorable logo designs for brands",
    image: "/images/whyus.jpg",
  },
  {
    id: 2,
    category: "Graphic Design",
    title: "Posters and Banners",
    subtitle: "Eye-catching posters and banners for promotions",
    image: "/images/whyus.jpg",
  },
  {
    id: 3,
    category: "Video Editing",
    title: "Instagram Post",
    subtitle: "Engaging edits tailored for Instagram posts",
    image: "/images/whyus.jpg",
  },
  {
    id: 4,
    category: "Video Editing",
    title: "Stories and Highlights",
    subtitle: "Dynamic video stories and highlight reels",
    image: "/images/whyus.jpg",
  },
  {
    id: 5,
    category: "Video Editing",
    title: "Reels and Shorts",
    subtitle: "Trendy reels and shorts with creative cuts",
    image: "/images/whyus.jpg",
  },
  {
    id: 6,
    category: "Social Media Design",
    title: "Social Media Campaign",
    subtitle: "Complete design sets for impactful campaigns",
    image: "/images/whyus.jpg",
  },
  {
    id: 7,
    category: "Social Media Design",
    title: "YouTube Thumbnails",
    subtitle: "Attention-grabbing thumbnails to boost clicks",
    image: "/images/thumbnail.jpg",
  },
  {
    id: 8,
    category: "Social Media Design",
    title: "Facebook and LinkedIn Banners",
    subtitle: "Professional banners for social media branding",
    image: "/images/whyus.jpg",
  },
  {
    id: 9,
    category: "Graphic Design",
    title: "Business Cards",
    subtitle: "Modern and professional business card designs",
    image: "/images/whyus.jpg",
  },
];

const categories = [
  "All",
  "Graphic Design",
  "Social Media Design",
  "Video Editing",
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resolvedTheme = mounted
    ? theme === "system"
      ? systemTheme ?? "light"
      : theme ?? "light"
    : "light";

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter]);

  if (!mounted) {
    // Skeleton while waiting for theme resolution
    return (
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-6 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-56 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-20 px-6 transition-colors duration-300 ${
        resolvedTheme === "dark"
          ? "bg-[url('/images/bg3.jpg')] bg-cover bg-center text-gray-100"
          : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">Our Portfolio</h2>

        {/* Paragraph */}
        <p
          className={`text-center max-w-2xl mx-auto mb-12 ${
            resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
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
                  : resolvedTheme === "dark"
                  ? "bg-transparent text-white hover:bg-[#0098ff]/20"
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
              className={`group overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer
        ${resolvedTheme === "dark" ? "bg-[#1e1d1d]" : "bg-white"}`}
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className={`text-sm font-semibold mb-1 ${
                    resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.category}
                </h3>
                <h2
                  className={`text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#0098ff] ${
                    resolvedTheme === "dark" ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  {item.title}
                </h2>
                <p
                  className={`text-sm ${
                    resolvedTheme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
