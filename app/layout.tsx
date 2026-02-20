// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"]
});

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Dee Gee Catering & Events | Since 1985",
  description: "Legacy catering and event planning for discerning clients. Wedding feasts, corporate galas, and bespoke celebrations crafted with 40 years of excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${cormorant.variable} ${greatVibes.variable} font-serif antialiased bg-cream text-charcoal`}>
        {children}
      </body>
    </html>
  );
}