import React from 'react';
import { useTranslations } from 'next-intl';

import {SectionId} from '../data/data';

const About: React.FC = () => {
  const t = useTranslations('about');
  
  return (
    <section id={SectionId.About}>
      <h2>{t('title')}</h2>
      {/* Contenido del About */}
    </section>
  );
};

export default About; 