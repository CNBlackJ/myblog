const Database = require('../lib/Database');
const Utils = require('../lib/Utils');

const dbClient = new Database();

class User {
  static async login(email, passwd) {
    const blog = await dbClient.get(email, passwd);
    return Utils.getSource(blog);
  }

  static async signUp(email, passwd) {
    const esInstance = {
      email,
      passwd,
    };
    return dbClient.set(esInstance);
  }
}

module.exports = User;
