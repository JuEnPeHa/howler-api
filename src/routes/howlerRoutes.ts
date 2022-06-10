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
        const id: Map<number, number> = await Functions.getNFTId();
        res.json( /*id: id*/ id.keys );
    }

    routes() {
        this.router.get('/', (req, res) => res.send('Api: /api/ids'));
        this.router.get('/id', this.getId);
    }
}

const howlerRoutes = new HowlerRoutes();
howlerRoutes.routes();

export default howlerRoutes.router;