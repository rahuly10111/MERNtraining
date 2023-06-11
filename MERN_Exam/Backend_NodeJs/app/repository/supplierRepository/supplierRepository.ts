import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class supplierrepository {
    async getSupplier() {
        let responsesupplier = await prisma.supplier.findMany({
            include: {
                invoices: true
            }
        });
        return responsesupplier;
    }


    async postSupplier(invoicesData: any) {

        let responsesupplier = await prisma.invoice.createMany({
            data: invoicesData
        });
        return responsesupplier;
    }

    async putSupplier(invoicesData: any) {
        console.log("repo invoice data ", invoicesData)
        // let responsesupplier = await prisma.invoice.update({
        //     where: { id: invoiceid },
        //     data: invoicesData
        // })
        // return responsesupplier;
        const updatePromises = invoicesData.map((invoices: any) => {
            console.log("invoiesvhjcgsa",invoices)
            return prisma.invoice.update({
                where: {
                    id: invoices.id,
                },
                data: {
                    supplierId: invoices.supplierId,
                    col_1: invoices.col_1,
                    col_2: invoices.col_2,
                    col_3: invoices.col_3,
                    col_4: invoices.col_4,
                    col_5: invoices.col_5,
                    col_6: invoices.col_6,
                    col_7: invoices.col_7,
                    col_8: invoices.col_8,
                    col_9: invoices.col_9,
                    col_10: invoices.col_10,
                    update_date: invoices.update_date,
                },
            });
        });
        const updatedInvoices = await Promise.all(updatePromises);

        console.log("gfdgdfhdfxh", updatePromises)
        return updatedInvoices;
    }



    async getInvoicesMonth(invoicesMonth: string) {
        let supplierresponse = await prisma.supplier.findMany({
            include: {
                invoices: {
                    where: {
                        update_date: invoicesMonth
                    }

                }
            }

        })
        return supplierresponse;
    }



    async getHeader() {
        let responseheader = await prisma.header.findMany();
        return responseheader;
    }

}

export default new supplierrepository();