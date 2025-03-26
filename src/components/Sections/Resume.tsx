import {FC, memo, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useLanguage} from '../../i18n/LanguageContext';
import {SectionId, experience, education} from '../../data/data';
import Section from '../Layout/Section';

const Resume: FC = memo(() => {
  const {t} = useLanguage();
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const itemVariants = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const tabVariants = {
    inactive: {scale: 1},
    active: {scale: 1.1},
  };

  const cardVariants = {
    initial: {scale: 1, y: 0},
    hover: {scale: 1.05, y: -8},
  };

  const glowVariants = {
    initial: {opacity: 0, x: -100},
    hover: {opacity: 1, x: 0},
  };

  const pulseVariants = {
    initial: {scale: 1},
    hover: {scale: 1.3},
  };

  return (
    <Section sectionId={SectionId.Resume} className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: "easeOut"}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
            {t('Resume')}
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.3, ease: "easeOut"}}
          >
            {t('Algunos registros de mi vida')}
          </motion.p>
        </motion.div>

        {/* Tabs de navegación */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.5, ease: "easeOut"}}
        >
          <div className="bg-gray-800/50 p-1 rounded-lg flex space-x-2 backdrop-blur-sm shadow-xl">
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'experience' ? 'active' : 'inactive'}
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 relative overflow-hidden ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0"
                animate={{opacity: activeTab === 'experience' ? 1 : 0}}
                transition={{duration: 0.5}}
              />
              <span className="relative z-10">{t('Experience')}</span>
            </motion.button>
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'education' ? 'active' : 'inactive'}
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 relative overflow-hidden ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0"
                animate={{opacity: activeTab === 'education' ? 1 : 0}}
                transition={{duration: 0.5}}
              />
              <span className="relative z-10">{t('Education')}</span>
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              key="experience"
              initial={{opacity: 0, x: -50}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: 50}}
              transition={{duration: 0.5, ease: "easeOut"}}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-8">
                {experience.map((exp) => (
                  <motion.div
                    key={exp.date}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    className="relative pl-8 border-l-2 border-blue-500 group"
                  >
                    <motion.div 
                      className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"
                      variants={pulseVariants}
                      animate={hoveredItem === exp.date ? "hover" : "initial"}
                      transition={{duration: 0.3}}
                    />
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      onHoverStart={() => setHoveredItem(exp.date)}
                      onHoverEnd={() => setHoveredItem(null)}
                      className="bg-gray-800/50 p-6 rounded-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/30 relative overflow-hidden"
                    >
                      <motion.div
                        variants={glowVariants}
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2 md:mb-0">{exp.title}</h4>
                        <span className="text-blue-400 font-medium">{exp.date}</span>
                      </div>
                      <p className="text-gray-400 mb-4">{exp.location}</p>
                      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{__html: exp.content}} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{opacity: 0, x: -50}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: 50}}
              transition={{duration: 0.5, ease: "easeOut"}}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-8">
                {education.map((edu) => (
                  <motion.div
                    key={edu.date}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    className="relative pl-8 border-l-2 border-purple-500 group"
                  >
                    <motion.div 
                      className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"
                      variants={pulseVariants}
                      animate={hoveredItem === edu.date ? "hover" : "initial"}
                      transition={{duration: 0.3}}
                    />
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      onHoverStart={() => setHoveredItem(edu.date)}
                      onHoverEnd={() => setHoveredItem(null)}
                      className="bg-gray-800/50 p-6 rounded-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/30 relative overflow-hidden"
                    >
                      <motion.div
                        variants={glowVariants}
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2 md:mb-0">{edu.title}</h4>
                        <span className="text-purple-400 font-medium">{edu.date}</span>
                      </div>
                      <p className="text-gray-400 mb-4">{edu.location}</p>
                      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{__html: edu.content}} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume; 