import fs from 'fs';

export const removeFile = (filePath: string) => {
  if (filePath) {
    fs.unlinkSync(filePath);
  }
};
