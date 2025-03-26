import {motion} from 'framer-motion';
import dynamic from 'next/dynamic';
import {FC, memo, useEffect, useState} from 'react';

import {SectionId} from '../../data/data';
import {useLanguage} from '../../i18n/LanguageContext';
import Section from '../Layout/Section';

const ParticlesBg = memo(
  dynamic(() => import('particles-bg'), {
    ssr: false,
  }),
);

const Hero: FC = memo(() => {
  const {t} = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      sectionId={SectionId.Hero}>
      {isMounted && <ParticlesBg bg={true} color="#4a90e2" num={100} type="cobweb" />}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          animate={{opacity: 1, y: 0}}
          className="text-center"
          initial={{opacity: 0, y: 20}}
          transition={{duration: 0.8}}>
          <motion.h1
            animate={{opacity: 1, y: 0}}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{opacity: 0, y: 20}}
            transition={{duration: 0.8, delay: 0.2}}>
            {t('Transformando Datos en Soluciones Inteligentes')}
          </motion.h1>
          <motion.p
            animate={{opacity: 1, y: 0}}
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{opacity: 0, y: 20}}
            transition={{duration: 0.8, delay: 0.4}}>
            {t(
              'Data Scientist y Especialista en IA, especializado en Procesamiento de Lenguaje Natural y IA Conversacional',
            )}
          </motion.p>
          <motion.div
            animate={{opacity: 1, y: 0}}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{opacity: 0, y: 20}}
            transition={{duration: 0.8, delay: 0.6}}>
            <motion.a
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              href="#contact"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}>
              {t('Contactar')}
            </motion.a>
            <motion.a
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
              href="#about"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}>
              {t('Sobre Mí')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
