import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/customCursor/CustomCursor";
import { ModalProvider } from "@/contexts/ModalContext";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Welcome to our landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased font-sans`}
      >
        <ModalProvider>
          <CustomCursor />
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
