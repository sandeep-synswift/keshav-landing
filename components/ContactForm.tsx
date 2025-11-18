"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-us" className="relative flex scroll-mt-20">
      {/* Left Column - Form */}
      <div className="w-full lg:w-1/2 relative bg-orange-400 flex items-center justify-center py-10  px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg ">
          {/* Form Container */}
          <div className="rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Request a Free Legal Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-gray-500 text-xs">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone (optional)"
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="asylum">Asylum Services</option>
                  <option value="marriage">Marriage-Based Green Card / Petition</option>
                  <option value="other">Other Immigration Services</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell me about your case <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your case"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Submit & Get Callback
              </button>
            </form>

         
          </div>
        </div>
      </div>

      {/* Right Column - Background Image with Text */}
      <div className="hidden lg:block w-1/2 relative">
        <div className="absolute inset-0">
          <Image
            src="/assets/photos/user.webp"
            alt="Contact us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>

       
      </div>
    </section>
  );
}

