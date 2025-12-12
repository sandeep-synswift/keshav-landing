"use client";

import { useState } from "react";
import { Button, Input, Textarea, Select, Image as DefaultImage } from "@/components/common";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Success
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Request a Free Legal Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <Input
                type="text"
                id="name"
                name="name"
                label="Name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="bg-white/10"
              />

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <Input
                  type="email"
                  id="email"
                  name="email"
                  label="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-white/10"
                />

                {/* Phone */}
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  label="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                  className="bg-white/10"
                />
              </div>

              {/* Service Selection */}
              <Select
                id="service"
                name="service"
                label="Select Service"
                required
                value={formData.service}
                onChange={handleChange}
                placeholder="Select a service"
                options={[
                  { value: "asylum", label: "Asylum Services" },
                  { value: "marriage", label: "Marriage-Based Green Card / Petition" },
                  { value: "other", label: "Other Immigration Services" }
                ]}
                className="bg-white/10"
              />

              {/* Message */}
              <Textarea
                id="message"
                name="message"
                label="Tell me about your case"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your case"
                rows={4}
                className="bg-white/10"
              />

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="secondarySolid"
                size="large"
                className="w-full shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit & Get Callback"}
              </Button>
            </form>

         
          </div>
        </div>
      </div>

      {/* Right Column - Background Image with Text */}
      <div className="hidden lg:block w-1/2 relative">
        <div className="absolute inset-0">
          <DefaultImage
            src="/assets/photos/user.webp"
            alt="Contact us"
            fill
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>

       
      </div>
    </section>
  );
}