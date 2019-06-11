const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Dream = require('../models/dream');

//ROUTES
router.get('/', (req, res)=>{
    Dream.find({}, (error, allDreams)=>{
    res.render('index.ejs', {dream: allDreams, currentUser: req.session.currentUser});
  })
})
//NEW
router.get('/new', (req, res) => {
    res.render('new.ejs');
})

// SEED
// Havent figured out how to get the SEED to work yet
router.get('/seed', async (req, res) => {
  const newDream =
    [{
        title: 'Your First Dream',
        date: '04/20/1969',
        entry: 'Welcome to Dreamcatcher, a safe space to log all of your dreams for study/hobby/spiritual reasons! It\'s super easy to use, all you do is click on "New Dream" and it will take you right to the dream form. You\'ll give it a relevant title, date it and describe what happened in your dream and maybe even how it made you feel or it\'s effect on your day! Thank you for joining us here on Dreamcatcher! - Love the Dreamcatcher Staff',
      }]

  try {
    const seedDreams = await Dream.create(newDream)
    // res.send(seedDreams)
    res.redirect('/')
  } catch (err) {
    res.send(err.message)
  }
})

//SHOW
router.get('/:id', (req, res)=>{
  // res.send('product here');
  Dream.findById(req.params.id, (err, foundDream) =>{
    res.render('show.ejs', {dream: foundDream})
  })
})

//EDIT
router.get('/:id/edit', (req, res)=>{
  Dream.findById(req.params.id, (err, editDream)=>{
    res.render('edit.ejs', {dream: editDream})
  })
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

//UPDATE
router.put('/:id', (req, res)=>{
  Dream.findByIdAndUpdate(req.params.id, req.body, (err, updatedDream) =>{
    res.redirect('/')
  })
})

//DELETE
router.delete('/:id', (req, res)=>{
  // res.send('deleting...')
  Dream.findByIdAndRemove(req.params.id, (err, data)=>{
    console.log(err);
    res.redirect('/')
  })
})
module.exports = router
