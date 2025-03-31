import React from 'react';
import {useTranslation} from 'react-i18next';

const LanguageTest: React.FC = () => {
  const {t, i18n} = useTranslation();

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto my-10">
      <h1 className="text-2xl font-bold mb-6">{t('hero.title')}</h1>
      <p className="mb-6">{t('hero.description')}</p>
      
      <div className="flex gap-4 mb-8">
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          {t('hero.buttons.download')}
        </button>
        <button 
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg"
        >
          {t('hero.buttons.contact')}
        </button>
      </div>

      <div className="flex justify-center gap-4 p-4 bg-gray-100 rounded-lg">
        <button 
          className={`px-4 py-2 rounded-lg ${i18n.language === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => i18n.changeLanguage('es')}
        >
          Español
        </button>
        <button 
          className={`px-4 py-2 rounded-lg ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => i18n.changeLanguage('en')}
        >
          English
        </button>
      </div>
    </div>
  );
};

export default LanguageTest; 