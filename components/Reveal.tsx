import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimationProps } from '../types';

export const Reveal: React.FC<AnimationProps> = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.17, 0.55, 0.55, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};