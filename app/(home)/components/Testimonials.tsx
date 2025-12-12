import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Avvocats LLP made my asylum process stress-free. They truly understood my situation and handled everything professionally.",
      name: "Ravinder S.",
      location: "Los Angeles, CA",
      date: "3/15/2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
    {
      quote:
        "The team at Avvocats LLP helped me get my marriage-based green card approved. Their expertise and support throughout the process was exceptional.",
      name: "Priya M.",
      location: "San Francisco, CA",
      date: "2/28/2025",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    {
      quote:
        "I was worried about my immigration case, but Avvocats LLP guided me through every step. Professional, compassionate, and results-driven.",
      name: "Amit K.",
      location: "San Diego, CA",
      date: "3/10/2025",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    },
    // {
    //   quote:
    //     "Excellent service! They speak my language and understand my culture. Highly recommend for South Asian clients seeking immigration help.",
    //   name: "Sunita R.",
    //   location: "Orange County, CA",
    //   date: "2/20/2025",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    // },
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
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 uppercase tracking-wide max-w-3xl mx-auto">
            Testimonials
          </h2>
          <p className="text-sm sm:text-md text-white/90 font-medium">
            What Our Clients Say
          </p>
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
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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
                <p className="text-gray-500 text-sm mt-1">
                  {testimonial.date}
                </p>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}