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
    type: Array,
    //can I make arrayu of objects?
    // type:mongoose.SchemaTypes.ObjectId,
    // ref:'Movie',
    required:true
  },
  name: {
    type:String,
    required:false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MovieList', MovieListSchema);
