"use client";

import { Text } from "@/components/common";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function OurAttorneys() {
  const attorneys = [
    {
      image: "/assets/photos/adavocate/keshav.jpg",
      name: "Keshav Singh",
      title: "Founder & Partner, Avvocats & Partners LLP",
      backgroundType: "photo", // photo or split
    },
    {
      image: "/assets/photos/adavocate/annette.png",
      name: "Annette",
      title: "Strategic Partner – Intellectual Property",
      backgroundType: "split", // split background with logo
    },
    {
      image: "/assets/photos/adavocate/navjot.png",
      name: "Navjot Singh",
      title: "Lawyer – US Immigration Law",
      backgroundType: "split", // split background with logo
    },
  ];

  const nextAttorney = () => {
    // Future carousel functionality
  };

  const prevAttorney = () => {
    // Future carousel functionality
  };

  return (
    <section
      id="our-attorneys"
      className="bg-[#f5f5f0] text-black py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="md:text-center mb-12 text-start">
          <p className="text-sm uppercase tracking-wider text-gray-700 mb-2">
            HANDPICKED LAWYERS
          </p>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Immigration Attorneys
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Meet our experienced immigration attorneys with thousands of visas
            and green cards obtained for clients.
          </p>
        </div>

        {/* Attorney Profiles Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevAttorney}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-lg items-center justify-center text-gray-700 transition-all duration-300 shadow-md -ml-6"
            aria-label="Previous attorney"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextAttorney}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-lg items-center justify-center text-gray-700 transition-all duration-300 shadow-md -mr-6"
            aria-label="Next attorney"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Attorney Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12">
            {attorneys.map((attorney, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Image Area - Fixed height for all cards */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 shrink-0 overflow-hidden">
                  {attorney.backgroundType === "split" ? (
                    <div className="relative w-full h-full">
                      {/* Split Background */}
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 bg-white"></div>
                        <div className="w-1/2 bg-[#d4e157]"></div>
                      </div>
                      {/* Logo Overlay */}
                      <div className="absolute top-4 left-4 text-xs font-semibold text-gray-800 z-20">
                        avvocats & partners
                      </div>
                      <div className="absolute top-4 right-4 text-xs font-semibold text-gray-800 z-20">
                        avvocats & partners
                      </div>
                      {/* Attorney Image */}
                      <div className="relative w-full h-full z-10">
                        <Image
                          src={attorney.image}
                          alt={attorney.name}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={attorney.image}
                      alt={attorney.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  )}
                </div>

                {/* Text Area - Fixed padding and consistent height */}
                <div className="bg-[#1a1a2e] p-4 sm:p-6 shrink-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {attorney.name}
                  </h3>
                  <p className="text-white/90 text-sm ">
                    {attorney.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer/Disclaimer */}
        <div className="max-w-6xl mx-auto mt-12 text-center">
          <Text
            as="p"
            size="sm"
            className="text-gray-500 text-xs leading-relaxed"
          >
            *Total cases filed provided by Avvocats lawyers in connection with
            cases handled with Avvocats and lawyer's prior firms.
          </Text>
        </div>
      </div>
    </section>
  );
}
