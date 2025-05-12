
import React from 'react';
import { User } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SummaryProps {
  text: string;
}

const Summary: React.FC<SummaryProps> = ({ text }) => {
  return (
    <section className="mb-8 animate-slide-in" style={{ animationDelay: '0.3s' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <User size={20} />
        </div>
        <h2 className="text-2xl font-semibold">Summary</h2>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="max-w-md">
              <p>This summary highlights your key qualifications and approach to design</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Summary;
