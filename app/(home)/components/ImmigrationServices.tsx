"use client";

import Link from "next/link";
import Image from "next/image";

export default function ImmigrationServices() {
  const services = [
    {
      title: "Asylum Services",
      image: "/assets/photos/our-services/asylum-services.png",
    },
    {
      title: "Marriage-Based Green Card / Petition",
      image: "/assets/photos/our-services/marriage-based green-ard.png",
    },
  ];

  return (
    <section id="practice-areas" className="bg-white py-20 sm:py-24 lg:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
            Our Immigration Services
          </h2>
          <p className="text-sm sm:text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We assist clients with a wide array of immigration matters, ensuring dedicated legal representation in even the most challenging cases. Here are some of the services we provide:
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
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
              className="group bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Service Image - fills entire top area */}
              <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={index === 0}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div> */}
              </div>

              {/* Service Title - directly below image, centered */}
              <div className="py-8 px-6 text-center from-white to-gray-50">
                <h3 className="text-xl font-normal text-gray-900 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-2 text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

