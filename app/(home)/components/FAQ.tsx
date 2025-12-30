"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<"1st" | "2nd">("1st");
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const faqs1st = [
    {
      question: "What areas of law do you specialize in?",
      answer: "",
    },
    {
      question: "How much do legal consultations cost?",
      answer: "",
    },
    {
      question: "How long will my case take?",
      answer:
        "Timelines vary depending on case nature, court workload, and supporting evidence. We aim for efficient resolution wherever possible.",
    },
    {
      question: "Will my information remain confidential?",
      answer: "",
    },
    {
      question: "What documents should I bring for my first consultation?",
      answer: "",
    },
  ];

  const faqs2nd = [
    {
      question: "What areas of law do you specialize in?",
      answer: "",
    },
    {
      question: "How much do legal consultations cost?",
      answer: "",
    },
    {
      question: "How long will my case take?",
      answer: "",
    },
    {
      question: "Will my information remain confidential?",
      answer: "",
    },
    {
      question: "What documents should I bring for my first consultation?",
      answer: "",
    },
  ];

  const currentFaqs = activeTab === "1st" ? faqs1st : faqs2nd;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="md:md:text-center mb-12 text-start text-start">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            Clear answers to help you understand
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find quick answers to common legal questions before scheduling a
            consultation.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
          <button
            onClick={() => {
              setActiveTab("1st");
              setOpenIndex(null);
            }}
            className={`text-sm sm:text-base font-medium pb-2 transition-colors ${
              activeTab === "1st"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            1st Case
          </button>
          <button
            onClick={() => {
              setActiveTab("2nd");
              setOpenIndex(null);
            }}
            className={`text-sm sm:text-base font-medium pb-2 transition-colors ${
              activeTab === "2nd"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            2nd Case
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2">
            {currentFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-b border-gray-200"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between py-3 sm:py-4 hover:text-gray-900 transition-colors group"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-900 pr-4 sm:pr-8">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FaChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 shrink-0" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 shrink-0" />
                  )}
                </button>

                {/* Answer */}
                {openIndex === index && faq.answer && (
                  <div className="pt-2 pb-4">
                    <p className="text-gray-700 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

