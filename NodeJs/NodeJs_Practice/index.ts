import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser';
import router from './Router/index';
require('./Config/db');
import dotenv from 'dotenv'
dotenv.config({ path: ".env" })
var app: Application = express();
var port = process.env.PORT || 2000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)
app.listen(port, function () {
    console.log("Started", port);
})