import React, { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Componentes dinámicos para evitar problemas de hidratación
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });
const MotionH1 = dynamic(() => Promise.resolve(motion.h1), { ssr: false });
const MotionP = dynamic(() => Promise.resolve(motion.p), { ssr: false });
const MotionA = dynamic(() => Promise.resolve(motion.a), { ssr: false });

// Importamos el componente de partículas de forma dinámica para evitar problemas de SSR
const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0 bg-primary opacity-30"></div>
  )
});

interface HeroSectionProps {
  headline: ReactNode;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subheadline,
  ctaText,
  ctaLink,
  backgroundImage
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [scrollProps, setScrollProps] = useState({ backgroundY: 0, contentOpacity: 1 });
  
  useEffect(() => {
    setIsMounted(true);
    
    // Función para manejar el desplazamiento manualmente
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollY = window.scrollY;
        const backgroundY = (scrollY / 500) * 150;
        const contentOpacity = 1 - (scrollY / 300) * 0.5;
        
        setScrollProps({
          backgroundY,
          contentOpacity: Math.max(0.5, contentOpacity)
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Renderizado del servidor sin animaciones
  if (!isMounted) {
    return (
      <section className="py-20 relative overflow-hidden bg-primary">
        {backgroundImage && (
          <div 
            className="absolute inset-0 z-0 opacity-20"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4 text-white-safe">{headline}</h1>
              <p className="text-xl mb-8 text-neutral-300">{subheadline}</p>
              <div className="flex gap-4">
                <a 
                  href={ctaLink} 
                  className="bg-accent text-white px-6 py-3 rounded-md font-medium inline-block"
                >
                  {ctaText}
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent relative">
                <img 
                  src="/images/perfil.jpeg" 
                  alt="Javier Herrera" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Renderizado del cliente con animaciones
  return (
    <section className="py-20 relative overflow-hidden bg-primary min-h-[80vh] flex items-center">
      {/* Fondo con partículas */}
      <ParticleBackground className="absolute inset-0 z-0 w-full h-full" />
      
      {backgroundImage && (
        <MotionDiv 
          className="absolute inset-0 z-0 opacity-10" // Reducida la opacidad para que se vean mejor las partículas
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: scrollProps.backgroundY
          }}
        />
      )}
      
      <MotionDiv 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity: scrollProps.contentOpacity }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <MotionDiv 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MotionH1 
              className="text-4xl font-bold mb-4 text-white-safe"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {headline}
            </MotionH1>
            <MotionP 
              className="text-xl mb-8 text-neutral-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {subheadline}
            </MotionP>
            <MotionDiv 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <MotionA 
                href="#contacto" 
                className="bg-accent text-white px-6 py-3 rounded-md font-medium inline-block"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(79, 209, 197, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaText}
              </MotionA>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <MotionDiv 
              className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img 
                src= "images/perfil.jpeg" 
                alt="Javier Herrera" 
                className="w-full h-full object-cover"
              />
              <MotionDiv 
                className="absolute inset-0 bg-accent opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </MotionDiv>
          </MotionDiv>
        </div>
      </MotionDiv>
      
      {/* Indicador de scroll */}
      <MotionDiv 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <MotionDiv
          className="w-8 h-12 border-2 border-accent rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <MotionDiv 
            className="w-1.5 h-3 bg-accent rounded-full mt-2"
            animate={{ opacity: [0, 1, 0], y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default HeroSection; 