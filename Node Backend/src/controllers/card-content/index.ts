import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const getCardData = (req: Request, res: Response) => {
  try {
    const dataPath = path.join(__dirname, '../../content/card.json');
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    const parsedData = JSON.parse(jsonData);
    
    res.json(parsedData);
  } catch (error) {
    console.error('Error reading JSON data:', error);
    res.status(500)
      .json({ error: 'Failed to retrieve data' });
  }
};
