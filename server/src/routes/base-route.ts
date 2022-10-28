// eslint-disable-next-line @typescript-eslint/no-shadow
import { Request, Response } from 'express';

export abstract class BaseRoute {
    protected constructor(protected baseURL: string) {}
    public abstract get(req: Request, res: Response): void;
}
