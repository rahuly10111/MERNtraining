import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { supplierdetails } from "../../model/supplierInterface";
import supplierrepository from '../../repository/index'
import nodemailer from 'nodemailer';



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
            const data = req.body;

            let invoicesData: any = [];
            data?.map((data: any, index: any) => {

                invoicesData.push({
                    "supplierId": data?.id,
                    "id": data?.invoices[0]?.id,
                    "col_1": data?.invoices[0]?.col_1,
                    "col_2": data?.invoices[0]?.col_2,
                    "col_3": data?.invoices[0]?.col_3,
                    "col_4": data?.invoices[0]?.col_4,
                    "col_5": data?.invoices[0]?.col_5,
                    "col_6": data?.invoices[0]?.col_6,
                    "col_7": parseInt(data?.invoices[0]?.col_1) +
                        parseInt(data?.invoices[0]?.col_2) +
                        parseInt(data?.invoices[0]?.col_3) +
                        parseInt(data?.invoices[0]?.col_4) +
                        parseInt(data?.invoices[0]?.col_5) +
                        parseInt(data?.invoices[0]?.col_6),
                    "col_8": data?.invoices[0]?.col_8,
                    "col_9": data?.invoices[0]?.col_9,
                    "col_10": data?.invoices[0]?.col_10,
                    "update_date": data?.invoices[0]?.update_date
                })

            })


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
            response.message = " Supplier  data Get success "
            response.data = supplierresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }



    async putSupplierDetails(req: Request, res: Response) {


        try {

            const data = req.body;

            let invoicesData: any = [];
            data?.map((data: any, index: any) => {

                invoicesData.push({
                    "supplierId": data?.id,
                    "id": data?.invoices[0]?.id,
                    "col_1": data?.invoices[0]?.col_1,
                    "col_2": data?.invoices[0]?.col_2,
                    "col_3": data?.invoices[0]?.col_3,
                    "col_4": data?.invoices[0]?.col_4,
                    "col_5": data?.invoices[0]?.col_5,
                    "col_6": data?.invoices[0]?.col_6,
                    "col_7": parseInt(data?.invoices[0]?.col_1) +
                        parseInt(data?.invoices[0]?.col_2) +
                        parseInt(data?.invoices[0]?.col_3) +
                        parseInt(data?.invoices[0]?.col_4) +
                        parseInt(data?.invoices[0]?.col_5) +
                        parseInt(data?.invoices[0]?.col_6),
                    "col_8": data?.invoices[0]?.col_8,
                    "col_9": data?.invoices[0]?.col_9,
                    "col_10": data?.invoices[0]?.col_10,
                    "update_date": data?.invoices[0]?.update_date
                })

            })

            const supplierresponse = await supplierrepository.supplierrepository.putSupplier(invoicesData);
            response.status = 200
            response.message = " Supplier  data Updated success "
            response.data = supplierresponse
            response.token = null
            console.log("efdfvfirst", supplierresponse)
        } catch (error) {
            console.log("resqw", error);
            response.status = 400
            response.message = error as string
            response.data = null
            response.token = null
        }
        res.send(response);
    }


    async getHeaderMonthData(req: Request, res: Response) {

        try {
            const headerMonth = req.params.month;
            const headerresponse = await supplierrepository.supplierrepository.getHeaderMonth(headerMonth);
            response.status = 200
            response.message = " Header  data Get success "
            response.data = headerresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }


    async postHeaderDetail(req: Request, res: Response) {
        try {
            const data = req.body;

            let headerData: any = [];
            headerData.push({
                "header_data": data[0]?.header_data,
                "update_date": data[0]?.update_date
            })


            const responseheader = await supplierrepository.supplierrepository.postHeader(headerData);
            response.status = 200
            response.message = " User  data Added success "
            response.data = responseheader
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



    async putHeaderDetail(req: Request, res: Response) {

        try {
            const data = req.body;

            let headerData: any = [];
            headerData.push({
                "id": data[0]?.id,
                "header_data": data[0]?.header_data,
                "update_date": data[0]?.update_date
            })


            const responseheader = await supplierrepository.supplierrepository.putHeader(headerData);
            response.status = 200
            response.message = " User  data Added success "
            response.data = responseheader
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





    async postEmail(req: Request, res: Response) {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rahuly10111@gmail.com',
                pass: 'abgqmsuoabnlzyrx'
            }
        });

        var mailOptions = {
            from: 'rahuly10111@gmail.com',// sender address
            to: req.body.to, // list of receivers
            subject: req.body.subject, // Subject line
            text: req.body.description,
            html: `
            <div style="padding:10px;border-style: ridge">
            <p>You have a new contact request.</p>
            <h3>Contact Details</h3>
            <ul>
                <li>Email: ${req.body.to}</li>
                <li>Subject: ${req.body.subject}</li>
                <li>Message: ${req.body.description}</li>
            </ul>
            `
        };

        transporter.sendMail(mailOptions, function (error: any, info: any) {
            if (error) {
                res.json({ status: true, respMesg: 'Email Sent Successfully' })
            }
            else {
                res.json({ status: true, respMesg: 'Email Sent Successfully' })
            }

        });


    }





}

export default new suppliercontroller();