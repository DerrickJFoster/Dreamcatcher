const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.get('/new', (req, res) => {
    res.render('sessions/new.ejs');
});

router.post('/', (req, res)=>{
    User.findOne({ username: req.body.username }, (err, user) =>{
          if (!user) {
            res.send('Could not find user')
        } else if (bcrypt.compareSync(req.body.password, user.password)){
            req.session.currentUser = user
            res.redirect('/')
        } else {
            res.send('Wrong password, please try again');
        }
    });
});

router.delete('/', (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/');
    });
})

module.exports = router;
