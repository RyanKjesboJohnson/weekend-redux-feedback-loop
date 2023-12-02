const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    console.log("received a post request with the following object:");
    console.log(req.body);
    let sqlQueryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `
    pool.query(sqlQueryText,[
      req.body.feelingReducer,
      req.body.understandingReducer,
      req.body.supportReducer,
      req.body.commentsReducer
    ])
      .then((dbResult) => {
        res.sendStatus(201)
      })
      .catch((dbError) => {
        console.log('POST /feedback SQL query failed:', dbError)
        res.sendStatus(500)
      })})



// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;