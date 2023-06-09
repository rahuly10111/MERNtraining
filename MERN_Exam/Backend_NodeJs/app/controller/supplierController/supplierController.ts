import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { supplierdetails } from "../../model/supplierInterface";
import supplierrepository from '../../repository/index'



let response = new responseModel;
class suppliercontroller {
    async getSupplierDetails(req: Request, res: Response) {

        try {
            const supplierresponse = await supplierrepository.supplierrepository.getSupplier();
            response.status = 200
            response.message = " supplier  data Get success "
            response.data = supplierresponse
            response.token = null
        } catch (error) {
            console.log("resqw", error);
            response.status = 400
            response.message = error as string
            response.data = null
            response.token = null
        }
        res.send(response);
    }

    async suppliersDetail(req: Request, res: Response) {

        try {
            const d = req.body;
            let invoicesData: any = [];
            d?.map((data: any, index: any) => {
                console.log("dfdsf", data)
                invoicesData.push({
                    // "id": data?.invoices.id,
                    "supplierId": data.id,
                    "col_1": data?.invoices.col_1,
                    "col_2": data?.invoices.col_2,
                    "col_3": data?.invoices.col_3,
                    "col_4": data?.invoices.col_4,
                    "col_5": data?.invoices.col_5,
                    "col_6": data?.invoices.col_6,
                    "col_7": parseInt(data?.invoices.col_1) +
                        parseInt(data?.invoices.col_2) +
                        parseInt(data?.invoices.col_3) +
                        parseInt(data?.invoices.col_4) +
                        parseInt(data?.invoices.col_5) +
                        parseInt(data?.invoices.col_6),
                    "col_8": data?.invoices.col_8,
                    "col_9": data?.invoices.col_9,
                    "col_10": data?.invoices.col_10,
                    "update_date": data?.invoices.update_date
                })

            })

            console.log("first", invoicesData)
            // var car = { data }
            // console.log("aa", car)

            // {
            //     invoicesData?.map((data: any, index: any) => (
            //         console.log("lkjlk", data)
            //     ))
            // }

            const supplierresponse = await supplierrepository.supplierrepository.postSupplier(invoicesData);
            response.status = 200
            response.message = " User  data Added success "
            response.data = supplierresponse
            response.token = null

        } catch (error) {
            console.log("resqw", error);
            response.status = 400
            response.message = error as string
            response.data = null
            response.token = null
        }
        res.send(response);
    }




    async getInvoicesMonthData(req: Request, res: Response) {

        try {
            const invoiceMonth = req.params.month;
            const supplierresponse = await supplierrepository.supplierrepository.getInvoicesMonth(invoiceMonth);
            response.status = 200
            response.message = " Post  data Get success "
            response.data = supplierresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }
















    async getHeader(req: Request, res: Response) {

        try {
            const headerresponse = await supplierrepository.supplierrepository.getHeader();
            response.status = 200
            response.message = " header  data Get success "
            response.data = headerresponse
            response.token = null
        } catch (error) {
            console.log("resqw", error);
            response.status = 400
            response.message = error as string
            response.data = null
            response.token = null
        }
        res.send(response);
    }




}

export default new suppliercontroller();