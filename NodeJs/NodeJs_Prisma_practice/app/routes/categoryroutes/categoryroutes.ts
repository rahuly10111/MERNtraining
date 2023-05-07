import { Router } from 'express';
import categorycontroller from '../../controller/index'

const router = Router();

router.post('/postcategory', categorycontroller.categorycontroller.postcategorydetails);

router.get('/getcategory', categorycontroller.categorycontroller.getcategorydetails);

router.delete('/deletecategory/:id', categorycontroller.categorycontroller.deletecategorydetails);

router.put('/putcategory/:id', categorycontroller.categorycontroller.putcategorydetails);

router.get('/sortingcategory/:sort', categorycontroller.categorycontroller.sortingcategorydetails);

router.get('/searchcategory/:search', categorycontroller.categorycontroller.searchcategorydetails);

router.get('/filtercategory', categorycontroller.categorycontroller.filtercategorydetails);


export default router;