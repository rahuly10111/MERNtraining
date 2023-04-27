import express, { Router, Request, Response } from 'express';
import invoiceController from '../controller/InvoiceController';

const router: Router = express.Router();

// GET request 
router.get('/getinvoice', (req: Request, res: Response) => {
    invoiceController.getInvoice(req, res);
    console.log("asdsadf")
});

// POST request 
router.post('/postinvoice', (req: Request, res: Response) => {
    invoiceController.postInvoice(req, res);
});

router.put('/putinvoice', (req: Request, res: Response) => {
    invoiceController.updateInvoice(req, res);
});

router.delete('/deleteinvoice', (req: Request, res: Response) => {
    invoiceController.deleteInvoice(req, res);
});

export default router;
