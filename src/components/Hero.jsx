import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import NavbarTop from "./NavbarTop";
import logo from "../assets/logo_white.png";

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
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const images = [b1, b2, b3];
  const headings = [
    "Cybersecurity solutions protecting your digital assets",
    "Custom software development tailored to your needs",
    "Mobile application development for iOS and Android",
  ];

  const subtitles = [
    "We build next-generation digital infrastructure that empowers growth and innovation.",
    "Transforming ideas into scalable, secure, and high-performance applications.",
    "Delivering enterprise-grade solutions that drive digital transformation.",
    "Engineering the future with cutting-edge technology and innovation.",
  ];

  const features = [
    { title: "Cybersecurity", desc: "Advanced threat protection and security audits for your business." },
    { title: "Custom Software", desc: "Tailored enterprise solutions built for your specific needs." },
    { title: "Mobile Apps", desc: "Cross-platform mobile applications for iOS and Android." },
    { title: "Web Development", desc: "Scalable web applications using modern technologies." },
    { title: "Cloud Solutions", desc: "Cloud migration and infrastructure management services." },
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

  // Auto-change heading, subtitle and features
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    const featureInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    const subtitleInterval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 4500);
    return () => {
      clearInterval(imageInterval);
      clearInterval(featureInterval);
      clearInterval(subtitleInterval);
    };
  }, []);

  // Navbar auto-hide after hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        // Hide navbar once user scrolls past the hero section
        if (window.scrollY > heroHeight - 100) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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

      {/* 🔹 Top bar with Logo and Navbar */}
      <div
        className={`transition-all duration-700 fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-16 lg:px-32 h-16 bg-white dark:bg-black
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <img
            src={logo}
            alt="Kryil Infotech"
            className="h-16 md:h-20 w-auto"
          />
        </motion.div>

        {/* Navbar on the right */}
        <NavbarTop inline={false} />
      </div>

      {/* 🔹 MAIN LEFT CONTENT */}
      <div className="flex flex-col items-start justify-center flex-grow relative pt-16 px-8 md:px-16 lg:px-32 text-left">
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
              className={`text-4xl sm:text-5xl lg:text-6xl font-extralight leading-[1.3] tracking-tight transition-colors duration-700 ${
                isDark ? "text-gray-50" : "text-gray-900"
              }`}
            >
              <motion.span
                className={`text-4xl sm:text-5xl lg:text-6xl font-extralight inline-block ${
                  isDark ? "text-cyan-400" : "text-cyan-600"
                }`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {headings[currentImage].split(" ")[0]}
              </motion.span>{" "}
              {headings[currentImage].split(" ").slice(1).join(" ")}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentSubtitle}
              className={`text-lg max-w-xl leading-relaxed mt-6 mb-12 transition-colors duration-700 ${
                isDark ? "text-gray-100" : "text-gray-700"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {subtitles[currentSubtitle]}
            </motion.p>
          </AnimatePresence>

          <motion.div
            className="flex flex-wrap gap-8 md:gap-12 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div>
              <h3
                className={`text-4xl md:text-5xl font-bold transition-colors duration-700 ${
                  isDark ? "text-cyan-400" : "text-cyan-600"
                }`}
              >
                500+
              </h3>
              <p className={`text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Projects Delivered
              </p>
            </div>
            <div>
              <h3
                className={`text-4xl md:text-5xl font-bold transition-colors duration-700 ${
                  isDark ? "text-cyan-400" : "text-cyan-600"
                }`}
              >
                98%
              </h3>
              <p className={`text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Client Satisfaction
              </p>
            </div>
            <div>
              <h3
                className={`text-4xl md:text-5xl font-bold transition-colors duration-700 ${
                  isDark ? "text-cyan-400" : "text-cyan-600"
                }`}
              >
                15+
              </h3>
              <p className={`text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Years Experience
              </p>
            </div>
            <div>
              <h3
                className={`text-4xl md:text-5xl font-bold transition-colors duration-700 ${
                  isDark ? "text-cyan-400" : "text-cyan-600"
                }`}
              >
                24/7
              </h3>
              <p className={`text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Support Available
              </p>
            </div>
          </motion.div>

          {/* <motion.button
            className={`mt-12 px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:scale-[1.03] ${
              isDark
                ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                : "bg-cyan-500 hover:bg-cyan-400 text-white"
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
                    isDark ? "text-cyan-400" : "text-cyan-600"
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
