import { Router } from 'express';
import usercontroller from '../../controller/index'

const router = Router();

router.post('/postuser', usercontroller.usercontroller.postpostdetails);

router.get('/getuser', usercontroller.usercontroller.getuserdetails);

router.delete('/deleteuser/:id', usercontroller.usercontroller.deleteuserdetails);

router.put('/putuser/:id', usercontroller.usercontroller.putuserdetails);

router.get('/sortinguser/:sort', usercontroller.usercontroller.sortinguserdetails);

router.get('/searchuser/:search', usercontroller.usercontroller.searchuserdetails);

router.get('/filteruser', usercontroller.usercontroller.filteruserdetails);



export default router;