class Product {
    constructor (name, description, code, thumbnail, price, stock, id){
        this.name = name,
        this.description = description,
        this.code = code,
        this.thumbnail = thumbnail;
        this.price = parseFloat(price),
        this.stock = parseInt(stock)
        this.id = parseInt(id)

    }
}

export default Product;