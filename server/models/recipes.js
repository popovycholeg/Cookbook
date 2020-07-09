const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  description: String,
  dateCreated: Date
});

module.exports = mongoose.model('Recipe', recipeSchema);