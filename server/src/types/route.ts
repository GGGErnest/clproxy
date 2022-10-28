// eslint-disable-next-line @typescript-eslint/no-shadow
import { Request, Response } from 'express';

export interface Route {
    get(req: Request, res: Response): void;
}
