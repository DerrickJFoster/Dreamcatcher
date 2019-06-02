const express = require('express');
app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/auth')
mongoose.connection.once('open', ()=>{console.log('connected to mongo')})
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


app.get('/', (req, res)=>{
  res.send('Welcome')
  // res.render('index.ejs');
})


app.listen(3000, ()=>{
  console.log('listening on port:', 3000);
})
