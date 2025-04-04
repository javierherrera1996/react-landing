import React from 'react';
import { motion } from 'framer-motion';

interface RecommendationItem {
  title: string;
  description: string;
  url: string;
  icon: string;
}

interface RecommendationsSectionProps {
  title: string;
  items: RecommendationItem[];
}

const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({
  title,
  items
}) => {
  return (
    <section id="recomendaciones" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Artículos y recursos seleccionados para profundizar en AI Engineering
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="bg-primary p-6 rounded-lg border border-neutral-800 hover:border-accent transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                borderColor: "rgba(79, 209, 197, 0.5)"
              }}
            >
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-4 text-accent">
                <i className={`fas ${item.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-neutral-300">{item.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection; 