const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('')
    .then(() => console.log("Mongo started"))
    .catch((err) => console.log(err));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/auth', authRoutes);
module.exports = app;