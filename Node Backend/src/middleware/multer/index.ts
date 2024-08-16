import multer from 'multer';
import path from 'path';
import fs from 'fs';

fs.mkdirSync('uploads', { recursive: true });

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, `${Date.now()}${path.extname(file.originalname)}`),
});

const upload = multer({ storage });

export default upload;
