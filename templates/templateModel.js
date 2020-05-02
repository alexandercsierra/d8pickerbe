module.exports = {
    add,
    findBy,
    getAll,
    remove
}

const db = require('../data/db-config');

function add(user){
    return db('templates').insert(user).returning('*')
}

function findBy(filter){
    return db('templates').where(filter).returning('*')
}

function getAll(){
    return db('templates').returning('*')
}

function remove (id){
    return db('templates').where({id}).del().returning('*')
}