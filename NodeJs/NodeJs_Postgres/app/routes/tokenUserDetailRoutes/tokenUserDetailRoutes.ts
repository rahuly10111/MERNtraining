import { Router } from 'express';
import tokencontroller from '../../controller/index'
import tokenverify from '../../middleware/tokenValidation'


const router = Router();

router.get('/getuserdetail', tokenverify,tokencontroller.tokencontroller.tokengetdata);


export default router;