import React from 'react';
import { useTranslations } from 'next-intl';

import {SectionId} from '../data/data';

const Contact: React.FC = () => {
  const t = useTranslations('contact');
  
  return (
    <section id={SectionId.Contact}>
      <h2>{t('title')}</h2>
      {/* Contenido del Contact */}
    </section>
  );
};

export default Contact; 