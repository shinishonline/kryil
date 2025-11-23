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
      note: "Enabling future-proof IT foundations with performance and reliability. We ensure high availability, seamless integration, and long-term scalability for modern enterprises.",
    },
    {
      title: "Cybersecurity Services",
      link: "/cyber-security",
      blurb:
        "From governance to red-teaming — continuous protection, detection and response you can trust.",
      note: "Safeguarding your digital landscape with 24/7 protection. Our experts help identify vulnerabilities, implement strong defenses, and respond rapidly to emerging threats.",
    },
    {
      title: "Software Development Solutions",
      link: "/software",
      blurb:
        "Custom systems engineered for performance, maintainability and elegant user experience.",
      note: "Building scalable, user-centric applications for modern businesses. Our development process blends design, performance, and technology for impactful digital products.",
    },
    {
      title: "Infrastructure Automation Solutions",
      link: "/automation",
      blurb:
        "Eliminate toil with workflow, CI/CD and ops automation to unlock deep efficiency.",
      note: "Transforming operations with intelligent automation and efficiency. We help organizations simplify workflows and achieve faster, more reliable deployments.",
    },
    {
      title: "Digital Marketing Solutions",
      link: "/digital-marketing",
      blurb:
        "Data-driven marketing strategies that amplify your brand and accelerate business growth.",
      note: "Driving measurable results with SEO, social media, content marketing, and paid campaigns. We help businesses reach their target audience and maximize ROI through strategic digital presence.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: 30 },
  };

  return (
    <section className="text-black dark:text-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="font-Poppins text-5xl md:text-6xl font-thin tracking-tight text-cyan-600 ">
                Services
              </h2>

              <p className="mt-4 text-base text-black/70 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                High-impact capabilities, thoughtfully engineered. Everything is
                built on a foundation of clarity, rigor, and craft — helping
                your business evolve confidently in the digital era.
              </p>

              <div className="mt-8 h-px bg-black/10 dark:bg-cyan-400 dark:shadow-[0_0_10px_rgba(34,211,238,0.8),0_0_20px_rgba(34,211,238,0.4)]" />

              <nav aria-label="Services list" className="mt-6">
                <ul className="space-y-2 text-base font-Poppins font-medium">
                  {items.map((it, i) => (
                    <li
                      key={it.title}
                      className="flex items-center gap-3 transition"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center bg-cyan-500 rounded-full border border-black/10 dark:border-slate-600 text-[11px] text-white dark:text-slate-100">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Link
                        to={it.link}
                        className="truncate text-black dark:text-slate-100 transition-colors hover:text-cyan-500 dark:hover:text-cyan-500"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {items.map((it, idx) => (
                <motion.div
                  key={it.title}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3, margin: "0px 0px -100px 0px" }}
                  variants={fadeUp}
                  className="relative pl-4 border-l border-black/10 dark:border-slate-700 transition-all duration-300 hover:border-black dark:hover:border-cyan-700"
                >
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-extralight font-Poppins mb-3 text-cyan-600 ">
                    {it.title}
                  </h3>
                  <br />

                  {/* Description */}
                  <p className="text-lg md:text-xl text-black/70 dark:text-slate-300 font-Poppins font-[400] leading-relaxed mb-3">
                    {it.blurb}
                  </p>

                  {/* Custom Note */}
                  <p className="text-sm font-Poppins text-black/60 dark:text-slate-400 mb-4 leading-relaxed">
                    {it.note}
                  </p>

                  {/* Explore link */}
                  <Link
                    to={it.link}
                    className="group inline-block text-base font-medium text-black dark:text-cyan-700 relative
                               after:block after:w-0 after:h-[1px] after:bg-black dark:after:bg-cyan-700
                               after:transition-all after:duration-300 hover:after:w-full 
                               hover:text-black dark:hover:text-cyan-500"
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
