const express = require('express');

const router = express.Router();
const User = require('../models/user');
// const validator = require('validator');


/* Get Sign Up page */
router.get('/', (req, res) => {
  res.render('sign_up', { title: 'Sign Up' });
});

router.post('/', async (req, res) => {
  const isSignUp = 0;
  const email = req.body.email;
  const passwd = req.body.password;
  // validator.isEmail(email);

  await User.signUp(email, passwd);
  res.cookie('isSignUp', isSignUp + 1);
  res.render('index');
});

module.exports = router;
