import type { Metadata } from "next";
import { Cinzel, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ParticleField } from "@/components/ParticleField";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Twelve | A Journey Through the Steps",
  description: "An immersive exploration of the Twelve Steps of Alcoholics Anonymous. Sacred modernism meets spiritual recovery.",
  keywords: ["AA", "12 steps", "recovery", "alcoholics anonymous", "spiritual", "sobriety"],
  authors: [{ name: "The Twelve" }],
  openGraph: {
    title: "The Twelve | A Journey Through the Steps",
    description: "An immersive exploration of the Twelve Steps of Alcoholics Anonymous",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${sourceSerif.variable}`}>
      <head>
        <style>{`
          :root {
            --font-display: ${cinzel.style.fontFamily}, serif;
            --font-body: ${sourceSerif.style.fontFamily}, serif;
          }
        `}</style>
      </head>
      <body className="bg-[#0a0a0b] text-[#f5f0e6] antialiased">
        <ParticleField />
        {children}
      </body>
    </html>
  );
}
