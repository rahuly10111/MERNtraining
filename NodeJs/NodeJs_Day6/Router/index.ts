import express, { Router, Request, Response } from 'express';
import userDetailRouter from '../Router/userDetailRouter';
const router: Router = express.Router();
router.use('/userdetail',userDetailRouter)

export default router;