"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/common";
import SectionHeading from "@/components/sectionHeading/SectionHeading";
import { IoClose } from "react-icons/io5";

export default function PrivacyDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if user has already closed it
    const hasClosed = localStorage.getItem("privacyDisclaimerClosed");
    
    if (hasClosed) {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("privacyDisclaimerClosed", "true");
  };

  const handleAgree = () => {
    localStorage.setItem("privacyDisclaimerAgreed", "true");
    setIsOpen(false);
  };

  const handleExit = () => {
    // Redirect to exit or close window
    if (typeof window !== "undefined") {
      window.location.href = "about:blank";
    }
  };

  if (!isMounted || !isOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] w-full">
      {/* Banner Content */}
      <div className="relative bg-white shadow-2xl border-t-2 border-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Close Button - Top Right */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close disclaimer"
          >
            <IoClose className="w-5 h-5" />
          </button>

          <div className="pr-12">
            {/* Title */}
            <SectionHeading
              as="h2"
              className="text-2xl text-gray-900 mb-3"
            >
              Legal Disclaimer
            </SectionHeading>
            
            {/* Red Separator Line */}
            <div className="h-0.5 bg-red-600 mb-4" />
            
            {/* Content with Text and Buttons Side by Side */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Legal Disclaimer Text */}
              <div className="flex-1 space-y-3">
                <p className="text-gray-700 text-sm leading-relaxed">
                  This website is informational only.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  No attorney-client relationship is formed until paid consultation.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  WhatsApp messages are strictly for intake and screening.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Past outcomes do not guarantee future results.
                </p>
                
                {/* Contact Information */}
                <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
                  <p className="text-gray-700 text-sm">
                    <strong>WhatsApp:</strong>{" "}
                    <a href="https://wa.me/13105000780" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">
                      +1 (310)-500-0780
                    </a>
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Calling:</strong>{" "}
                    <a href="tel:+13104556492" className="text-orange-600 hover:text-orange-700 underline">
                      +1 (310) 455-6492
                    </a>
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Address:</strong>{" "}
                    <span className="text-orange-600">11431 MAGNOLIA AVE RIVERSIDE CALIFORNIA 92505</span>
                  </p>
                </div>
              </div>
              
              {/* Action Buttons - Stacked Vertically */}
              <div className="flex flex-col gap-3 lg:shrink-0 w-full lg:w-auto">
                <Button
                  variant="primary"
                  size="large"
                  onClick={handleAgree}
                  className="w-full lg:w-32 px-6 uppercase tracking-wide text-sm"
                >
                  I AGREE
                </Button>
                <Button
                  variant="secondarySolid"
                  size="large"
                  onClick={handleExit}
                  className="w-full lg:w-32 px-6 uppercase tracking-wide text-sm"
                >
                  EXIT SITE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

