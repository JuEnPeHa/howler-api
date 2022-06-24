var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getConfig } from "../config.js";
import { makeBuy, OG_TOTAL_AMOUNT, OG_PRICE } from "../consts.js";
//const keyStore: keyStores.BrowserLocalStorageKeyStore = new keyStores.BrowserLocalStorageKeyStore();
const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = getConfig(process.env.NODE_ENV || 'testnet');
let nearConfig = getConfig('mainnet');
export var Functions;
(function (Functions) {
    Functions.getNFTId = () => /*: Promise<number>*/ __awaiter(this, void 0, void 0, function* () {
        /*const near = await connect({ keyStore, headers: {}, ...nearConfig});
        const wallet = new WalletConnection(near, nearConfig.contractName);*/
        return yield makeBuy(OG_TOTAL_AMOUNT, OG_PRICE /*, near*/);
        //const response = await fetch(`${nodeUrl}/api/nft/${contractName}/ids`);
        //const data = await response.json();
        //return data.id;
    });
})(Functions = Functions || (Functions = {}));
