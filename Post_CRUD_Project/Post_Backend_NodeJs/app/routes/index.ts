
import express from 'express';
import postRoutes from './postroutes/postroutes';

const router = express.Router();

router.use('/mediaapp', postRoutes)

export default router