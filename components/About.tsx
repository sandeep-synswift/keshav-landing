"use client";

import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section id="about-us" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 sm:py-24 lg:py-28 relative overflow-hidden scroll-mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Panel - Text Content */}
          <div className="order-2 lg:order-1 col-span-2">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight max-w-3xl">
              We don't sell dreams, we sell success
            </h2>

            {/* Body Text */}
            <div className="space-y-6 mb-10 text-gray-200 text-md sm:text-sm leading-relaxed">
              <p>
                Navigating the immigration system on your own can be an incredibly complicated and time-consuming process. Getting even one small detail wrong can result in your application being delayed or denied – Let our knowledgeable immigration lawyers help you!
              </p>
              <p>
                We exclusively practice immigration law and are at the forefront of key issues and trends in American immigration law and regulations.
              </p>
              <p>
                Let's discuss the specifics of your case so you understand all your options and know exactly how to reach your goals.
              </p>
            </div>

            {/* About Text */}
            <div className="mb-10 text-gray-200 text-md sm:text-sm leading-relaxed">
              <p>
                Avvocats & Partners is a US-based immigration law firm helping individuals and families secure their future in the United States. Our team specializes in asylum cases and marriage-based green card petitions, offering personalized, compassionate, and result-driven legal support to Indian, South Asian, and Hispanic communities.
              </p>
            </div>

            {/* CTA Button */}
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-lg text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              SET UP YOUR CASE EVALUATION
            </Link>
          </div>

          {/* Right Panel - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Team/Office Image */}
              <div className="relative w-full h-[250px] sm:h-[550px] lg:h-[450px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                  alt="Avvocats LLP Team"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Caption Strip */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-5">
                <p className="text-white text-center text-lg sm:text-xl font-semibold">
                  Led by experienced attorneys serving clients across the United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
