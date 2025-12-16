"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-orange-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-base font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#practice-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("practice-areas");
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
                  className="text-gray-400 hover:text-orange-400 transition-colors text-base font-medium cursor-pointer"
                >
                  Asylum Services
                </a>
              </li>
              <li>
                <a
                  href="#practice-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("practice-areas");
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
                  className="text-gray-400 hover:text-orange-400 transition-colors text-base font-medium cursor-pointer"
                >
                  Marriage Petition
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("about-us");
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
                  className="text-gray-400 hover:text-orange-400 transition-colors text-base font-medium cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
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
                  className="text-gray-400 hover:text-orange-400 transition-colors text-base font-medium cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-orange-400">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#practice-areas"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("practice-areas");
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
                  className="text-gray-400 hover:text-orange-400 transition-colors text-base font-medium cursor-pointer"
                >
                  Practice Areas
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("why-choose-us");
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
                  className="text-gray-400 hover:text-orange-400 transition-colors text-base font-medium cursor-pointer"
                >
                  Areas We Serve
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("testimonials");
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
                  className="text-gray-400 hover:text-orange-400 transition-colors text-base font-medium cursor-pointer"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
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
                  className="text-gray-400 hover:text-orange-400 transition-colors text-base font-medium cursor-pointer"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-orange-400">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-base">
              <li>
                <a
                  href="tel:8669640350"
                  className="hover:text-orange-400 transition-colors flex items-center gap-3 font-medium"
                >
                  <span className="text-2xl">📞</span>
                  <span>866-964-0350</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@avvocatsllp.com"
                  className="hover:text-orange-400 transition-colors flex items-center gap-3 font-medium"
                >
                  <span className="text-2xl">📧</span>
                  <span>info@avvocatsllp.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/18669640350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors flex items-center gap-3 font-medium"
                >
                  <span className="text-2xl">💬</span>
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li className="pt-2">
                <p className="text-gray-400 font-medium">Serving California</p>
              </li>
            </ul>
          </div>

          {/* Brand & Social */}
          <div>
            <div className="mb-6">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/assets/logos/logo.png"
                  alt="Avvocats LLP Logo"
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-gray-400 text-sm text-center max-w-4xl mx-auto mb-6 leading-relaxed">
            Avvocats & Partners is a registered immigration law firm serving clients nationwide. This website does not constitute legal advice.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-400 text-sm text-center font-medium">
            © {currentYear} Avvocats LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
