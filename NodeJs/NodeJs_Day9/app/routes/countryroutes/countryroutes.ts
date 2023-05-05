import { Router } from 'express';
import countrydetailController from '../../controller/index'

const router = Router();

router.post('/postcountry', countrydetailController.countryController.postcountrydetails);

router.get('/getcountry', countrydetailController.countryController.getcountrydetails);

router.delete('/deletecountry/:id', countrydetailController.countryController.deletecountrydetails);

router.put('/putcountry/:id', countrydetailController.countryController.putcountrydetails);

router.get('/sortcountry/:sort', countrydetailController.countryController.sortingcountrydetails)

router.get('/searchcountry/:search', countrydetailController.countryController.searchcountrydetails)

router.get('/filtercountry', countrydetailController.countryController.filtercountrydetails)

export default router;