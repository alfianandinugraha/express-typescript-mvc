import express, { Application } from 'express';
import Env from '@config/Env';
import bodyParser from 'body-parser';

class App {
    private app: Application = express();
    private port: number = Env.PORT || 3000;

    constructor() {
        this.config();

        this.app.listen(this.port, () => {
            console.log(`server was running at http://localhost:${this.port}`);
        });
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

new App();
