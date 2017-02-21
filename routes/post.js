const express = require('express');

const router = express.Router();

/* GET posts page. */
router.get('/', (req, res) => {
  res.render('post');
});

// create post
router.post('/', (req, res) => {
  res.render('post');
});

// edit post
router.put('/:id/edit', (req, res) => {
  res.render('post');
});

module.exports = router;
