import './index.css';

import React, {useState} from 'react';

// Traducciones directas en objetos
const translations = {
  en: {
    title: 'Transforming Data into Intelligent Solutions',
    description: 'As a Data Scientist and AI Specialist',
    download: 'Download CV',
    contact: 'Contact'
  },
  es: {
    title: 'Transformando Datos en Soluciones Inteligentes',
    description: 'Como Data Scientist y Especialista en IA',
    download: 'Descargar CV',
    contact: 'Contactar'
  }
};

function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  
  // Obtener las traducciones para el idioma actual
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl p-8 w-full">
        <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
        <p className="mb-8">{t.description}</p>
        
        {/* Call to Action Buttons */}
        <div className="flex gap-4 mb-8">
          <a 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" 
            download
            href="/resume.pdf"
          >
            {t.download}
          </a>
          <a 
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            href="#contact"
          >
            {t.contact}
          </a>
        </div>
        
        {/* Language Switcher */}
        <div className="flex justify-center gap-4 p-4 bg-gray-100 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-lg transition-colors ${
              language === 'es' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setLanguage('es')}
          >
            Español
          </button>
          <button 
            className={`px-4 py-2 rounded-lg transition-colors ${
              language === 'en' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}

export default App; 