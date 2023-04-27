import express, { Router, Request, Response } from 'express';
import productController from '../Controller/productController';
const router: Router = express.Router();

router.get('/getproduct', (req: Request, res: Response) => {
    productController.getproduct(req, res)
})

router.post('/postproduct', (req: Request, res: Response) => {
    productController.postproduct(req, res)
})

export default router;