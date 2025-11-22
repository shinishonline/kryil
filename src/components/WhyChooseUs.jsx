// src/components/WhyPartner.jsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Users, TrendingUp } from "lucide-react";

export default function WhyPartner() {
  const features = [
    {
      title: "Innovation at the Core",
      description:
        "We pioneer solutions at the forefront of technology, constantly exploring and implementing cutting-edge approaches that give our clients a competitive edge.",
      icon: Sparkles,
    },
    {
      title: "Tailored to Your Success",
      description:
        "Every business has unique challenges and opportunities. We craft customized solutions that align perfectly with your goals, industry demands, and growth trajectory.",
      icon: Target,
    },
    {
      title: "Elite Expertise",
      description:
        "Our team blends seasoned industry veterans with emerging talent, creating a powerful mix of proven experience and fresh perspectives that drive innovative solutions.",
      icon: Users,
    },
    {
      title: "Proven Performance",
      description:
        "Our track record speaks for itself—we've helped clients transform operations, elevate customer experiences, and achieve exceptional business growth through strategic technology solutions.",
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
      <div className="max-w-6xl mx-auto px-6 py-1">
        <h2
          id="why-partner-heading"
          className="font-Poppins text-6xl md:text-7xl font-thin text-center leading-tight mb-12 tracking-tight"
        >
          Why Partner with Kryil?
        </h2>

        {/* Center vertical line for large screens */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

          <div className="space-y-8">
            {features.map((f, idx) => {
              const Icon = f.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative">
                  {/* MOBILE / SMALL: simple stacked row */}
                  <div className="lg:hidden flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-tortoise bg-cyan-600 text-white flex items-center justify-center shadow-sm"
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3, margin: "0px 0px -50px 0px" }}
                      variants={circleVariant}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <motion.div
                      className="flex-1"
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3, margin: "0px 0px -50px 0px" }}
                      variants={textFromLeft}
                    >
                      <h3 className="text-2xl font-extralight mb-1 dark:text-slate-100">{f.title}</h3>
                      <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                        {f.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* DESKTOP / LARGE: alternating left / right */}
                  <div className="hidden lg:grid grid-cols-3 items-center">
                    {/* Left column (text for even indexes) */}
                    <div className={`col-span-1 px-8 ${isEven ? "text-right" : ""}`}>
                      {isEven && (
                        <motion.div
                          className="max-w-md ml-auto"
                          custom={idx}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.3, margin: "0px 0px -50px 0px" }}
                          variants={textFromLeft}
                        >
                          <h3 className="text-2xl md:text-3xl font-extralight mb-2 dark:text-slate-100">{f.title}</h3>
                          <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                            {f.description}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {/* Center column: icon over the vertical line */}
                    <div className="col-span-1 flex justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-tortoise bg-cyan-600 text-white flex items-center justify-center shadow-md z-10"
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3, margin: "0px 0px -50px 0px" }}
                        variants={circleVariant}
                      >
                        <Icon className="w-7 h-7" />
                      </motion.div>
                    </div>

                    {/* Right column (text for odd indexes) */}
                    <div className={`col-span-1 px-8 ${!isEven ? "" : "hidden"}`}>
                      {!isEven && (
                        <motion.div
                          className="max-w-md"
                          custom={idx}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.3, margin: "0px 0px -50px 0px" }}
                          variants={textFromRight}
                        >
                          <h3 className="text-2xl md:text-3xl font-extralight mb-2 dark:text-slate-100">{f.title}</h3>
                          <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                            {f.description}
                          </p>
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
