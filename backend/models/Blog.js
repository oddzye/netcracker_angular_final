const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String, 
        required: true
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    comments: [
        {
            comment: {
                type: String,
            },
            commentator: {
                type: String
            }
        }
    ]

})

module.exports = mongoose.model('blog', blogSchema);