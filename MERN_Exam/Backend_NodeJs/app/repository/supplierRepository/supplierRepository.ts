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

        const updatePromises = invoicesData.map((invoices: any) => {

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
                    ischeck: invoices.ischeck,
                    isapprove: invoices.isapprove
                },
            });
        });
        const updatedInvoices = await Promise.all(updatePromises);


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


    async getHeaderMonth(headerMonth: string) {
        let responseheader = await prisma.header.findMany({
            where: {
                update_date: headerMonth
            }
        })
        return responseheader;
    }

    async postHeader(headerData: any) {

        let responseheader = await prisma.header.create({
            data: headerData[0]
        });
        return responseheader;
    }

    async putHeader(headerData: any) {

        let responseheader = await prisma.header.update({
            where: { id: headerData[0]?.id },
            data: {
                header_data: headerData[0]?.header_data,
                update_date: headerData[0]?.update_date
            }
        })
        return responseheader;
    }



    async getHeader() {
        let responseheader = await prisma.header.findMany();
        return responseheader;
    }

}

export default new supplierrepository();