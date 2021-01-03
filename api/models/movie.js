// import the mangose library
const mongoose = require('mongoose');

//model -

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  imdbID: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: false
  },
  genre: {
    type: String,
    required: false
  },
  rated: {
    type: String,
    required: false
  },
  director: {
    type: String,
    required: false
  },
  plot: {
    type: String,
    required: false
  },
  language: {
    type: String,
    required: false
  },
  rating: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  },
  isFeature: {
    type: Boolean,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', MovieSchema);
