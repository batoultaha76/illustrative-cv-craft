
import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';

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
            className={`timeline-item bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${expandedIndex === index ? 'border-cv-primary' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <div className="timeline-dot"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-cv-primary">{exp.title}</h3>
                <h4 className="text-gray-600">{exp.company}</h4>
              </div>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>
            
            <div className={`mt-3 transition-all duration-300 ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
