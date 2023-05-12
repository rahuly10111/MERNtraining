import { Router } from 'express';
import registrationController from '../../controller/index'
import registrationValidation from '../../middleware/registrationValidation'


const router = Router();

router.post('/postuserdetail', registrationValidation, registrationController.registrationController.postUserRegistrstionDetails);


export default router;