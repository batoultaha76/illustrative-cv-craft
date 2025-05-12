import React from 'react';
import { User } from 'lucide-react';

interface SummaryProps {
  text: string;
}

const Summary: React.FC<SummaryProps> = ({ text }) => {
  return (
    <section className="mb-5 animate-slide-in" style={{ animationDelay: '0.3s' }}>
      <div className="flex items-center gap-2 mb-2">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <User size={18} />
        </div>
        <h2 className="text-2xl font-semibold">Summary</h2>
      </div>
      
      <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow">
        <p className="text-sm text-gray-700 leading-snug">{text}</p>
      </div>
    </section>
  );
};

export default Summary;
