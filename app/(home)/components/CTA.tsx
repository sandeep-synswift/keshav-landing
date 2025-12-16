"use client";

import { Button, Text } from "@/components/common";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="from-orange-50 via-white to-blue-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className=" border-gray-100">
            <div className="flex flex-col items-center gap-8 lg:gap-12">
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
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
                  Message Us on WhatsApp – Free Intake
                </Button>
                <Button
                  as="link"
                  href="tel:+13104556492"
                  variant="secondarySolid"
                  size="large"
                  className="w-full sm:w-auto gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FaPhone className="w-6 h-6" />
                  Call Intake Specialist Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

