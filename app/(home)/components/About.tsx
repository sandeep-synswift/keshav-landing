"use client";

import { Button, Text } from "@/components/common";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  const features = [
    {
      image: "/assets/photos/trust/trustone.png",
      title: "A Full Team Behind Every Case.",
      description:
        "With Avvocats, you're backed by a full team, from legal experts to engineers and client success. Everyone is aligned to deliver the strongest possible outcome for your case.",
    },
    {
      image: "/assets/photos/trust/trusttwo.png",
      title: "Seamless Communication, Total Transparency",
      description:
        "With Avvocats, you're backed by a full team, from legal experts to engineers and client success. Everyone is aligned to deliver the strongest possible outcome for your case.",
    },
    {
      image: "/assets/photos/trust/trustthree.png",
      title: "Real-Time Intelligence, Always Up-to-Date",
      description:
        "With Avvocats, you're backed by a full team, from legal experts to engineers and client success. Everyone is aligned to deliver the strongest possible outcome for your case.",
    },
  ];

  const nextFeature = () => {
    // Future carousel functionality
  };

  const prevFeature = () => {
    // Future carousel functionality
  };

  return (
    <section
      id="about-us"
      className="bg-[#f5f5f0] text-black py-16 relative overflow-hidden scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Informational Bar */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-200/50 px-4 py-2 rounded-l-lg">
            <FaArrowRight className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">
              What You Need To Know About Working With Avvocats
            </span>
          </div>
        </div>

        {/* Central Content Area */}
        <div className="flex flex-col items-start md:items-center md:text-center text-start mb-16">
          {/* Brand Identifier */}
          <p className="text-secondary-500 text-sm font-semibold uppercase tracking-wider mb-4">
            AVVOCATS
          </p>

          {/* Main Heading */}
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            Why You Can Trust Avvocats Law
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-700 max-w-3xl mb-8">
            We combine top-tier legal talent with cutting-edge software to bring
            you superior outcomes.
          </p>

          {/* CTA Button */}
          <Button
            as="link"
            href="#contact"
            variant="primary"
            size="large"
            className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Request a free consultation
            <FaArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Feature Cards Section */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevFeature}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full items-center justify-center text-gray-700 transition-all duration-300 shadow-md -ml-6"
            aria-label="Previous feature"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextFeature}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full items-center justify-center text-gray-700 transition-all duration-300 shadow-md -mr-6"
            aria-label="Next feature"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 space-y-4 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Feature Image */}
                <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Feature Content */}
                <div className="">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
