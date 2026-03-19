import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { AboutSection } from "./components/about-section";
import { Toolbox } from "./components/toolbox";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <Toolbox />
      <ContactSection />
      <Footer />
    </main>
  );
}
