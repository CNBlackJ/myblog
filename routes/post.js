const express = require('express');

const router = express.Router();

const Post = require('../models/post');

/* GET posts page. */
router.get('/', async (req, res) => {
  const posts = await Post.find({}, { __v: 0 }).limit(10);
  res.render('posts', { posts });
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
  const post = { title, content, author, published };
  const isCreated = await Post.create(post, (err) => {
    if (err) return false;
    return true;
  });
  if (isCreated) {
    res.render('show_post', { post });
  } else {
    res.render('create_post');
  }
});

// show post
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const post = await Post.find({ _id: id }, { __V: 0 });
  res.render('show_post', { post: post[0]._doc });
});

// edit post
router.put('/:id/edit', (req, res) => {
  res.render('edit_post');
});

module.exports = router;
