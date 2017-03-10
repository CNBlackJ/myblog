const express = require('express');

const router = express.Router();
const Profile = require('../models/profile');

/* GET home page. */
router.get('/', (req, res) => {
  // const id = req.cookies.user;
  const id = '58c16cc72e71cb54c19d96e2';
  Profile.findOne({ _id: id }, (err, profile) => {
    if (err) res.send(err);
    res.render('index', { profile });
  });
});

module.exports = router;
