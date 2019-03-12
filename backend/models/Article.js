const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/User')

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    user: {
        type: User
    },
    
});

module.exports = mongoose.model('article', articleSchema);