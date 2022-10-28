import dotenv from 'dotenv';

import { App, AppConfig } from './app.js';

dotenv.config();

const appConfig: AppConfig = {
    dataBase: { filename: './database.txt' },
    server: {
        port: parseInt(process.env.PORT ?? '8080'),
    },
};
const main = new App(appConfig);
main.initialize()
    .then(() => console.log('AppConfig Running'))
    .catch((error) => console.log(error));
