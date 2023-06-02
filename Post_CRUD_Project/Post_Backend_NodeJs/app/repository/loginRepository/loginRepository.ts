import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class loginrepository {
    async userLogin(email: string) {
        const responseuser = await prisma.user.findFirst({
            where: {
                email: email
            },
            include: {
                role: {
                    include:
                    {permission:true
                    }
                }
            }

        });
        return responseuser;
    }


}

export default new loginrepository();