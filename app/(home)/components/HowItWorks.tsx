import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/sectionHeading/SectionHeading";

export default function HowItWorks() {
  const steps = [
    {
      image: "/assets/photos/how-work/free-consultation.png",
      title: "Step 1 – Free WhatsApp Intake",
      description: [
        "Send a confidential message",
        "Answer 5 simple screening questions:",
        "• Current visa type and expiration date",
        "• Entry date into the U.S.",
        "• Reason for contacting us (Marriage GC / Overstay / Asylum)",
        "• Any past immigration filings or denials?",
        "• City/state of residence in the U.S."
      ],
    },
    {
      image: "/assets/photos/how-work/case-preparation.png",
      title: "Step 2 – Attorney Consultation ($250/hr)",
      description: [
        "Detailed legal analysis",
        "Step-by-step strategy & filing roadmap"
      ],
    },
    {
      image: "/assets/photos/how-work/representation.png",
      title: "Step 3 – Safe, Compliant Filing",
      description: [
        "Only proceed if intake confirms viability",
        "All submissions are carefully prepared"
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 sm:mb-20">
          <SectionHeading
            as="h2"
            className="text-4xl md:text-5xl text-gray-900 mb-4 leading-tight max-w-3xl"
          >
            How Our WhatsApp-First Process Works
          </SectionHeading>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col group">
              {/* Icon */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain"
                    priority={index < 2}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-xl font-medium text-gray-900 mb-6 group-hover:text-orange-600 transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <div className="text-gray-600 text-base sm:text-sm leading-relaxed">
                {Array.isArray(step.description) ? (
                  <ul className="space-y-2">
                    {step.description.map((item, idx) => (
                      <li key={idx} className={item.startsWith('•') ? 'pl-4' : ''}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

