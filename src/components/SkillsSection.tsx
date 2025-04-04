import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Componentes dinámicos para evitar problemas de hidratación
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });
const MotionH2 = dynamic(() => Promise.resolve(motion.h2), { ssr: false });
const MotionH3 = dynamic(() => Promise.resolve(motion.h3), { ssr: false });
const MotionP = dynamic(() => Promise.resolve(motion.p), { ssr: false });
const MotionSpan = dynamic(() => Promise.resolve(motion.span), { ssr: false });

interface SkillCategory {
  name: string;
  skills: Array<{
    name: string;
    level?: number;
    icon?: string;
  }>;
}

interface SkillsSectionProps {
  title: string;
  subtitle?: string;
  categories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  title,
  subtitle,
  categories
}) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Renderizado para servidor (sin animaciones)
  if (!isMounted) {
    return (
      <section id="skills" className="py-20 bg-primary-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white-safe">{title}</h2>
            {subtitle && <p className="text-neutral-300 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {categories.map((category, catIndex) => (
              <div key={catIndex} className="bg-primary border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6 text-white-safe">{category.name}</h3>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {skill.icon && (
                            <i className={`${skill.icon} mr-3 text-accent`}></i>
                          )}
                          <span className="text-white-safe">{skill.name}</span>
                        </div>
                        {skill.level !== undefined && (
                          <span className="text-sm text-accent">
                            {skill.level}%
                          </span>
                        )}
                      </div>
                      
                      {skill.level !== undefined && (
                        <div className="h-1.5 bg-neutral-700 rounded-full">
                          <div 
                            className="h-full bg-accent rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  // Renderizado para cliente (con animaciones)
  return (
    <section id="skills" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-6">
        <MotionDiv 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MotionH2 className="text-3xl font-bold mb-4 text-white-safe">{title}</MotionH2>
          {subtitle && <MotionP className="text-neutral-300 max-w-3xl mx-auto">{subtitle}</MotionP>}
        </MotionDiv>
        
        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((category, catIndex) => (
            <MotionDiv 
              key={catIndex} 
              className="bg-primary border border-neutral-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" }}
            >
              <MotionH3 className="text-xl font-bold mb-6 text-white-safe">{category.name}</MotionH3>
              
              <MotionDiv className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <MotionDiv 
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 + catIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <MotionDiv className="flex items-center justify-between mb-2">
                      <MotionDiv className="flex items-center">
                        {skill.icon && (
                          <i className={`${skill.icon} mr-3 text-accent`}></i>
                        )}
                        <MotionSpan 
                          className="text-white-safe"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 + catIndex * 0.1 + 0.1 }}
                          viewport={{ once: true }}
                        >
                          {skill.name}
                        </MotionSpan>
                      </MotionDiv>
                      {skill.level !== undefined && (
                        <MotionSpan 
                          className="text-sm text-accent"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 + catIndex * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                        >
                          {skill.level}%
                        </MotionSpan>
                      )}
                    </MotionDiv>
                    
                    {skill.level !== undefined && (
                      <MotionDiv className="h-1.5 bg-neutral-700 rounded-full">
                        <MotionDiv 
                          className="h-full bg-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: skillIndex * 0.05 + catIndex * 0.1 + 0.3,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        ></MotionDiv>
                      </MotionDiv>
                    )}
                  </MotionDiv>
                ))}
              </MotionDiv>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 