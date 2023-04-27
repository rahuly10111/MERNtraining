import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser';
import router from './Router/index';
import { connection } from './config/db';
import dotenv from 'dotenv'
dotenv.config({ path: ".env" })
var app: Application = express();
var port = process.env.PORT || 2000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)
connection();
app.listen(port, function () {
    console.log("Started", port);
})