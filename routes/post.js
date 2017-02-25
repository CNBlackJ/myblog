const express = require('express');

const router = express.Router();

const postController = require('../controllers/post');

/* GET posts page. */
router.get('/', (req, res) => {
  res.render('posts');
});

// get create post page
router.get('/create', (req, res) => {
  res.render('create_post');
});

// create post
router.post('/', (req, res) => {
  res.render('create_post');
});

// edit post
router.put('/:id/edit', (req, res) => {
  res.render('edit_post');
});

module.exports = router;
