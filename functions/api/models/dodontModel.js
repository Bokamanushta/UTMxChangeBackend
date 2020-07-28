// *This file is created by Mohammad Yeasin Al Fahad

const db = require('../database');

class DoDontModel {
    constructor() {
        // implementing the class with Singleton design pattern
        if (this.instance) return this.instance;
        DoDontModel.instance = this;
    }

    get() { return db.getList('doDonts') }

    getById(id) { return db.get('doDonts', id) }

    update(id, doDont) { return db.set('doDonts', id, doDont) }

    create(doDont) { return db.create("doDonts", doDont) }

    delete(id) { return db.delete("doDonts", id) }
}

module.exports = new DoDontModel();