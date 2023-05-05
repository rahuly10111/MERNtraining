import express from 'express'
import bodyParser from 'body-parser';
import routes from '../app/routes/index'
class Server {
    port: any
    app: any
    constructor() {
        this.port = 3001
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