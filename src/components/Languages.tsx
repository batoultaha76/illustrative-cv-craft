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
    <section className="mb-4 animate-slide-in print:hidden" style={{ animationDelay: '0.8s' }}>
      <div className="flex items-center gap-2 mb-2">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <Globe size={18} />
        </div>
        <h2 className="text-2xl font-semibold">Languages</h2>
      </div>

      <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow">
        <div className="flex flex-wrap gap-2">
          {languages.map((lang, index) => (
            <div 
              key={index} 
              className="group px-3 py-2 bg-gradient-to-br from-cv-primary/20 to-cv-primary/5 rounded-full hover:from-cv-primary hover:to-cv-accent hover:text-white transition-all duration-500 cursor-pointer"
            >
              <span className="font-medium text-sm group-hover:scale-110 transition-transform duration-300">{lang.name}</span>
              {lang.level && <span className="ml-1 text-xs opacity-70 group-hover:opacity-90">{lang.level}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
