
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: "Al Pastor", instructions: "Con mucho cuidado", dish_id: 11 },
        {name: 'Al horno', instructions: "Muy despacio, 2", dish_id: 12 },
        {name: 'Al horno', instructions: "Muy despacio, 3", dish_id: 13 },
        {name: 'Al carbon', instructions: "Con mucho carbon, 2", dish_id: 12 }
      ]);
    });
};
