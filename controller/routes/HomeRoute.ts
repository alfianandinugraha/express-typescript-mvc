import { Request, Response } from 'express';

export default class HomeRoute {
    public get() {
        return (req: Request, res: Response) => {
            res.render('pages/home', {
                titlePage: 'Homepage'
            })
        };
    }
}
