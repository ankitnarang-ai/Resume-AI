// src/components/UploadForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [upload, setUpload] = useState<boolean>(false)
  const navigate = useNavigate();
 
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const generateCv = async () => {
    if (upload) {
      navigate('/cover-letter')
    }
  }

  const onUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUpload(true)
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <section className=' bg-gray-300 flex justify-center'>
      <div className='container flex flex-col items-center justify-center space-y-4 bg-blue-300 text-black p-4 '>
        <input type="file" accept=".pdf" onChange={onFileChange} />
        <button onClick={onUpload}>Upload</button>
        <button onClick={generateCv}>Generate CV</button>
      </div>
    </section>
  );
};

export default UploadForm;
