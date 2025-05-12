
import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mb-8 animate-slide-in" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <Briefcase size={20} />
        </div>
        <h2 className="text-2xl font-semibold">Experience</h2>
      </div>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`bg-white p-5 rounded-lg border shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
              expandedIndex === index ? 'border-cv-primary animate-glow' : 'border-gray-100'
            }`}
            onClick={() => toggleExpand(index)}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-cv-primary">{exp.title}</h3>
                <h4 className="text-gray-600">{exp.company}</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white font-medium bg-cv-primary px-3 py-1 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </span>
                <div className="bg-cv-primary bg-opacity-10 p-1.5 rounded-full text-cv-primary">
                  {expandedIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>
            </div>
            
            <div className={`mt-3 transition-all duration-500 ${
              expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <div className="bg-cv-primary bg-opacity-5 p-3 rounded-lg">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-cv-primary mt-1.5 mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
