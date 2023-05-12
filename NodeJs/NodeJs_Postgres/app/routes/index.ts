
import express from 'express';
import registrationRoutes from './registrationRoutes/registrationRoutes';
import loginRoutes from './loginRoutes/loginRouters';
import tokenverify from './tokenUserDetailRoutes/tokenUserDetailRoutes';
import userProfileRouter from './userProfileRoutes/userProfilerouters';
import postRouter from './postroutes/postroutes';
import commentsRouter from './commentsroutes/commentsroutes';
import categoryRouter from './categoryroutes/categoryroutes';



const router = express.Router();

router.use('/socialmedia', registrationRoutes)
router.use('/socialmedia', loginRoutes)
router.use('/socialmedia', tokenverify)
router.use('/socialmedia', userProfileRouter)
router.use('/socialmedia', postRouter)
router.use('/socialmedia', commentsRouter)
router.use('/socialmedia', categoryRouter)


export default router