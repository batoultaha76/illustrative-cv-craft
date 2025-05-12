
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
    <section className="mb-6 animate-slide-in" style={{ animationDelay: '0.6s' }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <GraduationCap size={18} />
        </div>
        <h2 className="text-2xl font-semibold">Education</h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {educations.map((edu, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-md font-semibold text-cv-primary">{edu.degree}</h3>
                <h4 className="text-sm text-gray-600">{edu.institution}</h4>
              </div>
              <div className="flex items-center gap-1 text-xs text-white font-medium bg-cv-primary px-2 py-1 rounded-full mt-1 md:mt-0">
                <Calendar size={12} />
                <span>{edu.period}</span>
              </div>
            </div>
            
            {edu.description && (
              <div className="mt-2 bg-cv-primary bg-opacity-5 p-2 rounded-lg">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {edu.description.map((item, i) => (
                    <li key={i} className="text-xs leading-tight flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-cv-primary mr-1.5"></span>
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
