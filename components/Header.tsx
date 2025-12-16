"use client";

import Link from "next/link";
import { Image, Button, Text } from "@/components/common";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useModal } from "@/contexts/ModalContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollTo = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Logo Section */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center min-w-0 cursor-pointer"
        >
          <Image
            src="/assets/logos/logo.png"
            alt="Pollak PLLC Logo"
            width={150}
            height={75}
            objectFit="contain"
            className="h-9 sm:h-11 md:h-12 w-auto"
            priority
          />
        </a>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-gray-700 flex-1 justify-center">
        <a
          href="#about-us"
          onClick={(e) => handleScrollTo("about-us", e)}
          className="hover:text-orange-500 transition-colors text-sm xl:text-base font-medium relative group cursor-pointer"
        >
          About Us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </a>
        <a
          href="#practice-areas"
          onClick={(e) => handleScrollTo("practice-areas", e)}
          className="hover:text-orange-500 transition-colors text-sm xl:text-base font-medium relative group cursor-pointer"
        >
          Practice Areas
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </a>
        <a
          href="#why-choose-us"
          onClick={(e) => handleScrollTo("why-choose-us", e)}
          className="hover:text-orange-500 transition-colors text-sm xl:text-base font-medium relative group cursor-pointer"
        >
          Areas We Serve
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </a>
        <a
          href="#testimonials"
          onClick={(e) => handleScrollTo("testimonials", e)}
          className="hover:text-orange-500 transition-colors text-sm xl:text-base font-medium relative group cursor-pointer"
        >
          Testimonials
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </a>
        <a
          href="#contact-us"
          onClick={(e) => handleScrollTo("contact-us", e)}
          className="hover:text-orange-500 transition-colors text-sm xl:text-base font-medium relative group cursor-pointer"
        >
          Contact Us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </a>
      </nav>

      {/* Desktop CTA Button */}
      <div className="hidden lg:flex items-center gap-4 shrink-0">
        <Button
          variant="primary"
          size="medium"
          onClick={openModal}
          className="whitespace-nowrap text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          BOOK YOUR MEETING
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
            }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleMobileMenu}
          />
          <nav className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            <div className="flex flex-col h-full pt-16 px-6 overflow-y-auto">
              {/* Close button */}
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 p-2 text-gray-700 hover:text-orange-500 transition-colors"
                aria-label="Close menu"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <a
                href="#practice-areas"
                onClick={(e) => handleScrollTo("practice-areas", e)}
                className="py-3 border-b border-gray-200 text-gray-700 hover:text-orange-500 transition-colors font-medium cursor-pointer"
              >
                Practice Areas
              </a>
              <a
                href="#why-choose-us"
                onClick={(e) => handleScrollTo("why-choose-us", e)}
                className="py-3 border-b border-gray-200 text-gray-700 hover:text-orange-500 transition-colors font-medium cursor-pointer"
              >
                Areas We Serve
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleScrollTo("testimonials", e)}
                className="py-3 border-b border-gray-200 text-gray-700 hover:text-orange-500 transition-colors font-medium cursor-pointer"
              >
                Testimonials
              </a>
              <a
                href="#contact-us"
                onClick={(e) => handleScrollTo("contact-us", e)}
                className="py-3 border-b border-gray-200 text-gray-700 hover:text-orange-500 transition-colors font-medium cursor-pointer"
              >
                Blogs
              </a>
              <a
                href="#about-us"
                onClick={(e) => handleScrollTo("about-us", e)}
                className="py-3 border-b border-gray-200 text-gray-700 hover:text-orange-500 transition-colors font-medium cursor-pointer"
              >
                About Us
              </a>
              <a
                href="#contact-us"
                onClick={(e) => handleScrollTo("contact-us", e)}
                className="py-3 border-b border-gray-200 text-gray-700 hover:text-orange-500 transition-colors font-medium cursor-pointer"
              >
                Contact Us
              </a>
              <Button
                variant="primary"
                size="medium"
                onClick={() => {
                  openModal();
                  toggleMobileMenu();
                }}
                className="mt-6 text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 w-full"
              >
                BOOK YOUR MEETING
              </Button>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
