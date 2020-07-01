import express, { Router } from 'express';
import HomeRoute from './routes/HomeRoute';
import ErrorRoute from './routes/ErrorRoute';

export default class Routes {
    public route: Router = express.Router();

    constructor() {
        // Route utama
        this.route.get('/', new HomeRoute().get());

        // Route ketika halaman error
        this.route.use(new ErrorRoute().get());
    }
}
