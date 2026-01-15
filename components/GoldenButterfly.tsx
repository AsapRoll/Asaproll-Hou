import React from 'react';
import { motion } from 'framer-motion';

const GoldenButterfly: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcf6ba" />
            <stop offset="30%" stopColor="#bf953f" />
            <stop offset="70%" stopColor="#b38728" />
            <stop offset="100%" stopColor="#fbf5b7" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Left Wing */}
        <motion.path 
          d="M50 40 C 40 10, 10 0, 5 30 C 0 50, 30 70, 50 50" 
          fill="url(#goldGrad)" 
          fillOpacity="0.8"
          stroke="#fff"
          strokeWidth="0.5"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0.6 }}
          transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          style={{ originX: "50%", originY: "50%" }}
        />
        
        {/* Right Wing */}
        <motion.path 
          d="M50 40 C 60 10, 90 0, 95 30 C 100 50, 70 70, 50 50" 
          fill="url(#goldGrad)" 
          fillOpacity="0.8"
          stroke="#fff"
          strokeWidth="0.5"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0.6 }}
          transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          style={{ originX: "50%", originY: "50%" }}
        />
        
        {/* Body */}
        <path d="M50 35 L50 55" stroke="#fcf6ba" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};

export default GoldenButterfly;