import {FC, memo} from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {useLanguage} from '../../i18n/LanguageContext';
import {SectionId, aboutData} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {t} = useLanguage();
  const {profileImageSrc, description, aboutItems} = aboutData;

  return (
    <Section sectionId={SectionId.About} className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 mx-auto"
            >
              <Image
                alt="Profile"
                className="rounded-full object-cover"
                fill
                src={profileImageSrc as string}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-4"
            >
              {t('about.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {aboutItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300"
                >
                  {item.Icon && <item.Icon className="h-5 w-5 text-blue-400" />}
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-white font-medium">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
