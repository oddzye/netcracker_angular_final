const express = require('express');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const blogsRoutes = require('./routes/blogs');
const bodyParser = require('body-parser');
const app = express();


app.use(passport.initialize());
require('./middleware/passport')(passport)
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogsRoutes);



module.exports = app;
