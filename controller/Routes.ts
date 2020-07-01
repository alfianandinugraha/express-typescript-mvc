import express, { Router } from 'express';
import HomeRoute from './routes/HomeRoute';
import ErrorRoute from './routes/ErrorRoute';

export default class Routes {
    public route: Router = express.Router();

    constructor() {
        const { route } = this

        // main route
        route.get('/', new HomeRoute().get());

        // error route
        route.use(new ErrorRoute().get());
    }
}
