import PhotographyCursor from "@/components/photography/PhotographyCursor";
import PhotographyFooter from "@/components/photography/PhotographyFooter";
import PhotographyHeader from "@/components/photography/PhotographyHeader";

export default function PhotographyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="photography-theme min-h-screen">
      <PhotographyCursor />

      <PhotographyHeader />

      {children}

      <PhotographyFooter />
    </div>
  );
}