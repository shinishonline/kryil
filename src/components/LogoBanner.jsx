// src/components/LogoBanner.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from '../assets/logo.png'
const LogoBanner = () => {
  const { scrollY } = useScroll();

  // Fade out when scrolling
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);

  // Move up slightly
  const y = useTransform(scrollY, [0, 150], [0, -100]);

  return (
    <motion.div
      style={{ opacity, y }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute top-0 left-0 z-50 sm:px-6 py-0 hidden sm:block" // hidden on mobile, visible from sm+
    >
      <img
        src={logo}// make sure it's inside public folder
        alt="Company Logo"
        className="h-14 w-auto object-contain"
      />
    </motion.div>
  );
};

export default LogoBanner;
