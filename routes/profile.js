const express = require('express');

const router = express.Router();

const checkLogin = require('../lib/check').checkLogin;
const Profile = require('../models/profile');

// get create profile page
router.get('/update', (req, res) => {
  res.render('update_profile');
});

// create profile
router.post('/create', checkLogin, (req, res) => {
  const formValue = req.body;
  const profile = {
    name: formValue.name,
    gender: formValue.gender,
    introduction: formValue.introduction,
    social_link1: formValue.link_one,
    social_link2: formValue.link_two,
    social_link3: formValue.link_three,
    social_link4: formValue.link_four,
    contact: formValue.contact,
  };

  Profile.create(profile, (err) => {
    if (err) res.send(err.message);
    res.render('index');
  });
});

// edit profile
router.put('/:id/edit', (req, res) => {
  res.render('edit_profile');
});

module.exports = router;
