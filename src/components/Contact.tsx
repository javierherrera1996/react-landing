import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionId } from '../data/data';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id={SectionId.Contact}>
      <h2>{t('contact.title')}</h2>
      {/* Contenido del Contact */}
    </section>
  );
};

export default Contact; 