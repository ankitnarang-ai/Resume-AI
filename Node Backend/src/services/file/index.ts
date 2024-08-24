import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

export const sendFilePath = async (filePath: string) => {
  try {
    const formData = new FormData();
    formData.append('pdf_file', fs.createReadStream(filePath));

    const response = await axios.post('http://127.0.0.1:8000/generate-cover-letter', formData, {
      headers: formData.getHeaders(),
      timeout: 30000, // 30 seconds
    });

    console.log('response.data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending file path:', error);
    throw error;
  }
};
