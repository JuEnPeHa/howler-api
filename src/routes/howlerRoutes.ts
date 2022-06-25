import { Request, Response, Router } from 'express';
import { Functions } from '../utils/functions.js';
import * as nearAPI from 'near-api-js';
import { Account, Near, keyStores } from 'near-api-js';
import * as defaults from '../consts.js';
import { Low } from 'lowdb';
import { nanoid } from 'nanoid';
import { getConfig } from '../config.js';
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
    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    async getId(req: Request, res: Response) {
        const id/*: number*/ = await Functions.getNFTId("JOHN", await NearInstance.getNearContract());
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