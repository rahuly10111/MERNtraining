import { Request, Response } from 'express';
import UserModel from '../config/userDetailSchema';

class userDetailController {
    async getuserdetail(req: Request, res: Response) {
        let userData = await UserModel.find()
        console.log(userData);
        res.send(userData)
    }

    postuserdetail(req: Request, res: Response): any {
        const newUser = new UserModel(req.body);
        newUser.save()
            .then((savedUser) => {
                res.status(201).json(savedUser);
            })
            .catch((error: Error) => {
                res.status(500).json({ error: error.message });
            });
    }

    async putuserdetail(req: Request, res: Response) {
        let id = req.params.id;
        req.body;
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ user: updatedUser });
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' });
        }

    }

    async deleteuserdetail(req: Request, res: Response) {
        let id = req.params.id;
        try {
            const deletedUser = await UserModel.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' });
        }

    }

}

export default new userDetailController()