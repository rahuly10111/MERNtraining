import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { countrydetails } from "../../model/countrydetailinterface";
import countryrepositary from '../../repository/index'

let response = new responseModel;
class countrycontroller {
    async postcountrydetails(req: Request, res: Response) {
        const counrtydatas: countrydetails = {
            name: req.body.name,
            capital: req.body.capital,
            area: req.body.area,
            population: req.body.population,
            economy: req.body.economy,
            gdp: req.body.gdp,
            import: req.body.import,
            export: req.body.export
        }
        try {
            const countryresponse = await countryrepositary.authRepositary.createcountry(counrtydatas);
            response.status = 200
            response.message = " Data Added success"
            response.data = countryresponse
        } catch (error) {
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response)
    }

    async getcountrydetails(req: Request, res: Response) {
        try {
            const countryresponse = await countryrepositary.authRepositary.getcountry();
            response.status = 200
            response.message = " Data Get success "
            response.data = countryresponse
        } catch (error) {
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async deletecountrydetails(req: Request, res: Response) {
        const countryid = req.params.id;
        try {
            const countryresponse = await countryrepositary.authRepositary.deletecountry(countryid);
            response.status = 200
            response.message = " Data deleted success"
            response.data = countryresponse
        } catch (error) {
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async putcountrydetails(req: Request, res: Response) {
        const countryid = req.params.id;
        // if (countryid === '') {
        //     res.status(400).send('Country ID is required');
        //     console.log("error");
        // }
        try {
            const countryresponse = await countryrepositary.authRepositary.putcountry(req, res, countryid);
            response.status = 200
            response.message = " data Edited success"
            response.data = countryresponse

        } catch (error) {
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async sortingcountrydetails(req: Request, res: Response) {
        const sortstring = req.params.sort;
        try {
            const countryresponse = await countryrepositary.authRepositary.sortingcountry(sortstring, res);
            response.status = 200
            response.message = " data Edited success"
            response.data = countryresponse

        } catch (error) {
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async searchcountrydetails(req: Request, res: Response) {
        const searchstring = req.params.search;
        try {
            const countryresponse = await countryrepositary.authRepositary.searchcountry(searchstring);
            response.status = 200
            response.message = " data Edited success"
            response.data = countryresponse

        } catch (error) {
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async filtercountrydetails(req: Request, res: Response) {
        try {
            const countryresponse = await countryrepositary.authRepositary.filtercountry();
            response.status = 200
            response.message = " data Filter success "
            response.data = countryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }




}

export default new countrycontroller();