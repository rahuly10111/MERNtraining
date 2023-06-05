import { Router } from 'express';
import registrationController from '../../controller/index'
import tokenverify from '../../middleware/tokenValidation';

const router = Router();

router.post('/postuserdetail', registrationController.registrationController.UserRegistrstionDetails);

router.get('/getuserdetail', tokenverify, registrationController.registrationController.getIdUserRegistrstionDetails);

router.put('/putuserdetail/:id', tokenverify, registrationController.registrationController.putUserRegistrstionDetails);

router.get('/viewuserdetail/:id', tokenverify, registrationController.registrationController.getIdUserDetails);


export default router;