const mongoose = require('mongoose');
const dreamSchema = new mongoose.Schema({
  title: {type: String, required: true},
  date: {type: Date, required: true},
  entry: String,
})

const Dream = mongoose.model('Dream', dreamSchema)

module.exports = Dream
