import { Router } from 'express';
import groupcountryrouter from '../../controller/index'

const router = Router();

router.post('/postgroupcountry', groupcountryrouter.groupcountrycontroller.postgroupcountrydetails);

router.get('/getgroupcountry', groupcountryrouter.groupcountrycontroller.getgroupcountrydetails);

router.delete('/deletegroupcountry/:id', groupcountryrouter.groupcountrycontroller.deletegroupcountrydetails);

//router.put('/putgroupcountry/:id', groupcountryrouter.groupcountrycontroller.putgroupcountrydetails);

router.get('/searchgroupcountry/:search', groupcountryrouter.groupcountrycontroller.searchgroupcountrydetails);

router.get('/sortgroupcountry/:sort', groupcountryrouter.groupcountrycontroller.sortinggroupcountrydetails);

router.get('/filtergroupcountry', groupcountryrouter.groupcountrycontroller.filtergroupcountrydetails)

export default router;