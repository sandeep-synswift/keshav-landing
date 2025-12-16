"use client";

import { useState, useEffect } from "react";
import { Button, Input, Textarea, Select } from "@/components/common";
import SectionHeading from "@/components/sectionHeading/SectionHeading";
import { useModal } from "@/contexts/ModalContext";
import { IoClose } from "react-icons/io5";

export default function ContactModal() {
  const { isOpen, openModal, closeModal } = useModal();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if modal was dismissed today
    const checkShouldShow = () => {
      const dismissedDate = localStorage.getItem("contactModalDismissed");
      
      if (!dismissedDate) {
        // Never dismissed, show after 1 minute
        const timer = setTimeout(() => {
          openModal();
        }, 600); // 1 minute = 60000ms
        
        return () => clearTimeout(timer);
      } else {
        // Check if dismissed date is from yesterday or earlier
        const dismissed = new Date(dismissedDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        dismissed.setHours(0, 0, 0, 0);
        
        const daysDiff = Math.floor((today.getTime() - dismissed.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysDiff >= 1) {
          // It's been at least 1 day, show after 1 minute
          const timer = setTimeout(() => {
            openModal();
          }, 60000);
          
          return () => clearTimeout(timer);
        }
        // Otherwise, don't show
      }
    };

    const cleanup = checkShouldShow();
    return cleanup;
  }, [openModal]);


  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    closeModal();
    // Store today's date when dismissed
    const today = new Date().toISOString();
    localStorage.setItem("contactModalDismissed", today);
  };

  if (!isMounted || !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <IoClose className="w-6 h-6" />
        </button>

        {/* Form Content */}
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <SectionHeading
              as="h2"
              className="text-3xl text-gray-900 mb-2"
            >
              Book Your Free Consultation
            </SectionHeading>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
          {/* Contact Form - Modified for modal */}
          <ContactFormModalContent onSuccess={handleClose} />
        </div>
      </div>
    </div>
  );
}

// Separate component for the form content in modal
function ContactFormModalContent({ onSuccess }: { onSuccess: () => void }) {
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

      // Close modal after 3 seconds on success
      setTimeout(() => {
        const today = new Date().toISOString();
        localStorage.setItem("contactModalDismissed", today);
        onSuccess();
      }, 3000);
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
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <Input
        type="text"
        id="modal-name"
        name="name"
        label="Name"
        required
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />

      {/* Email and Phone Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <Input
          type="email"
          id="modal-email"
          name="email"
          label="Email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        {/* Phone */}
        <Input
          type="tel"
          id="modal-phone"
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone (optional)"
        />
      </div>

      {/* Service Selection */}
      <Select
        id="modal-service"
        name="service"
        label="Select Service"
        required
        value={formData.service}
        onChange={handleChange}
        placeholder="Select a service"
        options={[
          { value: "asylum", label: "Asylum Services" },
          { value: "marriage", label: "Marriage-Based Green Card / Petition" },
          { value: "b1b2", label: "B1/B2 Overstay / Extension / Change of Status" },
          { value: "other", label: "Other Immigration Services" }
        ]}
      />

      {/* Message */}
      <Textarea
        id="modal-message"
        name="message"
        label="Tell me about your case"
        required
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell me about your case"
        rows={4}
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
        variant="primary"
        size="large"
        className="w-full shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit & Get Callback"}
      </Button>
    </form>
  );
}

