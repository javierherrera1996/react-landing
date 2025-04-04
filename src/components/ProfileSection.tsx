import React from 'react';
import { motion } from 'framer-motion';

interface ProfileSectionProps {
  title: string;
  content: string;
  portfolioLink?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  title,
  content,
  portfolioLink
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">{title}</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-primary">
            <p className="text-lg leading-relaxed text-gray-700">
              {content}
              {portfolioLink && (
                <span> Para una visión más completa de mi trabajo y proyectos, visita mi portfolio en{' '}
                  <a 
                    href={portfolioLink} 
                    className="text-primary font-medium hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {portfolioLink.replace('https://', '')}
                    <i className="fas fa-external-link-alt ml-1 text-sm"></i>
                  </a>
                </span>
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection; 