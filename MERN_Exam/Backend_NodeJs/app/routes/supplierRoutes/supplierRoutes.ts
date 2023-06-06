import { Router } from 'express';
import suppliercontroller from '../../controller/index';


const router = Router();

router.get('/getsupplier', suppliercontroller.suppliercontroller.getSupplierDetails);


export default router;