import express, { Router, Request, Response } from 'express';
import studentDetailRouter from '../Router/studentDetailRouter';
const router: Router = express.Router();

router.use('/educationsystemdetail',studentDetailRouter)

export default router;