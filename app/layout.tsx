import type { Metadata } from "next";
import { Urbanist } from "next/font/google"; // Import font
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans", // Tailwind v4 will pick this up if mapped
  display: "swap"
});

export const metadata: Metadata = {
  title: "mVPN - Fast & Secure VPN",
  description: "Protect your digital life with mVPN. High-speed, secure, and private internet access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased bg-[#0B1120] text-white selection:bg-indigo-500/30`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
