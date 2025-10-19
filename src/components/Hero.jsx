// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LogoBanner from "./LogoBanner";
import NavbarTop from "./NavbarTop";

import b1 from '../assets/b1.jpg'
import b2 from '../assets/b7.jpg'
import b3 from '../assets/b5.jpg'

export default function Hero() {
  const [visible, setVisible] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Auto-change hero image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Show / hide Navbar on scroll
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

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

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
    let arr = [];
    for (let i = 0; i < 3; i++) arr.push(features[(currentIndex + i) % features.length]);
    return arr;
  };

  // Handle arrows
  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="w-full overflow-hidden mx-auto flex flex-col gap-12 px-0 relative py-6">
      <div
        className={`transition-all duration-700 absolute top-1 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} 
        left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-4 md:right-[210px]`}
      >
        <NavbarTop inline={false} />
      </div>

      <LogoBanner />

      {/* Hero image slideshow */}
      <div className="antialiased w-full h-[550px] overflow-hidden relative mt-12 mb-10">
        {images.map((img, indexImg) => (
          <img
            key={indexImg}
            src={img}
            alt={`Hero ${indexImg}`}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
              currentImage === indexImg ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Heading overlay — text changes with images */}
        <div className="antialiased absolute inset-0 flex items-center px-10 ml-10 md:px-20">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentImage}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="transform font-extrabold text-4xl sm:text-5xl leading-tight tracking-wide max-w-[560px] text-white dark:text-darkText drop-shadow-lg
                         md:-translate-x-8 md:-translate-y-2"
            >
              {headings[currentImage]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Arrow buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow-lg z-10"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow-lg z-10"
        >
          &#10095;
        </button>
      </div>

      {/* Rotating features */}
      <div className="max-w-5xl mx-auto w-full mb-16 text-center pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slide}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {getVisibleFeatures().map((feature, i) => (
              <div key={i} className="antialiased px-4">
                <h3 className="text-xl  font-extrabold font-Poppins text-emerald-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
