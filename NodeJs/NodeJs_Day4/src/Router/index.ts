import express, { Router, Request, Response } from 'express';
import customerRouter from '../Router/customerRouter';
import invoiceRouter from '../Router/InvoiceRouter';
const router: Router = express.Router();
router.use('/customer', customerRouter);
router.use('/invoice', invoiceRouter);

export default router;