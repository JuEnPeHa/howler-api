import { getConfig } from "../config";


const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = getConfig(process.env.NODE_ENV || 'testnet');

export module Functions {

}