
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string[];
}

interface EducationProps {
  educations: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educations }) => {
  return (
    <section className="mb-8 animate-slide-in" style={{ animationDelay: '0.6s' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <GraduationCap size={20} />
        </div>
        <h2 className="text-2xl font-semibold">Education</h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {educations.map((edu, index) => (
          <div 
            key={index} 
            className="bg-white p-5 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-lg font-semibold text-cv-primary">{edu.degree}</h3>
                <h4 className="text-gray-600">{edu.institution}</h4>
              </div>
              <div className="flex items-center gap-2 text-sm text-white font-medium bg-cv-primary px-3 py-1 rounded-full mt-2 md:mt-0">
                <Calendar size={14} />
                <span>{edu.period}</span>
              </div>
            </div>
            
            {edu.description && (
              <div className="mt-3 bg-cv-primary bg-opacity-5 p-3 rounded-lg">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {edu.description.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-cv-primary mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
