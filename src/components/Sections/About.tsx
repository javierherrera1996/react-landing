import {motion} from 'framer-motion';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import {TimelineItem} from '../../data/dataDef';
import {useLanguage} from '../../i18n/LanguageContext';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {t} = useLanguage();

  const fadeInUp = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Section className="bg-gray-900 py-20" sectionId={SectionId.About}>
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial="hidden" variants={staggerContainer} whileInView="visible">
          <motion.h2 className="text-4xl font-bold text-white mb-4" variants={fadeInUp}>
            {t('Sobre Mí')}
          </motion.h2>
          <motion.p className="text-gray-400 max-w-2xl mx-auto" variants={fadeInUp}>
            {t(
              'Soy un Data Scientist y desarrollador Full Stack con experiencia en el desarrollo de soluciones de IA y aplicaciones web. Me especializo en el procesamiento de lenguaje natural y la creación de sistemas de IA conversacional.',
            )}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          variants={staggerContainer}
          whileInView="visible">
          <motion.div className="bg-gray-800 p-6 rounded-lg" variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-white mb-4">{t('Experiencia')}</h3>
            <div className="space-y-4">
              {[
                {
                  date: '2023 - Presente',
                  title: 'Data Scientist Senior',
                  location: 'Empresa Actual',
                  content: (
                    <ul>
                      <li>Desarrollo de modelos de machine learning para predicción de demanda</li>
                      <li>Implementación de sistemas de recomendación personalizados</li>
                      <li>Liderazgo técnico en proyectos de IA</li>
                    </ul>
                  ),
                },
                {
                  date: '2021 - 2023',
                  title: 'Data Scientist',
                  location: 'Empresa Anterior',
                  content: (
                    <ul>
                      <li>Análisis de datos y visualización para toma de decisiones</li>
                      <li>Desarrollo de modelos de clasificación y regresión</li>
                      <li>Optimización de procesos de negocio mediante análisis de datos</li>
                    </ul>
                  ),
                },
              ].map((item: TimelineItem, index) => (
                <motion.div className="border-l-2 border-blue-500 pl-4" key={index} variants={fadeInUp}>
                  <div className="text-blue-400 mb-2">{item.date}</div>
                  <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                  <div className="text-gray-400 mb-2">{item.location}</div>
                  <div className="text-gray-300">{item.content}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="bg-gray-800 p-6 rounded-lg" variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-white mb-4">{t('Educación')}</h3>
            <div className="space-y-4">
              {[
                {
                  date: '2019 - 2021',
                  title: 'Máster en Ciencia de Datos',
                  location: 'Universidad',
                  content: (
                    <ul>
                      <li>Especialización en Machine Learning y Deep Learning</li>
                      <li>Proyectos de investigación en NLP</li>
                      <li>Tesis sobre modelos de lenguaje</li>
                    </ul>
                  ),
                },
                {
                  date: '2015 - 2019',
                  title: 'Grado en Ingeniería Informática',
                  location: 'Universidad',
                  content: (
                    <ul>
                      <li>Especialización en Inteligencia Artificial</li>
                      <li>Proyectos de desarrollo de software</li>
                      <li>Prácticas en empresas tecnológicas</li>
                    </ul>
                  ),
                },
              ].map((item: TimelineItem, index) => (
                <motion.div className="border-l-2 border-blue-500 pl-4" key={index} variants={fadeInUp}>
                  <div className="text-blue-400 mb-2">{item.date}</div>
                  <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                  <div className="text-gray-400 mb-2">{item.location}</div>
                  <div className="text-gray-300">{item.content}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
