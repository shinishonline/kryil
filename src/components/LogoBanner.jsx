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
      {/* Liquid animation CSS */}
      <style>{`
        @keyframes liquidFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .liquid-text {
          background: linear-gradient(
            90deg,
            #000000 0%,
            #1a1a1a 25%,
            #0d9488 50%,
            #14b8a6 75%,
            #000000 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: liquidFlow 4s ease-in-out infinite;
          filter: drop-shadow(0 0 2px rgba(20, 184, 166, 0.3));
        }

        .liquid-text-glow {
          position: relative;
        }

        .liquid-text-glow::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,0.5) 0%,
            rgba(13,148,136,0.3) 50%,
            rgba(0,0,0,0.5) 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: liquidFlow 4s ease-in-out infinite;
          filter: blur(8px);
        }
      `}</style>

      {/* ✨ Float animation wrapper */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      >
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight font-Poppins liquid-text liquid-text-glow"
          data-text="KRYIL"
        >
          KRYIL
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default LogoBanner;
