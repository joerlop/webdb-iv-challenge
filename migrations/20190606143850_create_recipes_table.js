exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(tbl) {
    tbl.increments();

    tbl.string("name").notNullable();

    tbl.string("instructions", 5000).notNullable();

    tbl
    .integer('dish_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('dishes')
    .onDelete('RESTRICT') // explain how cascading works
    .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
