import type { Metadata } from "next";

import DeveloperFooter from "@/components/developer/DeveloperFooter";
import DeveloperHeader from "@/components/developer/DeveloperHeader";

import {
  developerPageMetadata,
  developerTitle,
} from "./metadata";

export const metadata: Metadata = {
  ...developerPageMetadata({}),

  title: {
    default: developerTitle,
    template: `%s | ${developerTitle}`,
  },
};

export default function DeveloperLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="developer-theme min-h-screen">
      <DeveloperHeader />

      {children}

      <DeveloperFooter />
    </div>
  );
}
