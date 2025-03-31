import React from 'react';
import {useLanguage} from '../context/LanguageContext';

const Hero: React.FC = () => {
  const {language} = useLanguage();

  // Traducción de contenido según el idioma seleccionado
  const content = {
    es: {
      title: 'Ingeniero de IA & Especialista en LangChain',
      description: 'Especializado en desarrollo de soluciones inteligentes con Modelos de Lenguaje Grandes',
      buttons: {
        download: 'Descargar CV',
        contact: 'Contáctame'
      }
    },
    en: {
      title: 'AI Engineer & LangChain Specialist',
      description: 'Specialized in developing intelligent solutions with Large Language Models',
      buttons: {
        download: 'Download Resume',
        contact: 'Contact Me'
      }
    }
  };

  // Seleccionar el contenido según el idioma
  const currentContent = language === 'es' ? content.es : content.en;

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {currentContent.title}
        </h1>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-xl mb-4 text-gray-300">
            {currentContent.description}
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="/assets/resume.pdf"
            download
            className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
          >
            {currentContent.buttons.download}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            {currentContent.buttons.contact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 