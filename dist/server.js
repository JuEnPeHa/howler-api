var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes.js';
import helmet from 'helmet';
import compression from 'compression';
import howlerRoutes from './routes/howlerRoutes.js';
import { Database } from './database.js';
import { NearInstance } from './near.js';
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 1996);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(helmet());
        this.app.use(compression());
    }
    routes() {
        this.app.use(indexRoutes);
        this.app.use('/api/ids', (howlerRoutes));
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            NearInstance.createNearConnection();
            yield NearInstance.createNearAccount();
            yield NearInstance.createNearContract();
            yield Database.createConnection();
            this.app.listen(this.app.get('port'), () => {
                console.log('Server on port', this.app.get('port'));
            });
        });
    }
}
const server = new Server();
server.start();
export default server.app;
