// Manage Roles (id, name)
const express = require('express');
const helmet = require('helmet');

const db = require("./data/dishes-model")

const server = express();

server.use(helmet());
server.use(express.json());

// list all roles

server.post('/api/dishes', (req, res) => {
  db.addDish(req.body)
  .then(ids => {
      res.status(201).json(ids)
  }).catch(err => {
    res.status(500).json(err)
  })
});

server.get('/api/dishes', (req, res) => {
  db.getDishes()
  .then(dishes => {
      res.status(201).json(dishes)
  }).catch(err => {
    res.status(500).json(err)
  })
});

server.get('/api/dishes/:id', (req, res) => {
  db.getDish(req.params.id)
  .then(dish => {
      res.status(200).json(dish)
  }).catch(err => {
    res.status(500).json(err)
  })
});

server.get('/api/recipes', (req, res) => {
  db.getRecipes()
  .then(recipes => {
      res.status(201).json(recipes)
  }).catch(err => {
    res.status(500).json(err)
  })
});

server.post('/api/recipes', (req, res) => {
  db.addRecipe(req.body)
  .then(ids => {
      res.status(201).json(ids)
  }).catch(err => {
    res.status(500).json(err)
  })
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
