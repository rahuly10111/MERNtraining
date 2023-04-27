import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import router from '../NodeJs_Day4/src/Router/index';
dotenv.config({ path: ".env" });
var app: Application = express();
console.log(process.env.PORT);
app.use(router);
var port = process.env.PORT || 2000
app.get('/', function (req: Request, res: Response) {
    res.send("hello")
})

app.listen(port, function () {
    console.log("done", port);

})
