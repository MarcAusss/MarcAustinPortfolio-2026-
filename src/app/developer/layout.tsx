import DeveloperFooter from "@/components/developer/DeveloperFooter";
import DeveloperHeader from "@/components/developer/DeveloperHeader";

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