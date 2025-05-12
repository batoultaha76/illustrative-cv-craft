import React from 'react';
import { Link } from 'lucide-react';

const ShareLink = () => {
  // Replace this URL with your actual deployed URL when you deploy the site
  const cvUrl = 'http://localhost:8080'; // Change this to your actual URL when deployed

  const handleCopyLink = () => {
    navigator.clipboard.writeText(cvUrl);
    // You could add a toast notification here to show the link was copied
  };

  return (
    <div className="fixed bottom-4 left-4 flex gap-2">
      <a
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cv-primary text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:bg-cv-accent animate-glow text-sm"
      >
        <Link size={16} />
        View CV Online
      </a>
      <button
        onClick={handleCopyLink}
        className="bg-cv-secondary text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:bg-cv-accent animate-glow text-sm"
      >
        Copy Link
      </button>
    </div>
  );
};

export default ShareLink; 