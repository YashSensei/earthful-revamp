import type { Metadata } from "next";
import { Inter, Literata, Aboreto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import ThirdPartyStrip from "@/components/ThirdPartyStrip";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const literata = Literata({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Earthful | Nature-based Nutrition Products",
  description:
    "Earthful provides nature-based nutrition supplements, with unique formulations available in India for the very first time, where vitamins and minerals are sourced solely from Plants.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${literata.variable} ${aboreto.variable}`}
    >
      <body>
        <AnnouncementBar />
        <Header />
        <ThirdPartyStrip />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
