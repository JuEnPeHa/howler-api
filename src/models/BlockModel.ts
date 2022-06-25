export class BlockModel {
    public constructor(
        public blockHeight: number
    ) {}

    public static fromJson(json: any): BlockModel {
        return new BlockModel(
            json.blockHeight
        );
    }

    public toJson(): any {
        return {
            blockHeight: this.blockHeight
        };
    }

    public static fromJsonArray(jsonArray: any[]): BlockModel[] {
        return jsonArray.map(json => BlockModel.fromJson(json));
    }

    public static toJsonArray(blockArray: BlockModel[]): any[] {
        return blockArray.map(block => block.toJson());
    }

}