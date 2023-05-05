import { Request, Response } from 'express';
import UserModel from '../config/senderSchema';
//import { connection } from '../config/db';
import { MongoClient } from "mongodb";
import { responseModel } from '../model/senderModel';
//connection();
let response = new responseModel();
class userDetailController {
    async getuserdetail(req: Request, res: Response) {
        const client = await MongoClient.connect("mongodb://127.0.0.1:27017/MessageSender");
        const db = client.db("MessageSender");
        const users = db
            .collection("senderusers")
            .aggregate([
                {
                    $match: {
                        isActive: true
                    }
                },
                {
                    $lookup: {
                        from: "messages",
                        localField: "_id",
                        foreignField: "sender_id",
                        as: "messages"
                    }
                }
                , {
                    $lookup: {
                        from: "receiverusers",
                        localField: "messages.receiver_id",
                        foreignField: "_id",
                        as: "Reciver"
                    }
                }
            ])
            .toArray();

        try {
            response.status = 200
            response.message = "User Get Successfully";
            response.data = await users
        }
        catch (ex: any) {
            response.status = 400
            response.message = ex.message;
            response.data = null
        }
        res.send(response);
    }


    // .aggregate([
    //     {
    //         $match: {
    //             isActive: true
    //         }
    //     },
    //     {
    //         $lookup: {
    //             from: "messages",
    //             localField: "_id",
    //             foreignField: "sender_id",
    //             as: "messages"
    //         }
    //     },
    //     {
    //         $lookup: {
    //             from: "receiverusers",
    //             localField: "messages.receiver_id",
    //             foreignField: "_id",
    //             as: "Receiver"
    //         }
    //     }
    // ])
    // .toArray();



    // .aggregate([
    //     {
    //         $match: {
    //             isActive: true
    //         }
    //     },
    //     {
    //         $lookup: {
    //             from: "messages",
    //             localField: "_id",
    //             foreignField: "sender_id",
    //             as: "messages"
    //         }
    //     }, {
    //         $lookup: {
    //             from: "receiverusers",
    //             localField: "_id",
    //             foreignField: "sender_id",
    //             as: "Reciver"
    //         }
    //     }
    // ])
    // .toArray();

    // .aggregate([
    //     {
    //       $match: {
    //         isActive: true, // only get active users
    //         age: { $gte: 18 } // only get users who are 18 or older
    //       }
    //     },
    //     {
    //       $lookup: {
    //         from: "messages",
    //         localField: "_id",
    //         foreignField: "sender_id",
    //         as: "messages"
    //       }
    //     },
    //     {
    //       $project: {
    //         _id: 1,
    //         firstName: 1,
    //         lastName: 1,
    //         email: 1,
    //         isActive: 1,
    //         numPosts: { $size: "$posts" } // add a field for the number of posts
    //       }
    //     },
    //     {
    //       $sort: {
    //         numPosts: -1 // sort by number of posts in descending order
    //       }
    //     }
    //   ])
    //   .toArray();

    // db.messages.aggregate([
    //     { $sort: { sender_id: 1, receiver_id: 1 } }
    //   ])


    //   db.receiverusers.aggregate([
    //     { $unwind: "$message_id" },
    //     { $group: { _id: "$phone_no", count: { $sum: 1 } } }
    //   ])


    //   db.senderusers.aggregate([
    //     { $lookup: { from: "messages", localField: "_id", foreignField: "sender_id", as: "messages" } },
    //     { $project: { email: 1, message: "$messages.message" } }
    //   ])


    //   db.messages.aggregate([
    //     { $group: { _id: "$sender_id", count: { $sum: 1 } } }
    //   ])


    //   db.senderusers.aggregate([
    //     { $match: { isActive: true, send_date: "10/6/2022" } }
    //   ])













    postuserdetail(req: Request, res: Response): any {
        try {
            response.status = 200
            response.message = "User Get Successfully";
            response.data = ""
        } catch (ex: any) {
            response.status = 400
            response.message = ex.message;
            response.data = null
        }
        res.send(response);
    }

    async putuserdetail(req: Request, res: Response) {
        try {
            response.status = 200
            response.message = "User Get Successfully";
            response.data = ""
        }
        catch (ex: any) {
            response.status = 400
            response.message = ex.message;
            response.data = null
        }
        res.send(response);

    }

    async deleteuserdetail(req: Request, res: Response) {
        try {
            response.status = 200
            response.message = "User Get Successfully";
            response.data = ""
        }
        catch (ex: any) {
            response.status = 400
            response.message = ex.message;
            response.data = null
        }
        res.send(response);

    }

}

export default new userDetailController()