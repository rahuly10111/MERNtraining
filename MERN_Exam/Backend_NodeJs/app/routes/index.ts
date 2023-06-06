
import express from 'express';

import registrationRoutes from './registrationRoutes/registrationRoutes';
import loginRoutes from './loginRoutes/loginRouters'
import supplierRoutes from './supplierRoutes/supplierRoutes'

const router = express.Router();

router.use('/giallygreen', registrationRoutes);
router.use('/giallygreen', loginRoutes)
router.use('/giallygreen', supplierRoutes)

export default router