import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      image: "/assets/photos/how-work/free-consultation.png",
      title: "Free Consultation",
      description:
        "Discuss your situation with an expert. We'll assess your case, answer your questions, and outline the best path forward for your immigration goals.",
    },
    {
      image: "/assets/photos/how-work/case-preparation.png",
      title: "Case Preparation",
      description:
        "We handle all paperwork and filings. Our team ensures every document is properly prepared, filed on time, and meets all USCIS requirements.",
    },
    {
      image: "/assets/photos/how-work/representation.png",
      title: "Representation",
      description:
        "Get full support in USCIS or court. We represent you at interviews, hearings, and all legal proceedings, ensuring your rights are protected.",
    },
    {
      image: "/assets/photos/how-work/success.png",
      title: "Successful Outcome",
      description:
        "Move closer to your U.S. residency goals. With our expertise and dedicated support, we work tirelessly to achieve the best possible outcome for your case.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 leading-tight max-w-3xl">
            How it Works
          </h2>
          <p className="text-sm sm:text-md text-gray-700 font-medium">
            Your Immigration Process — Made Simple
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
              <h3 className="text-3xl sm:text-2xl font-medium text-gray-900 mb-6 group-hover:text-orange-600 transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-lg sm:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

