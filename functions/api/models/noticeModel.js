// *This file is created by Mohammad Yeasin Al Fahad

const db = require('../database');

class NoticeModel {
    constructor() {
        // implementing the class with Singleton design pattern
        if (this.instance) return this.instance;
        NoticeModel.instance = this;
    }

    get() { return db.getList('notices') }

    getById(id) { return db.get('notices', id) }

    update(id, notice) { return db.set('notices', id, notice) }

    create(notice) { return db.create("notices", notice) }

    delete(id) { return db.delete("notices", id) }

    getEventsOnly() { return db.getListByCond('notices','type','event') }

    getOfficialsOnly() { return db.getListByCond('notices','type','official') }
}

module.exports = new NoticeModel();