import { Router } from 'express';
import postcontroller from '../../controller/index'

const router = Router();

router.post('/postpost', postcontroller.postcontroller.postpostdetails);

router.get('/getpost', postcontroller.postcontroller.getpostdetails);

router.delete('/deletepost/:id', postcontroller.postcontroller.deletepostdetails);

router.put('/putpost/:id', postcontroller.postcontroller.putpostdetails);

router.get('/sortingpost/:sort', postcontroller.postcontroller.sortingpostdetails);

router.get('/searchpost/:search', postcontroller.postcontroller.searchpostdetails);

router.get('/filterpost', postcontroller.postcontroller.filterpostdetails);


export default router;