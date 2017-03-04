const mongoose = require('../lib/Database');

const schema = {
  email: String,
  passwd: String
};

const userSchema = mongoose.Schema(schema);

const User = mongoose.model('User', userSchema);

module.exports = User;
