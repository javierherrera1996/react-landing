import React from 'react';
import {useLanguage} from '../context/LanguageContext';

const LanguageSelector: React.FC = () => {
  const {language, setLanguage} = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-neutral-800/50 rounded-lg p-1">
      <button
        className={`px-3 py-1 rounded-md transition-colors ${
          language === 'es' 
            ? 'bg-white text-black' 
            : 'text-white hover:bg-neutral-700'
        }`}
        onClick={() => setLanguage('es')}
      >
        ES
      </button>
      <button
        className={`px-3 py-1 rounded-md transition-colors ${
          language === 'en' 
            ? 'bg-white text-black' 
            : 'text-white hover:bg-neutral-700'
        }`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector; 