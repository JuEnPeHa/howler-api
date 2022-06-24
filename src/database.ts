 import { Low, JSONFile } from "lowdb";
 import {join, dirname} from "path";
 import { fileURLToPath } from "url";
import { NFTModel } from './models/NFTModel.js';

let db: Low<NFTModel[]>;

 export module Database {
     const __dirname = dirname(fileURLToPath(import.meta.url));

 export async function createConnection() {
    const file = join(__dirname, "../db.json");
    const adapter = new JSONFile<NFTModel[]>(file);
    db = new Low(adapter);
    await db.read();
    db.data ||= [];
    db.write();
    console.log(db);
 }

    export function getConnection(): Low<NFTModel[]> {
        return db;
    }

    export async function getNFTId() {

    } 
}