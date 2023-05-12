import { Router } from 'express';
import loginController from '../../controller/index';
import loginValidation from '../../middleware/loginValidation'

const router = Router();

router.post('/postlogin', loginValidation, loginController.loginController.postUserLoginDetails);


export default router;