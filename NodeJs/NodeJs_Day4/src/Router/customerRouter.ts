import express, { Router, Request, Response } from 'express';
import CustomerController from '../controller/customerController';

const router: Router = express.Router();

// GET request 
router.get('/getcustomer', (req: Request, res: Response) => {
    CustomerController.getCustomer(req, res);
});

// POST request 
router.post('/postcustomer', (req: Request, res: Response) => {
    CustomerController.postCustomer(req, res);
});

router.put('/putcustomer', (req: Request, res: Response) => {
    CustomerController.updateCustomer(req, res);
});

router.delete('/deletecustomer', (req: Request, res: Response) => {
    CustomerController.deleteCustomer(req, res);
});

export default router;
