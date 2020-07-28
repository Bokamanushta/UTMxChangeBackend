// *This file is created by Mohammad Yeasin Al Fahad

const db = require('../database');

class PlaceModel {
    constructor() {
        // implementing the class with Singleton design pattern
        if (this.instance) return this.instance;
        PlaceModel.instance = this;
    }

    get() { return db.getList('places') }

    getById(id) { return db.get('places', id) }

    update(id, place) { return db.set('places', id, place) }

    create(place) { return db.create("places", place) }

    delete(id) { return db.delete("places", id) }
}

module.exports = new PlaceModel();