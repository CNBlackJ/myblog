const express = require('express');

const router = express.Router();
const moment = require('moment');

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
router.post('/create', (req, res) => {
  const title = req.body.title;
  const author = 'Black_J';
  const content = req.body.content;
  const published = req.body.published;
  const createdDate = moment(Date.now()).format('MMM Do YYYY');
  const post = { title, content, author, published, createdDate };
  Post.create(post, (err, result) => {
    if (err) res.send(err.message);
    res.redirect(`/posts/${result._id}`);
  });
});

// show post
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Post.find({ _id: id }, { __V: 0 }, (err, result) => {
    const post = result[0]._doc;
    res.render('show_post', { post });
  });
});

// edit post
router.put('/:id/edit', (req, res) => {
  res.render('edit_post');
});

// delete post
router.get('/:id/delete', async (req, res) => {
  const id = req.params.id;
  Post.findByIdAndRemove(id, (err) => {
    if (err) res.send(err.message);
    res.redirect('/posts');
  });
});

module.exports = router;
