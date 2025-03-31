import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: 'es',
    name: 'Español',
    flag: '🇪🇸'
  });
  
  const languages: Language[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Aquí podrías implementar la lógica para cambiar el idioma de la aplicación
  };
  
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-neutral-300 hover:text-white-safe px-2 py-1 rounded-md border border-neutral-700 hover:border-accent transition-colors"
        aria-label="Seleccionar idioma"
      >
        <span className="mr-1">{selectedLanguage.flag}</span>
        <span className="text-sm font-medium">{selectedLanguage.code.toUpperCase()}</span>
        <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-primary-light border border-neutral-700 rounded-md shadow-lg py-1 z-50"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => selectLanguage(language)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-primary-dark flex items-center ${
                  selectedLanguage.code === language.code ? 'text-accent' : 'text-neutral-300'
                }`}
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
                
                {selectedLanguage.code === language.code && (
                  <svg className="ml-auto w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector; 