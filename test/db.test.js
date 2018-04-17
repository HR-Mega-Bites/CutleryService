const { client, getRecipeTools, addTool } = require('../server/db.js');

afterAll(() => {
  client.query('DELETE FROM tools WHERE id = 99999;');
});


test('getRecipeTools should return an object with a rows array', async () => {
  expect.assertions(1);
  let data = await getRecipeTools(10);
  return expect(Array.isArray(data.rows)).toBe(true);
});

test('addTool should add a row to the tools table', async () => {
  expect.assertions(1);
  const data = {
    'id': 99999,
    'name': 'TEST tool',
    'description': 'TEST description',
    'manufacturer': 'TEST company',
    'price': 3.01,
    'imageUrls': '["https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-18.jpg","https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-1.jpg"]'
  };
  const queryData = await addTool(data).then(client.query('SELECT * FROM tools WHERE id = 99999'));
  return expect(queryData.rowCount).toBe(1);
});
