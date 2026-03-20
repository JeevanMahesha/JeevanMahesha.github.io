"use client";

import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Toolbox", href: "#toolbox" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <div className="w-full max-w-5xl glass rounded-full px-6 py-2 md:px-8 md:py-3 flex items-center justify-between shadow-2xl shadow-primary/10">
        <Link
          href="/"
          className="text-lg md:text-xl font-bold font-headline tracking-tighter group flex items-center shrink-0"
        >
          <span className="text-primary group-hover:text-secondary transition-colors duration-300">
            Jeevan
          </span>
          <span className="text-foreground ml-0.5">Mahesha</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold tracking-tight text-muted-foreground hover:text-foreground transition-colors group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="h-6 w-px bg-border mx-2 hidden md:block" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
