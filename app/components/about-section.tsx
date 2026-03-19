"use client";

import { motion } from "framer-motion";
import { Target, Zap, Coffee, Sparkles } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "Obsessive attention to detail from the first pixel to the final deploy.",
      color: "text-blue-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing every interaction for speed and fluid user experience.",
      color: "text-yellow-500",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Experimenting with the latest tech to solve complex problems simply.",
      color: "text-purple-500",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-2xl animate-pulse" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden glass border-white/20">
                <Image
                  src="/JeevanMahesha.webp"
                  alt="Jeevan Mahesha"
                  loading="eager"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="professional engineer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-2xl border-white/10 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Status
                    </p>
                    <p className="font-bold">Building the Future</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6 tracking-tight">
                Hi, I&apos;m{" "}
                <span className="text-secondary">Jeevan Mahesha</span>. I
                architect experiences.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a Creative Engineer dedicated to the craft of digital
                product building. My journey started at the intersection of
                visual design and logical architecture, leading me to specialize
                in high-performance frontend systems. I believe code should be
                as beautiful as the interface it powers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-4 rounded-2xl glass border-white/5 space-y-3"
                >
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                  <h4 className="font-bold text-sm uppercase tracking-wider">
                    {value.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
