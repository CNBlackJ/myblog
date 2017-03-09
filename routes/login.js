const express = require('express');

const router = express.Router();
const User = require('../models/user');
const _ = require('lodash');

/* Get login page */
router.get('/', (req, res) => {
  if (req.cookies.user) res.redirect('/');
  res.render('login');
});

router.post('/', (req, res) => {
  const email = req.body.email;
  const passwd = req.body.password;
  const isRemember = req.body.isRemember;

  User.findOne({ email, passwd }, (err, user) => {
    if (err || _.isEmpty(user)) res.render('login');
    if (isRemember) res.cookie('user', user._id);
    res.redirect('/');
  });
});

module.exports = router;
