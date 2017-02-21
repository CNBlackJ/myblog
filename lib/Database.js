const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blog');

const db = mongoose.connection;
db.on('error', console.error.bind(console, '连接错误'));
db.once('open', () => {
  console.log('Success to connect MongoDB.');
});

const userSchema = mongoose.Schema({
  email: String,
  passwd: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
/*
{
  email: String,
  passwd: Strings
}
 */
