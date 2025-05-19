import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t('menu.home'), path: '/', icon: 'fas fa-home' },
    { name: t('menu.skills', 'Skills'), path: '/#skills', icon: 'fas fa-brain' },
    { name: t('menu.usecases', 'Use Cases'), path: '/#use-cases', icon: 'fas fa-lightbulb' },
    { name: t('menu.experience'), path: '/#experience', icon: 'fas fa-briefcase' },
    { name: t('menu.education', 'Education'), path: '/#education', icon: 'fas fa-graduation-cap' },
    { name: t('menu.contact'), path: '/#contact-section', icon: 'fas fa-envelope' },
  ];

  return (
    <motion.header
      className={`py-4 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-dark bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-white-safe text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Javier Herrera
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <motion.a
                    href={item.path}
                    className="text-white-safe hover:text-accent flex items-center gap-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <i className={`${item.icon}`}></i>
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Botón hamburguesa mobile */}
          <motion.button
            className="md:hidden text-white-safe ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Abrir menú"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </motion.button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-primary-dark shadow-lg absolute top-full left-0 w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-4 px-6 space-y-3">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <a
                    href={item.path}
                    className="text-white-safe hover:text-accent block py-2 flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <i className={`${item.icon}`}></i>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar; 