// backend/src/index.ts
import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Handle file upload
app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Process the file (e.g., extract points from PDF)
  const filePath = req.file.path;
  const points = generatePointsFromPDF(filePath);

  res.json({ points });
});

// Function to process PDF and extract points
const generatePointsFromPDF = (pdfPath: string): any[] => {
  // Implement PDF processing and point extraction logic here
  return [];
};

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
