export class BlockAccountModel {
    constructor(blockHeight, account) {
        this.blockHeight = blockHeight;
        this.account = account;
    }
    static fromJson(json) {
        return new BlockAccountModel(json.blockHeight, json.account);
    }
    toJson() {
        return {
            blockHeight: this.blockHeight,
            account: this.account,
        };
    }
    static fromJsonArray(jsonArray) {
        return jsonArray.map(json => BlockAccountModel.fromJson(json));
    }
    static toJsonArray(blockAccountArray) {
        return blockAccountArray.map(blockAccount => blockAccount.toJson());
    }
}
