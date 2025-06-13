'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'none';
  delay?: number;
}

/**
 * Componente para cargar secciones de forma diferida
 * Mejora el rendimiento y la experiencia de usuario
 * Importante para SEO ya que Google valora la velocidad de carga
 */
const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  animation = 'fadeIn',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, threshold]);

  // Configuraciones de animación
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    },
    slideLeft: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    none: {
      initial: {},
      animate: {}
    }
  };

  const selectedAnimation = animations[animation];

  return (
    <div ref={setRef} className={className}>
      {isVisible ? (
        <motion.div
          initial={selectedAnimation.initial}
          animate={selectedAnimation.animate}
          transition={{ duration: 0.5, delay }}
        >
          {children}
        </motion.div>
      ) : (
        <div style={{ minHeight: '10px' }}></div>
      )}
    </div>
  );
};

export default LazySection; 