import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './LanguageSelector/LanguageSelector';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const bgClass = transparent && !scrolled
    ? 'bg-transparent'
    : 'bg-primary-dark bg-opacity-95 backdrop-blur-sm shadow-soft';
    
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-3"
          >
            <div className="text-white-safe font-display font-bold flex items-center">
              <div className="w-8 h-8 rounded-lg border border-accent flex items-center justify-center mr-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary"></div>
                <span className="relative z-10 flex items-center justify-center w-full h-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="#00B8D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 16L12 20L20 16" stroke="#00B8D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 12L12 16L20 12" stroke="#00B8D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent"></div>
              </div>
              <span className="text-lg">Javier Herrera</span>
            </div>
          </a>
          
          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Inicio', path: '/', icon: 'fas fa-home' },
              { name: 'Servicios', path: '/ai-engineering-services', icon: 'fas fa-cogs' },
              { name: 'Experiencia', path: '/#experience', icon: 'fas fa-briefcase' },
              { name: 'Blog', path: '/blog', icon: 'fas fa-blog' },
              { name: 'Contacto', path: '/#contact-section', icon: 'fas fa-envelope' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="px-4 py-2 text-neutral-300 hover:text-white-safe relative group transition-colors flex items-center"
              >
                <i className={`${item.icon} mr-2 text-accent`}></i>
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <div className="ml-4">
              <LanguageSelector />
            </div>
          </nav>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <motion.a
              href="#contact-section"
              className="inline-flex items-center px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white-safe transition-colors duration-300 rounded-md text-sm font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span>Contáctame</span>
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute h-px w-6 bg-white-safe transform transition-all duration-300 ${isOpen ? 'rotate-45 top-2.5' : 'top-0'}`}
              ></span>
              <span 
                className={`absolute h-px w-6 bg-white-safe top-2.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span 
                className={`absolute h-px w-6 bg-white-safe transform transition-all duration-300 ${isOpen ? '-rotate-45 top-2.5' : 'top-5'}`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary border-t border-neutral-800"
          >
            <div className="container mx-auto px-6 py-6 space-y-1">
              {[
                { name: 'Inicio', path: '/', icon: 'fas fa-home' },
                { name: 'Servicios', path: '/ai-engineering-services', icon: 'fas fa-cogs' },
                { name: 'Experiencia', path: '/#experience', icon: 'fas fa-briefcase' },
                { name: 'Blog', path: '/blog', icon: 'fas fa-blog' },
                { name: 'Contacto', path: '/#contact-section', icon: 'fas fa-envelope' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="block py-3 px-4 hover:bg-primary-light rounded-md text-neutral-300 hover:text-white-safe flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <i className={`${item.icon} mr-3 text-accent w-5 text-center`}></i>
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 px-4">
                <LanguageSelector />
              </div>
              
              <div className="pt-2">
                <a
                  href="#contact-section"
                  className="flex items-center justify-center w-full px-4 py-3 bg-accent text-white-safe rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Contáctame</span>
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 