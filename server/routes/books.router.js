const express = require('express');
const router = express.Router();
const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
  database: 'bookstore',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
});

router.get('/', (req, res) => {
  console.log('In /books GET');

  let queryText = `SELECT * FROM "books" ORDER BY "title" ASC;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`error in GET /books ${error}`);
      res.sendStatus(500);
    });
});
module.exports = router;
