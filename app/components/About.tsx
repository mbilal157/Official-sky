import { Briefcase, Code, Users } from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="flex flex-col bg-blue-50 items-center justify-center py-20 px-6 text-center">
      {/* Heading + Paragraph */}
      <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
      <p className="text-gray-600 max-w-2xl mb-12">
        We deliver modern solutions with creativity, helping businesses scale
        through innovation, design, and cutting-edge development.
      </p>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Column - Components */}
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex flex-row items-center md:items-start text-center gap-4 md:text-left">
            <div className="p-4 bg-[#0098ff] rounded-2xl w-fit">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Professional Approach</h3>
              <p className="text-gray-600 max-w-sm">
                We work with structured processes ensuring smooth project
                delivery.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-row items-center md:items-start text-center gap-4 md:text-left">
            <div className="p-4 bg-[#0098ff] rounded-2xl w-fit">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Clean Code</h3>
              <p className="text-gray-600 max-w-sm">
                Our development follows industry best practices to keep your
                product scalable.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-row items-center md:items-start text-center gap-4 md:text-left">
            <div className="p-4 bg-[#0098ff] rounded-2xl w-fit">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Trusted by Clients</h3>
              <p className="text-gray-600 max-w-sm">
                Over 100+ businesses have trusted us for their digital journey.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image with Overlapping Badge */}
        <div className="relative flex justify-center">
          <Image
            src="/images/whyus.jpg"
            alt="Features"
            width={500}
            height={300}
            className="rounded-2xl h-96 w-80 ml-[-50px] shadow-lg object-cover"
          />
          {/* Overlapping Badge */}
          <div className="absolute bottom-0 left-0 -mb-5 -ml-5 bg-white text-[#0098ff] px-6 py-4 rounded-2xl shadow-lg">
            <span className="text-sm font-bold">
              100+
              <br /> Projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
