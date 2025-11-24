// src/components/WhyPartner.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Target, Users, TrendingUp } from "lucide-react";

export default function WhyPartner() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const features = [
    {
      title: "Innovation at the Core",
      shortDesc: "We pioneer solutions at the forefront of technology, constantly exploring and implementing cutting-edge approaches that give our clients a competitive edge.",
      fullDesc: "Our innovation labs work on emerging technologies like AI/ML, blockchain, quantum computing, and edge computing to ensure your business stays ahead of the curve. We don't just follow trends—we create them, leveraging our deep technical expertise to build transformative solutions that redefine industry standards.",
      icon: Sparkles,
    },
    {
      title: "Tailored to Your Success",
      shortDesc: "Every business has unique challenges and opportunities. We craft customized solutions that align perfectly with your goals, industry demands, and growth trajectory.",
      fullDesc: "Our dedicated teams conduct comprehensive discovery sessions to understand your business ecosystem, pain points, and aspirations. We then design and implement scalable, flexible solutions that evolve with your business, ensuring long-term value and sustainable growth through strategic technology investments.",
      icon: Target,
    },
    {
      title: "Elite Expertise",
      shortDesc: "Our team blends seasoned industry veterans with emerging talent, creating a powerful mix of proven experience and fresh perspectives that drive innovative solutions.",
      fullDesc: "With certified professionals across cloud platforms (AWS, Azure, GCP), cybersecurity frameworks (ISO 27001, SOC 2), and modern development stacks, we bring world-class expertise to every project. Our engineers have built solutions for Fortune 500 companies, startups, and everything in between, giving us unique insights into what works across industries and scales.",
      icon: Users,
    },
    {
      title: "Proven Performance",
      shortDesc: "Our track record speaks for itself—we've helped clients transform operations, elevate customer experiences, and achieve exceptional business growth through strategic technology solutions.",
      fullDesc: "From reducing operational costs by 40% through automation to increasing revenue by 200% with digital platforms, our solutions deliver measurable ROI. We've successfully completed 500+ projects across 20+ countries, maintaining a 98% client satisfaction rate and earning long-term partnerships built on trust and results.",
      icon: TrendingUp,
    },
  ];

  // Circle animation - appears first
  const circleVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      },
    }),
    exit: { opacity: 0, scale: 0 },
  };

  // Text animation from left
  const textFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2 + 0.2, // Starts after circle
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      },
    }),
    exit: { opacity: 0, x: -60 },
  };

  // Text animation from right
  const textFromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2 + 0.2, // Starts after circle
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      },
    }),
    exit: { opacity: 0, x: 60 },
  };

  return (
    <section
      id="why-partner"
      aria-labelledby="why-partner-heading"
      className="text-cyan-600 "
    >
      <div className="max-w-7xl mx-auto px-6 py-1">
        <h2
          id="why-partner-heading"
          className="font-Poppins text-6xl md:text-7xl font-thin text-center leading-tight mb-8 tracking-tight"
        >
          Why Partner with Kryil?
        </h2>

        {/* Center vertical line for large screens */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

          <div className="space-y-3">
            {features.map((f, idx) => {
              const Icon = f.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative">
                  {/* MOBILE / SMALL: simple stacked row */}
                  <div className="lg:hidden flex items-start gap-2">
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-tortoise bg-cyan-700 text-white flex items-center justify-center shadow-sm mt-1"
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3, margin: "0px 0px -50px 0px" }}
                      variants={circleVariant}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <motion.div
                      className="flex-1"
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3, margin: "0px 0px -50px 0px" }}
                      variants={textFromLeft}
                    >
                      <h3 className="text-xl font-extralight mb-1 dark:text-slate-100">{f.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                        {f.shortDesc}
                      </p>
                      <AnimatePresence>
                        {expandedItems[idx] && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal mt-2"
                          >
                            {f.fullDesc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline mt-1 font-medium"
                      >
                        {expandedItems[idx] ? "Read Less" : "Read More"}
                      </button>
                    </motion.div>
                  </div>

                  {/* DESKTOP / LARGE: alternating left / right */}
                  <div className="hidden lg:grid grid-cols-3 items-start gap-1">
                    {/* Left column (text for even indexes) */}
                    <div className={`col-span-1 px-2 ${isEven ? "text-right" : ""}`}>
                      {isEven && (
                        <motion.div
                          className="w-full ml-auto"
                          custom={idx}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.3, margin: "0px 0px -50px 0px" }}
                          variants={textFromLeft}
                        >
                          <h3 className="text-xl md:text-2xl font-extralight mb-1 dark:text-slate-100">{f.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                            {f.shortDesc}
                          </p>
                          <AnimatePresence>
                            {expandedItems[idx] && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal mt-2"
                              >
                                {f.fullDesc}
                              </motion.p>
                            )}
                          </AnimatePresence>
                          <button
                            onClick={() => toggleExpand(idx)}
                            className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline mt-1 font-medium inline-block"
                          >
                            {expandedItems[idx] ? "Read Less" : "Read More"}
                          </button>
                        </motion.div>
                      )}
                    </div>

                    {/* Center column: icon over the vertical line */}
                    <div className="col-span-1 flex justify-center pt-1">
                      <motion.div
                        className="w-14 h-14 rounded-full bg-tortoise bg-cyan-700 text-white flex items-center justify-center shadow-md z-10 flex-shrink-0"
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3, margin: "0px 0px -50px 0px" }}
                        variants={circleVariant}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                    </div>

                    {/* Right column (text for odd indexes) */}
                    <div className={`col-span-1 px-2 ${!isEven ? "" : "hidden"}`}>
                      {!isEven && (
                        <motion.div
                          className="w-full"
                          custom={idx}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.3, margin: "0px 0px -50px 0px" }}
                          variants={textFromRight}
                        >
                          <h3 className="text-xl md:text-2xl font-extralight mb-1 dark:text-slate-100">{f.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                            {f.shortDesc}
                          </p>
                          <AnimatePresence>
                            {expandedItems[idx] && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal mt-2"
                              >
                                {f.fullDesc}
                              </motion.p>
                            )}
                          </AnimatePresence>
                          <button
                            onClick={() => toggleExpand(idx)}
                            className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline mt-1 font-medium inline-block"
                          >
                            {expandedItems[idx] ? "Read Less" : "Read More"}
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
