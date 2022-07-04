var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Low, JSONFile } from "lowdb";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { STARTER_DB } from './lowdb.js';
let db;
let db_block;
export var Database;
(function (Database) {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    function createConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const file = join(__dirname, "../db.json");
            const file_block = join(__dirname, "../db_block.json");
            const adapter = new JSONFile(file);
            const adapter_block = new JSONFile(file_block);
            db = new Low(adapter);
            db_block = new Low(adapter_block);
            yield db.read();
            yield db_block.read();
            db.data || (db.data = STARTER_DB);
            db_block.data || (db_block.data = 0);
            db.write();
            db_block.write();
            console.log(`Database connection created at ${file} and ${file_block} with file_block: ${db_block.data}`);
            //console.log(db);
        });
    }
    Database.createConnection = createConnection;
    function getConnection() {
        return db;
    }
    Database.getConnection = getConnection;
    function getBlock() {
        return db_block;
    }
    Database.getBlock = getBlock;
    function getNFTId() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    Database.getNFTId = getNFTId;
})(Database = Database || (Database = {}));
