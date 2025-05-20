import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const t = useTranslations('menu');
  const router = useRouter();
  const currentLocale = router.locale || 'es';
  const otherLocale = currentLocale === 'es' ? 'en' : 'es';
  const switchTo = currentLocale === 'es' ? '/en' : '/';
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
    { name: t('home'), path: '/', icon: 'fas fa-home' },
    { name: t('skills'), path: '/#skills', icon: 'fas fa-brain' },
    { name: t('usecases'), path: '/#use-cases', icon: 'fas fa-lightbulb' },
    { name: t('experience'), path: '/#experience', icon: 'fas fa-briefcase' },
    { name: t('education'), path: '/#education', icon: 'fas fa-graduation-cap' },
    { name: t('contact'), path: '/#contact-section', icon: 'fas fa-envelope' },
  ];

  const getLocalePath = (locale: string) => {
    if (locale === 'es') {
      // Quita /en del path si existe
      return router.asPath.replace(/^\/en(\/|$)/, '/') || '/';
    } else {
      // Si ya empieza con /en, no dupliques
      return router.asPath.startsWith('/en') ? router.asPath : `/en${router.asPath}`;
    }
  };

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
          <Link href="/" locale={currentLocale} legacyBehavior>
            <a className="text-white-safe text-xl font-bold">Javier Herrera</a>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Link href={item.path} locale={currentLocale} legacyBehavior scroll={false}>
                    <a className="text-white-safe hover:text-accent flex items-center gap-2">
                      <i className={`${item.icon}`}></i>
                      {item.name}
                    </a>
                  </Link>
                </motion.li>
              ))}
              {/* Botón cambio idioma desktop */}
              <li>
                <Link
                  href={getLocalePath(otherLocale)}
                  locale={otherLocale}
                  scroll={false}
                  legacyBehavior
                >
                  <a
                    className="ml-4 px-3 py-1 rounded bg-accent text-white hover:bg-accent/90 transition-colors font-semibold"
                    aria-label="Cambiar idioma"
                  >
                    {otherLocale === 'en' ? 'English' : 'Español'}
                  </a>
                </Link>
              </li>
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
                  <Link href={item.path} locale={currentLocale} legacyBehavior scroll={false}>
                    <a
                      className="text-white-safe hover:text-accent block py-2 flex items-center gap-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <i className={`${item.icon}`}></i>
                      {item.name}
                    </a>
                  </Link>
                </motion.li>
              ))}
              {/* Botón cambio idioma mobile */}
              <li>
                <Link
                  href={getLocalePath(otherLocale)}
                  locale={otherLocale}
                  scroll={false}
                  legacyBehavior
                >
                  <a
                    className="w-full mt-2 px-3 py-2 rounded bg-accent text-white hover:bg-accent/90 transition-colors font-semibold"
                    aria-label="Cambiar idioma"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {otherLocale === 'en' ? 'English' : 'Español'}
                  </a>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar; 