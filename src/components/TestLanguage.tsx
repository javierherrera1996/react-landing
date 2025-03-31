import React from 'react';
import { useTranslation } from 'react-i18next';

const TestLanguage: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="p-4 bg-white">
      <h1>{t('test')}</h1>
      <div className="space-y-4">
        <div>
          <p>{t('currentLanguage', 'Idioma actual')}: {i18n.language}</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => i18n.changeLanguage('es')}
            className="px-4 py-2 bg-blue-500 text-white"
          >
            {t('languages.spanish', 'Español')}
          </button>
          <button 
            onClick={() => i18n.changeLanguage('en')}
            className="px-4 py-2 bg-blue-500 text-white"
          >
            {t('languages.english', 'English')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestLanguage; 