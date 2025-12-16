"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SectionHeading from "@/components/sectionHeading/SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long is the attorney consultation?",
      answer:
        "1 hour ($250). Intake via WhatsApp is free.",
    },
    {
      question: "Do you provide legal advice on WhatsApp?",
      answer:
        "No. WhatsApp is strictly for confidential intake.",
    },
    {
      question: "Can I schedule a consultation immediately after intake?",
      answer:
        "Yes. Viable cases are scheduled promptly.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <SectionHeading
            as="h2"
            className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight max-w-3xl mx-auto"
          >
            FAQ (Optional but High-Converting)
          </SectionHeading>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 border-2 border-gray-100 hover:border-orange-500/50"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-sm md:text-xl font-medium text-gray-900 pr-8 group-hover:text-orange-600 transition-colors">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`w-7 h-7 text-gray-600 transition-transform duration-300 group-hover:text-orange-600 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 text-sm sm:text-md leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

