var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getRandomKey, MAX_BLOCKS_TO_SEPARATE } from "../consts.js";
import { Database } from "../database.js";
//const keyStore: keyStores.BrowserLocalStorageKeyStore = new keyStores.BrowserLocalStorageKeyStore();
// const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = getConfig(process.env.NODE_ENV || 'testnet');
// let nearConfig = getConfig('mainnet');
export var Functions;
(function (Functions) {
    Functions.getNFTId = (account, /*currentBlock: number*/ contract) => /*: Promise<number>*/ __awaiter(this, void 0, void 0, function* () {
        const db = Database.getConnection();
        console.log("getNFTId");
        console.log(contract);
        // @ts-ignore
        const currentBlock = yield contract.get_current_block({}).then((block) => {
            //console.log(block);
            return block;
        });
        console.log(currentBlock);
        const id = getRandomKey(db);
        console.log(`getNFTId: id: ${id}`);
        if (id >= 0) {
            console.log(yield tryToSeparate(id, account, currentBlock, db));
        }
        else {
            console.log(`Error: No more ids available`);
        }
    });
    const tryToSeparate = (id, account, currentBlock, db) => __awaiter(this, void 0, void 0, function* () {
        //await db.read();
        console.log(`tryToSeparate: id: ${id} account: ${account} currentBlock: ${currentBlock} db: ${db.data[id].price}`);
        const temporal_nft = db.data.find(nft => nft.id === id);
        if (temporal_nft.sold === true) {
            return false;
        }
        else if (temporal_nft.sold === false && temporal_nft.separatedBy === "") {
            temporal_nft.separatedBy = account;
            temporal_nft.separatedAt = currentBlock;
            temporal_nft.separated = true;
            //temporal_nft.sold = false;
            yield db.write();
            return true;
        }
        else if (temporal_nft.sold === false && temporal_nft.separatedBy !== "") {
            //Función para revisar si el block es mayor a los separadosAt + MAX_BLOCKS_TO_SEPARATE
            if (currentBlock > temporal_nft.separatedAt + MAX_BLOCKS_TO_SEPARATE) {
                temporal_nft.separatedBy = account;
                temporal_nft.separatedAt = currentBlock;
                temporal_nft.separated = true;
                //temporal_nft.sold = false;
                yield db.write();
                return true;
            }
            else {
                return false;
            }
        }
    });
    Functions.checkIfSeparatedStillValid = (currentBlock, db) => __awaiter(this, void 0, void 0, function* () {
        let numberOfSeparated = 0;
        let numberOfDeseparated = 0;
        yield db.read();
        yield db.data.forEach((nft) => __awaiter(this, void 0, void 0, function* () {
            if (nft.separatedBy !== "") {
                numberOfSeparated++;
                if (currentBlock > nft.separatedAt + MAX_BLOCKS_TO_SEPARATE) {
                    numberOfDeseparated++;
                    nft.separatedBy = "";
                    nft.separatedAt = 0;
                    yield db.write();
                }
            }
        }));
        console.log(`checkIfSeparatedStillValid: numberOfSeparated: ${numberOfSeparated}`);
        console.log(`checkIfSeparatedStillValid: numberOfDeseparated: ${numberOfDeseparated}`);
    });
})(Functions = Functions || (Functions = {}));
