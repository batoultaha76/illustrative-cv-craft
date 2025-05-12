
import React from 'react';
import { User, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface HeaderProps {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ name, title, contact }) => {
  return (
    <header className="relative overflow-hidden mb-6">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cv-secondary rounded-full -translate-y-1/3 translate-x-1/3 opacity-10"></div>
      
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold text-cv-primary mb-1 animate-slide-in">
            {name}
          </h1>
          <h2 className="text-xl font-medium text-gray-600 mb-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            {title}
          </h2>
        </div>
        
        <div className="flex flex-col gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 group">
            <div className="p-2 bg-cv-secondary bg-opacity-20 rounded-full transition-all duration-300 group-hover:bg-cv-primary group-hover:text-white">
              <Mail size={16} />
            </div>
            <a href={`mailto:${contact.email}`} className="text-sm hover:text-cv-primary transition-colors">
              {contact.email}
            </a>
          </div>
          
          <div className="flex items-center gap-2 group">
            <div className="p-2 bg-cv-secondary bg-opacity-20 rounded-full transition-all duration-300 group-hover:bg-cv-primary group-hover:text-white">
              <Phone size={16} />
            </div>
            <a href={`tel:${contact.phone}`} className="text-sm hover:text-cv-primary transition-colors">
              {contact.phone}
            </a>
          </div>
          
          <div className="flex items-center gap-2 group">
            <div className="p-2 bg-cv-secondary bg-opacity-20 rounded-full transition-all duration-300 group-hover:bg-cv-primary group-hover:text-white">
              <MapPin size={16} />
            </div>
            <span className="text-sm">{contact.location}</span>
          </div>
          
          <div className="flex items-center gap-3 mt-1">
            {contact.linkedin && (
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-cv-secondary bg-opacity-20 rounded-full hover:bg-cv-primary hover:text-white transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
            )}
            
            {contact.github && (
              <a 
                href={contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-cv-secondary bg-opacity-20 rounded-full hover:bg-cv-primary hover:text-white transition-all duration-300"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="h-0.5 bg-gradient-to-r from-cv-primary to-cv-secondary mt-4"></div>
    </header>
  );
};

export default Header;
