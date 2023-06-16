import { Router } from 'express';
import detailsController from '../../controller/index';
import { upload} from '../../middleware/fileUpload'


const router = Router();

router.post('/postuserdetail', upload.single('file'), detailsController.detailsController.UserDetails);


export default router;