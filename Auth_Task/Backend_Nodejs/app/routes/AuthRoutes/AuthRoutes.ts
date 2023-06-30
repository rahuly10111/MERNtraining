import { Router } from 'express';
import controller from '../../controller/index';
import { passport, tokenVerify } from '../../middleware/LoginUser';
import accesstokenverify from '../../middleware/AccessTokenValidation';
import refreshtokenverify from '../../middleware/RefreshTokenValidation';


const router = Router();

const scope = [
    'https://www.googleapis.com/auth/userinfo.profile', // request access here
    'https://www.googleapis.com/auth/userinfo.email',
    //  'https://www.googleapis.com/auth/drive.metadata.readonly'

];

router.get('/login', passport.authenticate("google", {
    prompt: 'consent',
    scope: scope,

}));

router.get('/callback', tokenVerify, controller.controller1.abcd);

router.post('/reguser', controller.controller1.regUser);

router.post('/loginuser', controller.controller1.loginUser);

router.get('/getuser', accesstokenverify, controller.controller1.getUserById);

router.post('/gettoken', refreshtokenverify, controller.controller1.refreshToken)


//// router.get('/getstock', stockcontroller.stockcontroller.getStockDetails);


export default router;