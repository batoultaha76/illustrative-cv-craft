
import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageItem {
  name: string;
  level?: string;
}

interface LanguagesProps {
  languages: LanguageItem[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <section className="mb-8 animate-slide-in" style={{ animationDelay: '0.8s' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <Globe size={20} />
        </div>
        <h2 className="text-2xl font-semibold">Languages</h2>
      </div>

      <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow">
        <div className="flex flex-wrap gap-3">
          {languages.map((lang, index) => (
            <div 
              key={index} 
              className="px-5 py-3 bg-gradient-to-br from-cv-primary/20 to-cv-primary/5 rounded-full hover:from-cv-primary hover:to-cv-accent hover:text-white transition-all duration-500"
            >
              <span className="font-medium">{lang.name}</span>
              {lang.level && <span className="ml-1 text-sm opacity-70">{lang.level}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
