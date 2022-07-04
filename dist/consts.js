var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const OG_TOTAL_AMOUNT = 100;
export const WL_TOTAL_AMOUNT = 1272;
export const OG_PRICE = 5;
export const WL_PRICE = 7;
export const OG_CAN_BUY = 2;
export const MAX_BLOCKS_TO_SEPARATE = 1350;
export const BLOCK_THRESHOLD = 1;
// const initialMap = (): Map<number, number> => {
// const MAP_AVAILABLE_IDS: Map<number, number> = new Map<number, number>();
// for (let index = 0; index < 1000; index++) {
//     MAP_AVAILABLE_IDS.set(index + 1, index + 1);
//     console.log(`${index + 1}`);
// }
// return MAP_AVAILABLE_IDS;
// }
// export const MAP_AVAILABLE_IDS = /*initialMap();*/ new Map<number, number>([
//     [1, 1],
//     [2, 2],
//     [3, 3],
//     [4, 4],
//     [5, 5],
// ]);
//console.log(`${getRandomKey(MAP_AVAILABLE_IDS)}`);
export const getRandomKey = (/*collection: NFTModel[],*/ db) => {
    //await db.read();
    console.log(`getRandomKey`);
    //console.log(db);
    //console.log(db.read());
    //console.log(db.data ? db.data : "No data");
    console.log(db.data.length);
    let keys = [];
    db.data.forEach(nft => {
        let temporalId = !nft.sold ? nft.id : null;
        //Añadir pregunta no separados
        if (temporalId) {
            keys.push(temporalId);
        }
    });
    //console.log(`${keys}`);
    if (keys.length === 0) {
        return -1;
    }
    else {
        return keys[Math.floor(Math.random() * keys.length)];
    }
};
export const makeBuy = (amount, price) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(`makeBuy: amount: ${amount}, price: ${price}, MAP_AVAILABLE_IDS: ${MAP_AVAILABLE_IDS.keys.length}`);
    //const id_number = getRandomKey();
    // console.log(`makeBuy: id_number: ${id_number}`);
    // console.log(`makeBuy: MAP_AVAILABLE_IDS: ${MAP_AVAILABLE_IDS.values}`);
    // const boleano: Boolean = MAP_AVAILABLE_IDS.delete(id_number);
    // console.log(`makeBuy: boleano: ${boleano}`);
    // console.log(`makeBuy: MAP_AVAILABLE_IDS: ${MAP_AVAILABLE_IDS.values}`); 
    // //return amount * price;
    // //return MAP_AVAILABLE_IDS;
    // return await MAP_AVAILABLE_IDS;
});
