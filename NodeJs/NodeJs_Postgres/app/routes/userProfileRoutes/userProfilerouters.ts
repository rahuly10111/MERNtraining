import { Router } from 'express';
import userProfilecontroller from '../../controller/index'
import tokenverify from '../../middleware/tokenValidation'

const router = Router();

router.post('/postuserprofile', tokenverify, userProfilecontroller.userProfilecontroller.postuserdetails);

router.get('/getuserprofile', tokenverify, userProfilecontroller.userProfilecontroller.getuserdetails);

router.delete('/deleteuserprofile/:id', userProfilecontroller.userProfilecontroller.deleteuserdetails);

router.put('/putuserprofile/:id', userProfilecontroller.userProfilecontroller.putuserdetails);

router.get('/sortingsearchuserprofile', userProfilecontroller.userProfilecontroller.sortingSearchUserDetails);

router.get('/filteruserprofile', userProfilecontroller.userProfilecontroller.filteruserdetails);


export default router;