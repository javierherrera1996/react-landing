import {FC, memo} from 'react';
import dynamic from 'next/dynamic';
import {motion} from 'framer-motion';
import {SectionId} from '../../data/data';
import {useLanguage} from '../../i18n/LanguageContext';

const ParticlesBg = dynamic(() => import('particles-bg'), {
  ssr: false,
  loading: () => null,
});

const LanguageSelector: FC = () => {
  const {language, setLanguage} = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 right-4 z-50 flex gap-2"
    >
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('es')}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
          language === 'es'
            ? 'bg-blue-600 text-white'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        ES
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        EN
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('pt')}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
          language === 'pt'
            ? 'bg-blue-600 text-white'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        PT
      </motion.button>
    </motion.div>
  );
};

const Hero: FC = memo(() => {
  const {t} = useLanguage();

  return (
    <section id={SectionId.Hero} className="relative flex h-screen items-center justify-center overflow-hidden">
      <ParticlesBg 
        type="cobweb" 
        bg={true} 
        color="#ffffff" 
        num={150}
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30" 
      />
      
      <LanguageSelector />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
        >
          {t('hero.name')}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 text-lg text-gray-200 sm:text-xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {t('hero.description.part1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {t('hero.description.part2')}
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700"
            href="/assets/resume.pdf"
          >
            {t('hero.actions.downloadCV')}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-lg bg-white/10 px-6 py-3 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
            href={`#${SectionId.Contact}`}
          >
            {t('hero.actions.contact')}
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            animate={{ 
              y: [0, 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            href={`#${SectionId.About}`}
            className="text-white/80 hover:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
