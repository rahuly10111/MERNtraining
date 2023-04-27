import { Request, Response } from 'express';

class invoiceController {
    getInvoice(req: Request, res: Response): string {
        console.log("Get Invoice");
        return "Get Invoice";
    }

    postInvoice(req: Request, res: Response): any {
        console.log("Post Invoice")
        console.log(req.body);
        return req.body;
    }

    updateInvoice(req: Request, res: Response): any {
        console.log("Update Invoice")
        console.log(req.body);
        return req.body;
    }

    deleteInvoice(req: Request, res: Response): any {
        console.log("Delete Invoice")
        console.log(req.body);
        return req.body;
    }
}

export default new invoiceController();
