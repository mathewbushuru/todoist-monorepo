import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import UsedbySection from "@/components/usedby-section";
import FeaturesSection from "@/components/features-section";
import LinksSection from "@/components/links-section";
import StatsSection from "@/components/stats-section";
import Footer from "@/components/footer";

function HomePage() {
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

export default HomePage;
