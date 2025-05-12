import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education' | 'certification';
}

interface ExperienceProps {
  items: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mb-6 animate-slide-in" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <Briefcase size={18} />
        </div>
        <h2 className="text-2xl font-semibold">Experience</h2>
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="group relative p-4 bg-gradient-to-br from-white to-cv-primary/5 rounded-lg border border-cv-primary/20 shadow-lg hover:shadow-xl transition-all duration-500 animate-glow cursor-pointer hover:from-cv-primary hover:to-cv-accent hover:text-white"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => toggleExpand(index)}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-cv-primary bg-opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-cv-accent bg-opacity-5 rounded-full translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-cv-primary group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                    <span className="flex items-center gap-1">
                      {item.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="group-hover:text-white" />
                      {item.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-white/90 transition-colors">
                    <Calendar size={14} className="group-hover:text-white" />
                    {item.period}
                  </div>
                  <div className="bg-white/20 p-1 rounded-full text-cv-primary group-hover:bg-white/30 group-hover:text-white transition-all">
                    {expandedIndex === index ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </div>
                </div>
              </div>
              
              <div className={`mt-2 transition-all duration-500 ${
                expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="bg-white/10 p-2 rounded-lg">
                  <ul className="space-y-1.5">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                        <ArrowRight size={14} className="mt-1 text-white flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
