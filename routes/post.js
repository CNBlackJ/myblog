const express = require('express');

const router = express.Router();

const postController = require('../controllers/post');
const Post = require('../models/post');

/* GET posts page. */
router.get('/', async (req, res) => {
  const posts = await Post.find({}, {'__v': 0, '_id': 0}).limit(10);
  res.render('posts', {posts: posts});
});

// get create post page
router.get('/create', (req, res) => {
  res.render('create_post');
});

// create post
router.post('/create', async (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;
  const published = Date.now();
  console.log(title, author, content, published);
  await Post.create({ title, content, author, published }, (err) => {
    if (err) return console.log(err);
    res.render('index');
  });
  res.render('create_post');
});

// edit post
router.put('/:id/edit', (req, res) => {
  res.render('edit_post');
});

module.exports = router;
