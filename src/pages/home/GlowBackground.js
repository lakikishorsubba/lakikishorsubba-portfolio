import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const GlowBackground = () => {
  return (
    <div className="glow-background">
      <motion.div
        className="blob blob-1"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="blob blob-2"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="blob blob-3"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 80, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="glass-overlay" />
    </div>
  );
};

export default GlowBackground;
