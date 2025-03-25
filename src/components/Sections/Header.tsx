import {memo, useCallback, useMemo, useState} from 'react';
import {motion} from 'framer-motion';
import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header = memo(() => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Hero);
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Resume, SectionId.Portfolio, SectionId.Contact],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    if (section && section !== activeSection) {
      setActiveSection(section);
    }
  }, [activeSection]);

  useNavObserver(navSections.map((section) => `#${section}`).join(','), intersectionHandler);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-12">
            {navSections.map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                whileHover={{ y: -2 }}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                  activeSection === section ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
});

Header.displayName = 'Header';
export default Header;
