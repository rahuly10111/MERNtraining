import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class supplierrepository {
    async getSupplier() {
        let responsesupplier = await prisma.supplier.findMany();
        return responsesupplier;
    }


}

export default new supplierrepository();