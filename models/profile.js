const mongoose = require('../lib/Database');

// Belongs_to user 1:1
// link: { github: 'http://github.com' }
const schema = {
  name: String,
  gender: Number,
  avatar: String,
  introduction: String,
  social_links: Object,
  contact: String,
};

const profileSchema = mongoose.Schema(schema);

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
