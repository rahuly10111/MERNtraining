
import express from 'express';
import postRoutes from './postroutes/postroutes';
import userRoutes from './userRoutes/userrouters';
import commentsRoutes from './commentsroutes/commentsroutes';
import categoryRoutes from './categoryroutes/categoryroutes'



const router = express.Router();

router.use('/socialmedia', postRoutes)
router.use('/socialmedia', userRoutes)
router.use('/socialmedia', commentsRoutes)
router.use('/socialmedia', categoryRoutes)




export default router