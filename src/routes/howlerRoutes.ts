import { Request, Response, Router } from 'express';
import { Functions } from '../utils/functions';
import * as defaults from '../consts';

class HowlerRoutes {
    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    async getId(req: Request, res: Response) {
        const id/*: number*/ = await Functions.getNFTId();
        res.send( /*id: id*/ {id} );
    }

    routes() {
        this.router.get('/', (req, res) => res.send('Api: /api/ids'));
        this.router.get('/id', this.getId);
    }
}

const howlerRoutes = new HowlerRoutes();
howlerRoutes.routes();

export default howlerRoutes.router;