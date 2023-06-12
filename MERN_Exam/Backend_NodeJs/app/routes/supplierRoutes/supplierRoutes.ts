import { Router } from 'express';
import suppliercontroller from '../../controller/index';


const router = Router();

router.get('/getsupplier', suppliercontroller.suppliercontroller.getSupplierDetails);

router.post('/postsupplier', suppliercontroller.suppliercontroller.suppliersDetail);

router.get('/getsupplierMonth/:month', suppliercontroller.suppliercontroller.getInvoicesMonthData);

router.get('/getheaderMonth/:month', suppliercontroller.suppliercontroller.getHeaderMonthData);


router.post('/postheader', suppliercontroller.suppliercontroller.postHeaderDetail);

router.put('/putheader', suppliercontroller.suppliercontroller.putHeaderDetail);


router.put('/putsupplier', suppliercontroller.suppliercontroller.putSupplierDetails);


router.get('/getheader', suppliercontroller.suppliercontroller.getHeader);

router.post('/postemail', suppliercontroller.suppliercontroller.postEmail);



export default router;