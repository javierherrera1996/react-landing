import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const LanguageSelector: React.FC = () => {
  const { changeLanguage, getCurrentLanguage } = useLanguage();
  const currentLanguage = getCurrentLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        className={`px-2 py-1 rounded ${
          currentLanguage === 'es' ? 'bg-stone-800 text-white' : 'text-stone-600'
        }`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
      <button
        className={`px-2 py-1 rounded ${
          currentLanguage === 'en' ? 'bg-stone-800 text-white' : 'text-stone-600'
        }`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector; 