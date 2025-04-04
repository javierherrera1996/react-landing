import React, { createContext, useState, useContext, ReactNode } from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definir los idiomas soportados
export type Language = 'es' | 'en';

// Configuración inicial de traducciones
const resources = {
  en: {
    translation: {
      // Traducciones en inglés
      'hero.title': 'AI Engineer & LangChain Specialist',
      'hero.subtitle': 'Specialized in developing intelligent solutions with Large Language Models',
      'hero.cta': 'Contact Me',
      'skills.title': 'Technical Skills',
      'experience.title': 'Professional Experience',
      'education.title': 'Education & Certifications',
      // Añade más traducciones según necesites
    }
  },
  es: {
    translation: {
      // Traducciones en español
      'hero.title': 'Ingeniero de IA & Especialista en LangChain',
      'hero.subtitle': 'Especializado en desarrollo de soluciones inteligentes con Modelos de Lenguaje Grandes',
      'hero.cta': 'Contáctame',
      'skills.title': 'Habilidades Técnicas',
      'experience.title': 'Experiencia Profesional',
      'education.title': 'Educación y Certificaciones',
      // Añade más traducciones según necesites
    }
  }
};

// Inicializar i18next
i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

// Tipo para el contexto
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Crear el contexto
const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {}
});

// Hook personalizado para usar el contexto
export const useLanguage = () => useContext(LanguageContext);

// Proveedor del contexto
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  // Cambiar el idioma en i18next cuando cambia el estado
  const handleSetLanguage = (lang: Language) => {
    i18next.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}; 