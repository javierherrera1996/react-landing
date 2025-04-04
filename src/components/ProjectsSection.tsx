import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectsSectionProps {
  title: string;
  subtitle?: string;
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title,
  subtitle,
  projects
}) => {
  // Variantes para animaciones de contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Variantes para animaciones de proyectos individuales
  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section id="proyectos" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white-safe">{title}</h2>
          {subtitle && <p className="text-neutral-300 max-w-3xl mx-auto">{subtitle}</p>}
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-primary-dark border border-neutral-800 rounded-lg overflow-hidden flex flex-col h-full"
              variants={projectVariants}
              whileHover="hover"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white-safe">{project.title}</h3>
                <p className="text-neutral-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-primary px-3 py-1 rounded-full text-sm text-accent border border-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <motion.a 
                      href={project.demoUrl} 
                      target="_blank"
                      rel="noreferrer"
                      className="bg-accent text-white px-4 py-2 rounded-md font-medium inline-flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-external-link-alt mr-2"></i> Demo
                    </motion.a>
                  )}
                  
                  {project.githubUrl && (
                    <motion.a 
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noreferrer"
                      className="border border-accent text-accent px-4 py-2 rounded-md font-medium inline-flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fab fa-github mr-2"></i> Código
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 