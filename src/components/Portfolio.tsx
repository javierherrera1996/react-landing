import React from 'react';
import { useTranslations } from 'next-intl';

import {SectionId} from '../data/data';

const Portfolio: React.FC = () => {
  const t = useTranslations('portfolio');
  
  return (
    <section id={SectionId.Portfolio}>
      <h2>{t('title')}</h2>
      {/* Contenido del Portfolio */}
    </section>
  );
};

export default Portfolio; 