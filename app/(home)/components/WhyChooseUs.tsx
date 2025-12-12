import { Text, Image as DefaultImage } from "@/components/common";

export default function WhyChooseUs() {
  const features = [
    {
      image: "/assets/photos/why-choose/experienced-immigration.png",
      title: "Experienced Immigration Attorneys",
      description:
        "Specializing in Asylum & Marriage-Based Petitions. Our team brings years of dedicated experience in immigration law to help you navigate complex legal processes with confidence.",
    },
    {
      image: "/assets/photos/why-choose/multilingual-support.png",
      title: "Multilingual Support",
      description:
        "Hindi, Punjabi, Haryanvi & English. We understand that clear communication is crucial. Our team speaks your language, ensuring you fully understand your options and legal rights.",
    },
    {
      image: "/assets/photos/why-choose/local-expertise.png",
      title: "Local Expertise",
      description:
        "Serving Los Angeles & Southern California. Deep knowledge of local immigration courts, USCIS offices, and regional procedures ensures the best possible outcome for your case.",
    },
    {
      image: "/assets/photos/why-choose/free-initial-consultation.png",
      title: "Free Initial Consultation",
      description:
        "Get Legal Advice Before You File. Start your immigration journey with confidence. Schedule a free consultation to discuss your case and explore your options with no obligation.",
    },
  ];

  return (
    <section id="why-choose-us" className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-24 lg:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <Text
            as="h2"
            size="4xl"
            color="default"
            className="md:text-5xl font-medium mb-6 leading-tight max-w-3xl mx-auto"
          >
            Why Hundreds Trust Avvocats LLP for Immigration Help
          </Text>
          <Text
            as="p"
            size="base"
            color="muted"
            className="max-w-3xl mx-auto leading-relaxed"
          >
            With many immigration firms to choose from, why consider Avvocats LLP? Here are a few reasons:
          </Text>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
      </div>
    </section>
  );
}

