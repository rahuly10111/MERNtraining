import { Request, Response } from "express";
import { majorcountrygroup } from '../../model/majorcountriesgroupinterface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class majorcountryrepository {
    async createmajorgroupcountry(majorcountry: majorcountrygroup) {
        let responsecountry = await prisma.majorcountriesgroup.create({
            data: {
                title: majorcountry.title,
                // groupheadquarter: majorcountry.groupheadquarter,
                // majorgroup: majorcountry.majorgroup,
                //countriesarray: countrymodel.countriesarray
            }
        })
        return responsecountry;
    }

    async getmajorgroupcountry() {
        const responsecountry = await prisma.majorcountriesgroup.findMany({
            include: {
                majorcountriesgroup:true
                // majorcountriesgroup:{
                //     select:{
                //         name:true
                //     }
                // }
                // countriesgrouparray: true
                //  {
                //     select: {
                //         name: true,
                //         motive: true
                //     }
                // },

                // countrieshq: {
                //     select: {
                //         name: true,
                //         capital: true
                //     }
                // }
            }
        });
        console.log("major country : ", responsecountry);

        return responsecountry;
    }

    async deletemajorgroupcountry(countryid: any) {
        let responsecountry = await prisma.majorcountriesgroup.delete({
            where: { id: countryid },
        })
        return responsecountry;
    }

    // async putmajorgroupcountry(req: Request, res: Response, countryid: any) {
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


    async searchmajorgroupcountry(searchstring: any) {
        const responsecountry = await prisma.countriesgroup.findMany({
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
        return responsecountry;
    }


    async sortingmajorgroupcountry(sortstring: any, res: Response) {
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

    // async filtermajorgroupcountry() {
    //     const responsecountry = await prisma.countriesgroup.findMany({
    //         where: {
    //             OR: [
    //                 { countries: { economy: { gte: 4534 } } },
    //             ],
    //         },
    //         include: {
    //             countries: true,
    //         }
    //     });
    //     return responsecountry;
    // }

}

export default new majorcountryrepository();