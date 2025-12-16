import Image from "next/image";
import { FaStar } from "react-icons/fa";
import SectionHeading from "@/components/sectionHeading/SectionHeading";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I messaged on WhatsApp and the intake specialist guided me clearly. Attorney consultation was precise and professional.",
      name: "Raj",
      location: "CA",
      date: "",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
    {
      quote:
        "Overstayed B1/B2 and unsure of my options. WhatsApp intake was easy, and attorney prepared my case perfectly.",
      name: "Priya",
      location: "NY",
      date: "",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    {
      quote:
        "The marriage Green Card process was overwhelming. WhatsApp intake helped me organize everything before attorney consultation.",
      name: "Anjali",
      location: "TX",
      date: "",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 sm:py-24 lg:py-28 
    overflow-hidden scroll-mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
          alt="Office background"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/85 to-slate-900/85 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <SectionHeading
            as="h2"
            className="text-4xl md:text-5xl text-white mb-6 uppercase tracking-wide max-w-3xl mx-auto"
          >
            Realistic Testimonials / Social Proof
          </SectionHeading>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-500/30"
            >
              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              {/* Attribution */}
              <div className="text-center pt-6 border-t-2 border-gray-100">
                <p className="text-gray-900 font-bold text-lg sm:text-xl">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  {testimonial.location}
                </p>
                {testimonial.date && (
                  <p className="text-gray-500 text-sm mt-1">
                    {testimonial.date}
                  </p>
                )}
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}