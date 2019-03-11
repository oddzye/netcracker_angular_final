
const mongoClient = require('mongodb').MongoClient;
const keys = require('../config/keys');
const User = require('../models/User');

const mongoConnection = (closure) => mongoClient.connect(keys.mongoURI, (err, client) => {
    if (err) return console.log(err);
    let db = client.db('share_knowledge');
    closure(db);
})

module.exports.login = (req, res) => {
    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    })
}

module.exports.register = (req, res) => {
    // mongoConnection((db) => {

    // })
     mongoConnection(async (db) => {
        const candidate = await db.collection("users").findOne({email: req.body.email});
        console.log(candidate);
        if (candidate) {
            res.status(409).json({
                message: "Пользователь с таким email уже существует"
            })
        }   
        else {
       const user = await db.collection("users").insert(new User({
            email: req.body.email,
            password: req.body.password
        }), (err, result) => {
            if (err) console.log(`Error register user, ${err}`);
            console.log("User register result ", result);
            res.status(201).json(user);
        })
        }    
    })
}