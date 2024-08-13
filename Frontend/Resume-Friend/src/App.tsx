// src/App.tsx
import React from 'react';
import UploadForm from './components/upload-form/UploadForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Upload PDF and Generate Points</h1>
      <UploadForm />
    </div>
  );
};

export default App;
