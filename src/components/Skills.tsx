
import React from 'react';
import { Star, Code, Database, Shield, Brain, Heart } from 'lucide-react';

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
        return <Code size={16} />;
      case 'soft skills':
        return <Heart size={16} />;
      case 'other skills':
        return <Brain size={16} />;
      case 'database skills':
        return <Database size={16} />;
      case 'security skills':
        return <Shield size={16} />;
      default:
        return <Star size={16} />;
    }
  };

  return (
    <section className="mb-6 animate-slide-in" style={{ animationDelay: '0.5s' }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <Star size={18} />
        </div>
        <h2 className="text-2xl font-semibold">Skills</h2>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 gap-3">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className={catIndex > 0 ? "mt-2" : ""}>
              <h3 className="text-sm font-semibold text-cv-primary mb-2 flex items-center gap-1">
                <span className="p-1 bg-cv-primary bg-opacity-10 rounded-md text-cv-primary">
                  {getCategoryIcon(category.title)}
                </span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white px-2 py-1 rounded-md border border-cv-primary border-opacity-20 hover:border-opacity-100 transition-all duration-300 flex items-center gap-1 group text-xs"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-cv-primary"></div>
                    <span className="text-gray-700 group-hover:text-cv-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
