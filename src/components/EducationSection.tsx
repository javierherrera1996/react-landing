import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Componentes dinámicos para evitar problemas de hidratación
const MotionDiv = dynamic(() => Promise.resolve(motion.div), { ssr: false });
const MotionH2 = dynamic(() => Promise.resolve(motion.h2), { ssr: false });
const MotionP = dynamic(() => Promise.resolve(motion.p), { ssr: false });

// Información de logos predeterminados para instituciones comunes
const defaultLogos: Record<string, string> = {
  "MIT": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png",
  "Stanford": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png",
  "Harvard": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1200px-Harvard_University_logo.svg.png",
  "Coursera": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
  "Udemy": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
  "edX": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/EdX.svg/1200px-EdX.svg.png",
  "DeepLearning.AI": "https://deeplearning.ai/static/favicon-32x32.png",
  "Google": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
  "Microsoft": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
  "AWS": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
  "Udacity": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Udacity_logo.svg/1200px-Udacity_logo.svg.png",
  "Platzi": "https://static.platzi.com/media/platzi-isotipo@2x.png",
  "OpenAI": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png",
  "Universidad Politécnica": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Universitat_Polit%C3%A8cnica_de_Val%C3%A8ncia.svg/1200px-Universitat_Polit%C3%A8cnica_de_Val%C3%A8ncia.svg.png",
  "Universidad Complutense": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Escudo_de_la_Universidad_Complutense_de_Madrid.svg/1200px-Escudo_de_la_Universidad_Complutense_de_Madrid.svg.png",
  "UNED": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Logo_UNED.svg/1200px-Logo_UNED.svg.png",
  "FreeCodeCamp": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/800px-FreeCodeCamp_logo.png",
  "IBM": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png",
  "LinkedIn Learning": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png",
  "HuggingFace": "https://huggingface.co/front/assets/huggingface_logo.svg"
};

// Función para obtener un logo basado en el nombre de la institución o usar un logo por defecto
const getLogoForInstitution = (institution: string, customLogo?: string): string => {
  if (customLogo) return customLogo;
  
  // Buscar coincidencias parciales
  for (const [key, logo] of Object.entries(defaultLogos)) {
    if (institution.toLowerCase().includes(key.toLowerCase())) {
      return logo;
    }
  }
  
  // Si no hay coincidencia, usar un logo genérico para educación
  return "https://cdn-icons-png.flaticon.com/512/2232/2232688.png";
};

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description?: string;
  logo?: string;
}

interface EducationSectionProps {
  title: string;
  subtitle?: string;
  items: EducationItem[];
}

const EducationSection: React.FC<EducationSectionProps> = ({
  title,
  subtitle,
  items
}) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Renderizado para servidor (sin animaciones)
  if (!isMounted) {
    return (
      <section id="educacion" className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
            {subtitle && <p className="text-xl text-neutral-300 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="bg-primary-dark p-6 rounded-lg border border-neutral-800 flex flex-col h-full"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 mr-4 flex-shrink-0 bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={getLogoForInstitution(item.institution, item.logo)} 
                      alt={item.institution} 
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-accent">{item.institution}</p>
                  </div>
                </div>
                
                <div className="text-neutral-300 text-sm mt-2 mb-4">
                  <span className="bg-primary px-3 py-1 rounded-full inline-block">
                    {item.period}
                  </span>
                </div>
                
                {item.description && (
                  <p className="text-neutral-300 mt-auto">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  // Renderizado para cliente (con animaciones)
  return (
    <section id="educacion" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <MotionDiv 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MotionH2 
            className="text-3xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </MotionH2>
          {subtitle && (
            <MotionP 
              className="text-xl text-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </MotionP>
          )}
        </MotionDiv>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <MotionDiv 
              key={index} 
              className="bg-primary-dark p-6 rounded-lg border border-neutral-800 flex flex-col h-full transform transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                borderColor: "rgba(79, 209, 197, 0.3)"
              }}
            >
              <div className="flex items-start mb-4">
                <MotionDiv 
                  className="w-12 h-12 mr-4 flex-shrink-0 bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    delay: index * 0.1 + 0.2
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={getLogoForInstitution(item.institution, item.logo)} 
                    alt={item.institution} 
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                </MotionDiv>
                <div>
                  <MotionH2 
                    className="text-xl font-bold text-white mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </MotionH2>
                  <MotionP 
                    className="text-accent font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {item.institution}
                  </MotionP>
                </div>
              </div>
              
              <MotionDiv 
                className="text-neutral-200 text-sm mt-2 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                <span className="bg-primary px-3 py-1 rounded-full inline-block border border-neutral-700">
                  {item.period}
                </span>
              </MotionDiv>
              
              {item.description && (
                <MotionP 
                  className="text-neutral-300 mt-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </MotionP>
              )}
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 