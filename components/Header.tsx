"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/common";
import { useState } from "react";
import { FaTimes, FaChevronDown, FaArrowRight } from "react-icons/fa";
import { useModal } from "@/contexts/ModalContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    <header className="bg-primary-500 w-full py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center shrink-0">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center cursor-pointer"
          >
            <Image
              src="/assets/logos/whiteLogo.png"
              alt="Avvocats & Partners LLP Logo"
              width={200}
              height={60}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </a>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-white flex-1 justify-center">
          <a
            href="#about-us"
            onClick={(e) => handleScrollTo("about-us", e)}
            className="hover:text-gray-300 transition-colors text-sm xl:text-base font-medium cursor-pointer"
          >
            Firm
          </a>
          <a
            href="#our-attorneys"
            onClick={(e) => handleScrollTo("our-attorneys", e)}
            className="hover:text-gray-300 transition-colors text-sm xl:text-base font-medium cursor-pointer"
          >
            Team
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a
              href="#practice-areas"
              onClick={(e) => handleScrollTo("practice-areas", e)}
              className="hover:text-gray-300 transition-colors text-sm xl:text-base font-medium cursor-pointer flex items-center gap-1"
            >
              Practical Areas
              <FaChevronDown className="w-3 h-3" />
            </a>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                <a
                  href="#practice-areas"
                  onClick={(e) => handleScrollTo("practice-areas", e)}
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-sm"
                >
                  Immigration Services
                </a>
                <a
                  href="#practice-areas"
                  onClick={(e) => handleScrollTo("practice-areas", e)}
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-sm"
                >
                  Visa Types
                </a>
              </div>
            )}
          </div>
          <a
            href="#contact-us"
            onClick={(e) => handleScrollTo("contact-us", e)}
            className="hover:text-gray-300 transition-colors text-sm xl:text-base font-medium cursor-pointer"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <Button
            as="link"
            href="#contact"
            variant="primary"
            size="medium"
            className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Request a free consultation
            <div className="bg-secondary-400 rounded-md p-1.5">
              <FaArrowRight className="w-3 h-3 text-white" />
            </div>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleMobileMenu}
          />
          <nav
            className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-primary-500 shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full pt-16 px-6 overflow-y-auto">
              {/* Close button */}
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Close menu"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <a
                href="#about-us"
                onClick={(e) => handleScrollTo("about-us", e)}
                className="py-3 border-b border-gray-600 text-white hover:text-gray-300 transition-colors font-medium cursor-pointer"
              >
                Firm
              </a>
              <a
                href="#our-attorneys"
                onClick={(e) => handleScrollTo("our-attorneys", e)}
                className="py-3 border-b border-gray-600 text-white hover:text-gray-300 transition-colors font-medium cursor-pointer"
              >
                Team
              </a>
              <a
                href="#practice-areas"
                onClick={(e) => handleScrollTo("practice-areas", e)}
                className="py-3 border-b border-gray-600 text-white hover:text-gray-300 transition-colors font-medium cursor-pointer"
              >
                Practical Areas
              </a>
              <a
                href="#contact-us"
                onClick={(e) => handleScrollTo("contact-us", e)}
                className="py-3 border-b border-gray-600 text-white hover:text-gray-300 transition-colors font-medium cursor-pointer"
              >
                Contact
              </a>
              <Button
                as="link"
                href="#contact"
                variant="primary"
                size="medium"
                onClick={() => {
                  toggleMobileMenu();
                }}
                className="mt-6 bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 w-full justify-center"
              >
                Request a free consultation
                <div className="bg-secondary-400 rounded p-1">
                  <FaArrowRight className="w-3 h-3 text-white" />
                </div>
              </Button>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
