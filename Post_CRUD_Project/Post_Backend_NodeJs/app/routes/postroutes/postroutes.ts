import { Router } from 'express';
import postcontroller from '../../controller/index'
import tokenverify from '../../middleware/tokenValidation';

const router = Router();

router.post('/postpost', tokenverify, postcontroller.postcontroller.postpostdetails);

router.get('/getpost', tokenverify, postcontroller.postcontroller.getpostdetails);

router.get('/getpostbyid/:id', tokenverify, postcontroller.postcontroller.getpostdetailsid);

router.delete('/deletepost/:id', tokenverify, postcontroller.postcontroller.deletepostdetails);

router.put('/putpost/:id', tokenverify, postcontroller.postcontroller.putpostdetails);



export default router;