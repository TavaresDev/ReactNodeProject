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
// exports.myMoviesIndex = async (req, res, next) => {
//   try {
//     const movies = await Movie.find(userEmail:

//     );
//     res.status(200).json(movies);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

exports.featured = async (req, res, next) => {
  try {
      const featuredMovies = await Movie.find({isFeatured: true});
      res.status(200).json(featuredRecipes);
  } catch (error) {
      console.error(error);
      next(error);
  }
}

exports.show = async (req, res, next) => {
  try {
    let movie = await Movie.findById(req.params.id);
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
      rating,
      director,
      plot,
      genre
    } = req.body;
    const movie = await Movie.create({
        title,
        year,
        imdbID,
        poster,
        rating,
        director,
        plot,
        genre
    });
    res.status(200).json({message: 'Movie was created successfully', status: 'success', movie: movie});
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.update = async (req, res, next) => {
    try {
      const { _id, title, year, imdbID, poster, rating, director ,plot, genre} = req.body;
      console.log(req.body);
      const movie = await Movie.findOneAndUpdate({ _id }, {
        title,
        year,
        imdbID,
        poster,
        rating,
        director,
        plot,
        genre
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