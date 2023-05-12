
import express from 'express';
import registrationRoutes from './registrationRoutes/registrationRoutes';
import loginRoutes from './loginRoutes/loginRouters';
import tokenverify from './tokenUserDetailRoutes/tokenUserDetailRoutes';


const router = express.Router();

router.use('/userauth', registrationRoutes)
router.use('/userauth', loginRoutes)
router.use('/userauth', tokenverify)






export default router