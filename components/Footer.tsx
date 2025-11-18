"use client";

import Link from "next/link";
import Image from "next/image";

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
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-gray-400 text-sm text-center max-w-4xl mx-auto mb-6 leading-relaxed">
            Avvocats LLP is a registered immigration law firm serving clients across California. This website does not constitute legal advice.
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
