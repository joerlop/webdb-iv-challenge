exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients_recipes", function(tbl) {
    tbl.increments();

    tbl
    .integer('recipes_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onDelete('RESTRICT') // explain how cascading works
    .onUpdate('CASCADE');

    tbl
    .integer('ingredients_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ingredients')
    .onDelete('RESTRICT') // explain how cascading works
    .onUpdate('CASCADE');

    tbl
    .float('quantity', 255)

    tbl
    .string('quantity_units', 255)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients_recipes");
};