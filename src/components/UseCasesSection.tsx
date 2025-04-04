import React from 'react';
import { motion } from 'framer-motion';

interface UseCase {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

interface UseCasesSectionProps {
  title: string;
  subtitle?: string;
  useCases: UseCase[];
}

const UseCasesSection: React.FC<UseCasesSectionProps> = ({
  title,
  subtitle,
  useCases
}) => {
  return (
    <section id="use-cases" className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white-safe">{title}</h2>
          {subtitle && <p className="text-xl max-w-2xl mx-auto text-gray-300">{subtitle}</p>}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              className="bg-dark-lighter rounded-lg p-6 border border-primary hover:border-accent transition-colors shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 text-3xl text-accent">
                <i className={`fas ${useCase.icon}`}></i>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white-safe">{useCase.title}</h3>
              <p className="text-gray-300 mb-5">{useCase.description}</p>
              
              <h4 className="text-accent text-sm font-semibold uppercase mb-3">Beneficios</h4>
              <ul className="space-y-2">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start text-gray-300">
                    <span className="text-accent mr-2 mt-1"><i className="fas fa-check-circle"></i></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection; 