"use client";

import Image from "next/image";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A202C] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/assets/logos/whiteLogo.png"
              alt="Avvocats & Partners LLP Logo"
              width={200}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/90 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-white/90" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/90 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5 text-white/90" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/90 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5 text-white/90" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/90 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5 text-white/90" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/90 text-sm text-center">
            {currentYear} Avvocats Copyright. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
