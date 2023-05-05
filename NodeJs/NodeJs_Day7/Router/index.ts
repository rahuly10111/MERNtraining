import express, { Router, Request, Response } from 'express';
import senderRouter from '../Router/senderRouter';
const router: Router = express.Router();
router.use('/messagedetail',senderRouter)

export default router;