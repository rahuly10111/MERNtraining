import { Request, Response } from 'express';

class CustomerController {
    getCustomer(req: Request, res: Response): string {
        console.log("Get Products");
        res.json({
            Name: 'raj',
            Age: 21
        })
        return "Get Customer";
    }

    postCustomer(req: Request, res: Response): any {
        console.log("Post Customer")
        console.log(req.body);
        return req.body;
    }

    updateCustomer(req: Request, res: Response): any {
        console.log("Update Customer")
        console.log(req.body);
        return req.body;
    }

    deleteCustomer(req: Request, res: Response): any {
        console.log("Delete Customer")
        console.log(req.body);
        return req.body;
    }
}

export default new CustomerController();
