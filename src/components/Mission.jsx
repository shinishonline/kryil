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
      className="relative max-w-[1200px] mx-auto px-6 py-20"
      aria-labelledby="mission-heading"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="antialiased text-center mb-10"
      >
        <h2
          id="mission-heading"
          className="font-Poppins text-4xl md:text-5xl font-bold mb-4 text-emerald-600"
        >
          Our Mission
        </h2>
        <p className="font-Poppins tracking-wider font-[400] text-sm text-justify text-slate-700 dark:text-slate-300 m-7 max-w-3xl mx-auto leading-relaxed">
          We build transformative technology that turns your pioneering vision into reality. Through innovative yet practical solutions, we help you navigate digital complexity and
          unlock unprecedented growth opportunities. We focus on creating lasting impact, ensuring your business succeeds today and leads tomorrow.
        </p>
      </motion.div>

      {/* Hover-style tiles (Tailwind) */}
     
    </section>
  );
}
