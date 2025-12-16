"use client";

import { Button, Text } from "@/components/common";
import { FaWhatsapp, FaPhone, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";
import SectionHeading from "@/components/sectionHeading/SectionHeading";

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
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <SectionHeading
            as="h1"
            className="text-4xl md:text-5xl text-white mb-1 leading-tight drop-shadow-2xl animate-fade-in max-w-4xl mx-auto"
          >
            Overstayed, Need Marriage Green Card, or Seeking Asylum? Start a Confidential WhatsApp Intake Today.
          </SectionHeading>

          {/* Subheadline */}
          <Text
            as="p"
            size="base"
            color="white"
            className="mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mt-8"
          >
            Trusted Immigration Attorneys Guiding Indian Nationals in the U.S. – Step by Step, Safely, and Ethically.
          </Text>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Button
              as="link"
              href="https://wa.me/13105000780"
              variant="primary"
              size="large"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center shadow-lg hover:shadow-xl transform hover:scale-105 gap-3"
            >
              <FaWhatsapp className="w-6 h-6" />
              Message Us – Free Intake
            </Button>
            <Button
              as="link"
              href="tel:+13104556492"
              variant="whiteOutline"
              size="large"
              className="w-full sm:w-auto gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaPhone className="w-6 h-6" />
              Call Intake Specialist Now
            </Button>
          </div>
          
          {/* Disclaimer */}
          <Text
            as="p"
            size="sm"
            color="white"
            className="max-w-2xl mx-auto text-center opacity-75 italic"
          >
            No legal advice here. Attorney consultation scheduled after intake.
          </Text>

          {/* Trust Icons */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-14 pt-12 border-t border-white/20">
            {/* USCIS Logo Placeholder */}
            <div className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <span className="text-sm font-bold text-orange-400">USCIS</span>
              </div>
              <Text size="sm" color="white" className="font-semibold">USCIS Certified</Text>
            </div>

            {/* Licensed Immigration Attorneys */}
            <div className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 group">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <FaShieldAlt className="w-6 h-6 text-orange-400" />
              </div>
              <Text size="sm" color="white" className="font-semibold">Licensed Immigration Attorneys</Text>
            </div>

            {/* Serving California */}
            <div className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 group">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <FaMapMarkerAlt className="w-6 h-6 text-orange-400" />
              </div>
              <Text size="sm" color="white" className="font-semibold">Serving California for 15+ Years</Text>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

