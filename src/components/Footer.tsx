import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-dark relative overflow-hidden border-t border-neutral-800">
      {/* Patrón de puntos en el fondo */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
      
      {/* Elemento decorativo - Blueprint */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="180" height="180" stroke="#00B8D9" strokeWidth="0.5"/>
          <rect x="30" y="30" width="140" height="140" stroke="#00B8D9" strokeWidth="0.5"/>
          <rect x="50" y="50" width="100" height="100" stroke="#00B8D9" strokeWidth="0.5"/>
          <rect x="70" y="70" width="60" height="60" stroke="#00B8D9" strokeWidth="0.5"/>
          <line x1="0" y1="100" x2="200" y2="100" stroke="#00B8D9" strokeWidth="0.5"/>
          <line x1="100" y1="0" x2="100" y2="200" stroke="#00B8D9" strokeWidth="0.5"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Logo & Info */}
          <div>
            <div className="flex items-center mb-6">
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
              <span className="text-lg font-display font-bold text-white-safe">Javier Herrera</span>
            </div>
            
            <p className="text-neutral-400 mb-6">
              AI Engineer especializado en el desarrollo de agentes inteligentes con LangChain y LangGraph, implementando soluciones de IA para finanzas, salud y seguros.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/javierherrerab" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 hover:border-accent text-neutral-400 hover:text-accent transition-colors duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="https://github.com/javierherrera1996" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 hover:border-accent text-neutral-400 hover:text-accent transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://javierherrera1996.github.io" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 hover:border-accent text-neutral-400 hover:text-accent transition-colors duration-300"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white-safe font-bold mb-6 relative inline-block">
              {t('Enlaces Rápidos', 'Enlaces Rápidos')}
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent"></span>
            </h3>
            
            <ul className="space-y-3">
              {[
                { name: t('menu.home'), path: '/', icon: 'fas fa-home' },
                { name: t('menu.services'), path: '/ai-engineering-services', icon: 'fas fa-cogs' },
                { name: t('menu.experience'), path: '/#experience', icon: 'fas fa-briefcase' },
                { name: t('menu.blog'), path: '/blog', icon: 'fas fa-blog' },
                { name: t('menu.contact'), path: '/#contact-section', icon: 'fas fa-envelope' },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path}
                    className="text-neutral-400 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <i className={`${item.icon} mr-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity`}></i>
                    <span className="w-1.5 h-1.5 bg-accent opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div>
            <h3 className="text-white-safe font-bold mb-6 relative inline-block">
              Servicios
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent"></span>
            </h3>
            
            <ul className="space-y-3">
              {[
                'Desarrollo de Agentes IA',
                'Implementación de RAG',
                'Prompt Engineering',
                'Consultoría en IA',
                'Machine Learning',
                'Análisis de Datos'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="/ai-engineering-services"
                    className="text-neutral-400 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white-safe font-bold mb-6 relative inline-block">
              Contacto
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent"></span>
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-accent mr-3 mt-1"><i className="fas fa-envelope"></i></div>
                <div>
                  <a href="mailto:andreshebe96@gmail.com" className="text-neutral-400 hover:text-accent">
                    andreshebe96@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-accent mr-3 mt-1"><i className="fas fa-phone"></i></div>
                <div>
                  <a href="tel:+573016103759" className="text-neutral-400 hover:text-accent">
                    +57 301 610 3759
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-accent mr-3 mt-1"><i className="fas fa-map-marker-alt"></i></div>
                <div className="text-neutral-400">
                  Colombia
                </div>
              </li>
            </ul>
            
            <div className="mt-6">
              <motion.a
                href="#contact-section"
                className="inline-flex items-center px-4 py-2 bg-accent text-white-safe rounded-md text-sm font-medium transition-all duration-300"
                whileHover={{ y: -2, boxShadow: "0 10px 15px -3px rgba(0, 184, 217, 0.2)" }}
                whileTap={{ y: 0 }}
              >
                <span>{t('cta.contact')}</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Javier Herrera. Todos los derechos reservados.
          </p>
          
          {/* Indicador de diseño tecnológico */}
          <div className="flex items-center justify-center mt-4 space-x-2 text-neutral-500 text-xs">
            <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
            <span>AI.ENGINEER.SYSTEM:v1.0</span>
            <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 