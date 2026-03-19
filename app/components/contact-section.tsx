"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Globe,
  createLucideIcon,
} from "lucide-react";

const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      stroke: "none",
      fill: "currentColor",
    },
  ],
]);
const socials = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com",
    color:
      "hover:border-zinc-500/40 hover:bg-zinc-500/5 dark:hover:bg-zinc-900/50",
    iconColor: "text-muted-foreground group-hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/jeevanmahesha/",
    color:
      "hover:border-blue-500/40 hover:bg-blue-500/5 dark:hover:bg-blue-500/10",
    iconColor:
      "text-blue-500/70 group-hover:text-blue-600 dark:group-hover:text-blue-300",
  },
  {
    name: "Twitter",
    icon: XIcon,
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
