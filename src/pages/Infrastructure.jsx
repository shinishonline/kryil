// src/pages/InfrastructureServices.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CloudIcon,
  ServerIcon,
  WifiIcon,
  ShieldCheckIcon,
  ComputerDesktopIcon,
  Cog6ToothIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
// Background removed as per user request

const sections = [
  {
    id: "cloud",
    title: "Cloud Infrastructure Services",
    icon: CloudIcon,
    blurb:
      "Design, deploy and manage resilient, scalable cloud environments for high performance and availability.",
    bullets: [
      "Public Cloud Solutions (AWS, Azure, GCP) — hosting apps & data.",
      "Private Cloud Solutions — dedicated resources and compliance.",
      "Hybrid & Multi-Cloud Management — seamless operations across environments.",
      "Cloud Migration Services — zero-downtime migrations.",
    ],
  },
  {
    id: "datacenter",
    title: "Data Center Management",
    icon: ServerIcon,
    blurb:
      "Optimize and modernize data center operations for maximum efficiency and business continuity.",
    bullets: [
      "Physical space, cooling and power for server fleets.",
      "Secure co-location services.",
      "Disaster Recovery as a Service (DRaaS) and automated backups.",
      "Data center modernization & performance optimization.",
    ],
  },
  {
    id: "network",
    title: "Networking Services",
    icon: WifiIcon,
    blurb:
      "High-performance networking solutions with security and observability at the core.",
    bullets: [
      "Network design & implementation (SD-WAN capable).",
      "Managed routers, switches, and wireless solutions.",
      "VPN & secure remote connectivity strategies.",
      "Network monitoring and performance tuning.",
    ],
  },
  {
    id: "server",
    title: "Server Management & Virtualization",
    icon: ServerIcon,
    blurb:
      "Comprehensive server hosting, lifecycle management, and modern virtualization platforms.",
    bullets: [
      "Server hosting & proactive lifecycle management.",
      "Virtualization stacks (VMware, Hyper-V, KVM).",
      "Containers & Kubernetes platform deployments.",
      "IaaS & automation for scaling.",
    ],
  },
  {
    id: "security",
    title: "Security & Compliance Services",
    icon: ShieldCheckIcon,
    blurb:
      "Robust security measures and compliance frameworks to protect infrastructure and data.",
    bullets: [
      "Firewalls & intrusion prevention.",
      "Identity & Access Management (IAM).",
      "Regulatory compliance (HIPAA, GDPR, PCI-DSS).",
      "Endpoint security & device management.",
    ],
  },
  {
    id: "enduser",
    title: "End-User IT Support & Helpdesk",
    icon: ComputerDesktopIcon,
    blurb:
      "Reliable IT support and helpdesk services for seamless end-user experiences.",
    bullets: [
      "Managed helpdesk for employees.",
      "Device lifecycle management.",
      "Software installation & troubleshooting.",
      "Remote & onsite support tiers.",
    ],
  },
  {
    id: "monitoring",
    title: "IT Infrastructure Monitoring & Management",
    icon: ArrowPathIcon,
    blurb:
      "Proactive monitoring and lifecycle management to prevent downtime and bottlenecks.",
    bullets: [
      "Network & server monitoring with alerting.",
      "Patch and lifecycle management.",
      "Performance & capacity planning.",
      "IT asset tracking & lifecycle control.",
    ],
  },
  {
    id: "platform",
    title: "Platform Automation & DevOps",
    icon: Cog6ToothIcon,
    blurb:
      "Automation and DevOps best practices to accelerate delivery and ensure reliability.",
    bullets: [
      "Infrastructure-as-Code (Terraform, Ansible).",
      "Automated CI/CD pipelines.",
      "Blue/green & canary deployments.",
      "Observability pipelines with SLO-driven ops.",
    ],
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

export default function InfrastructureServices() {
  const [openAcc, setOpenAcc] = useState({});
  const toggleAcc = (id) =>
    setOpenAcc((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleContactClick = () => {
    const subject = "Inquiry about Infrastructure Services";
    const body =
      "Hello Kryil Team,%0D%0A%0D%0AI would like to know more about your infrastructure services.%0D%0A%0D%0ABest regards,";
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=info@kryil.com&su=${encodeURIComponent(
        subject
      )}&body=${body}`,
      "_blank"
    );
  };

  return (
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
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <h2 className="font-Poppins text-4xl md:text-5xl font-extralight tracking-tight dark:text-slate-100">
                  Infrastructure Services
                </h2>

                <p className="mt-4 text-lg text-black/70 dark:text-slate-300 leading-relaxed font-Poppins font-light">
                  Comprehensive infrastructure services — from cloud and data
                  centers to networking, security and automated operations.
                </p>

                <div className="mt-8 h-px bg-black/10 dark:bg-cyan-700" />

                <ul className="mt-8 space-y-3 text-sm font-Poppins font-[500]">
                  {sections.map((s, i) => (
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

                <button
                  onClick={handleContactClick}
                  className="mt-7 w-full px-5 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </button>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {sections.map((s, idx) => {
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
                      <h3 className="text-xl font-semibold font-Poppins mb-3 text-black dark:text-slate-100 flex items-center gap-2">
                        <span className="flex items-center justify-center">
                        <IconComp className="w-6 h-6 text-black dark:text-slate-300" />
                      </span>
                        {s.title}
                      </h3>

                      <p className="text-base md:text-lg text-black/70 dark:text-slate-300 font-Poppins font-light leading-relaxed mb-3">
                        {s.blurb}
                      </p>

                      <button
                        onClick={() => toggleAcc(s.id)}
                        className="group inline-block text-sm font-medium text-black dark:text-cyan-700 relative
                                 after:block after:w-0 after:h-[1px] after:bg-black dark:after:bg-cyan-700
                                 after:transition-all after:duration-300 hover:after:w-full 
                                 hover:text-black dark:hover:text-cyan-500"
                      >
                        {openAcc[s.id] ? "Hide details" : "Explore more"}
                      </button>

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
