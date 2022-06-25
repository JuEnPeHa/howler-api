var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Contract, keyStores, Near } from "near-api-js";
import { getConfig } from "./config.js";
const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = getConfig(process.env.NODE_ENV || 'testnet');
let near;
let nearAccount;
let nearContract;
export var NearInstance;
(function (NearInstance) {
    function createNearConnection() {
        near = new Near({
            networkId,
            keyStore: new keyStores.InMemoryKeyStore(),
            nodeUrl,
            walletUrl,
            helperUrl,
            headers: {}
        });
        console.log(near);
    }
    NearInstance.createNearConnection = createNearConnection;
    function createNearAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            nearAccount = yield near.account(contractName);
            console.log(nearAccount);
        });
    }
    NearInstance.createNearAccount = createNearAccount;
    function createNearContract() {
        return __awaiter(this, void 0, void 0, function* () {
            nearContract = new Contract(yield nearAccount, contractName, {
                viewMethods: ['get_saled_ids', 'get_saled_tokens', 'get_token_by_id', 'get_current_block'],
                changeMethods: ['get_account_and_current_block'],
            });
            console.log(nearContract);
        });
    }
    NearInstance.createNearContract = createNearContract;
    function getNearConnection() {
        return near;
    }
    NearInstance.getNearConnection = getNearConnection;
    function getNearAccount() {
        return nearAccount;
    }
    NearInstance.getNearAccount = getNearAccount;
    function getNearContract() {
        return nearContract;
    }
    NearInstance.getNearContract = getNearContract;
})(NearInstance = NearInstance || (NearInstance = {}));
