import express, { Router } from 'express';
import studentDetailController from '../controller/studentDetailController';
const router: Router = express.Router();

router.post('/poststudentdetail', studentDetailController.poststudentdetail)

router.get('/getstudentdetail', studentDetailController.getstudentdetails)

router.delete('/deletestudentdetail/:id', studentDetailController.deletestudentdetails)

router.put('/putstudentdetail/:id',studentDetailController.updatestudentdetails)

export default router;