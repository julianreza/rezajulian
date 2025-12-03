"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero3D from "./Hero3D";

type Particle = {
  initialX: number;
  initialY: number;
  animateX: number;
  animateY: number;
  duration: number;
};

export default function Hero() {
  // Start with deterministic particles for SSR; randomize on client after mount
  const [particles, setParticles] = useState<Particle[]>(() =>
    Array.from({ length: 20 }, () => ({
      initialX: 0,
      initialY: 0,
      animateX: 0,
      animateY: 0,
      duration: 15,
    }))
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const generated: Particle[] = Array.from({ length: 20 }, () => ({
      initialX: Math.random() * width,
      initialY: Math.random() * height,
      animateX: Math.random() * width,
      animateY: Math.random() * height,
      duration: Math.random() * 10 + 10,
    }));

    setParticles(generated);
  }, []);

  return (
    <section className="min-h-screen flex items-start md:items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20 md:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{
              x: particle.initialX,
              y: particle.initialY,
            }}
            animate={{
              y: [null, particle.animateY],
              x: [null, particle.animateX],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center h-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center md:text-left max-w-xl mx-auto md:mx-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
            >
              Reza Julian
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl mb-4 md:mb-6 text-blue-200"
            >
              Fullstack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-xl mb-8 text-gray-300"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4 flex-wrap justify-center md:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-purple-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Character */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-sm sm:max-w-md md:max-w-full mx-auto md:mx-0 mt-10 md:mt-0"
          >
            <Hero3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

