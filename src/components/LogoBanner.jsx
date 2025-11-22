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
      {/* ✨ Float animation wrapper (keeps text unaffected by transform scaling) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      >
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-emerald-600 font-sans">
          KRYIL
          <motion.span
            className="inline-block text-white"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            
          </motion.span>
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default LogoBanner;
