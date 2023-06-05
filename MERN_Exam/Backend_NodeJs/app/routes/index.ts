
import express from 'express';

import registrationRoutes from './registrationRoutes/registrationRoutes';
import loginRoutes from './loginRoutes/loginRouters'

const router = express.Router();

router.use('/giallygreen', registrationRoutes);
router.use('/giallygreen', loginRoutes)

export default router