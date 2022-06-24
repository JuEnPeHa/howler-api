import { connect, keyStores, WalletConnection } from "near-api-js";
import { getConfig } from "../config.js";
import { makeBuy, OG_TOTAL_AMOUNT, OG_PRICE } from "../consts.js";

//const keyStore: keyStores.BrowserLocalStorageKeyStore = new keyStores.BrowserLocalStorageKeyStore();


const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = getConfig(process.env.NODE_ENV || 'testnet');
let nearConfig = getConfig('mainnet');

export module Functions {
export const getNFTId = async () =>/*: Promise<number>*/ {
    /*const near = await connect({ keyStore, headers: {}, ...nearConfig});
    const wallet = new WalletConnection(near, nearConfig.contractName);*/
    return await makeBuy(OG_TOTAL_AMOUNT, OG_PRICE/*, near*/);
    //const response = await fetch(`${nodeUrl}/api/nft/${contractName}/ids`);
    //const data = await response.json();
    //return data.id;
}
}