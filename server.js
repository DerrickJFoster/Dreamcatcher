const express = require('express');
const app = express();
const usersController = require('./controllers/users');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/products'
const methodOverride = require('method-override');
const dreamsController = require('./controllers/dreams');
const session = require('express-session');
const sessionsController = require('./controllers/sessions');
const dotenv = require('dotenv');
app.use(methodOverride('_method'))

mongoose.connect(MONGODB_URI,{useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})


//MIDDLEWARE
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(session({
  secret: "keeperofthedreams",
  resave: false,
  saveUninitialized: false,
}))

app.use('/', dreamsController)
app.use('/users', usersController)
app.use('/sessions', sessionsController)
app.use(express.json())


//listener
app.listen(port, ()=>{
  console.log('listening on port:', port);
})
