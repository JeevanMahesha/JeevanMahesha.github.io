"use client";

import React, { useState, useEffect } from "react";
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Code, Cpu, Layout, Layers, LucideIcon } from "lucide-react";

interface ParallaxIconProps {
  Icon: LucideIcon;
  delay: number;
  x: number;
  y: number;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}

export function Hero() {
  const [headline] = useState(
    "Bridging the gap between pixel-perfect design and high-performance code.",
  );
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 40,
      y: (e.clientY / window.innerHeight - 0.5) * 40,
    });
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mousePos.x, springConfig);
  const springY = useSpring(mousePos.y, springConfig);

  useEffect(() => {
    springX.set(mousePos.x);
    springY.set(mousePos.y);
  }, [mousePos, springX, springY]);

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxIcon
          Icon={Code}
          delay={0}
          x={-20}
          y={-30}
          springX={springX}
          springY={springY}
        />
        <ParallaxIcon
          Icon={Cpu}
          delay={0.2}
          x={30}
          y={-20}
          springX={springX}
          springY={springY}
        />
        <ParallaxIcon
          Icon={Layout}
          delay={0.4}
          x={-40}
          y={20}
          springX={springX}
          springY={springY}
        />
        <ParallaxIcon
          Icon={Layers}
          delay={0.6}
          x={35}
          y={25}
          springX={springX}
          springY={springY}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full glass text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              <Sparkles className="w-3 h-3 mr-2 text-secondary" />
              Creative Engineer • Jeevan Mahesha
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-bold font-headline mb-8 leading-tight tracking-tight">
            {headline}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}

function ParallaxIcon({
  Icon,
  delay,
  x,
  y,
  springX,
  springY,
}: ParallaxIconProps) {
  const motionX = useTransform(springX, (val: number) => val * (x / 20));
  const motionY = useTransform(springY, (val: number) => val * (y / 20));

  return (
    <motion.div
      style={{ x: motionX, y: motionY, left: `${50 + x}%`, top: `${50 + y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.1, scale: 1 }}
      transition={{ delay, duration: 1 }}
      className="absolute p-4 rounded-2xl glass shadow-2xl border border-white/30"
    >
      <Icon className="w-8 h-8 md:w-12 md:h-12 text-foreground" />
    </motion.div>
  );
}
