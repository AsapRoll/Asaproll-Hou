import React from 'react';
import { SCHEDULE } from '../constants';
import { Reveal } from './Reveal';
import { Clock } from 'lucide-react';

const Agenda: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-0 relative z-10 max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <Reveal>
          <h2 className="text-3xl font-serif mb-2 gold-text">活动内容</h2>
          <p className="text-white/50 text-xs tracking-widest uppercase">Agenda</p>
          <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-4"></div>
        </Reveal>
      </div>

      <div className="relative border-l border-luxury-gold/20 ml-4 md:ml-0 space-y-12 pb-10">
        {SCHEDULE.map((item, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-luxury-gold shadow-[0_0_10px_#d4af37] group-hover:scale-150 transition-transform duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between p-4 rounded-lg bg-gradient-to-r from-red-950/40 to-transparent border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-colors">
                <div className="mb-2 md:mb-0">
                  <span className="flex items-center text-luxury-gold font-mono text-lg font-bold">
                     <Clock className="w-4 h-4 mr-2 opacity-70" />
                     {item.time}
                  </span>
                </div>
                <div className="flex-1 md:text-right md:pl-8">
                  <h3 className="text-xl text-white font-serif mb-1">{item.title}</h3>
                  {item.description && (
                     <p className="text-white/60 text-sm font-light">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Agenda;