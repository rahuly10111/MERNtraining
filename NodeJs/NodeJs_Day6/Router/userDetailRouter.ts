import express, { Router, Request, Response } from 'express';
import userDetailController from '../controller/userDetailController';
const router: Router = express.Router();

router.get('/getuserdetail', userDetailController.getuserdetail)

router.post('/postuserdetail', userDetailController.postuserdetail)

router.put('/putuserdetail/:id', userDetailController.putuserdetail)

router.delete('/deleteuserdetail/:id', userDetailController.deleteuserdetail)

export default router;