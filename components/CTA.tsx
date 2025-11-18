"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="from-orange-50 via-white to-blue-50 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className=" border-gray-100">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
              {/* Left Side - Text Block */}
              <div className="flex-1">
                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight max-w-3xl">
                  Your Path to U.S. Residency Starts Here | Contact Us Today!
                </h2>

                {/* Descriptive Paragraph */}
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Don't let the confusing immigration laws keep you from achieving your goals. Call{" "}
                  <a
                    href="tel:8669640350"
                    className="font-bold text-orange-600 hover:text-orange-700 transition-colors underline decoration-2 underline-offset-4"
                  >
                    866-964-0350
                  </a>{" "}
                  for your free consultation, and let us show you how simple the process can be with an expert team on your side.
                </p>
              </div>

              {/* Right Side - CTA Button */}
              <div className="flex-shrink-0 lg:self-center">
                <Link
                  href="#contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("contact-us");
                    if (element) {
                      const headerOffset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="inline-block bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-bold px-8 py-4 rounded-lg text-base uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  BOOK A FREE CONSULTATION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
