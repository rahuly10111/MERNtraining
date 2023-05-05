
import express from 'express';
import postRoutes from './postroutes/postroutes';
import userRoutes from './userRoutes/userrouters'



const router = express.Router();

router.use('/socialmedia', postRoutes)
router.use('/socialmedia', userRoutes)




export default router