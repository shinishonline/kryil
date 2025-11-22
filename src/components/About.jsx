// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { UserGroupIcon } from "@heroicons/react/24/outline";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.18 });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="max-w-[1200px] mx-auto px-6 py-1 relative">
      {/* Heading + 3 full-width paragraphs */}
      <motion.div
        className="space-y-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
      >
        <motion.h2
        // text-slate-900 dark:text-slate-100
          className="font-Poppins text-6xl md:text-7xl font-semibold text-emerald-600 text-center"
          variants={fadeUp}
        >
          About Us
        </motion.h2>

        <motion.div
          className="antialiased mx-auto max-w-3xl space-y-6 text-darkBg dark:text-slate-300 text-lg leading-relaxed"
          variants={fadeUp}
        >
          <p className="font-Poppins font-normal text-justify text-base">
            <span className="font-semibold text- dark:text-slate-100">
              Kryil
            </span>{" "}
            transforms visionary ideas into technological realities. We design
            and build solutions that are reliable, future-proof, and crafted to
            scale — so businesses can focus on growth, not friction.
       
            Our blended expertise across software engineering, AI, and
            cloud-native platforms lets us deliver systems that aren’t just
            functional — they’re impactful. We engineer for performance,
            maintainability, and measurable outcomes.
        
            We partner closely with clients to understand problems deeply,
            iterate quickly, and deliver with craftsmanship. Creativity,
            transparency, and technical rigor guide every project we take on.
          </p>
        </motion.div>
      </motion.div>

      {/* Two-column split with centered vertical divider (desktop) */}
      <motion.div
        className="mt-16 relative"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
      >
        {/* vertical divider */}
        <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2">
          <div className="h-full w-full bg-gradient-to-b from-slate-500 via-slate-400 to-slate-300 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 opacity-70" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Who We Are */}
          <motion.div
            className="antialiased flex flex-col items-start md:items-end md:pr-8"
            variants={slideLeft}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full ring-1 ring-slate-400 dark:ring-slate-600 p-2 bg-white/0">
                <UserGroupIcon className="w-9 h-9 text-slate-900 dark:text-slate-100" />
              </div>
              <div className="text-right">
                <h4 className="text-2xl md:text-3xl font-extrabold text-emerald-600  -mt-1">
                  Who We Are
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  We build strong teams
                </p>
              </div>
            </div>

            <p className="font-Poppins text-sm font-[300] text-justify text-slate-700 dark:text-slate-300 md:text-right leading-relaxed">
              We bring together exceptional engineers, designers, and strategists
              who transform challenges into opportunities. Our team blends
              technical mastery with innovative thinking to build solutions that
              drive lasting success and future growth.
            </p>

            <div className="hidden md:block w-28 h-[3px] bg-gradient-to-r from-slate-400 to-transparent dark:from-slate-600 mt-6 ml-auto rounded-full" />
          </motion.div>

          {/* Right: What We Do */}
          <motion.div
            className="flex flex-col items-start md:items-start md:pl-8"
            variants={slideRight}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full ring-1 ring-slate-200 dark:ring-slate-600 p-2 bg-white/0">
                <UserGroupIcon className="w-9 h-9 text-slate-900 dark:text-slate-100" />
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-extrabold text-emerald-600  -mt-1">
                  What We Do
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  We deliver technology that matters
                </p>
              </div>
            </div>

            <p className="font-Poppins text-sm font-[300] text-justify text-slate-700 dark:text-slate-300 leading-relaxed">
              We deliver comprehensive technology solutions that transform your
              business vision into reality. From custom software and AI systems
              to scalable digital platforms, Kryil builds and supports the
              advanced tools you need to lead in your industry.
            </p>

            <div className="hidden md:block w-28 h-[3px] bg-gradient-to-l from-slate-400 to-transparent dark:from-slate-600 mt-6 rounded-full" />
          </motion.div>
        </div>

        {/* horizontal divider for mobile */}
        <div className="md:hidden mt-8">
          <div className="h-px bg-slate-200 dark:bg-slate-600 w-full" />
        </div>
      </motion.div>
    </section>
  );
}
