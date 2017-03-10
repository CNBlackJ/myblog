const express = require('express');

const router = express.Router();

const checkLogin = require('../lib/check').checkLogin;
const Profile = require('../models/profile');

// get create profile page
router.get('/update', (req, res) => {
  // TODO: find user document(not profile table)
  // const id = req.cookies.user;
  const id = '58c16cc72e71cb54c19d96e2';
  Profile.findOne({ _id: id }, (err, profile) => {
    if (err) res.send(err);
    res.render('update_profile', { profile });
  });
});

// create profile
router.post('/create', checkLogin, (req, res) => {
  const formValue = req.body;
  const profile = {
    name: formValue.name,
    gender: formValue.gender,
    introduction: formValue.introduction,
    social_links: {
      github: formValue.github,
      wechat: formValue.wechat,
      twitter: formValue.twitter,
      facebook: formValue.facebook,
    },
    contact: formValue.contact,
  };

  const query = { _id: req.cookies.user };
  // TODO: Should be fixed
  Profile.update(query, { $set: { profile } }, (err, result) => {
    if (err) res.send(err);
    console.log(result);
    res.render('index');
  });
});

// edit profile
router.put('/:id/edit', (req, res) => {
  res.render('edit_profile');
});

module.exports = router;
