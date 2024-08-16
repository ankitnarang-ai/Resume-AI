import { Request, Response } from 'express';
import { sendFilePath } from '../../services/file';
import { removeFile } from '../../utils/fs';
import { Multer } from 'multer';

// Define a custom interface that extends Express.Request
interface FileRequest extends Request {
  file?: Express.Multer.File;
}

export const handleFileUpload = async (req: FileRequest, res: Response) => {

  const file = req.file;
  if (!file) {
    console.log('No file uploaded');
    return res.status(400)
      .json({ error: 'No file uploaded', cover_letter: null });
  }

  try {
    const filePath = file.path;

    const cvData: any = await sendFilePath(filePath);

    res.json({ cover_letter: cvData.cover_letter });
  } catch (error) {
    console.error('Error:', error);
    res.status(500)
    .json({ error: 'An error occurred', cover_letter: null });
  } finally {
    if (file && file.path) {
      removeFile(file.path);
    }
  }
};