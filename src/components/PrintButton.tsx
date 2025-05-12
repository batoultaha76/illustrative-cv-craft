import React from 'react';
import { Download } from 'lucide-react';

const PrintButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/batoultaha-cv.pdf';
    link.download = 'batoultaha-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="no-print fixed bottom-4 right-4 bg-cv-primary text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:bg-cv-accent animate-glow text-sm"
    >
      <Download size={16} />
      Download CV
    </button>
  );
};

export default PrintButton;
