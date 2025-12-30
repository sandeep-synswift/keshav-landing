"use client";

import Image from "next/image";
import { Button } from "@/components/common";
import { FaArrowRight } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "See If You Qualify (Free Case Evaluation)",
      description:
        "Start with our short intake quiz. We'll evaluate the strength of your profile to see if you qualify for our services. If you qualify, you'll move to the next step.",
      bgColor: "bg-gray-800",
      textColor: "text-white",
    },
    {
      number: 2,
      title: "Meet Your Legal Team",
      description:
        "Once qualified, we'll select an attorney for you based on your background and industry. Prefer someone else? We'll do our best to accommodate your preferences — your comfort and trust come first.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
    },
    {
      number: 3,
      title: "Start Your Case",
      description:
        "After formally retaining us, you'll get immediate access to your case portal, where you'll find your checklist, timeline, and tools to upload your initial evidence. You are equipped to dive in — and so are we.",
      bgColor: "bg-gray-800",
      textColor: "text-white",
    },
  ];

  return (
    <section className="bg-primary-500 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
            FROM INTAKE TO APPROVAL
          </p>

          {/* Main Heading */}
          <h2 className="text-xl md:text-3xl font-bold text-white mb-4">
            How Do We Work With You?
          </h2>

          {/* CTA Button */}
          <div className="mb-12">
            <Button
              as="link"
              href="#contact"
              variant="primary"
              size="large"
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Start the Process
              <FaArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
            {/* Three Steps */}
            <div className="space-y-4 lg:col-span-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`${step.bgColor} rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6`}
                >
                  {/* Large Number */}
                  <div
                    className={`text-5xl sm:text-6xl md:text-7xl font-bold ${step.textColor} shrink-0`}
                  >
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className={`text-lg sm:text-xl font-bold ${step.textColor} mb-2 sm:mb-3`}>
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base ${step.textColor} ${
                        step.bgColor === "bg-white"
                          ? "text-gray-700"
                          : "text-white/90"
                      } leading-relaxed`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>


          {/* Right Side - Image */}
          <div className="relative w-full h-full">
            <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/assets/photos/how-work/howitwork.png"
                alt="Lady Justice statue"
                fill
                className="object-cover"
              />
              {/* Disclaimer */}
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 text-white text-xs px-2 sm:px-3 py-1 rounded">
                *Representative image - not actual Manifest lawyer or client
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
