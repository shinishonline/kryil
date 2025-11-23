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
import SEO from "../components/SEO";

// Background removed as per user request

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
      `https://mail.google.com/mail/?view=cm&fs=1&to=info@kryil.com&su=${encodeURIComponent(
        subject
      )}&body=${body}`,
      "_blank"
    );
  };

  return (
    <>
      <SEO
        title="Software Development Services | Custom Web, Mobile & Cloud Applications — Kryil Infotech"
        description="Expert software development services including custom applications, mobile apps (iOS/Android), web development, SaaS, AI/ML solutions, cloud-native apps, and enterprise software. Build your vision with Kryil."
        keywords="software development, custom software, web development, mobile app development, iOS, Android, React, Node.js, SaaS development, AI ML applications, cloud native apps, enterprise software, Bangalore software company"
        path="/software"
      />
      <main className="relative min-h-screen bg-white dark:bg-slate-900 text-black dark:text-slate-100 transition-colors duration-500">
        {/* Close Button - Top Right */}
      <Link
        to="/"
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 group"
        aria-label="Close and return to home"
      >
        <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Link>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <h2 className="font-Poppins text-4xl md:text-5xl font-extralight tracking-tight dark:text-slate-100">
                  Software Development Solutions
                </h2>

                <p className="mt-4 text-lg text-black/70 dark:text-slate-300 leading-relaxed font-Poppins font-light">
                  We transform business challenges into powerful applications —
                  engineered for scalability, security, and innovation.
                </p>

                <div className="mt-8 h-px bg-black/10 dark:bg-cyan-700" />

                <ul className="mt-8 space-y-3 text-sm font-Poppins font-[500]">
                  {services.map((s, i) => (
                    <li key={s.id} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center bg-cyan-500 rounded-full text-[11px] text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate text-black dark:text-slate-100 hover:text-black dark:hover:text-cyan-500 transition-colors">
                        {s.title}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Contact Us button */}
                <button
                  onClick={handleContactClick}
                  className="mt-7 w-full px-5 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
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
                      viewport={{ once: false, amount: 0.3, margin: "0px 0px -100px 0px" }}
                      variants={fadeUp}
                      className="relative pl-4 border-l border-black/10 dark:border-slate-700 transition-all duration-300 hover:border-black dark:hover:border-cyan-700"
                    >
                      {/* Title */}
                      <h3 className="text-xl font-semibold font-Poppins mb-3 text-black dark:text-slate-100 flex items-center gap-2">
                        <span className="flex items-center justify-center">
                          <IconComp className="w-6 h-6 text-black dark:text-slate-300" />
                        </span>
                        {s.title}
                      </h3>

                      {/* Blurb */}
                      <p className="text-base md:text-lg text-black/70 dark:text-slate-300 font-Poppins font-light leading-relaxed mb-3">
                        {s.blurb}
                      </p>

                      {/* Expand/Collapse button */}
                      <button
                        onClick={() => toggleAcc(s.id)}
                        className="group inline-block text-sm font-medium text-black dark:text-cyan-700 relative
                               after:block after:w-0 after:h-[1px] after:bg-black dark:after:bg-cyan-700
                               after:transition-all after:duration-300 hover:after:w-full 
                               hover:text-black dark:hover:text-cyan-500"
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
    </>
  );
}
