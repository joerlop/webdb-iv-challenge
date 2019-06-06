
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Carne'},
        {name: 'Pollo'},
        {name: 'Pescado'},
        {name: 'Tortillas'},
        {name: 'Carbon'},
        {name: 'Salsa pastor'},
        {name: 'Salsa horno'},
        {name: 'Salsa carbon'}
      ]);
    });
};
