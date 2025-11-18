import Image from "next/image";

export default function ProfessionalAffiliations() {
  const affiliations = [
    {
      title: "BOARD CERTIFIED",
      organization: "Texas Board of Legal Specialization",
      specialty: "IMMIGRATION AND NATIONALITY LAW",
      lawyers: ["Jaime Barron", "Hussein Sadruddin"],
      image: "/assets/photos/professional-affiliation-section/BOARD CERTIFIED.png",
    },
    {
      title: "2025 Member",
      organization: "American Immigration Lawyers Association",
      note: "© 2023 AILA. This logo signifies membership status in the Association for the year listed and is not an official endorsement of or a validated attorney.",
      image: "/assets/photos/professional-affiliation-section/2025 Member.png",
      color: "blue",
    },
    {
      title: "STATE BAR OF TEXAS",
      organization: "Created in 1939",
      image: "/assets/photos/professional-affiliation-section/STATE BAR OF TEXAS.png",
    },
    {
      title: "MÉXICO",
      organization: "CONSULADO GENERAL EN DALLAS",
      description: "Proudly serving the Consulate of Mexico in Dallas under the program of legal assistance to Mexican nationals through the program PALE. Providing external legal advice in the United States",
      image: "/assets/photos/professional-affiliation-section/MÉXICO.png",
      color: "maroon",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-10">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight max-w-3xl mx-auto">
            Professional Affiliation Section
          </h2>
          <p className="text-sm sm:text-md text-gray-600 max-w-3xl mx-auto leading-relaxed uppercase font-semibold tracking-wide">
            PROFESSIONAL AFFILIATIONS
          </p>
        </div>

        {/* Affiliations Grid */}
        <div className="flex justify-center gap-2 items-center">
          {affiliations.map((affiliation, index) => (
            <div
              key={index}
              className="bg-white p-6 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group hover:border-orange-500/50"
            >
              {/* Image */}
              <div className="flex justify-center mb-1">
                <div className="relative w-20 h-20">
                  <Image
                    src={affiliation.image}
                    alt={affiliation.title}
                    fill
                    className="object-contain"
                    priority={index < 2}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-md text-gray-900 text-center group-hover:text-orange-600 transition-colors">
                {affiliation.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

