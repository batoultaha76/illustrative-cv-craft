import React from 'react';
import { User, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface HeaderProps {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    website?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ name, title, contact }) => {
  return (
    <header className="relative overflow-hidden mb-3">
      <div className="absolute top-0 right-0 w-40 h-40 bg-cv-secondary rounded-full -translate-y-1/3 translate-x-1/3 opacity-10"></div>
      
      <div className="flex flex-col md:flex-row items-start justify-between gap-2">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-cv-primary mb-0 animate-slide-in">
            {name}
          </h1>
          <h2 className="text-base font-medium text-gray-600 mb-2 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            {title}
          </h2>
        </div>
        
        <div className="flex flex-col gap-1 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-1 group">
            <div className="p-1 bg-cv-primary bg-opacity-20 rounded-full transition-all duration-300 group-hover:bg-cv-primary group-hover:text-white animate-glow">
              <Mail size={12} />
            </div>
            <a href={`mailto:${contact.email}`} className="text-xs hover:text-cv-primary transition-colors">
              {contact.email}
            </a>
          </div>
          
          <div className="flex items-center gap-1 group">
            <div className="p-1 bg-cv-primary bg-opacity-20 rounded-full transition-all duration-300 group-hover:bg-cv-primary group-hover:text-white animate-glow">
              <Phone size={12} />
            </div>
            <a href={`tel:${contact.phone}`} className="text-xs hover:text-cv-primary transition-colors">
              {contact.phone}
            </a>
          </div>
          
          <div className="flex items-center gap-1 group">
            <div className="p-1 bg-cv-primary bg-opacity-20 rounded-full transition-all duration-300 group-hover:bg-cv-primary group-hover:text-white animate-glow">
              <MapPin size={12} />
            </div>
            <span className="text-xs">{contact.location}</span>
          </div>
          
          <div className="flex items-center gap-1.5 mt-0">
            {contact.linkedin && (
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1 bg-cv-primary bg-opacity-20 rounded-full hover:bg-cv-primary hover:text-white transition-all duration-300 animate-glow print:no-underline"
              >
                <Linkedin size={12} />
              </a>
            )}
            
            {contact.website && (
              <a 
                href={contact.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1 bg-cv-primary bg-opacity-20 rounded-full hover:bg-cv-primary hover:text-white transition-all duration-300 animate-glow print:no-underline"
              >
                <Globe size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="h-0.5 bg-gradient-to-r from-cv-primary to-cv-accent mt-2"></div>
    </header>
  );
};

export default Header;
