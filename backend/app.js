const express = require('express');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/article');
const bodyParser = require('body-parser');
const app = express();


app.use(passport.initialize());
require('./middleware/passport')(passport)
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/article', articleRoutes);



module.exports = app;
