import { getConfig } from "../config";
import { makeBuy, OG_TOTAL_AMOUNT, OG_PRICE } from "../consts";


const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = getConfig(process.env.NODE_ENV || 'testnet');

export module Functions {
export async function getNFTId(): Promise<Map<number, number>> {
    return makeBuy(OG_TOTAL_AMOUNT, OG_PRICE);
    //const response = await fetch(`${nodeUrl}/api/nft/${contractName}/ids`);
    //const data = await response.json();
    //return data.id;
}
}