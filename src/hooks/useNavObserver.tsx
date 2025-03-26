import {useEffect, useState} from 'react';

import {SectionId} from '../data/data';

export const useNavObserver = () => {
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

  return activeSection;
};
