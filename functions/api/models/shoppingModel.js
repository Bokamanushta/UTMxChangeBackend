// *This file is created by Mohammad Yeasin Al Fahad

const db = require('../database');

class ShoppingModel {
    constructor() {
        // implementing the class with Singleton design pattern
        if (this.instance) return this.instance;
        ShoppingModel.instance = this;
    }

    get() { return db.getList('shops') }

    getById(id) { return db.get('shops', id) }

    update(id, shop) { return db.set('shops', id, shop) }

    create(shop) { return db.create("shops", shop) }

    delete(id) { return db.delete("shops", id) }
}

module.exports = new ShoppingModel();