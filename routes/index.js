const express = require('express');

const router = express.Router();

const indexController = require('../controller/index');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
