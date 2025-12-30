"use client";

import { Button, Text } from "@/components/common";
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaStar } from "react-icons/fa";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mareike Ferdinand",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
    {
      name: "Hae-ri Bok-soon",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    {
      name: "Bastian Leopold",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    },
  ];

  const testimonialText =
    "I was using Avvocats Law's services during my EB-2 NIW process. The Team was very professional and my petition was approved. I highly recommend their services.";

  const nextTestimonial = () => {
    // Future carousel functionality
  };

  const prevTestimonial = () => {
    // Future carousel functionality
  };
  return (
    <section
      id="testimonials"
      className="bg-[#f5f5f0] py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="md:text-center mb-12 text-start">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Discover how Avvocats has helped clients navigate the visa process
            and read their success stories.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
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
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevTestimonial}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-lg items-center justify-center text-gray-700 transition-all duration-300 shadow-md -ml-6"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-lg items-center justify-center text-gray-700 transition-all duration-300 shadow-md -mr-6"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-base leading-relaxed mb-6 text-center">
                  {testimonialText}
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 justify-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Client of Avvocats Law
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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