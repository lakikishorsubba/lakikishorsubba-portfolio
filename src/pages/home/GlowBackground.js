import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const GlowBackground = () => {
  return (
    <div className="glow-background">
      {/* Stars Background */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="star" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random()
            }}
          />
        ))}
      </div>

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
      
      {/* Earth Portal Background */}
      <div className="earth-portal-wrapper">
        <motion.div 
          className="earth-container background-earth"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="earth">
            <div className="earth-texture"></div>
          </div>
          <div className="earth-overlay"></div>
          <div className="portal-ring ring-1"></div>
          <div className="portal-ring ring-2"></div>
          <div className="portal-ring ring-3"></div>
        </motion.div>
      </div>

      <div className="glass-overlay" />
    </div>
  );
};

export default GlowBackground;
