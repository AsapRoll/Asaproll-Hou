import React from 'react';
import { THEMES } from '../constants';
import { Reveal } from './Reveal';
import { Heart, TrendingUp, Users, ArrowRight } from 'lucide-react';

const icons = [Heart, TrendingUp, Users];

interface InfoCardsProps {
  onSelect: (index: number) => void;
}

const InfoCards: React.FC<InfoCardsProps> = ({ onSelect }) => {
  return (
    <section className="py-10 px-4 relative z-10 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {THEMES.map((theme, idx) => {
          const Icon = icons[idx];
          
          return (
            <Reveal key={theme.id} delay={idx * 0.2}>
              <div 
                onClick={() => onSelect(idx)}
                className="h-full p-8 rounded-xl border border-luxury-gold/20 bg-gradient-to-br from-[#2b0505] to-[#450a0a] relative overflow-hidden group hover:border-luxury-gold/50 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.3)]"
              >
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                   <Icon size={120} />
                </div>
                
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center mb-6 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-colors duration-300">
                      <Icon size={18} />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-2">
                       <ArrowRight className="text-luxury-gold w-5 h-5" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-luxury-gold mb-2 font-serif">{theme.title}</h3>
                    <p className="text-white/80 font-light tracking-wide text-sm">{theme.subtitle}</p>
                    <div className="w-0 group-hover:w-full h-[1px] bg-luxury-gold/50 mt-4 transition-all duration-700 ease-out"></div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default InfoCards;