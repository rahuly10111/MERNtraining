
import express from 'express';
import postRoutes from './postroutes/postroutes';
import registrationRoutes from './registrationRoutes/registrationRoutes';
import loginRoutes from './loginRoutes/loginRouters'

const router = express.Router();

router.use('/mediaapp', postRoutes);
router.use('/mediaapp', registrationRoutes);
router.use('/mediaapp', loginRoutes)

export default router