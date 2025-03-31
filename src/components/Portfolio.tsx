import React from 'react';
import {useTranslation} from 'react-i18next';

import {SectionId} from '../data/data';

const Portfolio: React.FC = () => {
  const {t} = useTranslation();
  
  return (
    <section id={SectionId.Portfolio}>
      <h2>{t('portfolio.title')}</h2>
      {/* Contenido del Portfolio */}
    </section>
  );
};

export default Portfolio; 