import React, { useState } from 'react';
import { LOCATION } from '../constants';
import { Reveal } from './Reveal';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import GoldenButterfly from './GoldenButterfly';
import RSVPModal from './RSVPModal';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-4 relative z-10 bg-gradient-to-t from-black to-transparent">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
           <GoldenButterfly className="mx-auto mb-8 scale-75 opacity-80" />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="inline-block p-8 border border-luxury-gold/30 backdrop-blur-md rounded-2xl bg-black/40 shadow-2xl">
            <h2 className="text-3xl gold-text font-serif mb-8">诚邀莅临</h2>
            
            <div className="space-y-6 text-white/90">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="text-luxury-gold w-6 h-6 mb-1" />
                <p className="text-xl font-display tracking-widest">{LOCATION.date}</p>
                <p className="text-sm text-white/60">{LOCATION.time}</p>
              </div>
              
              <div className="w-20 h-[1px] bg-white/10 mx-auto my-4"></div>

              <div className="flex flex-col items-center gap-2">
                <MapPin className="text-luxury-gold w-6 h-6 mb-1" />
                <p className="text-lg leading-relaxed max-w-xs mx-auto">{LOCATION.address}</p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm text-luxury-gold/80">
                {LOCATION.highlights.map((h, i) => (
                    <span key={i} className="px-3 py-1 border border-luxury-gold/20 rounded-full bg-luxury-gold/5">
                        {h}
                    </span>
                ))}
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-10 group relative px-8 py-3 bg-luxury-gold text-black font-bold tracking-widest uppercase text-sm overflow-hidden rounded-sm transition-all hover:bg-white hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <CheckCircle2 size={16} /> 立即回执
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 opacity-40 text-[10px] tracking-[0.2em] font-light">
            <p>2026 ROYAL LIFE STRATEGIC CONFERENCE</p>
            <p className="mt-2">CHONGQING · CHINA</p>
          </div>
        </Reveal>
      </div>

      <RSVPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Footer;