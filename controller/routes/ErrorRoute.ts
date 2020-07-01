import { Request, Response } from 'express';

export default class ErrorRoute {
    public get() {
        return (req: Request, res: Response) => {
            res.status(404).render('pages/error', {
                titlePage: '404 Not Found :('
            })
        };
    }
}
