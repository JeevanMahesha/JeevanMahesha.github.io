/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiReactivex,
  SiTailwindcss,
  SiSass,
  SiFirebase,
  SiNodedotjs,
  SiGraphql,
  SiNx,
  SiCypress,
  SiGit,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiRedux,
  SiPwa,
  SiJest,
  SiExpress,
  SiPostgresql,
  SiNestjs,
  SiRust,
  SiDjango,
  SiFlask,
  SiSpringboot,
  SiFastapi,
  SiMongodb,
  SiPython,
  SiDocker,
  SiEsbuild,
  SiGithub,
  SiNpm,
  SiPnpm,
  SiWebpack,
  SiYarn,
  SiNginx,
} from "@icons-pack/react-simple-icons";
import {
  Box,
  Zap,
  Smartphone,
  Monitor,
  Palette,
  Cpu,
  ShieldCheck,
  Command,
  Infinity as LucideInfinity,
  Layers,
} from "lucide-react";

const tools = [
  // Core Frontend
  { name: "Angular", icon: SiAngular, color: "text-[#DD0031]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss, color: "text-[#1572B6]" },

  // Frontend Ecosystem
  { name: "RxJS", icon: SiReactivex, color: "text-[#B7178C]" },
  { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
  { name: "NgRx", icon: Layers, color: "text-[#BA2BD2]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "SASS", icon: SiSass, color: "text-[#CC6699]" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
  { name: "PWA", icon: SiPwa, color: "text-[#5A0FC8]" },

  // Backend & Databases
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express", icon: SiExpress, color: "text-foreground" },
  { name: "NestJS", icon: SiNestjs, color: "text-[#E0234E]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "Rust", icon: SiRust, color: "text-[#000000] dark:text-white" },
  { name: "FastAPI", icon: SiFastapi, color: "text-[#05998B]" },
  {
    name: "Django",
    icon: SiDjango,
    color: "text-[#092E20] dark:text-[#0c4b33]",
  },
  { name: "Flask", icon: SiFlask, color: "text-foreground" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "GraphQL", icon: SiGraphql, color: "text-[#E10098]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "Firestore", icon: ShieldCheck, color: "text-green-500" },

  // Architecture & DevOps
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "NGINX", icon: SiNginx, color: "text-[#009639]" },
  { name: "NX Monorepos", icon: SiNx, color: "text-foreground" },
  { name: "CI/CD", icon: LucideInfinity, color: "text-indigo-400" },
  { name: "Micro-frontends", icon: Cpu, color: "text-blue-300" },
  { name: "Design Systems", icon: Box, color: "text-orange-500" },
  { name: "Web Components", icon: Command, color: "text-amber-500" },

  // Tools & Testing
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-foreground" },
  { name: "npm", icon: SiNpm, color: "text-[#CB3837]" },
  { name: "pnpm", icon: SiPnpm, color: "text-[#F69220]" },
  { name: "Yarn", icon: SiYarn, color: "text-[#2C8EBB]" },
  { name: "Webpack", icon: SiWebpack, color: "text-[#8DD6F9]" },
  { name: "esbuild", icon: SiEsbuild, color: "text-[#FFCF00]" },
  { name: "Jest", icon: SiJest, color: "text-[#C21325]" },
  {
    name: "Cypress",
    icon: SiCypress,
    color: "text-[#17202C] dark:text-[#69D3A7]",
  },
  { name: "Performance", icon: Zap, color: "text-yellow-400" },

  // Design Focus
  { name: "UI/UX", icon: Palette, color: "text-purple-400" },
  { name: "Mobile First", icon: Smartphone, color: "text-emerald-400" },
  { name: "Responsive", icon: Monitor, color: "text-blue-400" },
];

export function Toolbox() {
  return (
    <section id="toolbox" className="py-24 relative overflow-hidden bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
              Technical Arsenal
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A curated collection of frameworks, languages, and tools I
              leverage to build resilient, high-performance digital experiences.
            </p>
          </div>
          <div className="text-xs font-code opacity-40 hidden md:block uppercase tracking-widest border-l pl-4 border-border">
            // stack.overflow.status: optimal
            <br />
            // current.load: interactive
          </div>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4 max-w-7xl">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                y: -4,
              }}
              transition={{
                delay: index * 0.01,
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-border glass transition-all cursor-default hover:bg-primary/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <tool.icon
                className={`w-4 h-4 transition-transform group-hover:rotate-12 ${tool.color}`}
              />
              <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
