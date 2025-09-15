import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export default function ContactUs() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Get in touch with us for any inquiries or to discuss your next
          project. Our team is ready to provide you with the best creative
          solutions.
        </p>

        {/* Content Section - Fixed to show two columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-4 lg:mx-10">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex flex-row items-center md:items-start text-center gap-4 md:text-left">
              <div className="p-3 bg-[#0098ff] rounded-xl w-fit">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-600 max-w-sm">
                  skylineproduction@yahoo.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-row items-center md:items-start text-center gap-4 md:text-left">
              <div className="p-3 bg-[#0098ff] rounded-xl w-fit">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">Call us</h3>
                <p className="text-gray-600 max-w-sm">+92 302 5070320</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-row items-center md:items-start text-center gap-4 md:text-left">
              <div className="p-3 bg-[#0098ff] rounded-xl w-fit">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">Visit us</h3>
                <p className="text-gray-600 max-w-sm">
                  13 Street Sector II G1 Islamabad
                </p>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Follow us on</h3>
              <div className="flex gap-4">
                {/* Instagram */}
                <div className="p-3 bg-[#0098ff] rounded-xl w-fit text-white transition-transform duration-300 hover:rotate-12">
                  <Instagram className="w-6 h-6" />
                </div>

                {/* Facebook */}
                <div className="p-3 bg-[#0098ff] rounded-xl w-fit text-white transition-transform duration-300 hover:rotate-12">
                  <Facebook className="w-6 h-6" />
                </div>

                {/* TikTok */}
                <div className="p-3 bg-[#0098ff] rounded-xl w-fit text-white transition-transform duration-300 hover:rotate-12">
                  <MessageCircle className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0098ff]"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0098ff]"
                  placeholder="Your email address"
                />
              </div>

              {/* Service Type Field */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Service type
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0098ff]"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="filmography">Filmography</option>
                  <option value="video-graphy">Video Graphy</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="creative-media">
                    Creative Media Solutions
                  </option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0098ff]"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0098ff] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
