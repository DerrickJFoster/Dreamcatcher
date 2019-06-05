const mongoose = require('mongoose');
const dreamSchema = new mongoose.Schema({
  title: {type: String, required: true},
  date: Date,
  entry: String,
})

const Dream = mongoose.model('Dream', dreamSchema)

module.exports = Dream
