const app = require('../app');
const mongoClient = require('mongodb').MongoClient;
const keys = require('../config/keys');
const mongoConnection = (closure) => mongoClient.connect(keys.mongoURI, (err, client) => {
    if (err) return console.log(err);
    let db = client.db('share_knowledge');
    closure(db);
})
console.log(mongoConnection);
module.exports.login = (req, res) => {
    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    })
}

module.exports.register = (req, res) => {
    mongoConnection((db) => {
        db.collection("users").insert({
            email: req.body.email,
            password: req.body.password
        })
    })
    
    
}