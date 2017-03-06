const express = require('express');

const router = express.Router();

const checkLogin = require('../lib/check').checkLogin;
const Profile = require('../models/profile');

// get create profile page
router.get('/create', checkLogin, (req, res) => {
  res.render('create_profile');
});

// create profile
router.post('/create', checkLogin, (req, res) => {
  res.redirect('/');
});

// edit profile
router.put('/:id/edit', (req, res) => {
  res.render('edit_profile');
});

module.exports = router;
