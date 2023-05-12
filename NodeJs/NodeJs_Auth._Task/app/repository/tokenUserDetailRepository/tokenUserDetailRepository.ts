import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class tokenRepository {
    async userdetail(userId: any) {
        const responseuser = await prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        return responseuser;
    }
}

export default new tokenRepository