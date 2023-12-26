import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 pt-24 text-center">Log in successful</div>
        <Footer />
      </div>
    </main>
  );
}

export default HomePage;