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
    if (id >= 0) {
        tryToSeparate(id, account, currentBlock);
    } else {
        console.log(`Error: No more ids available`);
    }
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

export const checkIfSeparatedStillValid = async (currentBlock: number) => {
    let numberOfSeparated = 0;
    let numberOfDeseparated = 0;
    await db.read();
    await db.data!.forEach(async nft => {
        if (nft.separatedBy !== "") {
            numberOfSeparated++;
            if (currentBlock > nft.separatedAt + 450) {
                numberOfDeseparated++;
                nft.separatedBy = "";
                nft.separatedAt = 0;
                await db.write();
            }
        }
    });
    console.log(`checkIfSeparatedStillValid: numberOfSeparated: ${numberOfSeparated}`);
    console.log(`checkIfSeparatedStillValid: numberOfDeseparated: ${numberOfDeseparated}`);
}
}