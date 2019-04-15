const Blog = require('../models/Blog')
const errorHandler = require('../utils/errorHandler')
const mongoConnection = require('../middleware/mongoConnection');


module.exports.getAll = (req, res) => {
    
// or 
   
    mongoConnection( async (db) => {
        try {
             await db.collection('blogs').find({}).toArray((err, blogs) => {
                res.json({success: true, blogs: blogs});
            });

        } 
        catch (e) {
            errorHandler(res, e);
        }
    })
   
    
}

module.exports.getById = (req, res) => {
    
}

module.exports.remove = (req, res) => {
    
}

module.exports.create = (req, res) => {
    mongoConnection( async (db) => {
        console.log("2");
        if(!req.body.title) {
            res.status(401).json({ success: false, message: 'Blog title is required.'});
        }
        else {
            if (!req.body.body) {
                res.json({success: false, messacge: "Blog body is required"});
            } 
            else {
                if (!req.body.createdBy) {
                    res.json({success: false, message: "Blog creator is required"});
                }
                else {
                    try {
                        const blog = await db.collection('blogs').insert(new Blog({
                            title: req.body.title,
                            body: req.body.body,
                            createdBy: req.body.createdBy
                        }), (err, result) => {
                            if (err) console.log(`Error creating user, ${err}`);
                            console.log("Blog created result ", result);
                            res.status(201).json(blog);
                        })
                    }
                    catch (e) {
                        errorHandler(res, e);
                    }
                    
                }
            }
        }
    })
    
    
}

module.exports.update = (req, res) => {
    `   `}