"use client";

import { Button } from "@/components/common";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="bg-[#f5f5f0] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Card Container */}
          <div className="bg-primary-500 rounded-lg overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Section - Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                  alt="Legal consultation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Section - Text and CTA */}
              <div className="bg-primary-500 p-8 lg:p-12 flex flex-col justify-center">
                {/* Label */}
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                  LET'S BEGIN
                </p>

                {/* Main Heading */}
                <h2 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Let's Build a Case For Your Future.
                </h2>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-secondary-500 mt-1">•</span>
                    <span className="text-base">Understand your options.</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-secondary-500 mt-1">•</span>
                    <span className="text-base">
                      Move forward with clarity and confidence.
                    </span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Button
                  as="link"
                  href="#contact"
                  variant="primary"
                  size="large"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto"
                >
                  Request My Immigration Visa Consultation
                  <FaArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

