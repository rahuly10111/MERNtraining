
import express from 'express';

import Routes_1 from './Routes_2/Routes_2';
import Routes_2 from './Routes_1/Routes_1'

const router = express.Router();


//! -- add the route name 

router.use('/--', Routes_1);

router.use('/--', Routes_2);

export default router