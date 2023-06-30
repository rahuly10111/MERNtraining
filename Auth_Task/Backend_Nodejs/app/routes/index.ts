
import express from 'express';

//import Routes_2 from './Routes_2/Routes_2';
import AuthRouter from './AuthRoutes/AuthRoutes'

const router = express.Router();


//! -- add the route name 

router.use('/app', AuthRouter);

//router.use('/--', Routes_2);

export default router