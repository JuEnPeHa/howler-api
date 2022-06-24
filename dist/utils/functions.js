var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getRandomKey } from "../consts.js";
import { Database } from "../database.js";
const db = Database.getConnection();
//const keyStore: keyStores.BrowserLocalStorageKeyStore = new keyStores.BrowserLocalStorageKeyStore();
// const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = getConfig(process.env.NODE_ENV || 'testnet');
// let nearConfig = getConfig('mainnet');
export var Functions;
(function (Functions) {
    Functions.getNFTId = (account, currentBlock) => /*: Promise<number>*/ __awaiter(this, void 0, void 0, function* () {
        const id = yield getRandomKey(db);
        console.log(`getNFTId: id: ${id}`);
        tryToSeparate(id, account, currentBlock);
        /*const near = await connect({ keyStore, headers: {}, ...nearConfig});
        const wallet = new WalletConnection(near, nearConfig.contractName);*/
        //return await makeBuy(OG_TOTAL_AMOUNT, OG_PRICE/*, near*/);
        //const response = await fetch(`${nodeUrl}/api/nft/${contractName}/ids`);
        //const data = await response.json();
        //return data.id;
    });
    const tryToSeparate = (id, account, currentBlock) => __awaiter(this, void 0, void 0, function* () {
        yield db.read();
        const temporal_nft = db.data.find(nft => nft.id === id);
        if (temporal_nft.sold === true) {
            return false;
        }
        else if (temporal_nft.sold === false && temporal_nft.separatedBy === "") {
            temporal_nft.separatedBy = account;
            temporal_nft.separatedAt = currentBlock;
            //temporal_nft.sold = false;
            db.write();
            return true;
        }
        else if (temporal_nft.sold === false && temporal_nft.separatedBy !== "") {
            //Función para revisar si el block es mayor a los separadosAt + 450
            if (currentBlock > temporal_nft.separatedAt + 450) {
                temporal_nft.separatedBy = account;
                temporal_nft.separatedAt = currentBlock;
                //temporal_nft.sold = false;
                db.write();
                return true;
            }
            else {
                return false;
            }
        }
    });
})(Functions = Functions || (Functions = {}));
