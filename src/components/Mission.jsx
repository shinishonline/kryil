// src/components/Mission.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
  ChartBarIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";

export default function Mission() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });



  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="relative w-full px-6 py-20 overflow-hidden"
      aria-labelledby="mission-heading"
    >
      {/* Granite/Rock Texture Background - Full Width */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E"),
            radial-gradient(circle at 20% 50%, rgba(156, 163, 175, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(209, 213, 219, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 90%, rgba(156, 163, 175, 0.08) 0%, transparent 40%)
          `,
          backgroundBlendMode: 'overlay, normal, normal, normal'
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="antialiased text-center mb-10"
      >
        <h2
          id="mission-heading"
          className="font-Poppins text-6xl md:text-7xl font-thin mb-4 text-cyan-600"
        >
          Our Mission
        </h2>
        <p className="font-Poppins tracking-wider font-normal text-base text-justify text-slate-700 dark:text-slate-300 m-7 max-w-3xl mx-auto leading-relaxed">
          We build transformative technology that turns your pioneering vision into reality. Through innovative yet practical solutions, we help you navigate digital complexity and
          unlock unprecedented growth opportunities. We focus on creating lasting impact, ensuring your business succeeds today and leads tomorrow.
        </p>
      </motion.div>

      {/* Hover-style tiles (Tailwind) */}
      </div>
    </section>
  );
}
