export class NFTModel {
    constructor(id, name, description, image, owner, price, createdAt, updatedAt, sold, separated, separatedAt, separatedBy) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.owner = owner;
        this.price = price;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.sold = sold;
        this.separated = separated;
        this.separatedAt = separatedAt;
        this.separatedBy = separatedBy;
    }
    static fromJson(json) {
        return new NFTModel(json.id, json.name, json.description, json.image, json.owner, json.price, new Date(json.createdAt), new Date(json.updatedAt), json.sold, json.separated, json.separatedAt, json.separatedBy);
    }
    toJson() {
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
            separatedAt: this.separatedAt,
            separatedBy: this.separatedBy,
        };
    }
    static fromJsonArray(jsonArray) {
        return jsonArray.map(json => NFTModel.fromJson(json));
    }
    static toJsonArray(nftArray) {
        return nftArray.map(nft => nft.toJson());
    }
}
