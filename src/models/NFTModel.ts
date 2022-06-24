export class NFTModel {
    public constructor(
        public id: number,
        public name: string,
        public description: string,
        public image: string,
        public owner: string,
        public price: number,
        public createdAt: Date,
        public updatedAt: Date,
        public sold: boolean,
        public separated: boolean,
        public separatedAt: Date,
        public separatedBy: string,
    ) {}

    public static fromJson(json: any): NFTModel {
        return new NFTModel(
            json.id,
            json.name,
            json.description,
            json.image,
            json.owner,
            json.price,
            new Date(json.createdAt),
            new Date(json.updatedAt),
            json.sold,
            json.separated,
            new Date(json.separatedAt),
            json.separatedBy,
        );
    }

    public toJson(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            image: this.image,
            owner: this.owner,
            price: this.price,
            createdAt: this.createdAt.toISOString(),
            updatedAt: this.updatedAt.toISOString(),
            sold: this.sold,
            separated: this.separated,
            separatedAt: this.separatedAt.toISOString(),
            separatedBy: this.separatedBy,
        };
    }

    public static fromJsonArray(jsonArray: any[]): NFTModel[] {
        return jsonArray.map(json => NFTModel.fromJson(json));
    }

    public static toJsonArray(nftArray: NFTModel[]): any[] {
        return nftArray.map(nft => nft.toJson());
    }

}