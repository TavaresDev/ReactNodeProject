const MovieList = require('../models/movieList');
// const jwt = require('jsonwebtoken');

exports.index = async (req, res, next) => {
  try {
    const lists = await MovieList.find();
    res.status(200).json(lists);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const { _id } = req.movieList;
    let movieList = await MovieList.findOne({ _id });
    res.status(200).json(movieList);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.create = async (req, res, next) => {
  console.log(req.body);
  try {
    const { 
      user,
      movie,
      name
    } = req.body;
    const movieList = await MovieList.create({
        user,
        movie,
        name
    });
    res.status(200).json({message: 'Movie List was created successfully', status: 'success', movieList: movieList});
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.update = async (req, res, next) => {
    try {
      const { _id, user, movie, name } = req.body;
      const movieList = await MovieList.findOneAndUpdate({ _id }, {
        user,
        movie,
        name
      });
      res.status(200).json({message: 'Movie List was updated successfully', status: 'success', movieList: movieList});
    } catch (error) {
      next(error);
    }
  }

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const movieList = await MovieList.findOneAndDelete({ _id });
    res.status(200).json({message: 'List List was deleted successfully', status: 'success'});
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
      const movieLists = await MovieList.find(req.query);
      res.status(200).json(movieLists);
    } catch (error) {
      next(error);
    }
  }