const express = require('express');

const router = express.Router();
const User = require('../models/user');

/* Get login page */
router.get('/', (req, res) => {
  if (req.cookies.isSignUp) {
    res.render('login');
  } else {
    res.render('login');
  }
});

router.post('/', async (req, res) => {
  const email = req.body.email;
  const passwd = req.body.password;
  const isRemember = req.body.isRemember;

  const isLogin = await User.login(email, passwd);
  // res.render(isLogin ? 'index' : 'login');
  res.send(isLogin);
});

module.exports = router;
