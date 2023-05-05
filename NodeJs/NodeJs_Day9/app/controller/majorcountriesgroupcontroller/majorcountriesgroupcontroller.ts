import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { majorcountrygroup } from "../../model/majorcountriesgroupinterface";
import groupcountryrepositary from '../../repository/index'

let response = new responseModel;
class groupcountrycontroller {
    async postgroupcountrydetails(req: Request, res: Response) {
        const majorcounrtydata: majorcountrygroup = {
            title: req.body.title,
            // groupheadquarter: req.body.groupheadquarter,
            // majorgroup: req.body.majorgroup,
            // countriesarray:req.body.countriesarray
        }
        console.log(majorcounrtydata);

        try {
            const userresponse = await groupcountryrepositary.majorcountriesgrouprepository.createmajorgroupcountry(majorcounrtydata);
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
            const userresponse = await groupcountryrepositary.majorcountriesgrouprepository.getmajorgroupcountry();
            response.status = 200
            response.message = " Data Get success "
            response.data = userresponse
        } catch (error) {
            console.log("get groupcountrydetails error : ", error);

            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async deletegroupcountrydetails(req: Request, res: Response) {
        const countryid = req.params.id;
        try {
            const userresponse = await groupcountryrepositary.majorcountriesgrouprepository.deletemajorgroupcountry(countryid);
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
    //         const userresponse = await groupcountryrepositary.majorcountriesgrouprepository.createmajorgroupcountry(majorcounrtydata);
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
            const countryresponse = await groupcountryrepositary.majorcountriesgrouprepository.searchmajorgroupcountry(searchstring);
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

    // async sortingmajorgroupcountrydetails(req: Request, res: Response) {
    //     const sortstring = req.params.sort;
    //     try {
    //         const countryresponse = await groupcountryrepositary.majorcountriesgrouprepository.sortingmajorgroupcountry(sortstring);
    //         response.status = 200
    //         response.message = " data Edited success"
    //         response.data = countryresponse

    //     } catch (error) {
    //         response.status = 400
    //         response.message = error as string
    //         response.data = null
    //     }
    //     res.send(response);
    // }

    // async filtergroupcountrydetails(req: Request, res: Response) {
    //     const sortstring = req.params.sort;
    //     try {
    //         const countryresponse = await groupcountryrepositary.majorcountriesgrouprepository.filtermajorgroupcountry();
    //         response.status = 200
    //         response.message = " data Edited success"
    //         response.data = countryresponse

    //     } catch (error) {
    //         response.status = 400
    //         response.message = error as string
    //         response.data = null
    //     }
    //     res.send(response);
    // }



}

export default new groupcountrycontroller();