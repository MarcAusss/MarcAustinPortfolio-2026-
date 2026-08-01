import type { Metadata } from "next";

import { Cormorant_Garamond, Inter } from "next/font/google";

import PortfolioTransitionProvider from "@/components/transitions/PortfolioTransitionProvider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],

  variable: "--font-cormorant",

  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Marc Austin | Portfolio",

    template: "%s | Marc Austin",
  },

  description: "Developer and photographer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <PortfolioTransitionProvider>{children}</PortfolioTransitionProvider>
      </body>
    </html>
  );
}
