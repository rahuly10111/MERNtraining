import { Router } from 'express';
import categorycontroller from '../../controller/index'
import tokenverify from '../../middleware/tokenValidation'

const router = Router();

router.post('/postcategory', tokenverify, categorycontroller.categorycontroller.postcategorydetails);

router.get('/getcategory', tokenverify, categorycontroller.categorycontroller.getcategorydetails);

router.delete('/deletecategory/:id', categorycontroller.categorycontroller.deletecategorydetails);

router.put('/putcategory/:id',tokenverify, categorycontroller.categorycontroller.putcategorydetails);

router.get('/sortingcategory/:sort', categorycontroller.categorycontroller.sortingSearchCategoryDetails);


router.get('/filtercategory', categorycontroller.categorycontroller.filtercategorydetails);


export default router;