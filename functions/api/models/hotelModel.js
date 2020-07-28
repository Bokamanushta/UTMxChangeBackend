// *This file is created by Mohammad Yeasin Al Fahad

const db = require('../database');

class HotelModel {
    constructor() {
        // implementing the class with Singleton design pattern
        if (this.instance) return this.instance;
        HotelModel.instance = this;
    }

    get() { return db.getList('hotels') }

    getById(id) { return db.get('hotels', id) }

    update(id, hotel) { return db.set('hotels', id, hotel) }

    create(hotel) { return db.create("hotels", hotel) }

    delete(id) { return db.delete("hotels", id) }
}

module.exports = new HotelModel();