import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LogoBanner = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 150], [1, 0]);
  const y = useTransform(scrollY, [0, 150], [0, -60]);

  return (
    <motion.div
      style={{ opacity, y }}
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute top-4 left-24 z-50 hidden sm:block"
    >
      {/* Glass effect CSS */}
      <style>{`
        .glass-text {
          color: #000000;
          position: relative;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .glass-text::before {
          content: '';
          position: absolute;
          inset: -4px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.2) 100%
          );
          border-radius: 8px;
          z-index: -1;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .glass-text::after {
          content: '';
          position: absolute;
          inset: -4px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.4) 0%,
            transparent 50%
          );
          border-radius: 8px;
          z-index: -2;
        }
      `}</style>

      <div>
        <h1
          className="text-7xl md:text-8xl font-bold tracking-tight font-Poppins glass-text dark:text-white"
        >
          KRYIL
        </h1>
      </div>
    </motion.div>
  );
};

export default LogoBanner;
