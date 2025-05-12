
import React from 'react';
import { Award } from 'lucide-react';

interface CertificateItem {
  title: string;
  issuer: string;
  date?: string;
  description?: string;
}

interface CertificatesProps {
  certificates: CertificateItem[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  return (
    <section className="mb-8 animate-slide-in" style={{ animationDelay: '0.7s' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <Award size={20} />
        </div>
        <h2 className="text-2xl font-semibold">Certificates</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-cv-primary transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-cv-secondary bg-opacity-20 rounded-full text-cv-primary group-hover:bg-cv-primary group-hover:text-white transition-all">
                <Award size={18} />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-cv-primary transition-colors">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
                {cert.date && <p className="text-xs text-gray-500 mt-1">{cert.date}</p>}
                {cert.description && <p className="text-xs text-gray-600 mt-2">{cert.description}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
