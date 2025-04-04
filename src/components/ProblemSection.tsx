import React from 'react';

interface ProblemSectionProps {
  title: string;
  description: string;
  painPoints: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({
  title,
  description,
  painPoints
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl max-w-2xl mx-auto">{description}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {point.icon && (
                <div className="text-primary text-3xl mb-4">
                  <i className={point.icon}></i>
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 