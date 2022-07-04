import { Low } from "lowdb";
import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import { getConfig } from "../config.js";
import { makeBuy, OG_TOTAL_AMOUNT, OG_PRICE, getRandomKey, MAX_BLOCKS_TO_SEPARATE } from "../consts.js";
import { Database } from "../database.js";
import { NFTModel } from "../models/NFTModel.js";


//const keyStore: keyStores.BrowserLocalStorageKeyStore = new keyStores.BrowserLocalStorageKeyStore();


// const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = getConfig(process.env.NODE_ENV || 'testnet');
// let nearConfig = getConfig('mainnet');

export module Functions {
export const getNFTId = async (account: string, /*currentBlock: number*/ contract: Contract ): Promise<number> =>/*: Promise<number>*/ {
const db: Low<NFTModel[]> = Database.getConnection();  
    console.log("getNFTId");
    console.log(contract);
    // @ts-ignore
    const currentBlock: number = await contract.get_current_block({}).then(
        (block: number) => {
            //console.log(block);
            return block;
        }
    );
    console.log(currentBlock);
    const id = getRandomKey(db);
    console.log(`getNFTId: id: ${id}`);
    if (id >= 0) {
        console.log(await tryToSeparate(id, account, currentBlock, db));
    } else {
        console.log(`Error: No more ids available`);
    }
    return id;
}

const tryToSeparate = async (id: number, account: string, currentBlock: number, db: Low<NFTModel[]>) => {
    //await db.read();
    console.log(`tryToSeparate: id: ${id} account: ${account} currentBlock: ${currentBlock} db: ${db.data![id].price}`);
    const temporal_nft: NFTModel = db.data!.find(nft => nft.id === id) as NFTModel;
    if (temporal_nft.sold === true) {
        return false;
    } else if (temporal_nft.sold === false && temporal_nft.separatedBy === "") {
        temporal_nft.separatedBy = account;
        temporal_nft.separatedAt = currentBlock;
        temporal_nft.separated = true;
        //temporal_nft.sold = false;
        await db.write();
        return true;
    } else if (temporal_nft.sold === false && temporal_nft.separatedBy !== "") {
        //Función para revisar si el block es mayor a los separadosAt + MAX_BLOCKS_TO_SEPARATE
        if (currentBlock > temporal_nft.separatedAt + MAX_BLOCKS_TO_SEPARATE) {
           temporal_nft.separatedBy = account;
           temporal_nft.separatedAt = currentBlock;
            temporal_nft.separated = true;
            //temporal_nft.sold = false;
            await db.write();
            return true;
        } else {
        return false;
        }
    }
}

export const checkIfSeparatedStillValid = async (currentBlock: number, db: Low<NFTModel[]>) => {
    let numberOfSeparated = 0;
    let numberOfDeseparated = 0;
    await db.read();
    await db.data!.forEach(async nft => {
        if (nft.separatedBy !== "") {
            numberOfSeparated++;
            if (currentBlock > nft.separatedAt + MAX_BLOCKS_TO_SEPARATE) {
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