import { Text } from "@/components/common";
import SectionHeading from "@/components/sectionHeading/SectionHeading";

export default function LegalDisclaimer() {
  return (
    <section className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            as="h2"
            className="text-2xl text-white mb-6 text-center"
          >
            Legal Disclaimer
          </SectionHeading>
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <Text as="p" size="sm" color="white" className="opacity-90">
              This website is informational only.
            </Text>
            <Text as="p" size="sm" color="white" className="opacity-90">
              No attorney-client relationship is formed until paid consultation.
            </Text>
            <Text as="p" size="sm" color="white" className="opacity-90">
              WhatsApp messages are strictly for intake and screening.
            </Text>
            <Text as="p" size="sm" color="white" className="opacity-90">
              Past outcomes do not guarantee future results.
            </Text>
          </div>
          
          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center space-y-2">
            <Text as="p" size="sm" color="white" className="opacity-90">
              <strong>WhatsApp:</strong>{" "}
              <a href="https://wa.me/13105000780" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                +1 (310)-500-0780
              </a>
            </Text>
            <Text as="p" size="sm" color="white" className="opacity-90">
              <strong>Calling:</strong>{" "}
              <a href="tel:+13104556492" className="text-orange-400 hover:text-orange-300 underline">
                +1 (310) 455-6492
              </a>
            </Text>
            <Text as="p" size="sm" color="white" className="opacity-90">
              <strong>Address:</strong> 11431 MAGNOLIA AVE RIVERSIDE CALIFORNIA 92505
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}

