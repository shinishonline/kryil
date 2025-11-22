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
      {/* Simple glass shadow effect CSS */}
      <style>{`
        .glass-shadow-text {
          color: #000000;
          text-shadow:
            0 2px 8px rgba(255, 255, 255, 0.5),
            0 4px 16px rgba(255, 255, 255, 0.3),
            0 1px 2px rgba(0, 0, 0, 0.1);
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .dark .glass-shadow-text {
          color: #ffffff;
          text-shadow:
            0 2px 8px rgba(255, 255, 255, 0.3),
            0 4px 16px rgba(255, 255, 255, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <div>
        <h1
          className="text-7xl md:text-8xl font-bold tracking-tight font-Poppins glass-shadow-text"
        >
          KRYIL
        </h1>
      </div>
    </motion.div>
  );
};

export default LogoBanner;
