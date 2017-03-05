const express = require('express');

const router = express.Router();

const User = require('../models/user');

/* Get Sign Up page */
router.get('/', (req, res) => {
  res.render('sign_up', { title: 'Sign Up' });
});

router.post('/', (req, res) => {
  const logIn = 0;
  const email = req.body.email;
  const passwd = req.body.password;

  User.create({ email, passwd }, (err) => {
    if (err) res.send(err.message);
    res.cookie('logIn', logIn + 1);
    res.render('index');
  });
});

module.exports = router;
