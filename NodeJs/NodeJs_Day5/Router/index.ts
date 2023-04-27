import express, { Router, Request, Response } from 'express';
import productRouter from '../Router/productRouter';
const router: Router = express.Router();
router.use('/product',productRouter)

export default router;