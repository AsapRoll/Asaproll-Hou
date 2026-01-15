import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Theme } from '../types';
import { ArrowLeft, Star } from 'lucide-react';

interface DetailPageProps {
  theme: Theme;
  onBack: () => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ theme, onBack }) => {
  // Scroll to top when mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#2b0505] min-h-screen flex flex-col"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
      
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-[#2b0505]/80 border-b border-luxury-gold/20 p-4 md:p-6 flex items-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-luxury-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-bold group"
        >
          <div className="p-2 border border-luxury-gold/30 rounded-full group-hover:bg-luxury-gold group-hover:text-black transition-all">
             <ArrowLeft size={18} />
          </div>
          <span>返回</span>
        </button>
        <span className="ml-auto text-xs text-white/40 tracking-[0.2em]">ROYAL LIFE 2026</span>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-12 pb-32">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 border border-luxury-gold/30 rounded-full bg-black/20 mb-6">
            <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase">Detailed View</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-[#fcf6ba] mb-4">
            {theme.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-white/80 font-light tracking-wide mb-12 flex items-center gap-4">
             <span className="w-12 h-[1px] bg-luxury-gold/50"></span>
             {theme.subtitle}
          </h2>

          <div className="space-y-8">
             <div className="p-8 bg-gradient-to-b from-white/5 to-transparent border-l-2 border-luxury-gold rounded-r-xl">
               <p className="text-xl md:text-2xl text-luxury-gold font-serif italic leading-relaxed">
                 "{theme.description}"
               </p>
             </div>

             <div className="space-y-6 text-white/80 leading-loose font-light text-base md:text-lg">
               {theme.details.map((paragraph, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 + (i * 0.1) }}
                   className="flex gap-4"
                 >
                   <Star className="text-luxury-gold w-4 h-4 flex-shrink-0 mt-2 opacity-50" />
                   <p>{paragraph}</p>
                 </motion.div>
               ))}
             </div>
          </div>

          {/* Decorative Footer in Detail */}
          <div className="mt-20 pt-10 border-t border-luxury-gold/10 flex justify-center">
            <div className="text-center opacity-30">
               <div className="w-2 h-2 bg-luxury-gold rotate-45 mx-auto mb-4"></div>
               <p className="text-xs tracking-[0.5em] text-luxury-gold">THE EXCLUSIVE INVITATION</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DetailPage;