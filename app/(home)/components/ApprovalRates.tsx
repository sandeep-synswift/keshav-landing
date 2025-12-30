"use client";

import { Button, Text } from "@/components/common";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

export default function ApprovalRates() {
  return (
    <section
      id="approval-rates"
      className="bg-primary-500 text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
            OUR APPROVAL RATES
          </p>

          {/* Main Heading */}
          <h2 className="text-xl md:text-3xl font-bold text-white mb-4">
            Don't Trust Us. Trust Our Results.
          </h2>

          {/* Descriptive Paragraph */}
          <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            While the national visa approval rate hovers around 85% for O-1,
            EB-1 and EB-2 NIW, Avvocats lawyers' approvals are above 90% —
            consistently. That's not luck. It's the result of our deep
            specialization, data-backed strategy, and relentless focus on telling
            your story the way USCIS needs to hear it.
          </p>

          {/* Approval Rate Cards */}
          <div className="space-y-4 mb-8 sm:mb-12 px-4">
            {/* Avvocats Approval Rate Card */}
            <div className="relative bg-gray-200 rounded-lg p-3 sm:p-4 overflow-hidden">
              {/* Visual Percentage Indicator - fills 95% of card width */}
              <div
                className="absolute inset-0 bg-gray-300 rounded-lg"
                style={{ width: "95%" }}
              />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 z-10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 shrink-0" />
                  <span className="text-gray-900 font-semibold text-sm sm:text-base">
                    Avvocats Lawyers' Average Approval Rate*
                  </span>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 shrink-0">
                  95%
                </div>
              </div>
            </div>

            {/* USCIS Approval Rate Card */}
            <div className="relative bg-gray-800 rounded-lg p-3 sm:p-4 overflow-hidden">
              {/* Visual Percentage Indicator - fills 85% of card width */}
              <div
                className="absolute inset-0 bg-gray-700 rounded-lg"
                style={{ width: "85%" }}
              />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 z-10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <FaFlag className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                  <span className="text-white font-semibold text-sm sm:text-base">
                    USCIS Approval Rate*
                  </span>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white shrink-0">
                  85%
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer Text */}
          <div className="mb-12">
            <Text
              as="p"
              size="sm"
              className="text-white text-xs leading-relaxed max-w-3xl mx-auto"
            >
              *Historical approval rates across all visa types and include cases
              handled by Avvocats attorneys and lawyers in connection with their
              work at Avvocats and their current and prior law firms for O-1,
              EB-1 and EB-2 NIW. Past results do not guarantee future outcomes.
              Based on USCIS FY2025 Q2 data.
            </Text>
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
      </div>
    </section>
  );
}

