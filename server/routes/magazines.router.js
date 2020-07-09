const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('In /magazines GET');

  let queryText = `SELECT * FROM "magazines" ORDER BY "title" ASC;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`error in GET /magazines ${error}`);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log(`In /magazines POST with`, req.body);

  const magazineToAdd = req.body;
  const queryText = `INSERT INTO "magazines" ("title", "issue_number", "pages")
                      VALUES ($1, $2, $3);`;
  pool
    .query(queryText, [
      magazineToAdd.title,
      magazineToAdd.issue_number,
      magazineToAdd.pages,
    ])
    .then((responseFromDatabase) => {
      console.log(responseFromDatabase);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error in POST /magazines ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
