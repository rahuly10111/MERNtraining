import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { groupcountry } from "../../model/groupcountryinterface";
import groupcountryrepositary from '../../repository/index'

let response = new responseModel;
class groupcountrycontroller {
    async postgroupcountrydetails(req: Request, res: Response) {
        const counrtydatas: groupcountry = {
            name: req.body.name,
            headquartersId: req.body.headquartersId,
            motive: req.body.motive,
            majorgroup: req.body.majorgroup
        }
        console.log(counrtydatas);

        try {
            const userresponse = await groupcountryrepositary.countriesgroupRepositary.creategroupcountry(counrtydatas);
            response.status = 200
            response.message = " Data Added success"
            response.data = userresponse
        } catch (error) {
            console.log(error);

            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response)
    }

    async getgroupcountrydetails(req: Request, res: Response) {
        try {
            const userresponse = await groupcountryrepositary.countriesgroupRepositary.getgroupcountry();
            response.status = 200
            response.message = " Data Get success "
            response.data = userresponse
        } catch (error) {
            console.log("get groupcountrydetails error", error);

            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async deletegroupcountrydetails(req: Request, res: Response) {
        const countryid = req.params.id;
        try {
            const userresponse = await groupcountryrepositary.countriesgroupRepositary.deletegroupcountry(countryid);
            response.status = 200
            response.message = " Data deleted success"
            response.data = userresponse
        } catch (error) {
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    // async putgroupcountrydetails(req: Request, res: Response) {
    //     const countryid = req.params.id;
    //     try {
    //         const userresponse = await groupcountryrepositary.countriesgroupRepositary.putgroupcountry(req, res, countryid);
    //         response.status = 200
    //         response.message = " data Edited success"
    //         response.data = userresponse

    //     } catch (error) {
    //         response.status = 400
    //         response.message = error as string
    //         response.data = null
    //     }
    //     res.send(response);
    // }


    async searchgroupcountrydetails(req: Request, res: Response) {
        const searchstring = req.params.search;
        // let se=searchstring.toLowerCase();
        try {
            const countryresponse = await groupcountryrepositary.countriesgroupRepositary.searchgroupcountry(searchstring);
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

    async sortinggroupcountrydetails(req: Request, res: Response) {
        const sortstring = req.params.sort;
        try {
            const countryresponse = await groupcountryrepositary.countriesgroupRepositary.sortinggroupcountry(sortstring, res);
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

    async filtergroupcountrydetails(req: Request, res: Response) {
        const sortstring = req.params.sort;
        try {
            const countryresponse = await groupcountryrepositary.countriesgroupRepositary.filtergroupcountry();
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



}

export default new groupcountrycontroller();