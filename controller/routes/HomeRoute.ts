import { Request, Response } from 'express';

export default class HomeRoute {
    public get() {
        return (req: Request, res: Response) => {
            res.send(`<h1>Hello homepage !</h1>`);
        };
    }
}
