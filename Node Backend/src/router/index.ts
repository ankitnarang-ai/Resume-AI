import { Router } from 'express';
import { handleFileUpload, getCardData } from '../controllers';
import upload from '../middleware/multer/index';
import { signup } from '../controllers/signup';


const router = Router();

router.post('/upload', upload.single('file'), handleFileUpload);
router.post('/cardContent', getCardData);
router.post('/signup', signup);
// router.post('/login', logIn)

export default router;
