const express = require('express');
const { client, getRecipeTools, addTool } = require('./db.js');
const bodyParse = require('body-parser');

const server = express();

server.use('/', express.static('./public'));
server.use(bodyParse.urlencoded({extended: true}))


server.get('/recipes/:id', (req, res) => {
  getRecipeTools(req.params.id)
    .then(response => res.end(JSON.stringify(response.rows)))
    .catch(err => console.error(err));
});

server.post('/tools', (req, res) =>{
  addTool(req.body).then(() => res.end('done')).catch( err => { res.status(400); res.send(err); });
});

server.listen(3000, () => console.log('listening...'));
