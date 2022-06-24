"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBuy = exports.MAP_AVAILABLE_IDS = exports.OG_CAN_BUY = exports.WL_PRICE = exports.OG_PRICE = exports.WL_TOTAL_AMOUNT = exports.OG_TOTAL_AMOUNT = void 0;
exports.OG_TOTAL_AMOUNT = 100;
exports.WL_TOTAL_AMOUNT = 1272;
exports.OG_PRICE = 5;
exports.WL_PRICE = 7;
exports.OG_CAN_BUY = 2;
const initialMap = () => {
    const MAP_AVAILABLE_IDS = new Map();
    for (let index = 0; index < 1000; index++) {
        MAP_AVAILABLE_IDS.set(index + 1, index + 1);
        console.log(`${index + 1}`);
    }
    return MAP_AVAILABLE_IDS;
};
exports.MAP_AVAILABLE_IDS = new Map([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
]);
//console.log(`${getRandomKey(MAP_AVAILABLE_IDS)}`);
function getRandomKey(collection) {
    let keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}
const makeBuy = (amount, price) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`makeBuy: amount: ${amount}, price: ${price}, MAP_AVAILABLE_IDS: ${exports.MAP_AVAILABLE_IDS.keys.length}`);
    const id_number = getRandomKey(exports.MAP_AVAILABLE_IDS);
    console.log(`makeBuy: id_number: ${id_number}`);
    console.log(`makeBuy: MAP_AVAILABLE_IDS: ${exports.MAP_AVAILABLE_IDS.values}`);
    const boleano = exports.MAP_AVAILABLE_IDS.delete(id_number);
    console.log(`makeBuy: boleano: ${boleano}`);
    console.log(`makeBuy: MAP_AVAILABLE_IDS: ${exports.MAP_AVAILABLE_IDS.values}`);
    //return amount * price;
    //return MAP_AVAILABLE_IDS;
    return yield exports.MAP_AVAILABLE_IDS;
});
exports.makeBuy = makeBuy;
