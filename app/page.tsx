import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
