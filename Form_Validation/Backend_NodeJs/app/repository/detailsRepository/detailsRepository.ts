import { Request, Response } from "express";
import { details } from "../../model/detailsInterface";
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class detailRepositary {
    async userDetail(detailsmodel: any) {
        let responseuser = await prisma.details.create({
            data:
                detailsmodel
            // name: registrationmodel.name,
            // email: registrationmodel.email,
            // password: registrationmodel.password,
            // mobile: registrationmodel.mobile,

        })
        return responseuser;
    }


}

export default new detailRepositary();