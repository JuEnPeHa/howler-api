import { Low } from "lowdb";
import { connect, keyStores, WalletConnection } from "near-api-js";
import { getConfig } from "../config.js";
import { makeBuy, OG_TOTAL_AMOUNT, OG_PRICE, getRandomKey } from "../consts.js";
import { Database } from "../database.js";
import { NFTModel } from "../models/NFTModel.js";

const db: Low<NFTModel[]> = Database.getConnection();
//const keyStore: keyStores.BrowserLocalStorageKeyStore = new keyStores.BrowserLocalStorageKeyStore();


// const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = getConfig(process.env.NODE_ENV || 'testnet');
// let nearConfig = getConfig('mainnet');

export module Functions {
export const getNFTId = async (account: string, currentBlock: number) =>/*: Promise<number>*/ {
    const id = await getRandomKey(db);
    console.log(`getNFTId: id: ${id}`);
    tryToSeparate(id, account, currentBlock);
    /*const near = await connect({ keyStore, headers: {}, ...nearConfig});
    const wallet = new WalletConnection(near, nearConfig.contractName);*/
    //return await makeBuy(OG_TOTAL_AMOUNT, OG_PRICE/*, near*/);
    //const response = await fetch(`${nodeUrl}/api/nft/${contractName}/ids`);
    //const data = await response.json();
    //return data.id;
}

const tryToSeparate = async (id: number, account: string, currentBlock: number) => {
    await db.read();
    const temporal_nft: NFTModel = db.data!.find(nft => nft.id === id) as NFTModel;
    if (temporal_nft.sold === true) {
        return false;
    } else if (temporal_nft.sold === false && temporal_nft.separatedBy === "") {
        temporal_nft.separatedBy = account;
        temporal_nft.separatedAt = currentBlock;
        //temporal_nft.sold = false;
        db.write();
        return true;
    } else if (temporal_nft.sold === false && temporal_nft.separatedBy !== "") {
        //Función para revisar si el block es mayor a los separadosAt + 450
        if (currentBlock > temporal_nft.separatedAt + 450) {
           temporal_nft.separatedBy = account;
           temporal_nft.separatedAt = currentBlock;
            //temporal_nft.sold = false;
            db.write();
            return true;
        } else {
        return false;
        }
    }
}
}