import app from './app';
import { dbConnect } from './db';

const port = 5000;

dbConnect().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch(() => {
  console.log('DB Connection Failed❌')
})
