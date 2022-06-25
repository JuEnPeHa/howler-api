import { OG_PRICE } from "./consts.js";
import { NFTModel } from "./models/NFTModel.js";
const fillStarterDB = (maxLength) => {
    let db = [];
    for (let id = 0; id < maxLength; id++) {
        db.push(new NFTModel(id, `OG ${id}`, `description ${id}`, `https://picsum.photos/id/${id}/200/300`, "", OG_PRICE, new Date(), new Date(), false, false, 0, ""));
    }
    return db;
};
export const STARTER_DB = fillStarterDB(1000);
