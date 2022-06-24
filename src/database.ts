 import { Low, JSONFile } from "lowdb";
 import {join, dirname} from "path";
 import { fileURLToPath } from "url";

let db: Low;

 export module Database {
     const __dirname = dirname(fileURLToPath(import.meta.url));

 export async function createConnection() {
    const file = join(__dirname, "../db.json");
    const adapter = new JSONFile(file);
    db = new Low(adapter);
    await db.read();
    db.data ||= { HowlerNfts: [] };
    db.write();
    console.log(db);
 }

    export function getConnection() {
        db
    }

    export async function getNFTId() {

    } 
}