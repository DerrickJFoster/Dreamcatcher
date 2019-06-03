const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dreamSchema = Schema({
  username: String,
  password: String
})

const Dreams = mongoose.model('Dreams', dreamSchema)

module.exports = Dreams
