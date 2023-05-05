
import express from 'express';
import countryRoutes from './countryroutes/countryroutes';
import countriesgroupRoutes from './countriesgroupRoutes/countriesgrouprouters'
import majorcountriesgroupRoutes from './majorcountriesgrouprouter/majorcountriesgrouprouter'


const router = express.Router();

router.use('/globalorganizations', countryRoutes)
router.use('/globalorganizations', countriesgroupRoutes)
router.use('/globalorganizations', majorcountriesgroupRoutes)



export default router