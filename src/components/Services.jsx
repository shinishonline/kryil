// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Services() {
  const items = [
    {
      title: "Infrastructure Services",
      link: "/infrastructure-services",
      blurb:
        "Design, deploy and operate resilient, scalable platforms that keep you fast and future-proof.",
      note: "Enabling future-proof IT foundations with performance and reliability.",
    },
    {
      title: "Cybersecurity Services",
      link: "/cyber-security",
      blurb:
        "From governance to red-teaming — continuous protection, detection and response you can trust.",
      note: "Safeguarding your digital landscape with 24/7 protection.",
    },
    {
      title: "Software Development Solutions",
      link: "/software",
      blurb:
        "Custom systems engineered for performance, maintainability and elegant user experience.",
      note: "Building scalable, user-centric applications for modern businesses.",
    },
    {
      title: "Infrastructure Automation Solutions",
      link: "/automation",
      blurb:
        "Eliminate toil with workflow, CI/CD and ops automation to unlock deep efficiency.",
      note: "Transforming operations with intelligent automation and efficiency.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="text-black dark:text-slate-100 py-7">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="font-Poppins text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-600 ">
                Services
              </h2>

              <p className="mt-4 text-black/70 dark:text-slate-300 leading-relaxed font-Poppins font-[500]">
                High-impact capabilities, thoughtfully engineered. Everything is
                built on a foundation of clarity, rigor and craft.
              </p>

              <div className="mt-8 h-px bg-black/10 dark:bg-emerald-700" />

              <nav aria-label="Services list" className="mt-6">
                <ul className="space-y-3 text-sm font-Poppins font-[500]">
                  {items.map((it, i) => (
                    <li key={it.title} className="flex items-center gap-3 transition">
                      <span className="inline-flex h-6 w-6 items-center justify-center bg-emerald-500 rounded-full border border-black/10 dark:border-slate-600 text-[11px] text-white dark:text-slate-100">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {/* ✅ Make the title clickable */}
                      <Link
                        to={it.link}
                        className="truncate text-black dark:text-slate-100 transition-colors hover:text-emerald-500 dark:hover:text-emerald-500"
                      >
                        {it.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Right: Service details */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {items.map((it, idx) => (
                <motion.div
                  key={it.title}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="relative pl-4 border-l border-black/10 dark:border-slate-700 transition-all duration-300 hover:border-black dark:hover:border-emerald-700"
                >
                  {/* Title */}
                  <h3 className="text-xl font-extrabold font-Poppins mb-3 text-emerald-600 ">
                    {it.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black/70 dark:text-slate-300 font-Poppins font-[400] leading-relaxed mb-3">
                    {it.blurb}
                  </p>

                  {/* Custom Note */}
                  <p className="text-sm font-Poppins text-black/60 dark:text-slate-400 mb-4">
                    {it.note}
                  </p>

                  {/* Explore link */}
                  <Link
                    to={it.link}
                    className="group inline-block text-base font-medium text-black dark:text-emerald-700 relative
                               after:block after:w-0 after:h-[1px] after:bg-black dark:after:bg-emerald-700
                               after:transition-all after:duration-300 hover:after:w-full 
                               hover:text-black dark:hover:text-emerald-500"
                  >
                    Explore service
                    <span className="sr-only">{it.title}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
