 import { Low, JSONFile } from "lowdb";
 import {join, dirname} from "path";
 import { fileURLToPath } from "url";
import { OG_PRICE } from "./consts.js";
import { NFTModel } from './models/NFTModel.js';
import { STARTER_DB } from './lowdb.js';

let db: Low<NFTModel[]>;
let db_block: Low<number>;

 export module Database {
     const __dirname = dirname(fileURLToPath(import.meta.url));

 export async function createConnection() {
    const file = join(__dirname, "../db.json");
    const file_block = join(__dirname, "../db_block.json");
    const adapter = new JSONFile<NFTModel[]>(file);
    const adapter_block = new JSONFile<number>(file_block);
    db = new Low(adapter);
    db_block = new Low(adapter_block);
    await db.read();
    await db_block.read();
    db.data ||= STARTER_DB;
    db_block.data ||= 0;
    db.write();
    db_block.write();
    console.log(`Database connection created at ${file} and ${file_block} with file_block: ${db_block.data}`);
    //console.log(db);
 }

    export function getConnection(): Low<NFTModel[]> {
        return db;
    }

    export function getBlock(): Low<number> {
        return db_block;
    }

    export async function getNFTId() {

    } 
}