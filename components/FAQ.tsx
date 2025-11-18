"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who is eligible to apply for asylum in the U.S.?",
      answer:
        "To be eligible for asylum in the U.S., you must demonstrate that you have a well-founded fear of persecution based on race, religion, nationality, membership in a particular social group, or political opinion. You must apply within one year of arriving in the U.S., unless you qualify for an exception. Our experienced attorneys can help assess your eligibility and guide you through the asylum application process.",
    },
    {
      question: "How long does it take to get a marriage-based green card?",
      answer:
        "The processing time for a marriage-based green card varies depending on several factors, including whether your spouse is a U.S. citizen or permanent resident, your current immigration status, and which USCIS service center handles your case. Generally, the process can take anywhere from 10 to 38 months. Our team will help expedite your case and ensure all documentation is properly filed to avoid delays.",
    },
    {
      question: "Can Avvocats LLP handle my case if I'm on a student visa?",
      answer:
        "Yes, absolutely! We assist clients on various visa types, including student visas (F-1). Whether you're looking to change your status, extend your visa, or transition to a different immigration category, our team has extensive experience helping students navigate the complex immigration system. We understand the unique challenges students face and can provide tailored legal solutions.",
    },
    {
      question: "Do you offer services in Hindi or Punjabi?",
      answer:
        "Yes! We are proud to offer multilingual support in Hindi, Punjabi, Haryanvi, and English. Our team includes attorneys and staff who speak these languages fluently, ensuring clear communication and understanding throughout your case. We believe that language should never be a barrier to accessing quality legal representation.",
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
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our immigration services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 border-2 border-gray-100 hover:border-orange-500/50"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-sm md:text-xl font-medium text-gray-900 pr-8 group-hover:text-orange-600 transition-colors">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-7 h-7 text-gray-600 transition-transform duration-300 group-hover:text-orange-600 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
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
