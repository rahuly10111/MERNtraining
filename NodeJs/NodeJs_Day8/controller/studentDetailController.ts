import Express, { Request, Response } from 'express'
import { studentdetailList } from '../Model/studentdetailInterface';
import { responseModel } from '../Model/responseModel';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
let response = new responseModel();

class studentdetailcontroller {
    async poststudentdetail(req: Request, res: Response) {
        const student: studentdetailList = {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            phoneno: req.body.phoneno
        }
        try {
            let responseuser = await prisma.studentdetails.create({
                data: {
                    name: student.name,
                    age: student.age,
                    email: student.email,
                    phoneno: student.phoneno
                }
            })
            response.status = 200
            response.message = " Data Added success"
            response.data = responseuser
        } catch (ex: any) {
            response.status = 400
            response.message = "error"
            response.data = null
        }
        res.send(response)

    }


    async getstudentdetails(req: Request, res: Response) {
        try {
            let studentdetaildata = await prisma.studentdetails.findMany();
            response.status = 200
            response.message = " Data Get success"
            response.data = studentdetaildata
        } catch (ex: any) {
            response.status = 400
            response.message = "error"
            response.data = null
        }
        res.send(response)

    }

    async deletestudentdetails(req: Request, res: Response) {
        const studentid = req.params.id
        try {
            const studentdata = await prisma.studentdetails.delete({
                where: { id: studentid },
            })
            response.status = 200
            response.message = " Data Deleted success"
            response.data = studentdata
        } catch (ex: any) {
            response.status = 400
            response.message = "error"
            response.data = null
        }
        res.send(response)

    }

    async updatestudentdetails(req: Request, res: Response) {
        const studentid = req.params.id
        try {
            const studentdata = await prisma.studentdetails.update({
                where: { id: studentid },
                data: {
                    name: req.body.name,
                    age: req.body.age,
                    email: req.body.email,
                    phoneno: req.body.phoneno,
                },
            })
            response.status = 200
            response.message = " Data Updated success"
            response.data = studentdata
        } catch (ex: any) {
            response.status = 400
            response.message = "error"
            response.data = null

        } res.send(response)

    }



}

export default new studentdetailcontroller();