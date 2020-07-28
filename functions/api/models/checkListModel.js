// *This file is created by Mohammad Yeasin Al Fahad

const db = require('../database');

class CheckListModel {
    constructor() {
        // implementing the class with Singleton design pattern
        if (this.instance) return this.instance;
        CheckListModel.instance = this;
    }

    get() { return db.getList('checkLists') }

    getById(id) { return db.get('checkLists', id) }

    update(id, checkList) { return db.set('checkLists', id, checkList) }

    create(checkList) { return db.create("checkLists", checkList) }

    delete(id) { return db.delete("checkLists", id) }

    getPersonalChecklists() {return db.getListByCond('checkLists','type','personal')}

    getDocumentChecklists() {return db.getListByCond('checkLists','type','documents')}

    getTipChecklists() {return db.getListByCond('checkLists','type','tips')}
}

module.exports = new CheckListModel();