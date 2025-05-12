
import React from 'react';
import { Award, BookOpen } from 'lucide-react';

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
    <section className="mb-6 animate-slide-in" style={{ animationDelay: '0.7s' }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 bg-cv-primary text-white rounded-full">
          <Award size={18} />
        </div>
        <h2 className="text-2xl font-semibold">Certificates</h2>
      </div>

      <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-cv-primary/5 p-3 rounded-lg border border-cv-primary/20 shadow-sm hover:shadow-md transition-all duration-300 group animate-glow"
            >
              <div className="flex items-start gap-2">
                <div className="p-1.5 bg-cv-primary bg-opacity-20 rounded-full text-cv-primary group-hover:bg-cv-primary group-hover:text-white transition-all">
                  {index % 2 === 0 ? <Award size={15} /> : <BookOpen size={15} />}
                </div>
                <div>
                  <h3 className="text-sm font-semibold group-hover:text-cv-primary transition-colors">{cert.title}</h3>
                  <p className="text-xs text-gray-600">{cert.issuer}</p>
                  {cert.date && <p className="text-xs text-gray-500 mt-1">{cert.date}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
