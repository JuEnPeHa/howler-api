import { Account, Contract, keyStores, Near } from "near-api-js";
import { getConfig } from "./config.js";

const { networkId, nodeUrl, walletUrl, helperUrl, contractName } = getConfig(process.env.NODE_ENV || 'testnet');

let near: Near;
let nearAccount: Account;
let nearContract: Contract;
export module NearInstance {
    export function createNearConnection() {
        near = new Near({
            networkId,
            keyStore: new keyStores.InMemoryKeyStore(),
            nodeUrl,
            walletUrl,
            helperUrl,
            headers: {}
        })
        console.log(near);
    }

    export async function createNearAccount() {
        nearAccount = await near.account(contractName);
        console.log(nearAccount);
    }

    export async function createNearContract() {
        nearContract = new Contract(
            await nearAccount,
            contractName,
            {
                viewMethods: ['get_saled_ids', 'get_saled_tokens', 'get_token_by_id', 'get_current_block'],
                changeMethods: ['get_account_and_current_block'],
            }
        );
        console.log(nearContract);
    }

    export function getNearConnection(): Near {
        return near;
    }

    export function getNearAccount(): Account {
        return nearAccount;
    }

    export function getNearContract(): Contract {
        return nearContract;
    }
}