export class BlockModel {
    constructor(blockHeight) {
        this.blockHeight = blockHeight;
    }
    static fromJson(json) {
        return new BlockModel(json.blockHeight);
    }
    toJson() {
        return {
            blockHeight: this.blockHeight
        };
    }
    static fromJsonArray(jsonArray) {
        return jsonArray.map(json => BlockModel.fromJson(json));
    }
    static toJsonArray(blockArray) {
        return blockArray.map(block => block.toJson());
    }
}
