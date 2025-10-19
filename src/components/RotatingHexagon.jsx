// src/components/RotatingHexagon.jsx
import React from "react";
import { motion } from "framer-motion";

export default function RotatingHexagon() {
  return (
    <div className="relative w-[220px] h-[220px] flex items-center justify-center">
      {/* Rotating hexagon outline */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        aria-hidden
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.6)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
          </linearGradient>
        </defs>
        <polygon
          points="100,10 180,55 180,145 100,190 20,145 20,55"
          fill="none"
          stroke="url(#hexGradient)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Static centered text */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-extrabold tracking-widest text-black/80 font-Poppins">
          Kryil
        </h2>
        <p className="text-xs tracking-wider text-black/50 mt-1">
          INFOTECH
        </p>
      </div>
    </div>
  );
}
