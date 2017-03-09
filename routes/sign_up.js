const express = require('express');

const router = express.Router();

const User = require('../models/user');

/* Get Sign Up page */
router.get('/', (req, res) => {
  res.render('sign_up', { title: 'Sign Up' });
});

router.post('/', (req, res) => {
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
