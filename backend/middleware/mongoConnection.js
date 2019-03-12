const mongoClient = require('mongodb').MongoClient;
const keys = require('../config/keys');

module.exports = (closure) => mongoClient.connect(keys.mongoURI, (err, client) => {
    if (err) return console.log(err);
    let db = client.db('share_knowledge');
    closure(db);
})