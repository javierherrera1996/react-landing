import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import {useLanguage} from '../context/LanguageContext';

// Componentes dinámicos para evitar problemas de hidratación
const MotionHeader = dynamic(() => Promise.resolve(motion.header), { ssr: false });
const MotionButton = dynamic(() => Promise.resolve(motion.button), { ssr: false });
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });
const MotionLi = dynamic(() => Promise.resolve(motion.li), { ssr: false });
const MotionA = dynamic(() => Promise.resolve(motion.a), { ssr: false });

const Header: React.FC = () => {
  const {language} = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menú items con soporte para múltiples idiomas
  const menuItems = language === 'es' 
    ? ['Inicio', 'Experiencia', 'Proyectos', 'Contacto']
    : ['Home', 'Experience', 'Projects', 'Contact'];

  return (
    <MotionHeader 
      className={`py-4 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-dark bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <MotionA 
            href="/" 
            className="text-white-safe text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Javier Herrera
          </MotionA>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {menuItems.map((item, index) => (
                <MotionLi key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <MotionA 
                    href={index === 0 ? '/' : `#${item.toLowerCase()}`} 
                    className="text-white-safe hover:text-accent"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item}
                  </MotionA>
                </MotionLi>
              ))}
            </ul>
          </nav>
          
          <MotionButton
            className="md:hidden text-white-safe"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </MotionButton>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MotionDiv 
            className="md:hidden bg-primary-dark shadow-lg absolute top-full left-0 w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-4 px-6 space-y-3">
              {menuItems.map((item, index) => (
                <MotionLi key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <a 
                    href={index === 0 ? '/' : `#${item.toLowerCase()}`} 
                    className="text-white-safe hover:text-accent block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </MotionLi>
              ))}
            </ul>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionHeader>
  );
};

export default Header; 