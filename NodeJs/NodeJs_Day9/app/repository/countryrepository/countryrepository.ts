import { Request, Response } from "express";
import { countrydetails } from '../../model/countrydetailinterface';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class countryrepository {
    async createcountry(countrymodel: countrydetails) {
        let responscountry = await prisma.countries.create({
            data: {
                name: countrymodel.name,
                capital: countrymodel.capital,
                area: countrymodel.area,
                population: countrymodel.population,
                economy: countrymodel.economy,
                gdp: countrymodel.gdp,
                import: countrymodel.import,
                export: countrymodel.export
            }
        })
        return responscountry;
    }

    async getcountry() {
        let responscountry = await prisma.countries.findMany();
        return responscountry;
    }

    async deletecountry(countryid: any) {
        let responscountry = await prisma.countries.delete({
            where: { id: countryid },
        })
        return responscountry;
    }

    async putcountry(req: Request, res: Response, countryid: any) {
        let responscountry = await prisma.countries.update({
            where: { id: countryid },
            data: {
                name: req.body.name,
                capital: req.body.capital,
                area: req.body.area,
                population: req.body.population,
                economy: req.body.economy,
                gdp: req.body.gdp,
                import: req.body.import,
                export: req.body.export
            }
        })
        return responscountry;
    }

    async sortingcountry(sortstring: any, res: Response) {
        let sortOrder: any;
        if (sortstring.toLowerCase() === 'asc') {
            sortOrder = 'asc';
        } else if (sortstring.toLowerCase() === 'desc') {
            sortOrder = 'desc';
        } else {
            res.status(400).send('Invalid sort order');
            return;
        }
        const responscountry = await prisma.countries.findMany({
            orderBy: {
                name: sortOrder
            }
        });
        return responscountry
    }

    async searchcountry(searchstring: string) {
        const responscountry = await prisma.countries.findMany({
            where: {
                OR: [
                    { name: { contains: searchstring, mode: "insensitive" } },
                    { capital: { contains: searchstring, mode: "insensitive" } },
                    { area: { contains: searchstring, mode: "insensitive" } },

                ],
            },
        });
        return responscountry;
    }

    async filtercountry() {
        const responscountry = await prisma.countries.findMany({
            where: {
                // OR: [
                //     { population: { gt: 100000000 } },
                //     { economy: { gte: 4534 } }
                //   ]
                AND: [
                    { population: { gt: 100000000 } },
                    { economy: { gte: 2 } }
                ]
            },
        });
        return responscountry;
    }


}

export default new countryrepository();