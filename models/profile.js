const mongoose = require('../lib/Database');

// Belongs_to user 1:1
const schema = {
  name: String,
  gender: Number,
  avatar: String,
  introduction: String,
  social_link1: Object,
  social_link2: Object,
  social_link3: Object,
  social_link4: Object,
  contact: String,
};

const profileSchema = mongoose.Schema(schema);

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
