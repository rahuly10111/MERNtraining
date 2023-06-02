import { Router } from 'express';
import loginController from '../../controller/index';


const router = Router();

router.post('/postlogin', loginController.loginController.postUserLoginDetails);


export default router;