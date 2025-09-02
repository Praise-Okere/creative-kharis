import React, { useState } from 'react';
import { Download, FileText, Award } from 'lucide-react';

export function Certificate() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download process
    setTimeout(() => {
      // In a real implementation, this would trigger the actual PDF download
      const link = document.createElement('a');
      link.href = '#'; // Replace with actual PDF URL
      link.download = 'Creative-Kharis-Certificate.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <section id="certificate" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-rose-500 to-purple-600 p-4 rounded-2xl">
              <Award className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certification</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            View and download our professional certification that validates 
            our expertise in baking, catering, and event decoration services.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-rose-500 to-purple-600 p-8 text-center">
            <FileText className="h-16 w-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Professional Certificate</h3>
            <p className="text-rose-100">
              Certified in Professional Baking, Catering & Event Decoration
            </p>
          </div>

          <div className="p-8">
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Certificate Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <span className="font-medium">Issued by:</span> Professional Culinary Institute
                </div>
                <div>
                  <span className="font-medium">Date:</span> January 2024
                </div>
                <div>
                  <span className="font-medium">Specializations:</span> Baking & Decoration
                </div>
                <div>
                  <span className="font-medium">Valid:</span> Current & Active
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="group bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className={`h-5 w-5 ${isDownloading ? 'animate-spin' : 'group-hover:translate-y-[-2px]'} transition-transform`} />
                {isDownloading ? 'Preparing Download...' : 'Download Certificate'}
              </button>
              <p className="text-gray-500 mt-4 text-sm">
                PDF format • Professional quality • Instantly downloadable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}