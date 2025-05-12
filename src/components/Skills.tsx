
import React, { useState } from 'react';
import { Code, Star } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

interface SkillsProps {
  categories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section className="mb-8 animate-slide-in" style={{ animationDelay: '0.5s' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <Star size={20} />
        </div>
        <h2 className="text-2xl font-semibold">Skills</h2>
      </div>

      <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === index
                  ? 'bg-cv-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories[activeCategory].skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium group-hover:text-cv-primary transition-colors">
                  {skill.name}
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < skill.level ? "#E86A33" : "none"}
                      color={i < skill.level ? "#E86A33" : "#D1D5DB"}
                      className="transition-all"
                    />
                  ))}
                </div>
              </div>
              
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ '--progress-width': `${skill.level * 20}%` } as React.CSSProperties}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
