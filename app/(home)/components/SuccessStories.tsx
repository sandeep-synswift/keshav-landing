"use client";

import { Button, Text } from "@/components/common";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function SuccessStories() {
  const successStories = [
    {
      approvalTag: "O-1A approved in: 19 days",
      title: "Leader in Film and Media",
      description:
        "A filmmaker from the UK with major awards, critical acclaim, and leadership in prestigious productions secured an O-1A approval in just nine days, with no RFE. Avvocats's strategic presentation of their recognition, influence, and high-value work made the case clear and compelling to USCIS.",
    },
    {
      approvalTag: "EB-1A approved in: 13 days",
      title: "Energy and Utility Professional",
      description:
        "Avvocats secured EB-1A approval for an Indian technology leader with major contributions in software engineering, cloud computing, cybersecurity, and AI. By highlighting leadership roles, scholarly work, and original innovations, the case was approved quickly and without an RFE.",
    },
    {
      approvalTag: "EB-2 NIW approved",
      title: "Automotive Engineer",
      description:
        "Avvocats secured EB-2 NIW approval for an Indian automotive engineer specializing in climate control and energy efficiency. With evidence of patents, leadership in sustainable EV technologies, and strong industry support, the case was approved smoothly without an RFE.",
    },
  ];

  const nextStory = () => {
    // Future carousel functionality
  };

  const prevStory = () => {
    // Future carousel functionality
  };

  return (
    <section
      id="success-stories"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="md:text-center mb-12 text-start">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            BUILT FOR EVERY FIELD
          </p>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            Delivering Exceptional Results For Extraordinary Immigrants
          </h2>
        </div>

        {/* Success Story Cards Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevStory}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-lg items-center justify-center text-gray-700 transition-all duration-300 shadow-md -ml-6"
            aria-label="Previous story"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextStory}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-lg items-center justify-center text-gray-700 transition-all duration-300 shadow-md -mr-6"
            aria-label="Next story"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Success Story Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Approval Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-md">
                    {story.approvalTag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {story.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {story.description}
                </p>

                {/* Read More Link */}
                <Link
                  href="#"
                  className="text-gray-900 text-base underline hover:text-secondary-500 transition-colors"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-6">
          <Button
            as="link"
            href="#success-stories"
            variant="primary"
            size="large"
            className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            View all success stories
            <FaArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <Text
            as="p"
            size="sm"
            className="text-gray-500 text-xs"
          >
            *Prior results do not guarantee future outcomes.
          </Text>
        </div>
      </div>
    </section>
  );
}

