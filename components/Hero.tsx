import React from 'react';
import { motion } from 'framer-motion';
import { PARTNERS } from '../constants';
import GoldenButterfly from './GoldenButterfly';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-10">
      
      {/* Logos Top */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-8 left-0 right-0 flex justify-center space-x-4 md:space-x-8 px-4 flex-wrap"
      >
        {PARTNERS.map((partner, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-2 opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-[10px] md:text-xs tracking-widest text-luxury-gold uppercase text-center font-bold font-display">
              {partner.name}
            </span>
          </div>
        ))}
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center mt-10">
        <GoldenButterfly className="absolute -top-16 -right-16 md:-right-32 z-20 scale-75 md:scale-100" />
        
        {/* Main Title Group */}
        <div className="flex flex-row items-center justify-center space-x-6 md:space-x-12">
          
          {/* Main Character: JIĀ (Home) */}
          <motion.div
            initial={{ scale: 2, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-[120px] md:text-[180px] leading-none font-black text-transparent bg-clip-text bg-black stroke-black drop-shadow-2xl" 
                style={{ 
                  fontFamily: '"Noto Serif SC", serif',
                  WebkitTextStroke: "1px #d4af37",
                  backgroundImage: "linear-gradient(to bottom, #450a0a, #000000)"
                }}>
              家
            </h1>
          </motion.div>

          {/* Vertical Middle Text */}
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col space-y-4 py-4 border-y border-luxury-gold/30 h-[200px] justify-center"
          >
            <div className="writing-vertical-rl text-luxury-gold tracking-[0.5em] text-sm md:text-lg font-bold">
              爱莎·咏泰
            </div>
            <div className="writing-vertical-rl text-white/80 tracking-[0.3em] text-xs md:text-sm">
              轻体代谢
            </div>
            <div className="writing-vertical-rl text-white/80 tracking-[0.3em] text-xs md:text-sm">
              战略发布会
            </div>
          </motion.div>

          {/* Main Character: YÀN (Feast) */}
          <motion.div
            initial={{ scale: 2, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <h1 className="text-[120px] md:text-[180px] leading-none font-black text-transparent bg-clip-text bg-black" 
                style={{ 
                   fontFamily: '"Noto Serif SC", serif',
                   WebkitTextStroke: "1px #d4af37",
                   backgroundImage: "linear-gradient(to bottom, #450a0a, #000000)"
                }}>
              宴
            </h1>
          </motion.div>
        </div>

        {/* Subtitle / Stamp */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-block border border-luxury-gold/50 px-6 py-2 rounded-full backdrop-blur-sm bg-black/20">
            <p className="text-luxury-gold tracking-[0.3em] text-sm md:text-base font-light">
              感恩 · 战略 · 合作
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-luxury-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;