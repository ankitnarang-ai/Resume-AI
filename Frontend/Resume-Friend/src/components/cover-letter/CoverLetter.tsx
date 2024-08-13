import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const CoverLetter = () => {
  const location = useLocation();
  const coverLetter = location.state?.coverLetter;

  console.log('Cover letter data:', coverLetter);

  const formatCoverLetter = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Cover Letter</h1>
          <div className="prose max-w-none">
            {coverLetter ? (
              <div className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
                {formatCoverLetter(coverLetter)}
              </div>
            ) : (
              <p className="text-center text-gray-600">No cover letter available. Please generate one first.</p>
            )}
          </div>
          <div className="mt-6 text-center">
            <Link to="/" className="text-blue-500 hover:text-blue-600">Back to Upload</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;