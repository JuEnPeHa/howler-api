import { Router } from 'express';
class IndexRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.get('/', (req, res) => res.send('Api: /api/ids'));
    }
}
const indexRoutes = new IndexRoutes();
indexRoutes.routes();
export default indexRoutes.router;
