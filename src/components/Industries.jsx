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
    },
    {
      name: "Shipbuilding & Maritime",
      icon: TruckIcon,
      description: "IoT-enabled vessel monitoring, supply chain automation, and digital twin technology.",
    },
    {
      name: "Airports & Aviation",
      icon: CloudIcon,
      description: "Smart airport systems, passenger experience platforms, and operational automation.",
    },
    {
      name: "Oil & Gas",
      icon: FireIcon,
      description: "Industrial IoT, predictive maintenance, SCADA integration, and safety systems.",
    },
    {
      name: "Steel & Manufacturing",
      icon: WrenchScrewdriverIcon,
      description: "Production automation, quality control systems, and supply chain optimization.",
    },
    {
      name: "Renewable Energy",
      icon: BoltIcon,
      description: "Smart grid solutions, energy management platforms, and monitoring systems.",
    },
  ];

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-Poppins text-6xl md:text-7xl font-semibold text-emerald-600 text-center mb-4">
          Industries We Serve
        </h2>
        <p className="text-center text-base text-gray-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 font-Poppins font-normal">
          Delivering specialized technology solutions across critical industries, combining deep domain expertise with innovative digital capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariant}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700
                           hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300
                           hover:-translate-y-2 hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center
                                  group-hover:bg-emerald-500 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-extralight mb-2 text-gray-900 dark:text-slate-100">
                      {industry.name}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
