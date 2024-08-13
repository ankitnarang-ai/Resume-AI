import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => cb(null, `${Date.now()}${path.extname(file.originalname)}`),
  }),
});

// Create uploads directory if it doesn't exist
fs.mkdirSync('uploads', { recursive: true });

// Handle file upload and processing
app.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
  console.log('Received upload request');
  const file = req.file;
  if (!file) {
    console.log('No file uploaded');
    return res.status(400).json({ error: 'No file uploaded', cover_letter: null });
  }

  try {
    const filePath = file.path;
    console.log('File path:', filePath);

    const cvData: any = await sendFilePath(filePath);
    console.log('Received CV data:', cvData);

    res.json({ cover_letter: cvData.cover_letter });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred', cover_letter: null });
  } finally {
    // Clean up the uploaded file
    if (file && file.path) {
      fs.unlinkSync(file.path);
    }
  }
});

// Send file path to internal API
const sendFilePath = async (filePath: string) => {
  try {
    const formData = new FormData();
    formData.append('pdf_file', fs.createReadStream(filePath));

    const response = await axios.post('http://192.168.1.45:8000/generate-cover-letter', formData, {
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});