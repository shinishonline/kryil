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
      {/* Glass Beach Wave animation CSS */}
      <style>{`
        @keyframes beachWave {
          0% {
            background-position: 0% 100%;
          }
          50% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 100%;
          }
        }

        .glass-wave-text {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 82, 204, 0.8) 25%,
            rgba(0, 153, 255, 0.7) 50%,
            rgba(0, 82, 204, 0.8) 75%,
            rgba(0, 0, 0, 0.9) 100%
          );
          background-size: 100% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: beachWave 4s ease-in-out infinite;
          filter: drop-shadow(0 0 4px rgba(0, 153, 255, 0.4));
          position: relative;
        }

        .glass-wave-text::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 4px;
          z-index: -1;
          backdrop-filter: blur(10px);
        }

        .glass-wave-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          z-index: -2;
          background: linear-gradient(
            180deg,
            rgba(0, 82, 204, 0.4) 0%,
            rgba(0, 153, 255, 0.3) 50%,
            rgba(0, 82, 204, 0.2) 100%
          );
          background-size: 100% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: beachWave 4s ease-in-out infinite reverse;
          filter: blur(12px);
        }
      `}</style>

      {/* ✨ Float animation wrapper */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      >
        <h1
          className="text-7xl md:text-8xl font-thin tracking-tight font-Poppins glass-wave-text"
          data-text="KRYIL"
        >
          KRYIL
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default LogoBanner;
