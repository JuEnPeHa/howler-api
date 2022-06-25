export class BlockAccountModel {
    public constructor(
        public blockHeight: number,
        public account: string,
    ) {}

    public static fromJson(json: any): BlockAccountModel {
        return new BlockAccountModel(
            json.blockHeight,
            json.account,
        );
    }

    public toJson(): any {
        return {
            blockHeight: this.blockHeight,
            account: this.account,
        };
    }

    public static fromJsonArray(jsonArray: any[]): BlockAccountModel[] {
        return jsonArray.map(json => BlockAccountModel.fromJson(json));
    }

    public static toJsonArray(blockAccountArray: BlockAccountModel[]): any[] {
        return blockAccountArray.map(blockAccount => blockAccount.toJson());
    }
    
}