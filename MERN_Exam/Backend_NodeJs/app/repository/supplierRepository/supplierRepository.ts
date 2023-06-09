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
        console.log("repo invoice data ", invoicesData)
        let responsesupplier = await prisma.invoice.createMany({
            data: invoicesData
        });
        return responsesupplier;
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