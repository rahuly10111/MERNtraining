import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { categorydetails } from "../../model/categoryinterface";
import categoryRepositary from '../../repository/index'

let response = new responseModel;
class categorycontroller {
    async postcategorydetails(req: Request, res: Response) {
        const categorydata: categorydetails = {
            categoryname: req.body.categoryname,
            postid: req.body.postid
        }

        try {
            const categoryresponse = await categoryRepositary.categoryRepositary.createcategory(categorydata);
            response.status = 200
            response.message = " data Filter success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }

    async getcategorydetails(req: Request, res: Response) {

        try {
            const categoryresponse = await categoryRepositary.categoryRepositary.getcategory();
            response.status = 200
            response.message = " data Filter success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }

    async deletecategorydetails(req: Request, res: Response) {
        const categoryid = req.params.id;

        try {
            const categoryresponse = await categoryRepositary.categoryRepositary.deletecategory(categoryid);
            response.status = 200
            response.message = " data Filter success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    async putcategorydetails(req: Request, res: Response) {
        const categoryid = req.params.id;

        try {
            const dataToUpdate: categorydetails = {
                categoryname: req.body.categoryname,
                postid: req.body.postid
            }
            const categoryresponse = await categoryRepositary.categoryRepositary.putcategory(dataToUpdate, categoryid);
            response.status = 200
            response.message = " data Filter success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    async sortingcategorydetails(req: Request, res: Response) {
        const sortstring = req.params.sort;
        let sortOrder: any;
        if (sortstring.toLowerCase() === 'asc') {
            sortOrder = 'asc';
        } else if (sortstring.toLowerCase() === 'desc') {
            sortOrder = 'desc';
        } else {
             res.status(400).send('Invalid sort order');
            return;
        }
        try {
            const categoryresponse = await categoryRepositary.categoryRepositary.sortingcategory(sortOrder);
            response.status = 200
            response.message = " data Filter success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    async searchcategorydetails(req: Request, res: Response) {
        const searchstring = req.params.search;
        try {
            const categoryresponse = await categoryRepositary.categoryRepositary.searchcategory(searchstring);
            response.status = 200
            response.message = " data Filter success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    async filtercategorydetails(req: Request, res: Response) {
        try {
            const categoryresponse = await categoryRepositary.categoryRepositary.filtercategory();
            response.status = 200
            response.message = " data Filter success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }



}

export default new categorycontroller();