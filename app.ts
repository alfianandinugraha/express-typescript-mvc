import express, { Application } from 'express';
import bodyParser from 'body-parser';

import Env from '@config/Env';
import Routes from '@controller/Routes';

class App {
    private app: Application = express();
    private port: number = Env.PORT || 3000;

    constructor() {
        this.config();
        this.template();
        this.app.use(new Routes().route);

        this.app.listen(this.port, () => {
            console.log(`server was running at http://localhost:${this.port}`);
        });
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public'))
    }

    private template() {
        const { engine } = require('express-edge');
        this.app.use(engine);
        this.app.set('views', 'views');
    }
}

new App();
