"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functions = void 0;
const config_1 = require("../config");
const consts_1 = require("../consts");
//const keyStore: keyStores.BrowserLocalStorageKeyStore = new keyStores.BrowserLocalStorageKeyStore();
const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = (0, config_1.getConfig)(process.env.NODE_ENV || 'testnet');
let nearConfig = (0, config_1.getConfig)('mainnet');
var Functions;
(function (Functions) {
    function getNFTId() {
        return __awaiter(this, void 0, void 0, function* () {
            /*const near = await connect({ keyStore, headers: {}, ...nearConfig});
            const wallet = new WalletConnection(near, nearConfig.contractName);*/
            return yield (0, consts_1.makeBuy)(consts_1.OG_TOTAL_AMOUNT, consts_1.OG_PRICE /*, near*/);
            //const response = await fetch(`${nodeUrl}/api/nft/${contractName}/ids`);
            //const data = await response.json();
            //return data.id;
        });
    }
    Functions.getNFTId = getNFTId;
})(Functions = exports.Functions || (exports.Functions = {}));
