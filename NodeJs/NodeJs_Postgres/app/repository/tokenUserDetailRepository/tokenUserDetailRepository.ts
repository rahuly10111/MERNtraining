import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class tokenRepository {
    async userdetail(userId: any) {
        const responseuser = await prisma.user.findFirst({
            where: {
                id: userId,

            },
            select: {
                name: true,
                email: true,
                profile: true
            },

        });
        return responseuser;
    }
}

export default new tokenRepository