import { Router } from 'express';
import postcontroller from '../../controller/index'

const router = Router();

router.post('/postpost', postcontroller.postcontroller.postpostdetails);

router.get('/getpost', postcontroller.postcontroller.getpostdetails);


export default router;