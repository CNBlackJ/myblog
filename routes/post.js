const express = require('express');

const router = express.Router();
const moment = require('moment');
const marked = require('marked');

const checkLogin = require('../lib/check').checkLogin;
const Post = require('../models/post');

/* GET posts page. */
router.get('/', async (req, res) => {
  const posts = await Post.find({}, { __v: 0 }).limit(10);
  const isAdmin = !!req.cookies.user;
  res.render('posts', { posts, isAdmin });
});

// get create post page
router.get('/create', checkLogin, (req, res) => {
  const notify = { info: `Let's very welcome: ${req.cookies.user}`, pos: 'top-center', status: 'success' };
  res.render('create_post', { notify });
});

// create post
router.post('/create', checkLogin, (req, res) => {
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
    post.content = marked(post.content);
    res.render('show_post', { post });
  });
});

// get edit post page
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  Post.find({ _id: id }, { __V: 0 }, (err, result) => {
    if (err) res.send(err.message);
    const post = result[0]._doc;
    res.render('edit_post', { post });
  });
});

// edit post
router.post('/:id/edit', (req, res) => {
  const id = req.params.id;
  Post.find({ _id: id }, { __V: 0 }, (err, result) => {
    const post = result[0]._doc;
    post.content = marked(post.content);
    res.render('show_post', { post });
  });
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
