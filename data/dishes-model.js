const db = require('./dbConfig');

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
}

function getDish(id) {
  return db("dishes")
    .where({ "dishes.id": id })
    .join("recipes", { "dishes.id": "recipes.dish_id" })
    .select("dishes.id as dish_id", "dishes.name as dish", "recipes.name as recipe");
}

function getRecipes() {
  return db("recipes")
    .join("dishes", { "dishes.id": "recipes.dish_id" })
    .select("recipes.id", "recipes.name as recipe", "dishes.name as dish");
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe)
}