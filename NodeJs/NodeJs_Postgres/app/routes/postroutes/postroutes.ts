import { Router } from 'express';
import postcontroller from '../../controller/index'
import tokenverify from '../../middleware/tokenValidation'
import postValidation from '../../middleware/postValidation'


const router = Router();

router.post('/postpost',postValidation,tokenverify,postcontroller.postcontroller.postpostdetails);

router.get('/getpost', tokenverify,postcontroller.postcontroller.getpostdetails);

router.delete('/deletepost/:id',postcontroller.postcontroller.deletepostdetails);

router.put('/putpost/:id',tokenverify,postcontroller.postcontroller.putpostdetails);

router.get('/sortsearchpost', postcontroller.postcontroller.sortingSearchPostDetails);

router.get('/filterpost', postcontroller.postcontroller.filterpostdetails);


export default router;