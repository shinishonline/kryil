// src/pages/SoftwareDevelopmentSolutions.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  WindowIcon,
  PuzzlePieceIcon,
  CpuChipIcon,
  CloudIcon,
  ChartBarIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

import NetworkBackground from "../components/NetworkBackground";

const services = [
  {
    id: "custom",
    title: "Custom Software Development",
    blurb:
      "Tailored enterprise-grade applications designed for scalability and performance.",
    bullets: [
      "End-to-end custom application development.",
      "Scalable architecture and performance tuning.",
      "Enterprise workflows & digital transformation.",
      "Cross-industry solutions aligned with business goals.",
    ],
    icon: CodeBracketIcon,
  },
  {
    id: "mobile",
    title: "Mobile Solutions",
    blurb:
      "iOS & Android apps built with modern frameworks for seamless performance.",
    bullets: [
      "Native iOS (Swift/SwiftUI) & Android (Kotlin).",
      "Cross-platform frameworks (React Native, Flutter).",
      "API & device integration.",
      "Optimized for performance & usability.",
    ],
    icon: DevicePhoneMobileIcon,
  },
  {
    id: "web",
    title: "Web Development",
    blurb:
      "Modern, responsive web apps using robust JavaScript frameworks.",
    bullets: [
      "React, Angular & Vue.js frontends.",
      "Progressive Web Apps (PWAs).",
      "High-performance single-page applications.",
      "SEO optimization and accessibility.",
    ],
    icon: WindowIcon,
  },
  {
    id: "integration",
    title: "Integration Services",
    blurb:
      "Seamless integrations to unify systems into one digital ecosystem.",
    bullets: [
      "Custom API development.",
      "Middleware and data pipelines.",
      "Legacy system integration.",
      "Unified data & process automation.",
    ],
    icon: PuzzlePieceIcon,
  },
  {
    id: "stack",
    title: "Technology Stack",
    blurb: "Versatile expertise across leading frameworks and languages.",
    bullets: [
      "Python (Django, Flask, FastAPI).",
      "Go-based microservices.",
      "React & modern JS ecosystems.",
      "Cloud-native app development.",
    ],
    icon: CpuChipIcon,
  },
  {
    id: "cross",
    title: "Cross-Platform Innovation",
    blurb:
      "Solutions built for maximum reach across devices and platforms.",
    bullets: [
      "React Native mobile apps.",
      "Progressive Web Apps (PWAs).",
      "Cross-platform optimization.",
      "Unified UI/UX experiences.",
    ],
    icon: CubeTransparentIcon,
  },
  {
    id: "backend",
    title: "Backend Power",
    blurb: "Enterprise-ready backends to power applications at scale.",
    bullets: [
      "Scalable API design.",
      "Microservices architecture.",
      "Database optimization.",
      "High-availability clusters.",
    ],
    icon: CloudIcon,
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    blurb: "Smart solutions with predictive models and automation.",
    bullets: [
      "Predictive analytics pipelines.",
      "Natural Language Processing (NLP).",
      "Computer Vision applications.",
      "ML for business automation.",
    ],
    icon: ChartBarIcon,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function SoftwareDevelopmentSolutions() {
  const [openAcc, setOpenAcc] = useState({});
  const toggleAcc = (id) =>
    setOpenAcc((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleContactClick = () => {
    const subject = "Inquiry about Software Development Solutions";
    const body =
      "Hello Kryil Team,%0D%0A%0D%0AI would like to know more about your software development solutions.%0D%0A%0D%0ABest regards,";
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=business@kryil.com&su=${encodeURIComponent(
        subject
      )}&body=${body}`,
      "_blank"
    );
  };

  return (
    <main className="relative min-h-screen bg-transparent text-black dark:text-slate-100">
      <NetworkBackground />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                {/* Back Button */}
                <div className="mb-6">
                  <Link
                    to="/"
                    className="inline-block px-3 py-1.5 rounded-md bg-black dark:bg-emerald-600 text-white text-sm font-Poppins font-medium dark:hover:bg-emerald-700 transition"
                  >
                    ← Back to Home
                  </Link>
                </div>

                <h2 className="font-Poppins text-4xl md:text-5xl font-extrabold tracking-tight dark:text-slate-100">
                  Software Development Solutions
                </h2>

                <p className="mt-4 text-black/70 dark:text-slate-300 leading-relaxed font-Poppins font-[500]">
                  We transform business challenges into powerful applications —
                  engineered for scalability, security, and innovation.
                </p>

                <div className="mt-8 h-px bg-black/10 dark:bg-emerald-700" />

                <ul className="mt-8 space-y-3 text-sm font-Poppins font-[500]">
                  {services.map((s, i) => (
                    <li key={s.id} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center bg-emerald-500 rounded-full text-[11px] text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate text-black dark:text-slate-100 hover:text-black dark:hover:text-emerald-500 transition-colors">
                        {s.title}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Contact Us button */}
                <button
                  onClick={handleContactClick}
                  className="mt-7 w-full px-5 py-3 bg-black dark:bg-emerald-700 text-white font-semibold rounded-md hover:bg-gray-800 dark:hover:bg-emerald-500 transition"
                >
                  Contact Us
                </button>
              </div>
            </aside>

            {/* Expandable Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {services.map((s, idx) => {
                  const IconComp = s.icon;
                  return (
                    <motion.div
                      key={s.id}
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeUp}
                      className="relative pl-4 border-l border-black/10 dark:border-slate-700 transition-all duration-300 hover:border-black dark:hover:border-emerald-700"
                    >
                      {/* Title */}
                      <h3 className="text-xl font-extrabold font-Poppins mb-3 text-black dark:text-slate-100 flex items-center gap-2">
                        <span className="flex items-center justify-center">
                          <IconComp className="w-6 h-6 text-black dark:text-slate-300" />
                        </span>
                        {s.title}
                      </h3>

                      {/* Blurb */}
                      <p className="text-black/70 dark:text-slate-300 font-Poppins font-[400] leading-relaxed mb-3">
                        {s.blurb}
                      </p>

                      {/* Expand/Collapse button */}
                      <button
                        onClick={() => toggleAcc(s.id)}
                        className="group inline-block text-sm font-medium text-black dark:text-emerald-700 relative
                               after:block after:w-0 after:h-[1px] after:bg-black dark:after:bg-emerald-700
                               after:transition-all after:duration-300 hover:after:w-full 
                               hover:text-black dark:hover:text-emerald-500"
                      >
                        {openAcc[s.id] ? "Hide details" : "Explore more"}
                      </button>

                      {/* Expandable details */}
                      <AnimatePresence initial={false}>
                        {openAcc[s.id] && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35 }}
                            className="mt-4 pl-5 list-disc space-y-2 text-black/70 dark:text-slate-300"
                          >
                            {s.bullets.map((b, idx) => (
                              <li key={idx} className="text-sm">
                                {b}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
