import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const onUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try { 
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload response:', response.data);
      
      if (response.data.cover_letter) {
        navigate('/cover-letter', { state: { coverLetter: response.data.cover_letter } });
      } else {
        alert('Failed to generate cover letter. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='min-h-screen bg-gray-100 flex justify-center items-center'>
      <div className='container max-w-md mx-auto flex flex-col items-center justify-center space-y-6 bg-white shadow-md rounded-lg p-8'>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Resume</h2>
        <input 
          type="file" 
          accept=".pdf" 
          onChange={onFileChange}
          className="w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        <button 
          onClick={onUpload}
          disabled={isLoading}
          className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-2 px-4 rounded transition duration-300`}
        >
          {isLoading ? 'Processing...' : 'Upload and Generate CV'}
        </button>
      </div>
    </section>
  );
};

export default UploadForm;