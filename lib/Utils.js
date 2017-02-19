class Utils {
  static getSource(blog) {
    const total = blog.hits.total;
    if (total === 1) {
      return blog.hits.hits[0]._source;
    }
    return false;
  }
}

module.exports = Utils;
