import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LogoBanner from "./LogoBanner";
import NavbarTop from "./NavbarTop";

import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";

// 🎥 Light and Dark videos
import bgVideoLight from "../assets/bgvideo6.mp4";
import bgVideoDark from "../assets/bgvideo4.mp4";

export default function Hero() {
  const [visible, setVisible] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const images = [b1, b2, b3];
  const headings = [
    "Futuristic infrastructure for today's enterprises",
    "Secure, scalable cloud solutions built for growth",
    "Automated workflows that accelerate your business",
  ];

  const features = [
    { title: "Cloud Security", desc: "Advanced cloud infrastructure with end-to-end encryption." },
    { title: "Automation", desc: "Streamlined operations powered by intelligent workflows." },
    { title: "Innovation", desc: "Cutting-edge technology solutions for scalability." },
    { title: "Data Protection", desc: "Secure data with compliance and modern encryption standards." },
    { title: "Performance", desc: "High-performance infrastructure optimized for speed." },
  ];

  // ✅ Detect Tailwind dark mode dynamically
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  // Auto-change heading and features
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    const featureInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => {
      clearInterval(imageInterval);
      clearInterval(featureInterval);
    };
  }, []);

  // Navbar hide/show
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 20) setVisible(false);
      else setVisible(true);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slide = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.4 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.35 } },
  };

  const getVisibleFeatures = () => {
    const arr = [];
    for (let i = 0; i < 3; i++) arr.push(features[(currentIndex + i) % features.length]);
    return arr;
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between">

      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2] transition-opacity duration-700"
      >
        <source src={bgVideoDark} type="video/mp4" />
      </video>

      {/* 🔹 Overlay (for readability) */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-[-1] transition-colors duration-700 ${
          isDark ? "bg-black/80" : "bg-white/50"
        }`}
      />

      {/* 🔹 Navbar */}
      <div
        className={`transition-all duration-700 absolute top-1 z-30
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
        left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-4 md:right-[210px]`}
      >
        <NavbarTop inline={false} />
      </div>

      <LogoBanner />

      {/* 🔹 MAIN LEFT CONTENT */}
      <div className="flex flex-col items-start justify-center flex-grow relative pt-16 px-8 md:px-16 lg:px-24 text-left">
        <motion.div
          className="w-full space-y-10 max-w-3xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentImage}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.2] tracking-tight transition-colors duration-700 ${
                isDark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              <motion.span
                className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold inline-block ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {headings[currentImage].split(" ")[0]}
              </motion.span>{" "}
              {headings[currentImage].split(" ").slice(1).join(" ")}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            className={`text-lg max-w-xl leading-relaxed mt-6 mb-12 transition-colors duration-700 ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We build next-generation digital infrastructure that empowers growth and innovation.
          </motion.p>

          <motion.div
            className="flex gap-12 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div>
              <h3
                className={`text-4xl font-bold transition-colors duration-700 ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                721+
              </h3>
              <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Growth is our priority
              </p>
            </div>
            <div>
              <h3
                className={`text-4xl font-bold transition-colors duration-700 ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                1000+
              </h3>
              <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Projects completed
              </p>
            </div>
          </motion.div>

          {/* <motion.button
            className={`mt-12 px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:scale-[1.03] ${
              isDark
                ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                : "bg-emerald-500 hover:bg-emerald-400 text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Get Started →
          </motion.button> */}
        </motion.div>
      </div>

      {/* 🔹 BOTTOM CENTERED FEATURES */}
      {/* <div className="max-w-6xl w-full mb-10 text-center mx-auto px-8 md:px-16 lg:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slide}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-center"
          >
            {getVisibleFeatures().map((feature, i) => (
              <div key={i} className="antialiased px-4">
                <h3
                  className={`text-xl font-extrabold mb-2 transition-colors duration-700 ${
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-700 ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div> */}
    </section>
  );
}
