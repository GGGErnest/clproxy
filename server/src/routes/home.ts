// eslint-disable-next-line @typescript-eslint/no-shadow
import { Express, Request, Response } from 'express';

import { Execute } from '../execute.js';

import { BaseRoute } from './base-route.js';

export class HomeRoute extends BaseRoute {
    constructor(app: Express) {
        super('/');
        app.get(this.baseURL, (req: Request, res: Response) => this.get(req, res));
    }
    public get(req: Request, res: Response): void {
        let results = '';
        const returnObservable = Execute.execCommandAsProcess('ls');
        returnObservable.subscribe({
            next: (data) => {
                results = results + data;
                if (data === 'finished') {
                    res.send(results);
                }
            },
            error: (error) => {
                res.status(500);
                res.send(error);
            },
        });
    }
}
