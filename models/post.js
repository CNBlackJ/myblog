const mongoose = require('../lib/Database');

const schema = {
  title: string,
  content: text,
  author: string,
  published: date
};

const postSchema = mongoose.Schema({ schema });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
