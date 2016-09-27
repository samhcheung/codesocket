var express = require('express');
var router = express.Router();



//This is the router for /api/*
router.get('/createdoc', function (req, res) {
  res.send('This is the endpoint to create a doc');

})

router.get('/joindoc', function (req, res) {
  res.send('This is the endpoint to join a doc');

})



module.exports = router;