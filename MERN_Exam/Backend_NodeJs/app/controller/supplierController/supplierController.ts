import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { supplierdetails } from "../../model/supplierInterface";
import supplierrepository from '../../repository/index'
import nodemailer from 'nodemailer';
import base64 from 'base64topdf';
import axios from 'axios'



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
                    "col_8": 20,
                    "col_9": data?.invoices[0]?.col_9,
                    "col_10": (
                        parseInt(data?.invoices[0]?.col_1) +
                        parseInt(data?.invoices[0]?.col_2) +
                        parseInt(data?.invoices[0]?.col_3) +
                        parseInt(data?.invoices[0]?.col_4) +
                        parseInt(data?.invoices[0]?.col_5) +
                        parseInt(data?.invoices[0]?.col_6)
                    ) + ((20 / 100) * (
                        parseInt(data?.invoices[0]?.col_1) +
                        parseInt(data?.invoices[0]?.col_2) +
                        parseInt(data?.invoices[0]?.col_3) +
                        parseInt(data?.invoices[0]?.col_4) +
                        parseInt(data?.invoices[0]?.col_5) +
                        parseInt(data?.invoices[0]?.col_6)
                    )) - (data?.invoices[0]?.col_9),
                    "update_date": data?.invoices[0]?.update_date,
                    "ischeck": data?.invoices[0]?.ischeck,
                    "isapprove": data?.invoices[0]?.isapprove
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
                    "col_8": (
                        parseInt(data?.invoices[0]?.col_1) +
                        parseInt(data?.invoices[0]?.col_2) +
                        parseInt(data?.invoices[0]?.col_3) +
                        parseInt(data?.invoices[0]?.col_4) +
                        parseInt(data?.invoices[0]?.col_5) +
                        parseInt(data?.invoices[0]?.col_6)
                    ) + ((20 / 100) * (
                        parseInt(data?.invoices[0]?.col_1) +
                        parseInt(data?.invoices[0]?.col_2) +
                        parseInt(data?.invoices[0]?.col_3) +
                        parseInt(data?.invoices[0]?.col_4) +
                        parseInt(data?.invoices[0]?.col_5) +
                        parseInt(data?.invoices[0]?.col_6)
                    )),
                    "col_9": data?.invoices[0]?.col_9,
                    "col_10":
                        (
                            parseInt(data?.invoices[0]?.col_1) +
                            parseInt(data?.invoices[0]?.col_2) +
                            parseInt(data?.invoices[0]?.col_3) +
                            parseInt(data?.invoices[0]?.col_4) +
                            parseInt(data?.invoices[0]?.col_5) +
                            parseInt(data?.invoices[0]?.col_6)
                        ) + ((20 / 100) * (
                            parseInt(data?.invoices[0]?.col_1) +
                            parseInt(data?.invoices[0]?.col_2) +
                            parseInt(data?.invoices[0]?.col_3) +
                            parseInt(data?.invoices[0]?.col_4) +
                            parseInt(data?.invoices[0]?.col_5) +
                            parseInt(data?.invoices[0]?.col_6)
                        )) - (data?.invoices[0]?.col_9)
                    ,
                    "update_date": data?.invoices[0]?.update_date,
                    "ischeck": data?.invoices[0]?.ischeck,
                    "isapprove": data?.invoices[0]?.isapprove
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
        const data = req.body;
        const filterData = data.filter((iteam: any) => iteam?.invoices[0]?.ischeck);

        let supplierData: any = [];
        filterData?.map((item: any) => {
            supplierData.push({
                Name: item?.name,
                Net_Value: item?.invoices[0]?.col_7,
                Balance_Due: item?.invoices[0]?.col_10,
            })
        });



        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rahuly10111@gmail.com',
                pass: 'abgqmsuoabnlzyrx'
            }
        });

        var mailOptions = {
            from: 'rahuly10111@gmail.com',// sender address
            to: "rahulvy4228@gmail.com", // list of receivers
            subject: "Invoice Bill", // Subject line

            html: `
            <div style="padding:10px;border-style: ridge">
            <p> Suppliers Details </p>
            <h3> Invoices Bill </h3>
           ${supplierData.map((iteam: any) =>
                `<ul>
            <li>Name :  ${iteam?.Name}</li>
            <li>Net Value :  ${iteam?.Net_Value}</li>
            <li>Balance Due :  ${iteam?.Balance_Due}</li>
            </ul>`
            )}
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


    async postpdf(req: Request, res: Response) {
        const data = req.body;

        const filterData = data.filter((iteam: any) => iteam?.invoices[0]?.ischeck);


        var html = filterData.map((item: any) => {

            var rowData = "";
            if (item.invoices[0].col_1 !== 0) {
                rowData += `<tr><td>Item 1</td><td>${item.invoices[0].col_1}</td></tr>`
            }
            if (item.invoices[0].col_2 !== 0) {
                rowData += `<tr><td>Item 2</td><td>${item.invoices[0].col_2}</td></tr>`
            }
            if (item.invoices[0].col_3 !== 0) {
                rowData += `<tr><td>Item 3</td><td>${item.invoices[0].col_3}</td></tr>`
            }
            if (item.invoices[0].col_4 !== 0) {
                rowData += `<tr><td>Item 4</td><td>${item.invoices[0].col_4}</td></tr>`
            }
            if (item.invoices[0].col_5 !== 0) {
                rowData += `<tr><td>Item 5</td><td>${item.invoices[0].col_5}</td></tr>`
            }
            if (item.invoices[0].col_6 !== 0) {
                rowData += `<tr><td>Item 6</td><td>${item.invoices[0].col_6}</td></tr>`
            }
            if (item.invoices[0].col_7 !== 0) {
                rowData += `<tr><td>Net</td><td>${item.invoices[0].col_7}</td></tr>`
            }
            if (item.invoices[0].col_8 !== 0) {
                rowData += `<tr><td>VAL</td><td>${item.invoices[0].col_8}</td></tr>`
            }
            if (item.invoices[0].col_9 !== 0) {
                rowData += `<tr><td>Advance</td><td>${item.invoices[0].col_9}</td></tr>`
            }
            if (item.invoices[0].col_10 !== 0) {
                rowData += `<tr><td>Balance Due</td><td>${item.invoices[0].col_10}</td></tr>`
            }

            const htmlData = `<head>
        <style>
          body {
            margin: 20px;
          }
      
          table {
            border-collapse: collapse;
            width: 100%;
          }
      
          th,
          td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
      
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      
      <body>
        <h1>Invoice Bill</h1>
        <p>Name : ${item?.name}</p>
        <p>Month : ${item?.invoices[0].update_date} </p>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          ${rowData}
          </tbody>
        </table>
      
      </body>`
            return htmlData
        })

        var htmlBody = html.map((e: any) => e.replace(/\n/g, ""));

        let base64 = htmlBody.map((item: any) => btoa(item))


        let pdfdta = {
            FileName: "invoiesBill.pdf",
            HtmlData: base64
        }
        const resppppppp = await axios.post('https://pdf.satvasolutions.com/api/ConvertHtmlToPdf', pdfdta)

        res.send(resppppppp.data)

    }




}

export default new suppliercontroller();