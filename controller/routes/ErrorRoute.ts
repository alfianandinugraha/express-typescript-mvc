import { Request, Response } from 'express';

export default class ErrorRoute {
    public get() {
        return (req: Request, res: Response) => {
            res.status(404).send('<h1>Error, 404 Not Found</h1>');
        };
    }
}
