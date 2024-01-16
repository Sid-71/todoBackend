const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = mongoose.Schema({
  title : {type : String},
  desc : {type : String},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },

})


module.exports = mongoose.model('Todo', TodoSchema);