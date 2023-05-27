import { Router } from 'express';
import postcontroller from '../../controller/index'

const router = Router();

router.post('/postpost', postcontroller.postcontroller.postpostdetails);

router.get('/getpost', postcontroller.postcontroller.getpostdetails);

router.get('/getpostbyid/:id', postcontroller.postcontroller.getpostdetailsid);

router.delete('/deletepost/:id', postcontroller.postcontroller.deletepostdetails);

router.put('/putpost/:id', postcontroller.postcontroller.putpostdetails);



export default router;