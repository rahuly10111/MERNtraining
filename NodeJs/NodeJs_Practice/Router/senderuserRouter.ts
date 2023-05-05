import express, { Router } from "express";
import senderuserController from "../Controller/senderuserController";

const router: Router = express.Router();

router.get('/getsenderuser', senderuserController.getsenderdetail)

export default router;