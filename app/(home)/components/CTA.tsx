"use client";

import { Button, Text } from "@/components/common";

export default function CTA() {
  return (
    <section className="from-orange-50 via-white to-blue-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className=" border-gray-100">
            <div className="flex flex-col items-center gap-8 lg:gap-12">
              {/* Left Side - Text Block */}
              <div className="flex flex-col items-center text-center">
                {/* Headline */}
                <Text
                  as="h2"
                  size="4xl"
                  color="default"
                  className="md:text-5xl font-medium mb-8 leading-tight max-w-3xl"
                >
                  Your Path to U.S. Residency Starts Here | Contact Us Today!
                </Text>

                {/* Descriptive Paragraph */}
                <Text
                  as="p"
                  size="xl"
                  color="muted"
                  className="leading-relaxed"
                >
                  Don't let the confusing immigration laws keep you from achieving your goals. Call{" "}
                  <Text
                    as="a"
                    href="tel:8669640350"
                    color="primary"
                    className="font-bold hover:text-orange-700 transition-colors underline decoration-2 underline-offset-4"
                  >
                    866-964-0350
                  </Text>{" "}
                  for your free consultation, and let us show you how simple the process can be with an expert team on your side.
                </Text>
              </div>

              {/* Right Side - CTA Button */}
              <div className="flex-shrink-0 lg:self-center">
                <Button
                  as="link"
                  href="#contact-us"
                  variant="secondarySolid"
                  size="large"
                  onClick={(e?: React.MouseEvent<HTMLElement>) => {
                    e?.preventDefault();
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
                  className="uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                >
                  BOOK A FREE CONSULTATION
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

