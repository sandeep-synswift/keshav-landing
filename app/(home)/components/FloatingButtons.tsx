"use client";

import { Button, Text } from "@/components/common";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      {/* Sticky Floating WhatsApp and Call Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Button
          as="link"
          href="https://wa.me/13105000780"
          variant="primary"
          size="medium"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 lg:px-6 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 rounded-full"
        >
          <FaWhatsapp className="w-5 h-5" />
          <Text size="sm">WhatsApp</Text>
        </Button>
      </div>
    </>
  );
}

