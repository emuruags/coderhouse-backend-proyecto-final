class Cart {
    constructor (id, timestamp, products = [], total) {
        this.id = parseInt(id),
        this.timestamp = timestamp,
        this.products = products,
        this.total = parseFloat(total) 
    }    
}

export default Cart;