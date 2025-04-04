import React from 'react';

interface SolutionSectionProps {
  title: string;
  description: string;
  solutions: Array<{
    title: string;
    description: string;
    image?: string;
  }>;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({
  title,
  description,
  solutions
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl max-w-2xl mx-auto">{description}</p>
        </div>
        
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              {solution.image && (
                <div className="md:w-1/2">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              )}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-lg">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection; 