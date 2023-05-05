import { Request, Response } from "express";
import { groupcountry } from '../../model/groupcountryinterface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class countryrepository {
    async creategroupcountry(countrymodel: groupcountry) {
        let responseuser = await prisma.countriesgroup.create({
            data: {
                name: countrymodel.name,
                headquartersId: countrymodel.headquartersId,
                motive: countrymodel.motive,
                majorgroup:countrymodel.majorgroup
                //countriesarray: countrymodel.countriesarray
            }
        })
        return responseuser;
    }

    async getgroupcountry() {
        const responseuser = await prisma.countriesgroup.findMany({
            include: {
                countries: {
                    select:{
                        name:true,
                        
                    }
                },
                
            }
        });
        return responseuser;
    }

    async deletegroupcountry(countryid: any) {
        let responseuser = await prisma.countriesgroup.delete({
            where: { id: countryid },
        })
        return responseuser;
    }

    // async putgroupcountry(req: Request, res: Response, countryid: any) {
    //     let responseuser = await prisma.countries.update({
    //         where: { id: countryid },
    //         data: {
    //             name: req.body.name,
    //             // headquartersId: req.body.headquartersId,
    //             motive: req.body.motive,
    //         }
    //     })
    //     return responseuser;
    // }


    async searchgroupcountry(searchstring: any) {
        const results = await prisma.countriesgroup.findMany({
            where: {
                OR: [
                    { name: { contains: searchstring } },
                    { motive: { contains: searchstring } },
                    { countries: { capital: { contains: searchstring } } },
                ],
            },
            include: {
                countries: true,
            }
        });
        return results;
    }


    async sortinggroupcountry(sortstring: any, res: Response) {
        let sortOrder: any;
        if (sortstring.toLowerCase() === 'asc') {
            sortOrder = 'asc';
        } else if (sortstring.toLowerCase() === 'desc') {
            sortOrder = 'desc';
        } else {
            res.status(400).send('Invalid sort order');
            return;
        }
        const responscountry = await prisma.countriesgroup.findMany({
            orderBy: {
                name: sortOrder
            },
            include: {
                countries: true,
            }
        });
        return responscountry
    }

    async filtergroupcountry() {
        const results = await prisma.countriesgroup.findMany({
            where: {
                OR: [
                    { countries: { economy: { gte: 4534 } } },
                ],
            },
            include: {
                countries: true,
            }
        });
        return results;
    }

}

export default new countryrepository();