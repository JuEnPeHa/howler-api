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
const express_1 = require("express");
const functions_1 = require("../utils/functions");
class HowlerRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    getId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id /*: number*/ = yield functions_1.Functions.getNFTId();
            res.send(/*id: id*/ { id });
        });
    }
    routes() {
        this.router.get('/', (req, res) => res.send('Api: /api/ids'));
        this.router.get('/id', this.getId);
    }
}
const howlerRoutes = new HowlerRoutes();
howlerRoutes.routes();
exports.default = howlerRoutes.router;
