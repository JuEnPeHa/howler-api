import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes.js';
import helmet from 'helmet';
import compression from 'compression';
import howlerRoutes from './routes/howlerRoutes.js';

import {Database} from './database.js';
import { NearInstance } from './near.js';



class Server {
    app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 1996);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(helmet());
        this.app.use(compression());
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/ids', (howlerRoutes));
    }

    async start(): Promise<void> {
        NearInstance.createNearConnection();
        await NearInstance.createNearAccount();
        await NearInstance.createNearContract();
        await Database.createConnection();
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();

export default server.app;