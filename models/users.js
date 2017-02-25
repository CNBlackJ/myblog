const mogoose = require('../lib/Database');

const chema = {
  email: String,
  passwd: String
};

const userSchema = mongoose.Schema(schema);

const User = mongoose.model('User', userSchema);

module.exports = User;
