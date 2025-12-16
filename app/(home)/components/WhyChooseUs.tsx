import { Text, Image as DefaultImage } from "@/components/common";
import SectionHeading from "@/components/sectionHeading/SectionHeading";

export default function WhyChooseUs() {
  const features = [
    {
      image: "/assets/photos/why-choose/experienced-immigration.png",
      title: "30+ years combined U.S. immigration expertise",
      description:
        "Our team brings decades of dedicated experience in immigration law to help you navigate complex legal processes with confidence.",
    },
    {
      image: "/assets/photos/why-choose/multilingual-support.png",
      title: "Specialized in Indian immigrant cases",
      description:
        "We understand the unique challenges and opportunities facing Indian nationals in the U.S. immigration system.",
    },
    {
      image: "/assets/photos/why-choose/local-expertise.png",
      title: "Ethical, transparent, and client-focused",
      description:
        "We guide you step-by-step. No false promises – every solution is legally sound and ethically delivered.",
    },
    {
      image: "/assets/photos/why-choose/free-initial-consultation.png",
      title: "Direct attorney involvement after intake",
      description:
        "After your free WhatsApp intake, you work directly with experienced attorneys who provide personalized legal guidance.",
    },
    {
      image: "/assets/photos/why-choose/local-expertise.png",
      title: "Nationwide service in Indian-populated metros",
      description:
        "We serve clients across major U.S. cities with high Indian populations. Remote consultations available via WhatsApp-first approach.",
    },
  ];

  return (
    <section id="why-choose-us" className="bg-white py-20 sm:py-24 lg:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <SectionHeading
            as="h2"
            className="text-4xl md:text-5xl mb-6 leading-tight max-w-3xl mx-auto text-gray-900"
          >
            Why Choose Avvocats & Partners
          </SectionHeading>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group hover:border-orange-500/50"
            >
              {/* Image */}
              <div className="mb-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <div className="relative w-20 h-20 mx-auto">
                  <DefaultImage
                    src={feature.image}
                    alt={feature.title}
                    fill
                    objectFit="contain"
                    className="w-full h-full"
                    priority={index < 2}
                  />
                </div>
              </div>

              {/* Title */}
              <Text
                as="h5"
                size="xl"
                color="default"
                className="sm:text-md font-bold mb-4 flex-shrink-0 group-hover:text-orange-600 transition-colors"
              >
                {feature.title}
              </Text>

              {/* Description */}
              <Text
                as="p"
                size="lg"
                color="muted"
                className="leading-relaxed flex-grow"
              >
                {feature.description}
              </Text>
            </div>
          ))}
        </div>
        
        {/* Additional Note */}
        <div className="text-center mt-12">
          <Text
            as="p"
            size="base"
            color="muted"
            className="max-w-3xl mx-auto leading-relaxed italic"
          >
            We focus on serious cases to provide high-quality legal guidance.
          </Text>
        </div>
      </div>
    </section>
  );
}

