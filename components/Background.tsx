import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#2b0505]">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      
      {/* Moving organic shapes simulating petals/flow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -5, 0],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-red-900/40 blur-[80px]" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 0.9, 1],
          x: [0, 50, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] -right-[20%] w-[90vw] h-[90vw] rounded-full bg-[#500000]/50 blur-[100px]" 
      />

      <motion.div 
         animate={{ 
          opacity: [0.3, 0.6, 0.3],
          y: [0, -40, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-red-800/30 blur-[60px]" 
      />

      {/* Noise Texture Overlay for grain effect */}
      <div className="absolute inset-0 opacity-[0.07]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
      
      {/* Golden Dust Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full blur-[1px]"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{ 
            y: [null, Math.random() * -100],
            opacity: [0, 0.8, 0],
          }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            repeat: Infinity, 
            delay: Math.random() * 5 
          }}
        />
      ))}
    </div>
  );
};

export default Background;