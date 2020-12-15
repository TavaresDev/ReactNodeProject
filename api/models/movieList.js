// import the mangose library
const mongoose = require('mongoose');

//model - MovieList

const MovieListSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  movie: {
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Movie',
    required:true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MovieList', MovieListSchema);
