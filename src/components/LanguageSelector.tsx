import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'es' | 'en'): void => {
    console.log('Changing language to:', lng); // Para debug
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 rounded ${
          i18n.language === 'es' ? 'bg-white text-black' : 'text-white'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded ${
          i18n.language === 'en' ? 'bg-white text-black' : 'text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector; 