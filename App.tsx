import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './components/Background';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import Agenda from './components/Agenda';
import Footer from './components/Footer';
import DetailPage from './components/DetailPage';
import { THEMES } from './constants';

const App: React.FC = () => {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState<number | null>(null);

  const handleBack = () => {
    setSelectedThemeIndex(null);
  };

  return (
    <div className="relative min-h-screen text-[#f3e5ab] selection:bg-luxury-gold selection:text-black">
      <Background />
      
      <AnimatePresence mode="wait">
        {selectedThemeIndex === null ? (
          <motion.main 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
            className="relative z-10 flex flex-col gap-0"
          >
            <Hero />
            <InfoCards onSelect={setSelectedThemeIndex} />
            <Agenda />
            <Footer />
          </motion.main>
        ) : (
          <DetailPage 
            key="detail"
            theme={THEMES[selectedThemeIndex]} 
            onBack={handleBack} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;