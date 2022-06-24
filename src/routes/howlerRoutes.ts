import { Request, Response, Router } from 'express';
import { Functions } from '../utils/functions.js';
import * as defaults from '../consts.js';
import { Low } from 'lowdb';
import { nanoid } from 'nanoid';

class HowlerRoutes {
    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    async getId(req: Request, res: Response) {
        const id/*: number*/ = await Functions.getNFTId("JOHN", 0);
        res.send( /*id: id*/ {id} );
    }

    routes() {
        this.router.get('/', (req, res) => res.send('Api: /api/ids'));
        this.router.get('/id', this.getId);
        this.router.get('/id/:id', this.getId);
    }
}

const howlerRoutes = new HowlerRoutes();
howlerRoutes.routes();

export default howlerRoutes.router;