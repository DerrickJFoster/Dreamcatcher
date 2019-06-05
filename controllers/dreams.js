const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Dream = require('../models/dream');

//ROUTES
router.get('/', (req, res)=>{
    Dream.find({}, (error, allDreams)=>{
    res.render('index.ejs', {dream: allDreams});
  })
})

//NEW
router.get('/new', (req, res) => {
    res.render('new.ejs');
})

//SEED
router.get('/seed', async (req, res) => {
  const newDream =
    [{
        title: 'Beans',
        date: '04/20/1969',
        entry: 'A small pile of beans. Buy more beans for a big pile of beans.',
      }]

  try {
    const seedDreams = await Product.create(newDreams)
    res.send(seedDreams)
  } catch (err) {
    res.send(err.message)
  }
})

//CREATE
router.post('/', (req, res)=>{
  console.log('nope');
  Dream.create(req.body, (err, newDreams) =>{
    console.log(req.body);
    if (err) res.send('Dream error')
    else res.redirect('/')
  })
})

router.delete('/:id', (req, res)=>{
  // res.send('deleting...')
  Dream.findByIdAndRemove(req.params.id, (err, data)=>{
    console.log(err);
    res.redirect('/')
  })
})
module.exports = router
