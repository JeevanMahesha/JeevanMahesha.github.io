import dynamic from "next/dynamic";

const Navbar = dynamic(() =>
  import("./components/navbar").then((mod) => mod.Navbar),
);
const Hero = dynamic(() => import("./components/hero").then((mod) => mod.Hero));
const AboutSection = dynamic(() =>
  import("./components/about-section").then((mod) => mod.AboutSection),
);
const Toolbox = dynamic(() =>
  import("./components/toolbox").then((mod) => mod.Toolbox),
);
const ContactSection = dynamic(() =>
  import("./components/contact-section").then((mod) => mod.ContactSection),
);
const Footer = dynamic(() =>
  import("./components/footer").then((mod) => mod.Footer),
);
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
