// src/pages/InfrastructureAutomation.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Cog6ToothIcon,
  ArrowPathIcon,
  ServerIcon,
  CommandLineIcon,
  CodeBracketSquareIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import SEO from "../components/SEO";
// Background removed as per user request

const services = [
  {
    id: "config",
    title: "Configuration Management",
    blurb:
      "Automated provisioning and state management with IaC tools like Ansible and Terraform.",
    bullets: [
      "Infrastructure as Code (IaC) for consistency.",
      "Multi-cloud orchestration & provisioning.",
      "Configuration drift detection & rollback.",
      "Version-controlled state management.",
    ],
    icon: <Cog6ToothIcon className="w-6 h-6 text-black dark:text-slate-300" />,
  },
  {
    id: "cicd",
    title: "CI/CD Integration",
    blurb:
      "Streamlined pipelines to deliver applications faster and more reliably.",
    bullets: [
      "Automated builds and deployments.",
      "Jenkins & Azure DevOps pipelines.",
      "Blue/green & canary release strategies.",
      "End-to-end release orchestration.",
    ],
    icon: <ArrowPathIcon className="w-6 h-6 text-black dark:text-slate-300" />,
  },
  {
    id: "service",
    title: "Service Management",
    blurb:
      "End-to-end IT service automation and tracking with modern platforms.",
    bullets: [
      "ServiceNow & BMC Remedy workflows.",
      "Automated incident & ticket management.",
      "Change control and approvals.",
      "IT asset tracking & reporting.",
    ],
    icon: <ServerIcon className="w-6 h-6 text-black dark:text-slate-300" />,
  },
  {
    id: "automation",
    title: "System Automation",
    blurb:
      "Custom scripting and orchestration for faster and repeatable IT operations.",
    bullets: [
      "PowerShell, Bash & Python automation.",
      "Scheduled resource provisioning.",
      "Task orchestration across systems.",
      "Cross-platform automation support.",
    ],
    icon: (
      <CommandLineIcon className="w-6 h-6 text-black dark:text-slate-300" />
    ),
  },
  {
    id: "git",
    title: "Version Control",
    blurb:
      "Reliable source control systems for collaboration and compliance.",
    bullets: [
      "Git-based version control & branching.",
      "Change tracking & rollbacks.",
      "Team collaboration workflows.",
      "Audit-ready history & reporting.",
    ],
    icon: (
      <CodeBracketSquareIcon className="w-6 h-6 text-black dark:text-slate-300" />
    ),
  },
  {
    id: "monitoring",
    title: "Monitoring Solutions",
    blurb:
      "Proactive visibility into infrastructure health and performance.",
    bullets: [
      "SolarWinds & Nagios integrations.",
      "Real-time resource tracking.",
      "Automated alerting & thresholds.",
      "Capacity & performance planning.",
    ],
    icon: <ChartPieIcon className="w-6 h-6 text-black dark:text-slate-300" />,
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

export default function InfrastructureAutomation() {
  const [openAcc, setOpenAcc] = useState({});
  const toggleAcc = (id) =>
    setOpenAcc((prev) => ({ ...prev, [id]: !prev[id] }));

  // ✅ Gmail contact click (same as InfrastructureServices)
  const handleContactClick = () => {
    const subject = "Inquiry about Infrastructure Automation";
    const body =
      "Hello Kryil Team,%0D%0A%0D%0AI would like to know more about your infrastructure automation services.%0D%0A%0D%0ABest regards,";
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
        title="Infrastructure Automation & IoT Solutions — Kryil Infotech"
        description="Advanced infrastructure automation services including configuration management, CI/CD pipelines, orchestration, monitoring, IaC (Terraform, Ansible), and IoT solutions. Accelerate your operations with Kryil."
        keywords="infrastructure automation, DevOps automation, CI CD, configuration management, Terraform, Ansible, Kubernetes orchestration, infrastructure as code, monitoring automation, IoT solutions, Bangalore automation services"
        path="/automation"
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
                  Infrastructure Automation
                </h2>

                <p className="mt-4 text-lg text-black/70 dark:text-slate-300 leading-relaxed font-Poppins font-light">
                  End-to-end automation solutions — from configuration
                  management and CI/CD to monitoring and version control, we
                  streamline infrastructure for speed and reliability.
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

                {/* ✅ Contact button (opens Gmail in new tab) */}
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
                {services.map((s, idx) => (
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
                      {s.icon}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
