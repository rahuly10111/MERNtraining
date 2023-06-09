import { Router } from 'express';
import suppliercontroller from '../../controller/index';


const router = Router();

router.get('/getsupplier', suppliercontroller.suppliercontroller.getSupplierDetails);

router.post('/postsupplier', suppliercontroller.suppliercontroller.suppliersDetail);

router.get('/getsupplierMonth/:month', suppliercontroller.suppliercontroller.getInvoicesMonthData);

router.get('/getheader', suppliercontroller.suppliercontroller.getHeader);


export default router;