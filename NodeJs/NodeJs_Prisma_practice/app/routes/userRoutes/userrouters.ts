import { Router } from 'express';
import usercontroller from '../../controller/index'

const router = Router();

router.post('/postuser', usercontroller.usercontroller.postpostdetails);

router.get('/getuser', usercontroller.usercontroller.getuserdetails);

export default router;