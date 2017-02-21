const express = require('express');

const router = express.Router();

const User = require('../lib/Database');

/* Get login page */
router.get('/', (req, res) => {
  if (req.cookies.logIn) {
    res.render('index');
  } else {
    res.render('login');
  }
});

router.post('/', async (req, res) => {
  const logIn = 0;
  const email = req.body.email;
  const passwd = req.body.password;
  const isRemember = req.body.isRemember;

  if (isRemember) {
    res.cookie('logIn', logIn + 1);
  }
  await User.find({ email, passwd }, (err, user) => {
    if (err) return console.log(err);
    res.render('index', { user });
  });
});

module.exports = router;
