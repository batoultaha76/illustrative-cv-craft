
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
            className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-lg font-semibold text-cv-primary">{edu.degree}</h3>
                <h4 className="text-gray-600">{edu.institution}</h4>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                <Calendar size={14} />
                <span>{edu.period}</span>
              </div>
            </div>
            
            {edu.description && (
              <div className="mt-3">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {edu.description.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed">{item}</li>
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
