import React from "react";
import { motion } from "framer-motion";
import {
  BuildingLibraryIcon,
  TruckIcon,
  CloudIcon,
  FireIcon,
  WrenchScrewdriverIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

export default function Industries() {
  const industries = [
    {
      name: "Banking & Finance",
      icon: BuildingLibraryIcon,
      description: "Secure digital transformation, core banking systems, and fintech solutions.",
      note: "End-to-end digital banking platforms, regulatory compliance systems, fraud detection, and mobile banking applications."
    },
    {
      name: "Shipbuilding & Maritime",
      icon: TruckIcon,
      description: "IoT-enabled vessel monitoring, supply chain automation, and digital twin technology.",
      note: "Real-time vessel tracking, predictive maintenance systems, port automation, and maritime safety solutions."
    },
    {
      name: "Airports & Aviation",
      icon: CloudIcon,
      description: "Smart airport systems, passenger experience platforms, and operational automation.",
      note: "Baggage handling systems, flight operations software, passenger flow management, and contactless check-in solutions."
    },
    {
      name: "Oil & Gas",
      icon: FireIcon,
      description: "Industrial IoT, predictive maintenance, SCADA integration, and safety systems.",
      note: "Pipeline monitoring, refinery automation, equipment health monitoring, and environmental compliance tracking."
    },
    {
      name: "Steel & Manufacturing",
      icon: WrenchScrewdriverIcon,
      description: "Production automation, quality control systems, and supply chain optimization.",
      note: "Manufacturing execution systems, inventory management, production planning, and quality assurance automation."
    },
    {
      name: "Renewable Energy",
      icon: BoltIcon,
      description: "Smart grid solutions, energy management platforms, and monitoring systems.",
      note: "Solar and wind farm monitoring, energy storage optimization, grid integration, and performance analytics."
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
          {/* Right Sidebar (Mirrored from Services) */}
          <aside className="lg:col-span-4 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <h2 className="font-Poppins text-5xl md:text-6xl font-thin tracking-tight text-cyan-600 text-right">
                Industries We Serve
              </h2>

              <p className="mt-4 text-base text-black/70 dark:text-slate-300 leading-relaxed font-Poppins font-normal text-right">
                Delivering specialized technology solutions across critical industries, combining deep domain expertise with innovative digital capabilities.
              </p>

              <div className="mt-8 h-px bg-black/10 dark:bg-cyan-400 dark:shadow-[0_0_10px_rgba(34,211,238,0.8),0_0_20px_rgba(34,211,238,0.4)]" />

              <nav aria-label="Industries list" className="mt-6">
                <ul className="space-y-2 text-base font-Poppins font-medium">
                  {industries.map((industry, i) => (
                    <li
                      key={industry.name}
                      className="flex items-center gap-3 transition justify-end"
                    >
                      <span className="truncate text-black dark:text-slate-100 transition-colors hover:text-cyan-500 dark:hover:text-cyan-500 text-right">
                        {industry.name}
                      </span>
                      <span className="inline-flex h-6 w-6 items-center justify-center bg-cyan-500 rounded-full border border-black/10 dark:border-slate-600 text-[11px] text-white dark:text-slate-100 flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Left: Industry details (Mirrored from Services) */}
          <div className="lg:col-span-8 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {industries.map((industry, idx) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.name}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="relative pr-4 border-r border-black/10 dark:border-slate-700 transition-all duration-300 hover:border-black dark:hover:border-cyan-700"
                  >
                    {/* Icon */}
                    <div className="flex justify-end mb-4">
                      <div className="w-12 h-12 rounded-lg bg-cyan-600 text-white flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-extralight font-Poppins mb-3 text-cyan-600 text-right">
                      {industry.name}
                    </h3>
                    <br />

                    {/* Description */}
                    <p className="text-black/70 dark:text-slate-300 font-Poppins font-[400] leading-relaxed mb-3 text-right">
                      {industry.description}
                    </p>

                    {/* Custom Note */}
                    <p className="text-sm font-Poppins text-black/60 dark:text-slate-400 mb-4 leading-relaxed text-right">
                      {industry.note}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
