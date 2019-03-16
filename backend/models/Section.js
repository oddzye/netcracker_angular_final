const mongoose = require('mongoose');
const Article = require('../models/Article');
const Schema = mongoose.Schema;

const sectionSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    articles: [
        Article
    ],

})

module.exports = mongoose.model('section', sectionSchema);

