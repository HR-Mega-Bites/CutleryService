const faker = require('faker');
const fs = require('fs');
const pg = require('pg');
// const copyFrom = require('pg-copy-streams').from;

const recipeRow = function recipeRow(id) {
  return `${id},${faker.lorem.words()}
`;
};

const toolRow = function toolRow(id) {
  const urlArray = [];
  const num = Math.floor(Math.random() * 4);
  for (let i = 0; i < num; i++) {
    urlArray.push('"https://source.unsplash.com/random"');
  }

  return `${id},${faker.commerce.productName()},${faker.lorem.sentences()},${faker.company.companyName()},${faker.commerce.price()},{${urlArray.join()}}
`;
};

const joinRow = function joinRow() {
  const randomId = () => Math.floor(Math.random() * 100);
  return `${faker.random.number()},${randomId()},${randomId()}
`;
};

const writeOneTable = function writeOneTable(dataNumber, stream, dataGen) {
  let loop = dataNumber;
  const writer = function writer() {
    let ok = true;
    do {
      loop--;
      if (loop === 0) {
        stream.write(dataGen(loop), 'utf8');
      } else {
        ok = stream.write(dataGen(loop), 'utf8');
      }
    } while (loop > 0 && ok);
    if (loop > 0) {
      stream.once('drain', writer);
    }
  };
  writer();
};

const createTestFile = function createTestFile(filename, dataGen) {
  const stream = fs.createWriteStream(filename, { flags: 'a' });
  writeOneTable(100, stream, dataGen);
  stream.on('finish', () => stream.end());
};

const createTestDataSet = function createTestDataSet() {
  createTestFile('seed/testRecipe.txt', recipeRow);
  createTestFile('seed/testTools.txt', toolRow);
  createTestFile('seed/testJoin.txt', joinRow);
}


// const pipeToDB = function (db, file) {
//   pg.connect((err, client, done) => {
//     let stream = client.query(copyFrom('COPY my_table FROM STDIN'));
//     let fileStream = fs.createReadStream('some_file.tsv');
//     fileStream.on('error', done);
//     stream.on('error', done);
//     stream.on('end', done);
//     fileStream.pipe(stream);
//   });
// };

createTestDataSet();
