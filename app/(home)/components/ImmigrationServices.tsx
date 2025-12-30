"use client";

import { Button } from "@/components/common";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { FaArrowUpRightDots } from "react-icons/fa6";

export default function ImmigrationServices() {
  const visaCategories = [
    {
      mainTitle: "Work",
      subTitle: "Visa",
      description: "All employment and work visas",
      visas: [
        "O-1 Visa",
        "H-1B Visa",
        "TN Visa",
        "E-1 Visa",
        "E-2 Visa",
        "E-3 Visa",
        "L-1 Visa",
        "P-1 Visa",
        "R-1 Visa",
        "J-1 Visa",
      ],
    },
    {
      mainTitle: "Employment",
      subTitle: "Green Cards",
      description: "Immigrant visas / Green Cards",
      visas: [
        "EB-1 Visa",
        "EB-2 Visa (NIW)",
        "EB-2 Visa (PERM)",
        "EB-3 Visa (PERM)",
        "EB-5 Visa (Investors)",
      ],
    },
    {
      mainTitle: "Family",
      subTitle: "Green Cards",
      description: "Family-based immigration",
      visas: [
        "IR Green Card",
        "ASYLUM PETITION",
        "F1 Green Card",
        "F2A Green Card",
        "F2B Green Card",
        "F3 Green Card",
        "F4 Green Card",
        "Marriage Green Card",
        'K-1 "Fiancé" Visa',
      ],
    },
  ];

  return (
    <section
      id="practice-areas"
      className="bg-[#f8f8f8] py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="md:text-center mb-12 text-start">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            JOURNEY TO THE US
          </p>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            We Handle All Types of Major U.S. Visas
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our lawyers are experienced in all major visa types to the US, from
            work to extraordinary ability and family green cards.
          </p>
        </div>

        {/* Visa Categories Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {visaCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Top Dark Header Bar */}
              <div className="bg-[#1a1a1a] px-6 py-4 rounded-t-lg">
                <h3 className="text-xl font-bold text-white mb-1">
                  {category.mainTitle}
                </h3>
                <p className="text-sm text-white/90">{category.subTitle}</p>
              </div>

              {/* Mid-Level Dark Bar */}
              <div className="bg-[#2c2c2c] px-6 py-3">
                <p className="text-base text-white">{category.description}</p>
              </div>

              {/* Visa List */}
              <div className="px-6 py-4">
                {category.visas.map((visa, visaIndex) => (
                  <Link
                    key={visaIndex}
                    href="#contact"
                    className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-gray-900 text-base group-hover:text-secondary-500 transition-colors">
                      {visa}
                    </span>
                    <FaArrowRight className="w-4 h-4 text-gray-600 group-hover:text-secondary-500 transition-colors rotate-315" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
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
    </section>
  );
}

