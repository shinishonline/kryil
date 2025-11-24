// src/pages/CyberSecurityServices.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ back button
import {
  ShieldCheckIcon,
  BoltIcon,
  CloudIcon,
  Cog6ToothIcon,
  LockClosedIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import SEO from "../components/SEO";
// Background removed as per user request

const services = [
  {
    id: "threat",
    title: "Threat Detection & Monitoring",
    blurb:
      "Proactive monitoring with 24/7 Security Operations Centers (SOC) to prevent cyber attacks.",
    bullets: [
      "24/7 SOC monitoring (networks, systems, endpoints).",
      "Intrusion Detection & Prevention Systems.",
      "Proactive threat intelligence feeds.",
      "Real-time alerts & mitigation strategies.",
    ],
    icon: ShieldCheckIcon,
  },
  {
    id: "incident",
    title: "Incident Response & Forensics",
    blurb:
      "Quick response planning and forensic investigation to minimize impact of cyber incidents.",
    bullets: [
      "Structured incident response playbooks.",
      "Digital forensics and root cause analysis.",
      "Containment, eradication, and recovery steps.",
      "Crisis communication and reporting.",
    ],
    icon: BoltIcon,
  },
  {
    id: "vapt",
    title: "Vulnerability Assessment & Penetration Testing",
    blurb:
      "Identify system weaknesses before attackers do with ethical hacking simulations.",
    bullets: [
      "Automated vulnerability scanning tools.",
      "Manual penetration testing techniques.",
      "Red teaming and adversary simulation.",
      "Prioritized risk remediation reports.",
    ],
    icon: Cog6ToothIcon,
  },
  {
    id: "cloud",
    title: "Cloud Security",
    blurb:
      "Safeguarding AWS, Azure, and GCP environments with best-in-class cloud protection.",
    bullets: [
      "Cloud configuration audits & hardening.",
      "Identity & Access Management (IAM).",
      "Data encryption & key management.",
      "Cloud-native threat detection.",
    ],
    icon: CloudIcon,
  },
  {
    id: "iam",
    title: "Identity & Access Management",
    blurb:
      "Strong authentication and access control to protect user identities.",
    bullets: [
      "Single Sign-On (SSO) implementations.",
      "Multi-Factor Authentication (MFA).",
      "Privileged Access Management (PAM).",
      "User activity monitoring & auditing.",
    ],
    icon: LockClosedIcon,
  },
  {
    id: "training",
    title: "Cybersecurity Training & Awareness",
    blurb:
      "Empowering employees to become the first line of defense against cyber threats.",
    bullets: [
      "Security awareness programs.",
      "Phishing simulation campaigns.",
      "Executive-level cyber risk training.",
      "Gamified learning modules.",
    ],
    icon: UserGroupIcon,
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

export default function CyberSecurityServices() {
  const [openAcc, setOpenAcc] = useState({});
  const toggleAcc = (id) =>
    setOpenAcc((prev) => ({ ...prev, [id]: !prev[id] }));

  // ✅ Gmail contact click (same as InfrastructureServices)
  const handleContactClick = () => {
    const subject = "Inquiry about Cybersecurity Services";
    const body =
      "Hello Kryil Team,%0D%0A%0D%0AI would like to know more about your cybersecurity services.%0D%0A%0D%0ABest regards,";
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
        title="Cybersecurity Services | Advanced Threat Protection & Security Solutions — Kryil Infotech"
        description="Comprehensive cybersecurity services including threat detection, incident response, penetration testing, compliance, cloud security, and security training. Protect your business with Kryil."
        keywords="cybersecurity, threat detection, SOC, incident response, penetration testing, vulnerability assessment, SIEM, cloud security, compliance, GDPR, ISO 27001, security training, Bangalore cybersecurity"
        path="/cyber-security"
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
                  Cybersecurity Services
                </h2>

                <p className="mt-4 text-lg text-black/70 dark:text-slate-300 leading-relaxed font-Poppins font-light">
                  Protect your organization with end-to-end cybersecurity
                  solutions — from proactive monitoring and IAM to training your
                  workforce against cyber threats.
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
                  className="mt-7 w-full px-5 py-3 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </button>
              </div>
            </aside>

            {/* Right Content - expandable cards */}
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
