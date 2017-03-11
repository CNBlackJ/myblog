const express = require('express');
const _ = require('lodash');

const router = express.Router();
const Profile = require('../models/profile');
const User = require('../models/user');

// GET home page.
router.get('/', (req, res) => {
  // const id = req.cookies.user;
  const id = '58c16cc72e71cb54c19d96e2';
  Profile.findOne({ _id: id }, (err, profile) => {
    if (err) res.send(err);
    res.render('index', { profile });
  });
});

// Get signin page
router.get('/signin', (req, res) => {
  if (req.cookies.user) res.redirect('/');
  res.render('signin');
});

// check signin info
router.post('/signin', (req, res) => {
  const email = req.body.email;
  const passwd = req.body.password;
  const isRemember = req.body.isRemember;

  User.findOne({ email, passwd }, (err, user) => {
    if (err || _.isEmpty(user)) res.render('signin');
    if (isRemember) res.cookie('user', user._id);
    res.redirect('/');
  });
});

// Get Sign Up page
router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign Up' });
});

// register a new user
router.post('/signup', (req, res) => {
  const formValue = req.body;
  const user = {
    name: formValue.name,
    email: formValue.email,
    passwd: formValue.password,
  };

  User.create(user, (err, response) => {
    if (err) res.send(err.message);
    res.cookie('user', response._id);
    res.redirect('/');
  });
});

module.exports = router;
