"use client";

import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <div className="w-full max-w-5xl glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        <Link
          href="/"
          className="text-lg font-bold font-headline tracking-tighter group"
        >
          <span className="text-primary group-hover:text-secondary transition-colors">
            Jeevan
          </span>
          <span className="text-foreground">Mahesha</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link
            href="#about"
            className="hover:text-secondary transition-colors"
          >
            About
          </Link>
          <Link
            href="#toolbox"
            className="hover:text-secondary transition-colors"
          >
            Toolbox
          </Link>
          <Link
            href="#projects"
            className="hover:text-secondary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-secondary transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="hidden sm:block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Resume
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
