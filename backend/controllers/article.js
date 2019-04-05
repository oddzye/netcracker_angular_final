const mongoConnection = require('../middleware/mongoConnection');
const errorHandler = require('../utils/errorHandler');
const Article = require('../models/Article');
module.exports.getAll = (req, res) => {
   
}

module.exports.getById = (req, res) => {
    
}

module.exports.remove = (req, res) => {
    
}

module.exports.create = (req, res) => {
    mongoConnection(async (db) => {
        try {
            const article = await db.collection("articles").insert(new Article({
                title: req.body.title,
                text: req.body.text,
                user: req.body.user
            }), (err, result) => {
                if (err) console.log(`Creating acticle error, ${err}`);
                console.log("Article created with result", result);
                res.status(201).json(article);
            })
        }
        catch (e) {
            errorHandler(res, e);
        }
    })
}

module.exports.update = (req, res) => {
    
}