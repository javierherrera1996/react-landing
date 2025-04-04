import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Componentes dinámicos para evitar problemas de hidratación
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });
const MotionH2 = dynamic(() => Promise.resolve(motion.h2), { ssr: false });
const MotionH3 = dynamic(() => Promise.resolve(motion.h3), { ssr: false });
const MotionP = dynamic(() => Promise.resolve(motion.p), { ssr: false });
const MotionSpan = dynamic(() => Promise.resolve(motion.span), { ssr: false });

interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[] | string;
  technologies?: string[];
  logo?: string;
}

interface ExperienceSectionProps {
  title: string;
  subtitle?: string;
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ 
  title, 
  subtitle, 
  experiences 
}) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Renderizado para servidor (sin animaciones)
  if (!isMounted) {
    return (
      <section id="experiencia" className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white-safe">{title}</h2>
            {subtitle && <p className="text-neutral-300 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-accent pl-8 ml-4 space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[2.6rem] top-0 w-10 h-10 bg-primary border-2 border-accent rounded-full flex items-center justify-center">
                    {experience.logo ? (
                      <img src={experience.logo} alt={experience.company} className="w-6 h-6" />
                    ) : (
                      <i className={`${
                        experience.title.toLowerCase().includes('profesor') ? 'fas fa-star' :
                        experience.title.toLowerCase().includes('data scientist') ? 'fas fa-circle' :
                        experience.title.toLowerCase().includes('consultor') ? 'fas fa-square' :
                        'fas fa-diamond'
                      } text-accent`}></i>
                    )}
                  </div>
                  
                  <div className="bg-primary-dark p-6 rounded-lg border border-neutral-800">
                    <div className="mb-4">
                      <div className="flex justify-between items-start flex-wrap">
                        <h3 className="text-xl font-bold text-white-safe">{experience.title}</h3>
                        <span className="text-accent font-medium mt-1">{experience.period}</span>
                      </div>
                      <div className="text-lg text-white-safe mb-2">{experience.company}</div>
                      {experience.location && (
                        <div className="text-sm text-neutral-400 mb-4">
                          <i className="fas fa-map-marker-alt mr-2"></i>
                          {experience.location}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      {Array.isArray(experience.description) ? (
                        experience.description.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-neutral-300">
                            {item}
                          </p>
                        ))
                      ) : (
                        <p className="text-neutral-300">
                          {experience.description}
                        </p>
                      )}
                    </div>
                    
                    {experience.technologies && experience.technologies.length > 0 && (
                      <div className="mt-4">
                        <div className="text-sm font-medium text-white-safe mb-2">Tecnologías:</div>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="bg-primary px-3 py-1 rounded-full text-xs border border-neutral-700 text-neutral-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Renderizado para cliente (con animaciones)
  return (
    <section id="experiencia" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <MotionDiv 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MotionH2 className="text-3xl font-bold mb-4 text-white-safe">{title}</MotionH2>
          {subtitle && (
            <MotionP className="text-neutral-300 max-w-3xl mx-auto">{subtitle}</MotionP>
          )}
        </MotionDiv>
        
        <MotionDiv className="max-w-4xl mx-auto">
          <MotionDiv className="relative border-l-2 border-accent pl-8 ml-4 space-y-12">
            {experiences.map((experience, index) => (
              <MotionDiv 
                key={index} 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <MotionDiv 
                  className="absolute -left-[2.6rem] top-0 w-10 h-10 bg-primary border-2 border-accent rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    delay: index * 0.1 + 0.2 
                  }}
                  viewport={{ once: true }}
                >
                  {experience.logo ? (
                    <img src={experience.logo} alt={experience.company} className="w-6 h-6" />
                  ) : (
                    <i className={`${
                      experience.title.toLowerCase().includes('profesor') ? 'fas fa-star' :
                      experience.title.toLowerCase().includes('data scientist') ? 'fas fa-circle' :
                      experience.title.toLowerCase().includes('consultor') ? 'fas fa-square' :
                      'fas fa-diamond'
                    } text-accent`}></i>
                  )}
                </MotionDiv>
                
                <MotionDiv 
                  className="bg-primary-dark p-6 rounded-lg border border-neutral-800"
                  whileHover={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" }}
                >
                  <MotionDiv className="mb-4">
                    <MotionDiv className="flex justify-between items-start flex-wrap">
                      <MotionH3 
                        className="text-xl font-bold text-white-safe"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {experience.title}
                      </MotionH3>
                      <MotionSpan 
                        className="text-accent font-medium mt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        {experience.period}
                      </MotionSpan>
                    </MotionDiv>
                    <MotionDiv 
                      className="text-lg text-white-safe mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {experience.company}
                    </MotionDiv>
                    {experience.location && (
                      <MotionDiv 
                        className="text-sm text-neutral-400 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
                        viewport={{ once: true }}
                      >
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {experience.location}
                      </MotionDiv>
                    )}
                  </MotionDiv>
                  
                  <MotionDiv className="space-y-2">
                    {Array.isArray(experience.description) ? (
                      experience.description.map((item, itemIndex) => (
                        <MotionP 
                          key={itemIndex} 
                          className="text-neutral-300"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * itemIndex + index * 0.1 + 0.7 }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </MotionP>
                      ))
                    ) : (
                      <MotionP 
                        className="text-neutral-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                        viewport={{ once: true }}
                      >
                        {experience.description}
                      </MotionP>
                    )}
                  </MotionDiv>
                  
                  {experience.technologies && experience.technologies.length > 0 && (
                    <MotionDiv 
                      className="mt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.9 }}
                      viewport={{ once: true }}
                    >
                      <MotionDiv className="text-sm font-medium text-white-safe mb-2">
                        Tecnologías:
                      </MotionDiv>
                      <MotionDiv className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <MotionSpan 
                            key={techIndex}
                            className="bg-primary px-3 py-1 rounded-full text-xs border border-neutral-700 text-neutral-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.05 * techIndex + index * 0.1 + 1 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.05, 
                              backgroundColor: "rgba(79, 209, 197, 0.1)",
                              borderColor: "rgba(79, 209, 197, 0.5)"
                            }}
                          >
                            {tech}
                          </MotionSpan>
                        ))}
                      </MotionDiv>
                    </MotionDiv>
                  )}
                </MotionDiv>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ExperienceSection; 
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ExperienceSection; 