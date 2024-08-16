import { Router } from 'express';
import { handleFileUpload, getCardData } from '../../controllers';
import upload from '../../middleware/multer/index';


const router = Router();

router.post('/upload', upload.single('file'), handleFileUpload);
router.post('/cardContent', getCardData)

export default router;
