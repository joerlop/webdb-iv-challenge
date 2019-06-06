
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_recipes').insert([
        {recipes_id: 1, ingredients_id: 1, quantity: 100, quantity_units: "grams"},
        {recipes_id: 1, ingredients_id: 4, quantity: 5, quantity_units: "units"},
        {recipes_id: 1, ingredients_id: 6, quantity: 300, quantity_units: "grams"},
        {recipes_id: 2, ingredients_id: 3, quantity: 100, quantity_units: "grams"},
        {recipes_id: 2, ingredients_id: 4, quantity: 5, quantity_units: "units"},
        {recipes_id: 2, ingredients_id: 7, quantity: 300, quantity_units: "grams"},
        {recipes_id: 2, ingredients_id: 2, quantity: 100, quantity_units: "grams"},
        {recipes_id: 2, ingredients_id: 4, quantity: 5, quantity_units: "units"},
        {recipes_id: 2, ingredients_id: 7, quantity: 300, quantity_units: "grams"},
        {recipes_id: 4, ingredients_id: 3, quantity: 100, quantity_units: "grams"},
        {recipes_id: 4, ingredients_id: 4, quantity: 5, quantity_units: "units"},
        {recipes_id: 4, ingredients_id: 8, quantity: 300, quantity_units: "grams"},
      ]);
    });
};
