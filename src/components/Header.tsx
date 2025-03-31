import React from 'react';
import {useTranslation} from 'react-i18next';

import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const {t} = useTranslation();

  return (
    <header className="fixed top-0 z-50 w-full bg-neutral-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:text-gray-300" href="#about">
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#portfolio">
                {t('nav.portfolio')}
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#contact">
                {t('nav.contact')}
              </a>
            </li>
          </ul>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header; 