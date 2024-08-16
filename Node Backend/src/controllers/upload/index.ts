import { Request, Response } from 'express';
import { sendFilePath } from '../../services/file';
import { removeFile } from '../../utils/fs';

export const handleFileUpload = async (req: Request, res: Response) => {
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
    removeFile(file.path);
  }
};
