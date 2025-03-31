import React from 'react';
import {useTranslation} from 'react-i18next';

const LanguageSelector: React.FC = React.memo(() => {
  const {i18n} = useTranslation();

  const changeLanguage = (lng: 'es' | 'en'): void => {
    i18n.changeLanguage(lng);
    localStorage.setItem('preferred-language', lng);
  };

  return (
    <div className="flex items-center gap-2 bg-neutral-800/50 rounded-lg p-1">
      <button
        className={`px-3 py-1 rounded-md transition-colors ${
          i18n.language === 'es' 
            ? 'bg-white text-black' 
            : 'text-white hover:bg-neutral-700'
        }`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
      <button
        className={`px-3 py-1 rounded-md transition-colors ${
          i18n.language === 'en' 
            ? 'bg-white text-black' 
            : 'text-white hover:bg-neutral-700'
        }`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
});

export default LanguageSelector; 