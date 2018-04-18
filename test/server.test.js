const request = require('request');

const { client } = require('../server/db.js');

afterAll(() => {
  client.query('DELETE FROM tools WHERE id = 99999;');
});


test('get request should return an object with a rows array', (done) => {
  expect.assertions(1);
  request('http://127.0.0.1:3000/recipes/10', (err, response) => {
    expect(Array.isArray(JSON.parse(response.body))).toBe(true);
    done();
  });
});

test('post request should add a row to the tools table', (done) => {
  expect.assertions(1);
  request({
    method: 'POST',
    uri: 'http://127.0.0.1:3000/tools',
    form: {
      'id': 99999,
      'name': 'TEST tool',
      'description': 'TEST description',
      'manufacturer': 'TEST company',
      'price': 3.01,
      'imageUrls': '["https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-18.jpg","https://s3-us-west-1.amazonaws.com/kitchen-photos/images/image-1.jpg"]',
    },
  }, () => {
    client.query('SELECT * FROM tools WHERE id = 99999')
      .then((response) => {
        expect(response.rowCount).toBe(1);
        done();
      });
  });
});
