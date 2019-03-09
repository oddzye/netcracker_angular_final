const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/auth', authRoutes);
module.exports = app;