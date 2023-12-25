import Navbar from "@/app/_components/navbar";
import HeroSection from "@/app/_components/hero-section";
import UsedbySection from "@/app/_components/usedby-section";
import FeaturesSection from "@/app/_components/features-section";
import LinksSection from "@/app/_components/links-section";
import StatsSection from "@/app/_components/stats-section";
import Footer from "@/app/_components/footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <UsedbySection />
      <FeaturesSection />
      <LinksSection />
      <StatsSection />
      <Footer />
    </main>
  );
}
