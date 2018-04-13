const express = require('express');
const {client, getRecipeTools} = require('./db.js');
// const bodyParse = require('body-parse');

const server = express();

server.use(express.static(__dirname + '/public'));

server.get('/recipes/:id', (req, res) => {
  getRecipeTools(req.params.id)
    .then(response => res.end(JSON.stringify(response.rows)))
    .catch(err => console.log(err));
})

server.listen(3000, ()=>console.log('listening...'));
