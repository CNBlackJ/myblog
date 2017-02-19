const Elasticsearch = require('elasticsearch');
const configES = require('../config/default').elasticsearch;
const uuid = require('uuid/v1');

const wm = new WeakMap();

const index = configES.index;
const type = configES.type;

class Database {
  constructor() {
    const db = new Elasticsearch.Client({
      host: '127.0.0.1:9200',
      log: 'trace',
    });
    wm.set(this, { db });
  }

  async set(instance, id = null) {
    const esInstance = {
      index,
      type,
      id: id === null ? uuid() : id,
      body: instance,
    };
    return wm.get(this).db.index(esInstance);
  }

  get(email, passwd) {
    // const instance = {
    //   index,
    //   type,
    //   body: {
    //     query: {
    //       filtered: {
    //         filter: {
    //           bool: {
    //             should: [
    //               { term: { email } },
    //               { term: { passwd } },
    //             ],
    //           },
    //         },
    //       },
    //     },
    //   },
    // };
    const instance = {
      index,
      type,
      query: {
        must: {
          email,
          passwd,
        },
      },
    };
    return wm.get(this).db.search(instance);
  }
}

module.exports = Database;
