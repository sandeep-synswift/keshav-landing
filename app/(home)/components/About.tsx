"use client";

import { Button, Text, Image as DefaultImage } from "@/components/common";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/sectionHeading/SectionHeading";

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
            <SectionHeading
              as="h2"
              className="text-4xl md:text-5xl text-white mb-8 leading-tight max-w-3xl"
            >
              Why Indian Immigrants Contact Us
            </SectionHeading>

            {/* Body Text */}
            <div className="space-y-6 mb-10 text-gray-200 leading-relaxed">
            <Text as="p" size="sm" color="white" className="opacity-90 font-medium">
              Overstayed your visa? Unsure about your status?
              </Text>
            <Text as="p" size="sm" color="white" className="opacity-90 font-medium">
              Need guidance for a marriage-based Green Card?
              </Text>
            <Text as="p" size="sm" color="white" className="opacity-90 font-medium">
              Facing asylum or humanitarian protection issues?
              </Text>
            </div>

          {/* What We Offer */}
            <div className="mb-10 text-gray-200 leading-relaxed">
            <Text as="p" size="lg" color="white" className="opacity-90 font-semibold mb-4">
              What We Offer:
            </Text>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">✅</span>
                <Text as="p" size="sm" color="white" className="opacity-80">
                  Free WhatsApp intake with trained specialists
                </Text>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">✅</span>
                <Text as="p" size="sm" color="white" className="opacity-80">
                  Honest assessment of your immigration situation
                </Text>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">✅</span>
                <Text as="p" size="sm" color="white" className="opacity-80">
                  Attorney consultation ($250/hr) after intake
                </Text>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">✅</span>
              <Text as="p" size="sm" color="white" className="opacity-80">
                  Nationwide service in high Indian-population metro areas
                </Text>
              </li>
            </ul>
            <Text as="p" size="sm" color="white" className="opacity-90 mt-6 italic">
              We guide you step-by-step. No false promises – every solution is legally sound.
              </Text>
            </div>

            {/* CTA Button */}
            <Button
              as="link"
              href="https://wa.me/13105000780"
              variant="primary"
              size="large"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaWhatsapp className="w-6 h-6" />
              Start Free WhatsApp Intake
            </Button>
          </div>

          {/* Right Panel - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden shadow-2xl group">
              {/* Team/Office Image */}
              <div className="relative w-full h-[250px] sm:h-[550px] lg:h-[450px] overflow-hidden">
                <DefaultImage
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
                  alt="Avvocats LLP Team"
                  fill
                  objectFit="cover"
                  hoverEffect
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Caption Strip */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-5">
                <Text
                  as="p"
                  size="xl"
                  color="white"
                  className="text-center font-semibold"
                >
                  Led by experienced attorneys serving clients across the United States
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

