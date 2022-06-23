import { WalletConnection } from "near-api-js";

export const OG_TOTAL_AMOUNT: number = 100;
export const WL_TOTAL_AMOUNT: number = 1272;

export const OG_PRICE: number = 5;
export const WL_PRICE: number = 7;

export const OG_CAN_BUY: number = 2;

const initialMap = (): Map<number, number> => {
const MAP_AVAILABLE_IDS: Map<number, number> = new Map<number, number>();
for (let index = 0; index < 1000; index++) {
    MAP_AVAILABLE_IDS.set(index + 1, index + 1);
    console.log(`${index + 1}`);
}
return MAP_AVAILABLE_IDS;
}

export const MAP_AVAILABLE_IDS = /*initialMap();*/ new Map<number, number>([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
]);
//console.log(`${getRandomKey(MAP_AVAILABLE_IDS)}`);

function getRandomKey(collection: Map<number, number>): number {
    let keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}

export const makeBuy = async (amount: number, price: number, /*near: WalletConnection*/)/*: number*/ => {
    console.log(`makeBuy: amount: ${amount}, price: ${price}, MAP_AVAILABLE_IDS: ${MAP_AVAILABLE_IDS.keys.length}`);
    const id_number = getRandomKey(MAP_AVAILABLE_IDS);
    console.log(`makeBuy: id_number: ${id_number}`);
    console.log(`makeBuy: MAP_AVAILABLE_IDS: ${MAP_AVAILABLE_IDS.values}`);
    const boleano: Boolean = MAP_AVAILABLE_IDS.delete(id_number);
    console.log(`makeBuy: boleano: ${boleano}`);
    console.log(`makeBuy: MAP_AVAILABLE_IDS: ${MAP_AVAILABLE_IDS.values}`); 
    //return amount * price;
    //return MAP_AVAILABLE_IDS;
    return await MAP_AVAILABLE_IDS;
}