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
import { NearInstance } from '../near.js';
// const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = getConfig(process.env.NODE_ENV || 'testnet');
// const near = new Near({
//     networkId,
//     keyStore: new keyStores.InMemoryKeyStore(),
//     nodeUrl,
//     walletUrl,
//     helperUrl,
//     headers: {}
// })
class HowlerRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }
    getId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const id = req.params.id || nanoid();
            if (req.query.userId === undefined) {
                res.status(400).send('Missing userId');
            }
            else if (req.query.userId === '') {
                res.status(400).send('Empty userId');
            }
            else {
                const userId = req.query.userId;
                const id /*: number*/ = yield Functions.getNFTId(userId, yield NearInstance.getNearContract());
                res.send(/*id: id*/ { id });
            }
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
