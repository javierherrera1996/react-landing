import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionId } from '../data/data';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id={SectionId.About}>
      <h2>{t('about.title')}</h2>
      {/* Contenido del About */}
    </section>
  );
};

export default About; 