const express = require('express');

const router = express.Router();

const checkLogin = require('../lib/check').checkLogin;
const Profile = require('../models/profile');

// get create profile page
router.get('/update', (req, res) => {
  // const id = req.cookies.user;
  const id = '58c16cc72e71cb54c19d96e2';

  Profile.findOne({ _id: id }, (err, profile) => {
    if (err) res.send(err);
    res.render('update_profile', { profile });
  });
});

// create profile
router.post('/update', checkLogin, (req, res) => {
  const formValue = req.body;
  // const id = req.cookies.user;
  const id = '58c16cc72e71cb54c19d96e2';
  const profile = {
    name: formValue.name,
    gender: formValue.gender,
    introduction: formValue.introduction,
    'social_links.github': formValue.github,
    'social_links.wechat': formValue.wechat,
    'social_links.twitter': formValue.twitter,
    'social_links.facebook': formValue.facebook,
    contact: formValue.contact,
  };

  Profile.update({ _id: id }, { $set: profile }, (err) => {
    if (err) res.send(err.message);
  });
});

// edit profile
router.put('/:id/edit', (req, res) => {
  res.render('edit_profile');
});

module.exports = router;
