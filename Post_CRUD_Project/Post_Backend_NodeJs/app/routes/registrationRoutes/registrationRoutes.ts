import { Router } from 'express';
import registrationController from '../../controller/index'
import tokenverify from '../../middleware/tokenValidation';

const router = Router();

router.post('/postuserdetail', registrationController.registrationController.postUserRegistrstionDetails);

router.get('/getalluserdetail', tokenverify, registrationController.registrationController.getUserRegistrstionDetails);

router.get('/getuserdetail', tokenverify, registrationController.registrationController.getIdUserRegistrstionDetails);

router.get('/viewuserdetail/:id', tokenverify, registrationController.registrationController.getIdUserDetails);


router.delete('/deleteuserdetail/:id', tokenverify, registrationController.registrationController.deleteUserRegistrstionDetails);

router.put('/putuserdetail/:id', tokenverify, registrationController.registrationController.putUserRegistrstionDetails);


export default router;