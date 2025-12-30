"use client";

import { Button, Text } from "@/components/common";
import {
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const statistics = [
    { value: "95%", label: "Historical approval rate*" },
    { value: "12+ Years", label: "Average years of experience**" },
    { value: "Exceptional Clients", label: "Total cases filed***" },
    { value: "100+ 5-Star Reviews", label: "Client satisfaction" },
  ];

  // Carousel navigation functions (for future use if needed)
  const nextStat = () => {
    // Future carousel functionality
  };

  const prevStat = () => {
    // Future carousel functionality
  };

  return (
    <>
      {/* Top Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-between overflow-hidden bg-primary-500 py-10"
      >
        <div className="relative min-w-6xl mx-auto ">
          <div className="absolute inset-0 bg-primary-500/40" />
          <div
            className="px-4 py-10 "
            style={{
              backgroundImage: "url('/assets/photos/hero/heroBanner.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full px-4 ">
              <h1 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight text-left">
                A Modern Immigration Law Firm
              </h1>

              {/* Subheading */}
              <p className="text-lg text-white mb-4 leading-relaxed max-w-3xl text-left">
                We combine experienced legal talent with cutting-edge technology
                to drive superior outcomes for you.
              </p>

              {/* Features List */}
              <ul className="space-y-1 mb-10 text-left">
                {[
                  "Visa approved or 100% refund available",
                  "Assistance in evidence development (learn more)",
                  "Ex-USCIS Officer review before filing*",
                  "Live case tracking and easy attorney messaging",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-1 text-white">
                    <FaCheck className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                    <span className="text-base text-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="text-left">
                <Button
                  as="link"
                  href="#contact"
                  variant="primary"
                  size="large"
                  rounded="md"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                >
                  Request a free consultation
                  <FaArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-sm text-white mt-4 text-left">
                * Read terms and conditions here. Only available for select
                plans.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Carousel Section */}
        <div className="flex flex-start justify-start text-white">
          <div className=" px-4 sm:px-6 lg:px-8">
            {/* Carousel Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Navigation Arrows - Hidden on mobile */}
              <button
                onClick={prevStat}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full items-center justify-center text-white transition-all duration-300 shadow-lg -ml-6"
                aria-label="Previous statistic"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextStat}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full items-center justify-center text-white transition-all duration-300 shadow-lg -mr-6"
                aria-label="Next statistic"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>

              {/* Statistics Grid - Show all cards */}
              <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 hidden md:grid">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="hover:bg-white/10 p-4 rounded-lg text-center h-28 sm:h-32 items-center justify-center flex flex-col"
                  >
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-white">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimers */}
            <div className="max-w-6xl mx-auto mt-4">
              <Text
                as="p"
                size="sm"
                className="text-white text-xs leading-relaxed"
              >
                *Historical approval rates across all visa types and include
                cases handled by Avvocats attorneys and lawyers in connection
                with their work at Avvocats and their current and prior law
                firms for O-1, EB-1 and EB-2 NIW. Past results do not guarantee
                future outcomes. **Average years of experience of all Avvocats
                lawyers as of August 31, 2025 ***Total cases filed provided by
                Avvocats lawyers in connection with cases handled with Avvocats
                and lawyer’s prior firms.
              </Text>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
