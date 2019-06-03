const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const dreamsController = require('./controllers/dreams');

mongoose.connect('mongodb://localhost:27017/products',{useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})
//MIDDLEWARE
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

//ROUTES
app.get('/', (req, res)=>{
  // res.send('Welcome')
  res.render('index.ejs');
})

app.get('/new', (req, res) => {
    res.render('new.ejs');
});

app.use('/new', dreamsController)

app.listen(3000, ()=>{
  console.log('listening on port:', 3000);
})
