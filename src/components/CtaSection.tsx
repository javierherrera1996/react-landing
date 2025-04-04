import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Componentes dinámicos para evitar problemas de hidratación
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });
const MotionH2 = dynamic(() => Promise.resolve(motion.h2), { ssr: false });
const MotionP = dynamic(() => Promise.resolve(motion.p), { ssr: false });
const MotionA = dynamic(() => Promise.resolve(motion.a), { ssr: false });

interface CtaSectionProps {
  title: string;
  description: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink
}) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return (
      <section className="py-20 bg-primary-dark relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={primaryBtnLink} 
              className="bg-accent hover:bg-accent-dark text-white font-medium px-8 py-4 rounded-md inline-block transition-all duration-300"
            >
              {primaryBtnText}
            </a>
            {secondaryBtnText && secondaryBtnLink && (
              <a 
                href={secondaryBtnLink} 
                className="border border-accent text-accent hover:bg-accent hover:bg-opacity-10 font-medium px-8 py-4 rounded-md inline-block transition-all duration-300"
              >
                {secondaryBtnText}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      <MotionDiv 
        className="container mx-auto px-6 relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <MotionH2 
          className="text-3xl font-bold mb-4 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </MotionH2>
        
        <MotionP 
          className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {description}
        </MotionP>
        
        <div className="flex flex-wrap justify-center gap-4">
          <MotionA 
            href={primaryBtnLink} 
            className="bg-accent hover:bg-accent-dark text-white font-medium px-8 py-4 rounded-md inline-block transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(79, 209, 197, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {primaryBtnText}
          </MotionA>

          {secondaryBtnText && secondaryBtnLink && (
            <MotionA 
              href={secondaryBtnLink} 
              className="border border-accent text-accent hover:bg-accent hover:bg-opacity-10 font-medium px-8 py-4 rounded-md inline-block transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(79, 209, 197, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {secondaryBtnText}
            </MotionA>
          )}
        </div>
      </MotionDiv>
    </section>
  );
};

export default CtaSection; 