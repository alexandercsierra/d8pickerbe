exports.up = function(knex) {
    return knex.schema.createTable('templates', tbl => {
        tbl.increments();
        tbl.string('googleId', 32).notNullable().index();
        tbl.string('summary', 128).notNullable().index();
        tbl.string('description', 120);
        tbl.string('starttime', 8).notNullable().index();
        tbl.string('endtime', 8).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('templates')
};