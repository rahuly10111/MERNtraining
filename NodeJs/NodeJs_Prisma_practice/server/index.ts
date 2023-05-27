import express from 'express'
import bodyParser from 'body-parser';
import routes from '../app/routes/index'
import { Request, Response, NextFunction } from "express";
class Server {
    port: any
    app: any
    constructor() {
        this.port = 3030
        this.app = express()
    }



    start() {
        this.config()
        this.setupRoutes()
        this.listen()
    }

    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });

    }

    setupRoutes() {
        this.app.use(routes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App is running on port ${this.port}`);
        })
    }
}

export default Server