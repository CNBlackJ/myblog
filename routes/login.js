const express = require('express');

const router = express.Router();
const User = require('../models/user');

/* Get login page */
router.get('/', (req, res) => {
  if (req.cookies.user) res.redirect('/');
  res.render('login');
});

router.post('/', (req, res) => {
  const email = req.body.email;
  const passwd = req.body.password;
  const isRemember = req.body.isRemember;

  if (isRemember) {
    res.cookie('user', email);
  }
  User.find({ email, passwd }, (err, user) => {
    if (err) res.send(err.message);
    res.render('index', { user });
  });
});

module.exports = router;
