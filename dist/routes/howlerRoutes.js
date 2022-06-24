var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import { Functions } from '../utils/functions.js';
class HowlerRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }
    getId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id /*: number*/ = yield Functions.getNFTId("JOHN", 0);
            res.send(/*id: id*/ { id });
        });
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
