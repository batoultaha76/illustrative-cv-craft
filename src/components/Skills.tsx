
import React from 'react';
import { Star, Code, Database, Shield } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    level?: number;
  }>;
}

interface SkillsProps {
  categories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ categories }) => {
  // Function to get the appropriate icon based on category title
  const getCategoryIcon = (title: string) => {
    switch(title.toLowerCase()) {
      case 'technical skills':
        return <Code size={18} />;
      case 'soft skills':
        return <Star size={18} />;
      case 'database skills':
        return <Database size={18} />;
      case 'security skills':
        return <Shield size={18} />;
      default:
        return <Star size={18} />;
    }
  };

  return (
    <section className="mb-8 animate-slide-in" style={{ animationDelay: '0.5s' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <Star size={20} />
        </div>
        <h2 className="text-2xl font-semibold">Skills</h2>
      </div>

      <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className={catIndex > 0 ? "mt-6" : ""}>
            <h3 className="text-lg font-semibold text-cv-primary mb-3 flex items-center gap-2">
              <span className="p-1.5 bg-cv-primary bg-opacity-10 rounded-md text-cv-primary">
                {getCategoryIcon(category.title)}
              </span>
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="bg-white p-3 rounded-lg border border-cv-primary border-opacity-20 hover:border-opacity-100 transition-all duration-300 flex items-center gap-2 group animate-glow"
                >
                  <div className="h-2 w-2 rounded-full bg-cv-primary"></div>
                  <span className="text-gray-700 group-hover:text-cv-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
