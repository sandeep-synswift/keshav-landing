"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/sectionHeading/SectionHeading";

export default function ImmigrationServices() {
  const services = [
    {
      title: "Marriage-Based Green Card",
      description: [
        "Adjustment of Status (I-130 + I-485)",
        "Overstay & work authorization considerations",
        "Interview preparation and RFEs"
      ],
      image: "/assets/photos/our-services/marriage-based green-ard.png",
    },
    {
      title: "B1/B2 Overstay / Extension / Change of Status",
      description: [
        "Legal assessment of overstay risks",
        "Extension or change of status options",
        "Protection against unlawful presence bars"
      ],
      image: "/assets/photos/our-services/asylum-services.png",
    },
    {
      title: "Asylum & Humanitarian Protection",
      subtitle: "(Selective Intake Only)",
      description: [
        "Affirmative and defensive asylum cases",
        "One-year filing deadline assessment",
        "Country condition documentation",
        "Credibility and strategy evaluation"
      ],
      image: "/assets/photos/our-services/asylum-services.png",
    },
  ];

  return (
    <section id="practice-areas" className="bg-white py-20 sm:py-24 lg:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <SectionHeading
            as="h2"
            className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight max-w-3xl mx-auto"
          >
            Services We Specialize In
          </SectionHeading>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
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

              {/* Service Title and Description - directly below image, centered */}
              <div className="py-8 px-6 text-center from-white to-gray-50">
                <h3 className="text-xl font-normal text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-sm text-gray-500 mb-4 italic">{service.subtitle}</p>
                )}
                {service.description && (
                  <ul className="mt-4 text-left space-y-2">
                    {service.description.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          ))}
        </div>
        
        {/* CTA after services */}
        <div className="text-center mt-12">
          <Link
            href="https://wa.me/13105000780"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            <FaWhatsapp className="w-6 h-6" />
            Start Free WhatsApp Intake → Immediate Screening
          </Link>
        </div>
      </div>
    </section>
  );
}

