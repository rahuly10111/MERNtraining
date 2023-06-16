
import express from 'express';

import detailsRoutes from './detailsRoutes/detailsRoutes';

const router = express.Router();

router.use('/formvalidation', detailsRoutes);


export default router