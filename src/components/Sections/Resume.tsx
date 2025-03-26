import {FC, memo, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {useLanguage} from '../../i18n/LanguageContext';
import {education, experience, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Resume: FC = memo(() => {
  const {t} = useLanguage();
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const itemVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
      y: 0,
    },
  };

  const tabVariants = {
    active: {scale: 1.1},
    inactive: {scale: 1},
  };

  const cardVariants = {
    hover: {scale: 1.05, y: -8},
    initial: {scale: 1, y: 0},
  };

  const glowVariants = {
    hover: {opacity: 1, x: 0},
    initial: {opacity: 0, x: -100},
  };

  const pulseVariants = {
    hover: {scale: 1.3},
    initial: {scale: 1},
  };

  return (
    <Section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20" sectionId={SectionId.Resume}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1, ease: "easeOut"}}
          viewport={{once: true}}
          whileInView={{opacity: 1, y: 0}}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{opacity: 0, y: 30}}
            transition={{duration: 0.8, ease: "easeOut"}}
            whileInView={{opacity: 1, y: 0}}
          >
            {t('Resume')}
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{opacity: 0, y: 30}}
            transition={{delay: 0.3, duration: 0.8, ease: "easeOut"}}
            whileInView={{opacity: 1, y: 0}}
          >
            {t('Algunos registros de mi vida')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex justify-center mb-12"
          initial={{opacity: 0, y: 30}}
          transition={{delay: 0.5, duration: 0.8, ease: "easeOut"}}
          whileInView={{opacity: 1, y: 0}}
        >
          <div className="bg-gray-800/50 p-1 rounded-lg flex space-x-2 backdrop-blur-sm shadow-xl">
            <motion.button
              animate={activeTab === 'experience' ? 'active' : 'inactive'}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 relative overflow-hidden ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={() => setActiveTab('experience')}
              variants={tabVariants}
            >
              <motion.span
                animate={{opacity: activeTab === 'experience' ? 1 : 0}}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0"
                transition={{duration: 0.5}}
              />
              <span className="relative z-10">{t('Experience')}</span>
            </motion.button>
            <motion.button
              animate={activeTab === 'education' ? 'active' : 'inactive'}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 relative overflow-hidden ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={() => setActiveTab('education')}
              variants={tabVariants}
            >
              <motion.span
                animate={{opacity: activeTab === 'education' ? 1 : 0}}
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0"
                transition={{duration: 0.5}}
              />
              <span className="relative z-10">{t('Education')}</span>
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              animate={{opacity: 1, x: 0}}
              className="max-w-4xl mx-auto"
              exit={{opacity: 0, x: 50}}
              initial={{opacity: 0, x: -50}}
              key="experience"
              transition={{duration: 0.5, ease: "easeOut"}}
            >
              <div className="space-y-8">
                {experience.map((exp) => (
                  <motion.div
                    className="relative pl-8 border-l-2 border-blue-500 group"
                    initial="hidden"
                    key={exp.date}
                    variants={itemVariants}
                    viewport={{once: true}}
                    whileInView="visible"
                  >
                    <motion.div 
                      animate={hoveredItem === exp.date ? "hover" : "initial"}
                      className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"
                      transition={{duration: 0.3}}
                      variants={pulseVariants}
                    />
                    <motion.div
                      className="bg-gray-800/50 p-6 rounded-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/30 relative overflow-hidden"
                      onHoverEnd={() => setHoveredItem(null)}
                      onHoverStart={() => setHoveredItem(exp.date)}
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        variants={glowVariants}
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
              animate={{opacity: 1, x: 0}}
              className="max-w-4xl mx-auto"
              exit={{opacity: 0, x: 50}}
              initial={{opacity: 0, x: -50}}
              key="education"
              transition={{duration: 0.5, ease: "easeOut"}}
            >
              <div className="space-y-8">
                {education.map((edu) => (
                  <motion.div
                    className="relative pl-8 border-l-2 border-purple-500 group"
                    initial="hidden"
                    key={edu.date}
                    variants={itemVariants}
                    viewport={{once: true}}
                    whileInView="visible"
                  >
                    <motion.div 
                      animate={hoveredItem === edu.date ? "hover" : "initial"}
                      className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"
                      transition={{duration: 0.3}}
                      variants={pulseVariants}
                    />
                    <motion.div
                      className="bg-gray-800/50 p-6 rounded-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/30 relative overflow-hidden"
                      onHoverEnd={() => setHoveredItem(null)}
                      onHoverStart={() => setHoveredItem(edu.date)}
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        variants={glowVariants}
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