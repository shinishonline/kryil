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

  const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      id="why-partner"
      aria-labelledby="why-partner-heading"
      className="text-emerald-600 "
    >
      <div className="max-w-6xl mx-auto px-6 py-1">
        <h2
          id="why-partner-heading"
          className="font-Poppins text-5xl md:text-6xl font-extrabold text-center leading-tight mb-12 tracking-tight"
        >
          Why Partner with Kryil?
        </h2>

        {/* Center vertical line for large screens */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

          <div className="space-y-16">
            {features.map((f, idx) => {
              const Icon = f.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  className="relative"
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={itemVariant}
                >
                  {/* MOBILE / SMALL: simple stacked row */}
                  <div className="lg:hidden flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tortoise bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 dark:text-slate-100">{f.title}</h3>
                      <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                        {f.description}
                      </p>
                    </div>
                  </div>

                  {/* DESKTOP / LARGE: alternating left / right */}
                  <div className="hidden lg:grid grid-cols-3 items-center">
                    {/* Left column (text for even indexes) */}
                    <div className={`col-span-1 px-8 ${isEven ? "text-right" : ""}`}>
                      {isEven && (
                        <div className="max-w-md ml-auto">
                          <h3 className="text-xl md:text-2xl font-semibold mb-2 dark:text-slate-100">{f.title}</h3>
                          <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                            {f.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center column: icon over the vertical line */}
                    <div className="col-span-1 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-tortoise bg-emerald-600 text-white flex items-center justify-center shadow-md z-10">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Right column (text for odd indexes) */}
                    <div className={`col-span-1 px-8 ${!isEven ? "" : "hidden"}`}>
                      {!isEven && (
                        <div className="max-w-md">
                          <h3 className="text-xl md:text-2xl font-semibold mb-2 dark:text-slate-100">{f.title}</h3>
                          <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed font-Poppins font-normal">
                            {f.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
