"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Globe } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  {
    name: "GitHub",
    icon: SiGithub,
    link: "https://github.com/JeevanMahesha",
    color:
      "hover:border-zinc-500/40 hover:bg-zinc-500/5 dark:hover:bg-zinc-900/50",
    iconColor: "text-muted-foreground group-hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/jeevanmahesha/",
    color:
      "hover:border-blue-500/40 hover:bg-blue-500/5 dark:hover:bg-blue-500/10",
    iconColor:
      "text-blue-500/70 group-hover:text-blue-600 dark:group-hover:text-blue-300",
  },
  {
    name: "Twitter",
    icon: SiX,
    link: "https://x.com/jeevanmahesha",
    color:
      "hover:border-zinc-500/40 hover:bg-zinc-500/5 dark:hover:bg-zinc-500/10",
    iconColor: "text-muted-foreground group-hover:text-foreground",
  },
  {
    name: "Email",
    icon: Mail,
    link: "mailto:csejeevanmahesha@gmail.com",
    color:
      "hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10",
    iconColor: "text-primary/70 group-hover:text-primary",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 relative border-t border-border bg-muted/5 scroll-mt-24"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-border text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
            <Globe className="w-3 h-3" />
            Global Reach
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6 tracking-tight">
            Connect with <span className="text-secondary">Jeevan Mahesha</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I am currently open to high-impact technical roles and select
            freelance partnerships. Reach out via any of the channels below to
            start a conversation.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              viewport={{ once: true }}
              className={`group flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-border transition-all duration-300 ${social.color}`}
            >
              <social.icon
                className={`w-5 h-5 transition-colors ${social.iconColor}`}
              />
              <span className="text-xs font-bold uppercase tracking-widest">
                {social.name}
              </span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
