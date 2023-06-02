import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class permissionRepository {
    async permissionCheck(userId: string) {
        const responseuser = await prisma.user.findFirst({
            where: {
                id: userId
            },
            include: {
                role: {
                    include:
                    {
                        permission: true
                    }
                }
            }

        });
        return responseuser;
    }


}

export default new permissionRepository();