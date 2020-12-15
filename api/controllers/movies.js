const Movie = require('../models/movie');
// const jwt = require('jsonwebtoken');

exports.index = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.header;
    let movie = await Movie.findOne({ id });
    res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.create = async (req, res, next) => {
  console.log(req.body);
  try {
    const { 
      title,
      year,
      imdbID,
      poster,
      rating
    } = req.body;
    const movie = await Movie.create({
        title,
        year,
        imdbID,
        poster,
        rating
    });
    res.status(200).json({message: 'Movie was created successfully', status: 'success', movie: movie});
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.update = async (req, res, next) => {
    try {
      const { _id, title, year, imdbID, poster, rating } = req.body;
      const movie = await Movie.findOneAndUpdate({ _id }, {
        title,
        year,
        imdbID,
        poster,
        rating,
      });
      res.status(200).json({message: 'Movie was updated successfully', status: 'success', movie: movie});
    } catch (error) {
      next(error);
    }
  }

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const movie = await Movie.findOneAndDelete({ _id });
    res.status(200).json({message: 'Movie was deleted successfully', status: 'success'});
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.search = async (req, res, next) => {
    // Quick and dirty search algo
    Object
      .entries(req.query)
      .map(
        ([k, v]) => req.query[k] = new RegExp(`${v.split(/\s/).join('|')}`, 'gi')
      );
    console.log(req.query);
  
    try {
      const movies = await Movie.find(req.query);
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }