import express, { Router } from 'express';
import HomeRoute from './routes/HomeRoute';
import ErrorRoute from './routes/ErrorRoute';

export default class Routes {
    public route: Router = express.Router();

    constructor() {
        // main route
        this.route.get('/', new HomeRoute().get());

        // error route
        this.route.use(new ErrorRoute().get());
    }
}
