import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CapabilitiesOverview() {
  const capabilities = [
    {
      title: "Software Development",
      link: "/software",
      blurb: "Custom software engineering for web, mobile and enterprise platforms.",
      note: "From ideation to deployment—we build scalable, maintainable systems using React, Node.js, Python, and modern cloud architectures.",
      details: [
        "Custom Software - Enterprise apps and integrations",
        "AI & Mobile - AI pipelines, iOS/Android development",
        "Web Development - Scalable applications with modern frameworks"
      ]
    },
    {
      title: "Cybersecurity Services",
      link: "/cyber-security",
      blurb: "End-to-end security operations protecting your digital infrastructure.",
      note: "24/7 monitoring, threat intelligence, and rapid response capabilities. We implement defense-in-depth strategies with SIEM, IDS/IPS, and advanced threat detection.",
      details: [
        "Threat Detection - 24/7 SOC, IDS/IPS and threat intelligence",
        "Incident Response - Rapid response, forensics and containment",
        "VAPT / Cloud Security - Vulnerability testing and cloud audits"
      ]
    },
    {
      title: "Infrastructure Automation",
      link: "/automation",
      blurb: "DevOps excellence with infrastructure as code and continuous delivery.",
      note: "Automate everything—from provisioning to deployment. We leverage Terraform, Ansible, Kubernetes, and CI/CD pipelines to accelerate your delivery.",
      details: [
        "Infrastructure as Code - Terraform, Ansible, CloudFormation",
        "CI/CD Pipelines - Automated build, test, deployment",
        "Monitoring & Observability - Prometheus, Grafana, ELK",
        "Container Orchestration - Kubernetes, Docker, microservices",
        "Cloud Automation - Multi-cloud provisioning (AWS, Azure, GCP)",
        "Configuration Management - Server automation, patching, compliance"
      ]
    },
    {
      title: "IoT Solutions",
      link: "#iot",
      blurb: "Connected systems and intelligent edge computing for industrial applications.",
      note: "Build smart infrastructure with sensor networks, edge computing, and real-time data analytics for industrial and commercial environments.",
      details: [
        "Smart Infrastructure - Connected building and facility management",
        "Industrial IoT - Real-time monitoring, predictive maintenance",
        "IoT Analytics - Data-driven insights from connected devices"
      ]
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
    <section className="text-black dark:text-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="font-Poppins text-5xl md:text-6xl font-thin tracking-tight text-emerald-600">
                Our Capabilities
              </h2>

              <p className="mt-4 text-base text-black/70 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                Technical expertise and specialized capabilities powering digital transformation.
                Deep technical knowledge across modern technology stacks.
              </p>

              <div className="mt-8 h-px bg-black/10 dark:bg-emerald-700" />

              <nav aria-label="Capabilities list" className="mt-6">
                <ul className="space-y-3 text-base font-Poppins font-medium">
                  {capabilities.map((cap, i) => (
                    <li
                      key={cap.title}
                      className="flex items-center gap-3 transition"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center bg-emerald-500 rounded-full border border-black/10 dark:border-slate-600 text-[11px] text-white dark:text-slate-100">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Link
                        to={cap.link}
                        className="truncate text-black dark:text-slate-100 transition-colors hover:text-emerald-500 dark:hover:text-emerald-500"
                      >
                        {cap.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Right: Capability details */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={cap.title}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="relative pl-4 border-l border-black/10 dark:border-slate-700 transition-all duration-300 hover:border-black dark:hover:border-emerald-700"
                >
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-extralight font-Poppins mb-3 text-emerald-600">
                    {cap.title}
                  </h3>
                  <br />

                  {/* Description */}
                  <p className="text-black/70 dark:text-slate-300 font-Poppins font-normal leading-relaxed mb-3">
                    {cap.blurb}
                  </p>

                  {/* Custom Note */}
                  <p className="text-sm font-Poppins text-black/60 dark:text-slate-400 mb-4 leading-relaxed">
                    {cap.note}
                  </p>

                  {/* Capability Details */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {cap.details.map((detail, i) => (
                        <li key={i} className="text-sm text-black/70 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Explore link */}
                  <Link
                    to={cap.link}
                    className="group inline-block text-base font-medium text-black dark:text-emerald-700 relative
                               after:block after:w-0 after:h-[1px] after:bg-black dark:after:bg-emerald-700
                               after:transition-all after:duration-300 hover:after:w-full
                               hover:text-black dark:hover:text-emerald-500"
                  >
                    Explore capability
                    <span className="sr-only">{cap.title}</span>
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
