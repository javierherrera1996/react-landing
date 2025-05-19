import React from 'react';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  title: string;
  subtitle?: string;
  email: string;
  socialLinks?: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  subtitle,
  email,
  socialLinks = []
}) => {
  // Variantes para animaciones
  const formSectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const infoSectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({ 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5 + i * 0.1
      }
    }),
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <>
      <div id="contact" />
      <div id="contacto" />
      <section id="contact-section" className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white-safe">{title}</h2>
            {subtitle && <p className="text-neutral-300 max-w-3xl mx-auto">{subtitle}</p>}
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulario de contacto */}
            <motion.div 
              variants={formSectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-primary-dark border border-neutral-800 rounded-lg p-8 shadow-lg"
                variants={itemVariants}
              >
                <motion.h3 
                  className="text-xl font-bold mb-6 text-white-safe"
                  variants={itemVariants}
                >
                  Envíame un mensaje
                </motion.h3>
                
                {/* Formulario de Formspree */}
                <form action="https://formspree.io/f/xrbpyykg" method="POST">
                  <motion.div className="mb-4" variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-primary text-white-safe border border-neutral-700 rounded-md p-3 focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </motion.div>
                  
                  <motion.div className="mb-4" variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-primary text-white-safe border border-neutral-700 rounded-md p-3 focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </motion.div>
                  
                  <motion.div className="mb-6" variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-primary text-white-safe border border-neutral-700 rounded-md p-3 focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-accent text-white font-medium py-3 px-4 rounded-md"
                    whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enviar mensaje
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
            
            {/* Información de contacto */}
            <motion.div 
              variants={infoSectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-primary-dark border border-neutral-800 rounded-lg p-8 shadow-lg h-full flex flex-col"
                variants={itemVariants}
              >
                <motion.h3 
                  className="text-xl font-bold mb-6 text-white-safe"
                  variants={itemVariants}
                >
                  Información de contacto
                </motion.h3>
                
                <motion.div className="mb-8" variants={itemVariants}>
                  <p className="text-neutral-300 mb-2">
                    ¿Prefieres contactarme directamente? Puedes hacerlo a través de:
                  </p>
                  <a 
                    href={`mailto:${email}`} 
                    className="text-accent hover:underline inline-flex items-center"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    {email}
                  </a>
                </motion.div>
                
                {socialLinks.length > 0 && (
                  <motion.div className="mt-auto" variants={itemVariants}>
                    <h4 className="text-white-safe font-medium mb-4">También puedes encontrarme en:</h4>
                    <div className="flex gap-4">
                      {socialLinks.map((link, index) => (
                        <motion.a 
                          key={link.platform} 
                          href={link.url} 
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center border border-neutral-700 text-accent hover:border-accent transition-colors"
                          custom={index}
                          variants={socialIconVariants}
                          whileHover="hover"
                        >
                          <i className={`${link.icon} text-xl`}></i>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection; 