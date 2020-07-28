// *This file is created by Mohammad Yeasin Al Fahad

const db = require('../database');

class StudentModel {
    constructor() {
        // implementing the class with Singleton design pattern
        if (this.instance) return this.instance;
        StudentModel.instance = this;
    }

    get() { return db.getList('students') }

    getById(id) { return db.get('students', id) }

    update(id, student) { return db.set('students', id, student) }

    create(student) { return db.create("students", student) }

    delete(id) { return db.delete("students", id) }

    getBySemester(value) { return db.getListByCond('students','semester',value) }

    login(username,password) { return db.verifyLogin('students',username,password) }

    getUserName(value) { return db.getListByCond('students','username',value) }

    verifyPassword(value) { return db.getListByCond('students','password',value)}
}

module.exports = new StudentModel();