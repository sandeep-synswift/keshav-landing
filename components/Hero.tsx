"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')",
        }}
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 from-black/70 via-black/60 to-black/70" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-1 leading-tight drop-shadow-2xl animate-fade-in max-w-3xl mx-auto">
            Trusted Immigration Lawyers in California
          </h1>
          <span className="block text-base sm:text-lg mt-4 text-orange-400 font-medium tracking-wide">
            — Helping You Build a Secure Future in the U.S.
          </span>

          {/* Subheadline */}
          <p className="text-sm sm:text-md text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mt-8">
            Expert Legal Assistance for Asylum & Marriage-Based Green Cards —
            <span className="text-orange-300 font-semibold"> Personalized Support for Indian & South Asian Clients.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
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
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-lg text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer w-full sm:w-auto text-center"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+1234567890"
              className="bg-white/95 hover:bg-white text-slate-900 font-bold px-8 py-4 rounded-lg text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer w-full sm:w-auto flex items-center justify-center gap-3"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
          </div>

          {/* Trust Icons */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-14 pt-12 border-t border-white/20">
            {/* USCIS Logo Placeholder */}
            <div className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <span className="text-sm font-bold text-orange-400">USCIS</span>
              </div>
              <span className="text-sm font-semibold">USCIS Certified</span>
            </div>

            {/* Licensed Immigration Attorneys */}
            <div className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 group">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold">Licensed Immigration Attorneys</span>
            </div>

            {/* Serving California */}
            <div className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 group">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold">Serving California for 15+ Years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Call Button for Mobile */}
      <a
        href="tel:+1234567890"
        className="fixed bottom-6 right-6 lg:hidden z-50 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="text-sm">Call</span>
      </a>
    </section>
  );
}
