// src/components/Preloader.jsx
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import logo from '../assets/logo_white.png';

export default function Preloader({ onFinish }) {
  const [showCompany, setShowCompany] = useState(false);

  const textControls = useAnimation();
  const companyControls = useAnimation();
  const container = useAnimation();

  useEffect(() => {
    async function run() {
      // 1) Show "Innovation Secured" faster
      await textControls.start({
        opacity: 1,
        transition: { duration: 0.4 },
      });

      // Shorter hold
      await new Promise((r) => setTimeout(r, 600));

      // 2) Fade out faster
      await textControls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });

      // 3) Show company logo
      setShowCompany(true);
      await companyControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });

      // Shorter hold
      await new Promise((r) => setTimeout(r, 600));

      // 4) Fade out preloader faster
      await container.start({
        opacity: 0,
        transition: { duration: 0.4, ease: "easeInOut" },
      });

      setTimeout(() => onFinish && onFinish(), 100);
    }

    container.set({ opacity: 1 });
    textControls.set({ opacity: 0 });
    companyControls.set({ opacity: 0, scale: 0.9 });

    run();
  }, [textControls, companyControls, container, onFinish]);

  return (
    <motion.div
      animate={container}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      {/* First text */}
      <motion.div
        animate={textControls}
        className="absolute text-3xl md:text-5xl font-bold text-white tracking-wide"
      >
        Innovation Secured
      </motion.div>

      {/* Company logo */}
      {showCompany && (
        <motion.div
          animate={companyControls}
          className="absolute"
        >
          <img
            src={logo}
            alt="Kryil Logo"
            className="w-48 md:w-64 h-auto"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
