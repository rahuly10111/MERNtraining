import express, { Router, Request, Response } from 'express';
import senderUserRouter from '../Router/senderuserRouter';
const router: Router = express.Router();
router.use('/messagedetail', senderUserRouter)

export default router;