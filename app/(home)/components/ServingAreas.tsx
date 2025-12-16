import { Text } from "@/components/common";
import SectionHeading from "@/components/sectionHeading/SectionHeading";

export default function ServingAreas() {
  const areas = [
    {
      state: "California",
      cities: ["Bay Area", "Los Angeles", "San Diego"],
    },
    {
      state: "New York & New Jersey",
      cities: [],
    },
    {
      state: "Texas",
      cities: ["Dallas", "Houston", "Austin"],
    },
    {
      state: "Illinois",
      cities: ["Chicago"],
    },
    {
      state: "Massachusetts",
      cities: ["Boston"],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <SectionHeading
            as="h2"
            className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight max-w-3xl mx-auto"
          >
            Serving Indian Immigrants Nationwide
          </SectionHeading>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-orange-500/50"
            >
              <Text
                as="h3"
                size="xl"
                color="default"
                className="font-bold mb-3 text-orange-600"
              >
                {area.state}
              </Text>
              {area.cities.length > 0 && (
                <ul className="space-y-1">
                  {area.cities.map((city, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">
                      • {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center">
          <Text
            as="p"
            size="base"
            color="muted"
            className="max-w-3xl mx-auto leading-relaxed"
          >
            Remote consultations available. WhatsApp-first ensures fast and secure communication.
          </Text>
        </div>
      </div>
    </section>
  );
}

