import {motion} from 'framer-motion';
import {FC, memo, useEffect, useState} from 'react';

import {SectionId} from '../../data/data';

const Header: FC = memo(() => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const sections = Object.values(SectionId);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {threshold: 0.5},
    );

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      animate={{y: 0}}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
      initial={{y: -100}}
      transition={{duration: 0.5}}>
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-12">
          {Object.values(SectionId).map(sectionId => (
            <motion.li key={sectionId}>
              <motion.a
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === sectionId ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
                href={`#${sectionId}`}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}>
                {sectionId}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
});

Header.displayName = 'Header';
export default Header;
