const mongoose = require('../lib/Database');

const schema = {
  title: String,
  content: String,
  author: String,
  published: Boolean,
  createdDate: String,
};

const postSchema = mongoose.Schema(schema);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
