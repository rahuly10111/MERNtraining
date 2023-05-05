import { Router } from 'express';
import majorcountriesgroupcontroller from '../../controller/index'

const router = Router();

router.post('/postmajorcountry', majorcountriesgroupcontroller.majorcountriesgroupcontroller.postgroupcountrydetails);

router.get('/getmajorcountry', majorcountriesgroupcontroller.majorcountriesgroupcontroller.getgroupcountrydetails);



export default router;