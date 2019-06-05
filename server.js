const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const dreamsController = require('./controllers/dreams');

app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost:27017/products',{useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})
//MIDDLEWARE
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/', dreamsController)

//listener
app.listen(3000, ()=>{
  console.log('listening on port:', 3000);
})
