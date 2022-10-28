import express from 'express';

import { BaseRoute } from './routes/base-route.js';
import { HomeRoute } from './routes/home.js';

export interface AppConfig {
    dataBase: { filename: string; driver?: unknown };
    server: { port: number };
}

export class App {
    private server = express();
    private routes: BaseRoute[] = [];
    constructor(private appConfig: AppConfig) {}

    public async initialize(): Promise<void> {
        await this.startServer();
        await this.initializeRouting();
    }

    private initializeRouting() {
        this.server.use(express.json());
        this.routes.push(new HomeRoute(this.server));
    }

    private async startServer() {
        return new Promise<void>((resolve) => {
            this.server.listen(this.appConfig.server.port, () => {
                console.log(
                    `⚡️[server]: Server is running at https://localhost:${this.appConfig.server.port}`
                );
                resolve();
            });
        });
    }
}
