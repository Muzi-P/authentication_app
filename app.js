const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express();
const mongoose = require('mongoose');


//DB Config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected....'))
    .catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs')

//Bodyparser
app.use(express.urlencoded({ extended : false}));

//Routes
//Login Page
app.use('/', require('./routes/index.js'))
app.use('/users', require('./routes/users.js'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));