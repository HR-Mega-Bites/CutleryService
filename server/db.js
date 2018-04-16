const {Client} = require('pg');

const client = new Client({
  database: 'megabites',
  user: 'jane',
});

client.connect()
  .catch(err => console.log(err));

const getRecipeTools = function (id) {
  const query = {
    text: `SELECT tools.id, tools.name, tools.description, tools.manufacturer, tools.price, tools.imageURLs
          FROM tools INNER JOIN recipe_tool ON tools.id = recipe_tool.id_tool where recipe_tool.id_recipe = $1;`,
    values: [id],
  };
  return client.query(query);
} 

const addTool = function({id, name, description, manufacturer, price, imageUrls}){
  imageUrls = JSON.parse(imageUrls);
  const query = {
    text: 'INSERT INTO tools (id, name, description, manufacturer, price, imageUrls) VALUES ($1, $2, $3, $4, $5,$6);',
    values: [id, name, description, manufacturer, price, imageUrls]
  }
  return client.query(query);
}


module.exports.getRecipeTools = getRecipeTools;
module.exports.client = client;
module.exports.addTool = addTool;
